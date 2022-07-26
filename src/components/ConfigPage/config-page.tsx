import ConfigPageConfigurator from "./config-page-configurator";
import React from "react";
import { ConfigErrorBoundary } from "./config-error-boundary";
import { useConfiguration } from "../../util/TwitchHooks/useConfiguration";
import { Loading } from "../loading";

const ConfigPage: React.FC = () => {
  const { isLoading, config, setConfig, version } = useConfiguration(); // <- use this hook to set and get the configuration

  const content = isLoading ? (
    <div className="App" style={{ margin: 200 }}>
      <Loading />
    </div>
  ) : (
    <ConfigPageConfigurator globalConfig={config} version={version} setGlobalConfig={setConfig} />
  );

  return (
    <>
      <ConfigErrorBoundary>{content}</ConfigErrorBoundary>
    </>
  );
};

export default ConfigPage;
