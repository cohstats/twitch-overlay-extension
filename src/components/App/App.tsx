import React, { useEffect, useState } from 'react'
import { useTwitch } from '../../util/Authentication/Authentication'

import './App.css'

declare global {
    interface Window {
        Twitch?: {
            ext: any;
        }
    }
}

const App = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [visible, setVisible] = useState(true);
    const onBroadcast = (target: any,contentType: any,body: any)=>{
        window.Twitch.ext.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result... 

        // do something...

    };
    const onVisibilityChanged = (isVisible: any,_c: any)=>{
        setVisible(isVisible);
    };
    const onContext = (context: any,delta: any)=>{
        if(delta.includes('theme')){
            setTheme(context.theme);
        }
    };
    const { isLoading, token, opaqueId, isModerator, hasSharedId, userId } = useTwitch({ onBroadcast, onVisibilityChanged, onContext });

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