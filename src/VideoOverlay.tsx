import React from "react";
import ReactDOM from "react-dom";
import VideoOverlayPage from "./components/VideoOverlayPage/video-overlay-page";
import { firebaseInit } from "./firebase";

// We need to initialize our Firebase
// This has to happen once on the main file of each render process
firebaseInit();

ReactDOM.render(<VideoOverlayPage />, document.getElementById("root"));
