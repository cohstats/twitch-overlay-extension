import { useEffect } from "react";

export function useBroadcast(onBroadcast?: (target: any, contentType: any, body: any) => void) {
  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.listen("broadcast", onBroadcast);

      return () => {
        window.Twitch.ext.unlisten("broadcast", () => console.log("successfully unlistened"));
      };
    }
    return undefined;
  }, [onBroadcast]);
}
