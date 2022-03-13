import React, { useEffect } from "react";
import { useAuthentication } from "../util/TwitchHooks/useAuthentication";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useExtensionVisible } from "../util/TwitchHooks/useExtensionVisible";
import "./global.scss";
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

const PanelPage = () => {
  const extensionVisible = useExtensionVisible();
  const { isLoading } = useAuthentication();

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
    return <>Maybe display player card or map stats?</>;
  } else {
    return <div className="App"></div>;
  }
};

export default PanelPage;
