import React, { useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useExtensionVisible } from "../util/TwitchHooks/useExtensionVisible";
import "./global.scss";
import "./overlayModifications.scss";
//import inGameScreenShot from "../../public/ingameScreenshot.jpg";
//import safeZones from "../../public/safezones.png";
import { Button, Col, Drawer, Radio, RadioChangeEvent, Row, Spin } from "antd";
import { events, firebaseInit } from "../firebase";
import TeamView from "./TeamView";
import { GameData } from "../util/App/GameData";
import Title from "antd/lib/typography/Title";
import { LoadingOutlined } from "@ant-design/icons";
import GameBalanceView from "./gameBalanceView";
import { useConfiguration } from "../util/TwitchHooks/useConfiguration";

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

const VideoOverlayPage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const extensionVisible = useExtensionVisible();
  const [gameData, setGameData] = useState<GameData | undefined>(undefined);
  const [tab, setTap] = useState(0);
  const { config } = useConfiguration();
  const [buttonPosition, setButtonPosition] = useState("minimap");

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleTabChange = (event: RadioChangeEvent) => {
    setTap(event.target.value);
  };

  // listen to the data from firestore
  useEffect(() => {
    events.init("overlay");
  }, []);

  useEffect(() => {
    // This will be the ID which will the twitch streamer setup
    /*const id = "11307ae6-b769-4d69-9a6f-4af5f83c18b8";
    onSnapshot(doc(getFirestore(), "twitch-ext-public", id), (doc) => {
      //window.Twitch.ext.rig.log(`Some data: ${doc.data().test}`);
      setGameData(doc.data().data.game);
    });*/
  }, []);

  useEffect(() => {
    if (config && config.uuid) {
      onSnapshot(doc(getFirestore(), "twitch-ext-public", config.uuid), (doc) => {
        //window.Twitch.ext.rig.log(`Some data: ${doc.data().test}`);
        setGameData(doc.data().data.game);
      });
    }
    if (config && config.buttonPosition) {
      setButtonPosition(config.buttonPosition);
    }
  }, [config]);

  let leftButtonPosition = "83%";
  let bottomButtonPosition = "18%";
  if (buttonPosition === "minimap") {
    leftButtonPosition = "2%";
    bottomButtonPosition = "34%";
  }
  if (buttonPosition === "above") {
    leftButtonPosition = "52%";
    bottomButtonPosition = "23%";
  }
  if (buttonPosition === "below") {
    leftButtonPosition = "52%";
    bottomButtonPosition = "12%";
  }
  if (buttonPosition === "overgrid") {
    leftButtonPosition = "83%";
    bottomButtonPosition = "29%";
  }

  if (extensionVisible) {
    // !isLoading && extensionVisible
    return (
      <>
        {!drawerVisible ? (
          <Button
            style={{
              position: "absolute",
              bottom: bottomButtonPosition,
              left: leftButtonPosition,
            }}
            type="primary"
            onClick={showDrawer}
          >
            Show Player Stats
          </Button>
        ) : null}
        <Drawer
          title={
            gameData ? (
              gameData.state === "ingame" || gameData.state === "loading" ? (
                <>Current Game</>
              ) : (
                <>Last Game</>
              )
            ) : undefined
          }
          placement="bottom"
          visible={drawerVisible}
          onClose={onCloseDrawer}
          height={"23.6rem"}
          contentWrapperStyle={{
            paddingLeft: "4rem",
            paddingRight: "7rem",
            paddingBottom: "5rem",
          }}
          headerStyle={{ background: "rgba(255, 255, 255, 0)" }}
          maskStyle={{ background: "transparent" }}
          extra={
            <>
              <Radio.Group buttonStyle="solid" value={tab} onChange={handleTabChange}>
                <Radio.Button value={0}>Players</Radio.Button>
                <Radio.Button value={1}>Prediction</Radio.Button>
              </Radio.Group>
            </>
          }
        >
          {tab === 0 ? (
            <>
              {gameData ? (
                <Row>
                  <Col span={11}>
                    <TeamView side={gameData.left} />
                  </Col>
                  <Col
                    span={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 22,
                    }}
                  >
                    <h1>VS</h1>
                  </Col>
                  <Col span={11}>
                    <TeamView side={gameData.right} />
                  </Col>
                </Row>
              ) : null}
            </>
          ) : (
            <>
              {gameData ? (
                <>
                  <GameBalanceView gameData={gameData} />
                </>
              ) : null}
            </>
          )}

          {!gameData ? (
            <div style={{ textAlign: "center", paddingTop: 10, paddingBottom: 15 }}>
              <Title>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} /> Waiting for
                a game
              </Title>
            </div>
          ) : null}
        </Drawer>
      </>
    );
  } else {
    return <div className="App"></div>;
  }
};

export default VideoOverlayPage;

/*
        <img
          src={inGameScreenShot}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%" }}
        />
        <img
          src={safeZones}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", display: "none" }}
        />
*/
