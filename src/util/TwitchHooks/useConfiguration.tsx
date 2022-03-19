import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";

export function useConfiguration(options?: {
  defaultVersion?: string;
  onChange?: (config: any) => void;
}) {
  const { isModerator, isLoading } = useAuthentication();
  const [config, setConfig] = useState<any>({});
  const [version, setVersion] = useState(
    !options || !options.defaultVersion ? "1.0" : options.defaultVersion,
  );
  const [isLoadingConf, setIsLoadingConf] = useState(true);

  const getConfig = () => {
    let config = window.Twitch.ext.configuration.broadcaster
      ? window.Twitch.ext.configuration.broadcaster.content
      : [];
    window.Twitch.ext.rig.log(config);
    try {
      config = JSON.parse(config);
    } catch (e) {
      config = [];
      window.Twitch.ext.rig.log("Failed Parsing");
    }
    return config;
  };

  const updateVersion = () => {
    if (window.Twitch.ext.configuration.broadcaster) {
      setVersion(window.Twitch.ext.configuration.broadcaster.version);
    }
  };

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext && !isLoading && isModerator) {
      setConfig(getConfig());
      setIsLoadingConf(false);
      updateVersion();
      window.Twitch.ext.configuration.onChanged(() => {
        updateVersion();
        const config = getConfig();
        setConfig(config);
        if (options && options.onChange) {
          options.onChange(config);
        }
      });
    }
    return undefined;
  }, [isModerator, isLoading, options]);

  const setConfigExternal = (version: string, config: any) => {
    if (!isLoading && isModerator) {
      window.Twitch.ext.rig.log("Saving Config");
      window.Twitch.ext.configuration.set("broadcaster", version, JSON.stringify(config));
    }
  };

  return { isLoading: isLoadingConf, config, setConfig: setConfigExternal, version };
}
