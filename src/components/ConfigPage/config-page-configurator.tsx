import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "../global.scss";
import {
  Form,
  Input,
  Select,
  Typography,
  Divider,
  Col,
  Row,
  InputNumber,
  Button,
  Switch,
} from "antd";
import { ShowStatsButton } from "../show-stats-button";

import WarningOutlined from "@ant-design/icons/lib/icons/WarningOutlined";
import ConfigSaving from "./config-saving";
import { Helper } from "../../util/Shared/helper";

const { Text, Title } = Typography;

interface IProps {
  globalConfig: Record<string, any>;
  version: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setGlobalConfig: Function;
}

const ConfigPageConfigurator: React.FC<IProps> = ({ globalConfig, setGlobalConfig, version }) => {
  const [config, setConfig] = useState(globalConfig);

  useEffect(() => {
    // Check if there are default values - if not set them up
    const defaultConfig = {
      buttonPosition: config?.buttonPosition ? config?.buttonPosition : "minimap",
      showStatsButtonText: config?.showStatsButtonText
        ? config?.showStatsButtonText
        : "Show Player Stats",
      showStatsButtonSize: config?.showStatsButtonSize ? config?.showStatsButtonSize : "middle",
      showStatsButtonShape: config?.showStatsButtonShape ? config?.showStatsButtonShape : "round",
      showStatsButtonColor: config?.showStatsButtonColor
        ? config?.showStatsButtonColor
        : "#3A91FF",
      showStatsButtonTextColor: config?.showStatsButtonTextColor
        ? config?.showStatsButtonTextColor
        : "#F7FBFF",
      leftButtonPosition: config?.leftButtonPosition ? config?.leftButtonPosition : 2,
      bottomButtonPosition: config?.bottomButtonPosition ? config?.bottomButtonPosition : 34,
    };

    setConfig((prevState) => {
      return { ...prevState, ...defaultConfig };
    });
  }, []);

  // const [buttonPosition, setButtonPosition] = useState(config?.buttonPosition || "minimap");
  const [validUUID, setValidUUID] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [configSaving, setConfigSaving] = useState(false);

  useEffect(() => {
    window.Twitch.ext.rig.log(`UseEffect, internal config: ${JSON.stringify(config)}`);
  }, [config]);

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
  }, [config]);

  const handleUUIDChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ uuid: event.target.value } };
    });
    setUnsavedChanges(true);
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

    setConfig((prevState) => {
      return {
        ...prevState,
        ...{
          leftButtonPosition,
          bottomButtonPosition,
          buttonPosition: value,
        },
      };
    });

    setUnsavedChanges(true);
  };

  const handleButtonSizeChange = (value: string) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonSize: value } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonShapeChange = (value: string) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonShape: value } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonText: event.target.value } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonColor: event.target.value } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonTextColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonTextColor: event.target.value } };
    });

    setUnsavedChanges(true);
  };

  const handleShowOnlyWhenPlayingCOH2 = (checked: boolean) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ showStatsButtonOnlyCOH2: checked } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonPositionFromLeftChange = (value: number) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ leftButtonPosition: value } };
    });

    setUnsavedChanges(true);
  };

  const handleButtonPositionFromRightChange = (value: number) => {
    setConfig((prevState) => {
      return { ...prevState, ...{ bottomButtonPosition: value } };
    });

    setUnsavedChanges(true);
  };

  const onConfigSaveButton = () => {
    setGlobalConfig(version, config);
    setConfigSaving(true);
  };

  window.Twitch.ext.rig.log(`Config data are: ${JSON.stringify(config)}`);

  if (configSaving) {
    return <ConfigSaving />;
  }

  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      <Row>
        <Col span={16}>
          <Form layout="vertical">
            <div style={{ paddingBottom: 20 }}>
              <Title level={2}>Configuration</Title>
              To send your Company of Heroes 2 match stats to this twitch extension, the{" "}
              <Typography.Link href="https://coh2stats.com/desktop-app" target={"_blank"}>
                COH2 Game Stats Desktop App{" "}
              </Typography.Link>{" "}
              is needed. Enable the "twitch extension" section in the apps settings and go through
              the configuration. Once the configuration inside the app is completed, you will
              receive a UUID that needs to be pasted into the UUID field below. Now save the
              settings and the extension is ready!
            </div>
            <Form.Item label="UUID">
              <Input.Password
                value={config?.uuid}
                status={validUUID ? "" : "warning"}
                onChange={handleUUIDChange}
              />
              {validUUID ? <Text type="success">UUID is valid!</Text> : null}
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "100px",
            }}
          >
            <Button type={"primary"} onClick={onConfigSaveButton}>
              Save the configuration
            </Button>
            <div style={{ textAlign: "center" }}>
              <h3>
                {unsavedChanges && (
                  <>
                    <WarningOutlined style={{ color: "orange" }} /> You have unsaved changes!{" "}
                  </>
                )}
              </h3>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Show Stats Button settings:</Divider>
      <Row>
        <Col span={12}>
          <Form labelCol={{ span: 12 }} wrapperCol={{ span: 10 }}>
            <Form.Item label="Button Position">
              <Select
                defaultValue="minimap"
                value={config?.buttonPosition}
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
                disabled={config?.buttonPosition !== "custom"}
                min={0}
                max={100}
                defaultValue={3}
                value={config?.leftButtonPosition}
                addonAfter="%"
                onChange={handleButtonPositionFromLeftChange}
              />
            </Form.Item>
            <Form.Item label="Button Position From Bottom">
              <InputNumber
                disabled={config?.buttonPosition !== "custom"}
                min={0}
                max={100}
                defaultValue={34}
                value={config?.bottomButtonPosition}
                addonAfter="%"
                onChange={handleButtonPositionFromRightChange}
              />
            </Form.Item>
            <Form.Item label="Button Text">
              <div style={{ display: "inline-block" }}>
                <Input
                  status={config?.showStatsButtonText?.length > 0 ? "" : "warning"}
                  placeholder="Set button text."
                  value={config?.showStatsButtonText}
                  onChange={handleButtonTextChange}
                  maxLength={60}

                  // style={{width: "55%"}}
                />
              </div>
            </Form.Item>
            <Form.Item label="Button Size">
              <Select
                defaultValue="middle"
                value={config?.showStatsButtonSize}
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
                value={config?.showStatsButtonShape}
                onChange={handleButtonShapeChange}
              >
                <Select.Option value="circle">Circle</Select.Option>
                <Select.Option value="round">Round</Select.Option>
                <Select.Option value="default">Squared</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Button Color">
              <Input
                status={config?.showStatsButtonColor?.length > 0 ? "" : "warning"}
                placeholder="Color in a hex format"
                value={config?.showStatsButtonColor}
                onChange={handleButtonColorChange}
                maxLength={10}
              />
            </Form.Item>
            <Form.Item label="Button Text Color">
              <Input
                status={config?.showStatsButtonTextColor?.length > 0 ? "" : "warning"}
                placeholder="Color in a hex format"
                value={config?.showStatsButtonTextColor}
                onChange={handleButtonTextColorChange}
                maxLength={10}
              />
            </Form.Item>

            <Form.Item
              label={
                <>
                  Show only when playing COH2 {"  "}
                  <Helper
                    text={
                      "You need to have 'Company of Heroes 2' as a playing game on your twitch page. Aka 'Playing Company of Heroes 2 for xxx viewers'"
                    }
                  />
                </>
              }
            >
              <Switch defaultChecked onChange={handleShowOnlyWhenPlayingCOH2} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Row justify="space-around" align="middle" style={{ paddingTop: 50 }}>
            <ShowStatsButton
              showStatsButtonColor={config?.showStatsButtonColor}
              showStatsButtonTextColor={config?.showStatsButtonTextColor}
              showStatsButtonShape={config?.showStatsButtonShape}
              showStatsButtonSize={config?.showStatsButtonSize}
              showStatsButtonText={config?.showStatsButtonText}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ConfigPageConfigurator;
