import React, { useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useExtensionVisible } from "../../util/TwitchHooks/useExtensionVisible";
import "../global.scss";
import "../overlayModifications.scss";
//import inGameScreenShot from "../../public/ingameScreenshot.jpg";
//import safeZones from "../../public/safezones.png";
import { Col, Drawer, Radio, RadioChangeEvent, Row, Spin } from "antd";
// import { /*events,*/ firebaseInit } from "../../firebase";
import TeamView from "../TeamView";
import { GameData } from "../../util/App/GameData";
import Title from "antd/lib/typography/Title";
import { LoadingOutlined } from "@ant-design/icons";
import GameBalanceView from "../gameBalanceView";
import { useConfiguration } from "../../util/TwitchHooks/useConfiguration";
import { useViewportSize } from "@mantine/hooks";
import { ShowStatsButton } from "../show-stats-button";

// eslint-disable-next-line sonarjs/cognitive-complexity
const VideoOverlayPage = () => {
  const { height, width } = useViewportSize();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const extensionVisible = useExtensionVisible();
  const [gameData, setGameData] = useState<GameData | undefined>(undefined);
  const [tab, setTap] = useState(0);
  const { config } = useConfiguration();
  const [buttonPosition, setButtonPosition] = useState("minimap");
  const showStatsButtonText = config?.showStatsButtonText || "Show Player Stats";
  const showStatsButtonSize = config?.showStatsButtonSize || "middle";
  const showStatsButtonColor = config?.showStatsButtonColor || "#3A91FF";
  const showStatsButtonTextColor = config?.showStatsButtonTextColor || "#F7FBFF";
  const showStatsButtonShape = config?.showStatsButtonShape || "";
  const showStatsButtonPositionLeft = config?.leftButtonPosition;
  const showStatsButtonPositionBottom = config?.bottomButtonPosition;
  const showStatsButtonOnlyCOH2 = config?.showStatsButtonOnlyCOH2;
  const [displayButtonBasedOnGame, setDisplayButtonBasedOnGame] = useState(true);

  window.Twitch.ext.rig.log(`Config data are: ${JSON.stringify(config)}`);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleTabChange = (event: RadioChangeEvent) => {
    setTap(event.target.value);
  };

  // Register context callback
  useEffect(() => {
    //https://dev.twitch.tv/docs/extensions/reference
    window.Twitch.ext.onContext((context: Record<string, any>) => {
      const showButton = showStatsButtonOnlyCOH2 !== false
      if (
        context &&
        context.game &&
        showButton &&
        context.game !== "Company of Heroes 2"
      ) {
        setDisplayButtonBasedOnGame(false);
      }
    });
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

  // Legacy options - left to be able to migrate
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

  // Check if we have new values in the config saved
  if (showStatsButtonPositionLeft && showStatsButtonPositionBottom) {
    leftButtonPosition = `${showStatsButtonPositionLeft}%`;
    bottomButtonPosition = `${showStatsButtonPositionBottom}%`;
  }

  // window.Twitch.ext.rig.log(`Position are:`, leftButtonPosition, bottomButtonPosition);

  // if the stream is watched on a tiny view the overlay cannot be displayed properly anymore
  const twitchPlayerTooSmall = width < 700 || height < 380;

  // gameData means that we have data from the game
  if (extensionVisible && gameData) {
    // !isLoading && extensionVisible
    return (
      <>
        {(!drawerVisible || twitchPlayerTooSmall) && displayButtonBasedOnGame ? (
          <>
            <ShowStatsButton
              bottomButtonPosition={bottomButtonPosition}
              leftButtonPosition={leftButtonPosition}
              showStatsButtonColor={showStatsButtonColor}
              showStatsButtonTextColor={showStatsButtonTextColor}
              showStatsButtonShape={showStatsButtonShape}
              showStatsButtonSize={showStatsButtonSize}
              twitchPlayerTooSmall={twitchPlayerTooSmall}
              showDrawer={showDrawer}
              showStatsButtonText={showStatsButtonText}
            />
          </>
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
          visible={drawerVisible && !twitchPlayerTooSmall}
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
    return <div className="App" />;
  }
};

export default VideoOverlayPage;

/*
  // listen to the data from firestore
  useEffect(() => {
    //events.init("overlay");
  }, []);
*/

/*
  useEffect(() => {
    // This will be the ID which will the twitch streamer setup
    const id = "11307ae6-b769-4d69-9a6f-4af5f83c18b8";
    onSnapshot(doc(getFirestore(), "twitch-ext-public", id), (doc) => {
      //window.Twitch.ext.rig.log(`Some data: ${doc.data().test}`);
      setGameData(doc.data().data.game);
    });
  }, []);
*/

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
