import React, { useState } from 'react'
import { useTwitch } from '../../util/Authentication/Authentication'

import './LiveConfigPage.css'

const LiveConfigPage = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const onBroadcast = (target: any,contentType: any,body: any)=>{
        window.Twitch.ext.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result... 

        // do something...

    };
    const onContext = (context: any,delta: any)=>{
        if(delta.includes('theme')){
            setTheme(context.theme);
        }
    };
    const { isLoading, isModerator } = useTwitch({ onBroadcast, onContext });

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
