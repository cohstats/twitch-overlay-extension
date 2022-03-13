import React, { useEffect, useState } from "react";
import { useAuthentication } from "../util/TwitchHooks/useAuthentication";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useExtensionVisible } from "../util/TwitchHooks/useExtensionVisible";
import "./global.scss";
import "./overlayModifications.scss";
import inGameScreenShot from "../../public/ingameScreenshot.jpg";
import safeZones from "../../public/safezones.png";
import { Button, Col, Drawer, Row } from "antd";
import { events, firebaseInit } from "../firebase";
import TeamView from "./TeamView";
import { testData } from "../util/TestData";

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
  const { isLoading } = useAuthentication();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  // listen to the data from firestore
  useEffect(() => {
    events.init("overlay");

    // This will be the ID which will the twitch streamer setup
    const id = "jjcD0QWTwzydSwYoxSkS";
    onSnapshot(doc(getFirestore(), "twitch-ext-public", id), (doc) => {
      window.Twitch.ext.rig.log(`Some data: ${doc.data().test}`);
    });
  }, []);

  if (!isLoading && extensionVisible) { // !isLoading && extensionVisible
    return (
      <>
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
        {!drawerVisible ? <Button
          style={{ position: "absolute", bottom: "2rem", left: "45%", right: "45%" }}
          type="primary"
          onClick={showDrawer}
        >
          Show Player Stats
        </Button> : null}
        <Drawer
          placement="bottom"
          visible={drawerVisible}
          onClose={onCloseDrawer}
          height={"22.1rem"}
          contentWrapperStyle={{ paddingLeft: "4rem", paddingRight: "7rem", paddingBottom: "5rem"}}
          headerStyle={{ background: "rgba(255, 255, 255, 0)" }}
          maskStyle={{ background: "transparent" }}
        >
          <Row>
            <Col span={11}>
              <TeamView side={testData.left} />
            </Col>
            <Col span={2} style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 22}}>
              <h1>VS</h1>
            </Col>
            <Col span={11}>
              <TeamView side={testData.right} />
            </Col>
          </Row>

        </Drawer>
      </>
    );
  } else {
    return <div className="App"></div>;
  }
};

export default VideoOverlayPage;
