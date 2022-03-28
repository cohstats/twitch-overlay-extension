import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./global.scss";
import { events, firebaseInit } from "../firebase";
import { useConfiguration } from "../util/TwitchHooks/useConfiguration";
import { Button, Form, Input, Select, Typography } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

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
  const [buttonPosition, setButtonPosition] = useState("minimap");
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
        setButtonPosition(config.buttonPosition);
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

  const handleButtonPositionChange = (value: string) => {
    setButtonPosition(value);
  };

  const handleSave = () => {
    setConfig(version, { uuid: uuid, buttonPosition: buttonPosition });
  };

  if (!isLoading) {
    window.Twitch.ext.rig.log(`Config data: ${config}`);
    window.Twitch.ext.rig.log(`Config Version data: ${version}`);
    return (
      <>
        <Form layout="vertical" style={{ padding: 20 }}>
          <div style={{ paddingBottom: 20 }}>
            <Title level={2}>Configuration</Title>
            To send your Company of Heroes 2 match stats to this twitch extension the{" "}
            <Typography.Link href="https://coh2stats.com/desktop-app" target={"_blank"}>
              COH2 Game Stats Desktop App{" "}
            </Typography.Link>{" "}
            is needed. Enable the "twitch extension" section in the apps settings and go through
            the configuration. Once the configuration inside the app is completed you will recieve
            a UUID that needs to be pasted into the UUID field below. Now save the settings and
            the extension is ready!
          </div>
          <Form.Item label="UUID">
            <Input.Password value={uuid} onChange={handleUUIDChange} />
            {foundData ? <Text type="success">Found data!</Text> : null}
          </Form.Item>
          <Form.Item label="Show Stats Button Position">
            <Select
              defaultValue="minimap"
              value={buttonPosition}
              onChange={handleButtonPositionChange}
            >
              <Select.Option value="minimap">Left: Above Minimap</Select.Option>
              <Select.Option value="above">Center: Above Resources</Select.Option>
              <Select.Option value="below">Center: Below Resources</Select.Option>
              <Select.Option value="overgrid">Right: Above Button Grid</Select.Option>
              <Select.Option value="grid">Right: Over Button Grid</Select.Option>
            </Select>
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
