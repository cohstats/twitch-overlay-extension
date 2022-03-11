import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export function useTwitch(options?: { onBroadcast?: (target: any, contentType: any, body: any) => void, onVisibilityChanged?: (isVisible: any,_c: any) => void, onContext?: (context: any, delta: any) => void }) {
    const [token, setToken] = useState<undefined | string>(undefined);
    const [opaqueId, setOpaqueId] = useState<undefined | string>(undefined);
    const [userId, setUserId] = useState<undefined | string>(undefined);
    const [mod, setMod] = useState(false);
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (window.Twitch && window.Twitch.ext) {
            window.Twitch.ext.onAuthorized((auth: any) => {
                let isMod = false;
                try {
                    let decoded = jwt.decode(auth.token) as {role: string, user_id: string};

                    if (decoded.role === 'broadcaster' || decoded.role === 'moderator') {
                        isMod = true;
                    }
                    
                    setMod(isMod);
                    setUserId(decoded.user_id);
                    setRole(decoded.role);
                    setToken(auth.token);
                    setOpaqueId(auth.userId);
                } catch (e) {
                    setMod(isMod);
                    setUserId("");
                    setRole("");
                    setToken("");
                    setOpaqueId("");
                }
                setLoading(false);
            });

            window.Twitch.ext.listen('broadcast',options?.onBroadcast);

            window.Twitch.ext.onVisibilityChanged(options?.onVisibilityChanged);

            window.Twitch.ext.onContext(options?.onContext);

            return () => {
                window.Twitch.ext.unlisten('broadcast', ()=>console.log('successfully unlistened'));
            };
        }
        return undefined;
    }, []);

    const makeCall = (url: string, method="GET") => {
        return new Promise((resolve, reject)=>{
            if ((token && opaqueId) ? true : false) {
                let headers={
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                }
    
                fetch(url,
                    {
                        method,
                        headers,
                    })
                    .then(response=>resolve(response))
                    .catch(e=>reject(e))
            }else{
                reject('Unauthorized')
            }
        });
    }

    return { isLoading: loading, token: token, opaqueId, isModerator: mod, role: role, hasSharedId: !!userId, userId, isAuthenticated: (token && opaqueId) ? true : false, makeCall};
}