import React from "react";
import ReactDOM from "react-dom";
import { firebaseInit /*, events*/ } from "./firebase";
import ConfigPage from "./components/ConfigPage/config-page";

// We need to initialize our Firebase
// This has to happen once on the main file of each render process
firebaseInit();
//events.init("overlay_settings");

ReactDOM.render(<ConfigPage />, document.getElementById("root"));
