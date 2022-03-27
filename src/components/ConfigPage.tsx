import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./global.scss";
import { events, firebaseInit } from "../firebase";
import { useConfiguration } from "../util/TwitchHooks/useConfiguration";
import { Button, Form, Input } from "antd";
import Text from "antd/lib/typography/Text";

declare global {
  interface Window {
    Twitch?: {
      ext: any;
    };
  }
}

// We need to initialize our Firebase
// This has to happen once on the main file of each render process
firebaseInit();

const ConfigPage = () => {
  const { isLoading, config, version, setConfig } = useConfiguration(); // <- use this hook to set and get the configuration
  const [uuid, setUUID] = useState("");
  const [formInitialized, setFormInitialized] = useState(false);
  const [foundData, setFoundData] = useState(false);

  // listen to the data from firestore
  useEffect(() => {
    events.init("overlay_settings");
  }, []);

  useEffect(() => {
    if (config && config.uuid) {
      if (!formInitialized) {
        setUUID(config.uuid);
        setFormInitialized(true);
      }
      getDoc(doc(getFirestore(), "twitch-ext-public", config.uuid)).then((docSnap) => {
        if (docSnap.exists()) {
          setFoundData(true);
        }
      });
    }
  }, [config, formInitialized]);

  const handleUUIDChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUUID(event.target.value);
  };

  const handleSave = () => {
    setConfig(version, { uuid: uuid });
  };

  if (!isLoading) {
    window.Twitch.ext.rig.log(`Config data: ${config}`);
    window.Twitch.ext.rig.log(`Config Version data: ${version}`);
    return (
      <>
        <Form layout="vertical" style={{ padding: 20 }}>
          <Form.Item label="UUID">
            <Input.Password value={uuid} onChange={handleUUIDChange} />
            {foundData ? <Text type="success">Found data!</Text> : null}
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  } else {
    return <div className="App"></div>;
  }
};

export default ConfigPage;

/*
          <Form.Item label="Link to your player card">
            <Search placeholder="Search player name" enterButton />
          </Form.Item>
*/
/*
          <Form.Item label="Developer Option Coh2 game state">
            <Radio.Group>
              <Radio.Button value="optional">closed</Radio.Button>
              <Radio.Button value>menu</Radio.Button>
              <Radio.Button value={false}>loading</Radio.Button>
              <Radio.Button value={false}>ingame</Radio.Button>
            </Radio.Group>
          </Form.Item>
*/

/*
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setConfig(version, { gameState: "closed" })}
            >
              Save
            </Button>
          </Form.Item>
*/
