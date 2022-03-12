import React, { useEffect, useState } from "react";
import { useAuthentication } from "../util/TwitchHooks/useAuthentication";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useExtensionVisible } from "../util/TwitchHooks/useExtensionVisible";
import "./global.scss";
import inGameScreenShot from "../../public/ingameScreenshot.jpg";
import { Button, Drawer } from "antd";
import { events, firebaseInit } from "../firebase";

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

const VideoOverlay = () => {
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

  if (!isLoading && extensionVisible) {
    return (
      <>
        <img
          src={inGameScreenShot}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%" }}
        />
        <Button
          style={{ position: "absolute", bottom: "6rem", left: "45%", right: "45%" }}
          type="primary"
          onClick={showDrawer}
        >
          Show Player Stats
        </Button>
        <Drawer
          placement="bottom"
          visible={drawerVisible}
          onClose={onCloseDrawer}
          height={"20rem"}
          headerStyle={{ background: "rgba(255, 255, 255, 0)" }}
          maskStyle={{ background: "transparent" }}
        >
          Items
        </Drawer>
      </>
    );
  } else {
    return <div className="App"></div>;
  }
};

export default VideoOverlay;
