import React, { useState } from 'react'
import { useTheme } from '../../util/TwitchHooks/useTheme';
import { useAuthentication } from '../../util/TwitchHooks/useAuthentication';

import './LiveConfigPage.css'
import { useBroadcast } from '../../util/TwitchHooks/useBroadcast';
import { useConfiguration } from '../../util/TwitchHooks/useConfiguration';

const LiveConfigPage = () => {
    const theme = useTheme();
    const { isLoading, config, setConfig, version } = useConfiguration(); // <- use this hook to set and get the configuration

    if(!isLoading) {
        return (
            <div className="LiveConfigPage">
                <div className={theme === 'light' ? 'LiveConfigPage-light' : 'LiveConfigPage-dark'} >
                    <p>Hello world!</p>
                    <p>This is the live config page! </p>
                </div>
            </div>
        )
    }else{
        return (
            <div className="LiveConfigPage">
            </div>
        )
    }
};

export default LiveConfigPage;
