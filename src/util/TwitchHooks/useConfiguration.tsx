import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";

export function useConfiguration(options?: {defaultVerion?: string, onChange?: (config: any) => void}) {
    const {isModerator, isLoading} = useAuthentication();
    const [config, setConfig] = useState();
    const [version, setVersion] = useState((!options || !options.defaultVerion) ? "1.0" : options.defaultVerion);

    const getConfig = () => {
        let config = window.Twitch.ext.configuration.broadcaster ? window.Twitch.ext.configuration.broadcaster.content : [];
        try{
            config = JSON.parse(config);
        }catch(e){
            config = [];
        }
        return config;
    }

    const getVersion = () => {
        return window.Twitch.ext.configuration.broadcaster ? window.Twitch.ext.configuration.broadcaster.version : undefined;
    }
    
    useEffect(() => {
        if (window.Twitch && window.Twitch.ext && !isLoading && isModerator) {
            setConfig(getConfig());
            let version = getVersion();
            if (version) {
                setVersion(version);
            }
            window.Twitch.ext.configuration.onChanged(() => {
                let version = getVersion();
                if (version) {
                    setVersion(version);
                }
                let config = getConfig();
                setConfig(config);
                if (options && options.onChange) {
                    options.onChange(config);
                }
            });
        }
        return undefined;
    }, [isModerator, isLoading]);

    const setConfigExternal = (version: string, config: any) => {
        if (!isLoading && isModerator) {
            window.Twitch.ext.configuration.set('broadcaster', version, JSON.stringify(config));
        }
    }

    return {isLoading, config, setConfig: setConfigExternal, version};
}