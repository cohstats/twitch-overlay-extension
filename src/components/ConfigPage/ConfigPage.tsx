import React, { useState } from 'react'
import { useBroadcast } from '../../util/TwitchHooks/useBroadcast';
import { useAuthentication } from '../../util/TwitchHooks/useAuthentication';
import { useTheme } from '../../util/TwitchHooks/useTheme';

import './Config.css'

declare global {
    interface Window {
        Twitch?: {
            ext: any;
        }
    }
}

const ConfigPage = () => {
    const theme = useTheme();
    const { isLoading, isModerator } = useAuthentication();
    useBroadcast((target: any,contentType: any,body: any)=>{
        window.Twitch.ext.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result... 

        // do something...

    });

    if (!isLoading && isModerator) {
        return(
            <div className="Config">
                <div className={theme==='light' ? 'Config-light' : 'Config-dark'}>
                    There is no configuration needed for this extension!
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="Config">
                <div className={theme==='light' ? 'Config-light' : 'Config-dark'}>
                    Loading...
                </div>
            </div>
        )
    }
};

export default ConfigPage;