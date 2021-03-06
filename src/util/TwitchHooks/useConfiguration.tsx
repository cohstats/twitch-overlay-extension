import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";

/**
 * This useEffect is using internal state. It can be called only 1 in the application - otherwise it
 * won't be working properly.
 *
 * You can call setConfig only 1 in the application. You need to do full reload after that cos of Twitch.
 * @param options
 */
export function useConfiguration(options?: {
  defaultVersion?: string;
  onChange?: (config: any) => void;
}) {
  const { isModerator, isLoading } = useAuthentication();
  const [config, setConfig] = useState<any>(null);
  const [version, setVersion] = useState(
    !options || !options.defaultVersion ? "1.0" : options.defaultVersion,
  );
  const [isLoadingConf, setIsLoadingConf] = useState(true);

  const getConfig = () => {
    let config = window.Twitch.ext.configuration.broadcaster
      ? window.Twitch.ext.configuration.broadcaster.content
      : null;
    try {
      config = JSON.parse(config);
    } catch (e) {
      config = null;
    }
    return config;
  };

  const updateVersion = () => {
    if (window.Twitch.ext.configuration.broadcaster) {
      setVersion(window.Twitch.ext.configuration.broadcaster.version);
    }
  };

  useEffect(() => {
    window.Twitch.ext.rig.log(`config changed: ${config}`);
  }, [config]);

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.configuration.onChanged(() => {
        updateVersion();
        const config = getConfig();

        window.Twitch.ext.rig.log(`Configuration getting config: ${JSON.stringify(config)}`);
        // State is async, we need to turn of loading only once it's popualted

        setConfig(config);
        setIsLoadingConf(false);

        if (options && options.onChange) {
          options.onChange(config);
        }
      });
    }
    return undefined;
  }, [isModerator, isLoading, options]);

  /**
   * You can send only one param of the config it will update it.
   * @param version
   * @param config
   */
  const setConfigExternal = (version: string, config: any) => {
    if (!isLoading && isModerator) {
      window.Twitch.ext.rig.log("Saving new Config");

      const currentConfig = getConfig();
      const newConfig = { ...currentConfig, ...config };

      window.Twitch.ext.rig.log("Saving new Config", newConfig);

      window.Twitch.ext.configuration.set("broadcaster", version, JSON.stringify(newConfig));

      return true;
    }
  };

  return { isLoading: isLoadingConf, config, setConfig: setConfigExternal, version };
}
