import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";

export function useConfiguration(options?: {
  defaultVersion?: string;
  onChange?: (config: any) => void;
}) {
  const { isModerator, isLoading } = useAuthentication();
  const [config, setConfig] = useState<any>(undefined);
  const [version, setVersion] = useState(
    !options || !options.defaultVersion ? "1.0" : options.defaultVersion,
  );
  const [isLoadingConf, setIsLoadingConf] = useState(true);

  const getConfig = () => {
    let config = window.Twitch.ext.configuration.broadcaster
      ? window.Twitch.ext.configuration.broadcaster.content
      : undefined;
    try {
      config = JSON.parse(config);
    } catch (e) {
      config = undefined;
    }
    return config;
  };

  const updateVersion = () => {
    if (window.Twitch.ext.configuration.broadcaster) {
      setVersion(window.Twitch.ext.configuration.broadcaster.version);
    }
  };

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.configuration.onChanged(() => {
        updateVersion();
        const config = getConfig();
        setConfig(config);
        setIsLoadingConf(false);
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
