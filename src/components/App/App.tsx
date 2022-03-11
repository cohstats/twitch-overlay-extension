import React, { useEffect, useState } from 'react'
import { useTheme } from '../../util/TwitchHooks/useTheme';
import { useAuthentication } from '../../util/TwitchHooks/useAuthentication'

import './App.css'
import { useExtensionVisible } from '../../util/TwitchHooks/useExtensionVisible';
import { useBroadcast } from '../../util/TwitchHooks/useBroadcast';

declare global {
    interface Window {
        Twitch?: {
            ext: any;
        }
    }
}

const App = () => {
    const theme = useTheme();
    const visible = useExtensionVisible();
    const { isLoading, token, opaqueId, isModerator, hasSharedId, userId } = useAuthentication();
    useBroadcast((target: any,contentType: any,body: any) => {
        window.Twitch.ext.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result... 

        // do something...

    });

    if(!isLoading && visible){
        return (
            <div className="App">
                <div className={theme === 'light' ? 'App-light' : 'App-dark'} >
                    <p style={{color: "yellow"}}>Hello world!</p>
                    <p>My token is: {token}</p>
                    <p>My opaque ID is {opaqueId}.</p>
                    <div>{isModerator ? <p>I am currently a mod, and here's a special mod button <input value='mod button' type='button'/></p>  : 'I am currently not a mod.'}</div>
                    <p>I have {hasSharedId ? `shared my ID, and my user_id is ${userId}` : 'not shared my ID'}.</p>
                </div>
            </div>
        )
    }else{
        return (
            <div className="App">
            </div>
        )
    }
};

export default App;