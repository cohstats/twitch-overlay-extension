import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.onContext((context: any, delta: any) => {
        if (delta.includes("theme")) {
          setTheme(context.theme);
        }
      });
    }
    return undefined;
  }, []);

  return theme;
}
