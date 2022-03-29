import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";

export function useEnvironment() {
  const { isLoading } = useAuthentication();
  const [isProduction, setIsProduction] = useState(true);

  useEffect(() => {
    if (window.Twitch && window.Twitch.ext) {
      setIsProduction(window.Twitch.ext.environment);
    }
  }, [isLoading]);

  return isProduction;
}
