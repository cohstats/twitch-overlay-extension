import { useEffect, useState } from "react";

export function useExtensionVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.onVisibilityChanged((isVisible: any, _c: any) => {
        setVisible(isVisible);
      });
    }
    return undefined;
  }, []);

  return visible;
}
