import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "../global.scss";
//import { /*events,*/ firebaseInit } from "../firebase";
import { useConfiguration } from "../../util/TwitchHooks/useConfiguration";
import { Form, Input, Select, Typography, Divider, Col, Row, InputNumber } from "antd";
import { debounce } from "../../util/utils";
import { ShowStatsButton } from "../show-stats-button";

const { Text, Title } = Typography;

declare global {
  interface Window {
    Twitch?: {
      ext: any;
    };
  }
}

// We need to initialize our Firebase
// This has to happen once on the main file of each render process
//firebaseInit();

const ConfigPageConfigurator = () => {
  const { config, version, setConfig } = useConfiguration(); // <- use this hook to set and get the configuration
  const [uuid, setUUID] = useState(config?.uuid);
  const [buttonPosition, setButtonPosition] = useState("minimap");
  const [validUUID, setValidUUID] = useState(false);

  const [showStatsButtonText, setShowStatsButtonText] = useState(
    config?.buttonPosition || "Show Player Stats",
  );
  const [showStatsButtonSize, setShowStatsButtonSize] = useState(
    config?.showStatsButtonSize || "middle",
  );
  const [showStatsButtonShape, setShowStatsButtonShape] = useState(
    config?.showStatsButtonShape || "round",
  );
  const [showStatsButtonColor, setShowStatsButtonColor] = useState(
    config?.showStatsButtonColor || "#3A91FF",
  );
  const [showStatsButtonTextColor, setShowStatsButtonTextColor] = useState(
    config?.showStatsButtonTextColor || "#F7FBFF",
  );

  const [showStatsButtonPositionLeft, setShowStatsButtonPositionLeft] = useState(2);
  const [showStatsButtonPositionBottom, setShowStatsButtonPositionBottom] = useState(34);

  // listen to the data from firestore
  useEffect(() => {
    //events.init("overlay_settings");
  }, []);

  useEffect(() => {
    window.Twitch.ext.rig.log(`UseEffect: ${config}`);
  }, [config])

  useEffect(() => {
    if (config && config.uuid) {
      try {
        getDoc(doc(getFirestore(), "twitch-ext-public", config.uuid)).then((docSnap) => {
          if (docSnap.exists()) {
            setValidUUID(true);
          }
        });
      } catch {
        console.log("invalid uuid");
        setValidUUID(false);
      }
    }
  }, [uuid]);

  const handleUUIDChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig(version, { uuid: event.target.value });
    setUUID(event.target.value);
  };

  const handleButtonPositionChange = (value: string) => {
    // In percentage
    let leftButtonPosition = 83;
    let bottomButtonPosition = 18;
    if (value === "minimap") {
      leftButtonPosition = 2;
      bottomButtonPosition = 34;
    }
    if (value === "above") {
      leftButtonPosition = 52;
      bottomButtonPosition = 23;
    }
    if (value === "below") {
      leftButtonPosition = 52;
      bottomButtonPosition = 12;
    }
    if (value === "overgrid") {
      leftButtonPosition = 83;
      bottomButtonPosition = 29;
    }

    setShowStatsButtonPositionLeft(leftButtonPosition);
    setShowStatsButtonPositionBottom(bottomButtonPosition);

    setConfig(version, { buttonPosition: value, leftButtonPosition, bottomButtonPosition });
    setButtonPosition(value);
  };

  const handleButtonSizeChange = (value: string) => {
    setConfig(version, { showStatsButtonSize: value });
    setShowStatsButtonSize(value);
  };

  const handleButtonShapeChange = (value: string) => {
    setConfig(version, { showStatsButtonShape: value });
    setShowStatsButtonShape(value);
  };

  const handleButtonTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig(version, { showStatsButtonText: event.target.value });
    setShowStatsButtonText(event.target.value);
  };

  const handleButtonColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig(version, { showStatsButtonColor: event.target.value });
    setShowStatsButtonColor(event.target.value);
  };

  const handleButtonTextColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig(version, { showStatsButtonTextColor: event.target.value });
    setShowStatsButtonTextColor(event.target.value);
  };

  const handleButtonPositionFromLeftChange = (value: number) => {
    setConfig(version, { leftButtonPosition: value });
    setShowStatsButtonPositionLeft(value);
  };

  const handleButtonPositionFromRightChange = (value: number) => {
    setConfig(version, { bottomButtonPosition: value });
    setShowStatsButtonPositionBottom(value);
  };

  window.Twitch.ext.rig.log(`Config data are: ${JSON.stringify(config)}`);
  window.Twitch.ext.rig.log(`Config Version data: ${version}`);
  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      <Form layout="vertical">
        <div style={{ paddingBottom: 20 }}>
          <Title level={2}>Configuration</Title>
          To send your Company of Heroes 2 match stats to this twitch extension, the{" "}
          <Typography.Link href="https://coh2stats.com/desktop-app" target={"_blank"}>
            COH2 Game Stats Desktop App{" "}
          </Typography.Link>{" "}
          is needed. Enable the "twitch extension" section in the apps settings and go through the
          configuration. Once the configuration inside the app is completed, you will receive a
          UUID that needs to be pasted into the UUID field below. Now save the settings and the
          extension is ready!
        </div>
        <Form.Item label="UUID">
          <Input.Password
            value={uuid}
            status={validUUID ? "" : "warning"}
            onChange={handleUUIDChange}
          />
          {validUUID ? <Text type="success">Found data!</Text> : null}
        </Form.Item>
      </Form>
      <Divider orientation="left">Show Stats Button settings:</Divider>
      <Row>
        <Col span={12}>
          <Form labelCol={{ span: 12 }} wrapperCol={{ span: 10 }}>
            <Form.Item label="Button Position">
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
                <Select.Option value="custom">Custom: Setup manually</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Button Position From Left">
              <InputNumber
                disabled={buttonPosition !== "custom"}
                min={0}
                max={100}
                defaultValue={3}
                value={showStatsButtonPositionLeft}
                addonAfter="%"
                onChange={handleButtonPositionFromLeftChange}
              />
            </Form.Item>
            <Form.Item label="Button Position From Bottom">
              <InputNumber
                disabled={buttonPosition !== "custom"}
                min={0}
                max={100}
                defaultValue={34}
                value={showStatsButtonPositionBottom}
                addonAfter="%"
                onChange={handleButtonPositionFromRightChange}
              />
            </Form.Item>
            <Form.Item label="Button Text">
              <Input
                status={showStatsButtonText?.length > 0 ? "" : "warning"}
                placeholder="Set button text."
                value={showStatsButtonText}
                onChange={handleButtonTextChange}
                maxLength={60}
              />
            </Form.Item>
            <Form.Item label="Button Size">
              <Select
                defaultValue="middle"
                value={showStatsButtonSize}
                onChange={handleButtonSizeChange}
              >
                <Select.Option value="small">Small</Select.Option>
                <Select.Option value="middle">Normal</Select.Option>
                <Select.Option value="large">Large</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Button Shape">
              <Select
                defaultValue="round"
                value={showStatsButtonShape}
                onChange={handleButtonShapeChange}
              >
                <Select.Option value="circle">Circle</Select.Option>
                <Select.Option value="round">Round</Select.Option>
                <Select.Option value="default">Squared</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Button Color">
              <Input
                status={showStatsButtonColor?.length > 0 ? "" : "warning"}
                placeholder="Color in a hex format"
                value={showStatsButtonColor}
                onChange={handleButtonColorChange}
                maxLength={10}
              />
            </Form.Item>
            <Form.Item label="Button Text Color">
              <Input
                status={showStatsButtonTextColor?.length > 0 ? "" : "warning"}
                placeholder="Color in a hex format"
                value={showStatsButtonTextColor}
                onChange={handleButtonTextColorChange}
                maxLength={10}
              />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Row justify="space-around" align="middle" style={{ paddingTop: 50 }}>
            <ShowStatsButton
              showStatsButtonColor={showStatsButtonColor}
              showStatsButtonTextColor={showStatsButtonTextColor}
              showStatsButtonShape={showStatsButtonShape}
              showStatsButtonSize={showStatsButtonSize}
              showStatsButtonText={showStatsButtonText}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ConfigPageConfigurator;

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
