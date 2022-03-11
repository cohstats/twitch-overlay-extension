import React, { useState } from 'react'
import { useTheme } from '../../util/TwitchHooks/useTheme';
import { useAuthentication } from '../../util/TwitchHooks/useAuthentication';

import './LiveConfigPage.css'
import { useBroadcast } from '../../util/TwitchHooks/useBroadcast';

const LiveConfigPage = () => {
    const theme = useTheme();
    const { isLoading, isModerator } = useAuthentication();
    useBroadcast((target: any,contentType: any,body: any)=>{
        window.Twitch.ext.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result... 

        // do something...

    });

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
