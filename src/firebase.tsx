// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent, setUserProperties } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3aaUBNJx9s1euglz1kVOC5OV7Z0Ls5m0",
  authDomain: "coh2-ladders-prod.firebaseapp.com",
  projectId: "coh2-ladders-prod",
  storageBucket: "coh2-ladders-prod.appspot.com",
  messagingSenderId: "293737053254",
  appId: "1:293737053254:web:d01715c03f70a8991dde47",
  measurementId: "G-SQJCGKCC2K",
};

// I am not sure if analytics works / I don't see myself in online analytics
// This will require additional exploration
let analytics: Analytics = null;

const firebaseInit = (): void => {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  // Because Analytics treats Electron as another browser we need to set up custom property
  setUserProperties(analytics, { custom_platform: "twitch_extension" });
};

// We should start all events with EA as indicator that it's electron app
// Analytics events can be called only after firabaseInit!
const events = {
  init: (type: string): void => {
    logEvent(analytics, `twitch_init_${type}`);
  },
};

export { firebaseInit, events };
