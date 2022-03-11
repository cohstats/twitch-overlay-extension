import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export function useAuthentication() {
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
          const decoded = jwt.decode(auth.token) as { role: string; user_id: string };

          if (decoded.role === "broadcaster" || decoded.role === "moderator") {
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
    }
    return undefined;
  }, []);

  const makeCall = (url: string, method = "GET") => {
    return new Promise((resolve, reject) => {
      if (token && opaqueId ? true : false) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        fetch(url, {
          method,
          headers,
        })
          .then((response) => resolve(response))
          .catch((e) => reject(e));
      } else {
        reject("Unauthorized");
      }
    });
  };

  return {
    isLoading: loading,
    token: token,
    opaqueId,
    isModerator: mod,
    role: role,
    hasSharedId: !!userId,
    userId,
    isAuthenticated: token && opaqueId ? true : false,
    makeCall,
  };
}
