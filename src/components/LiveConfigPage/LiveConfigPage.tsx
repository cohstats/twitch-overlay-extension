import React from "react";
import { useTheme } from "../../util/TwitchHooks/useTheme";

import "./LiveConfigPage.css";
import { useConfiguration } from "../../util/TwitchHooks/useConfiguration";

const LiveConfigPage = () => {
  const theme = useTheme();
  const { isLoading, config, setConfig, version } = useConfiguration(); // <- use this hook to set and get the configuration

  if (!isLoading) {
    return (
      <div className="LiveConfigPage">
        <div className={theme === "light" ? "LiveConfigPage-light" : "LiveConfigPage-dark"}>
            {config}
            <button onClick={() => setConfig(version, config)}>Save</button>
          <p>Hello world!</p>
          <p>This is the live config page! </p>
        </div>
      </div>
    );
  } else {
    return <div className="LiveConfigPage"></div>;
  }
};

export default LiveConfigPage;
