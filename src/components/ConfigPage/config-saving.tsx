import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Loading } from "../loading";

const ConfigSaving: React.FC = () => {
  const [displayReload, setDisplayReload] = useState(false);

  useEffect(() => {
    // We have to reload whole page for the new config to be saved
    setTimeout(() => {
      setDisplayReload(true);
    }, 3000);
  }, []);

  if (displayReload) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "150px",
          paddingBottom: "150px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <InfoCircleOutlined style={{ fontSize: 48 }} />
        <Title>Config Saved. Please reload the page / or close and open the config window.</Title>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "150px",
          paddingBottom: "150px",
          backgroundColor: "white",
        }}
      >
        <Loading />
        <Title>Saving the config</Title>
      </div>
    );
  }
};

export default ConfigSaving;
