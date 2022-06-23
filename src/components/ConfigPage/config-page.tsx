import ConfigPageConfigurator from "./config-page-configurator";
import React from "react";
import { ConfigErrorBoundary } from "./config-error-boundary";
import { useConfiguration } from "../../util/TwitchHooks/useConfiguration";
import { Loading } from "../loading";

const ConfigPage: React.FC = () => {
  const { isLoading,config, version, setConfig } = useConfiguration(); // <- use this hook to set and get the configuration

  const content = isLoading ? (
    <div className="App" style={{ margin: 200 }}>
      <Loading />
    </div>
  ) : (
    <ConfigPageConfigurator config={config} version={version} setConfig={setConfig}/>
  );

  return (
    <>
      <ConfigErrorBoundary>{content}</ConfigErrorBoundary>
    </>
  );
};

export default ConfigPage;
