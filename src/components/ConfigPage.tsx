import React, { useEffect } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import "./global.scss";
import { events, firebaseInit } from "../firebase";
import { useConfiguration } from "../util/TwitchHooks/useConfiguration";
import { Button, Form, Input, Radio } from "antd";

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
  const { isLoading, config, setConfig, version } = useConfiguration(); // <- use this hook to set and get the configuration

  // listen to the data from firestore
  useEffect(() => {
    events.init("overlay");

    // This will be the ID which will the twitch streamer setup
    const id = "jjcD0QWTwzydSwYoxSkS";
    onSnapshot(doc(getFirestore(), "twitch-ext-public", id), (doc) => {
      window.Twitch.ext.rig.log(`Some data: ${doc.data().test}`);
    });
  }, []);

  if (!isLoading) {
    window.Twitch.ext.rig.log(`Config data: ${config}`);
    window.Twitch.ext.rig.log(`Config Version data: ${version}`);
    return (
      <>
        <Form layout="vertical" style={{ padding: 20 }}>
          <Form.Item label="UUID">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Link to my player card">
            <Input />
          </Form.Item>
          <Form.Item label="Developer Option Coh2 game state">
            <Radio.Group>
              <Radio.Button value="optional">closed</Radio.Button>
              <Radio.Button value>menu</Radio.Button>
              <Radio.Button value={false}>loading</Radio.Button>
              <Radio.Button value={false}>ingame</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setConfig(version, { gameState: "closed" })}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
        {config}
      </>
    );
  } else {
    return <div className="App"></div>;
  }
};

export default ConfigPage;
