import React, { useState } from 'react'
import { useTwitch } from '../../util/Authentication/Authentication';

import './Config.css'

declare global {
    interface Window {
        Twitch?: {
            ext: any;
        }
    }
}

const ConfigPage = () => {
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

    if(!isLoading && isModerator){
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