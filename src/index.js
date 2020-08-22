import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";
import "./styles/fonts.css";

var firebaseConfig = {
  apiKey: "AIzaSyCARbl3q7L7Dzf02B2a9vQKgnG7w23tU4w",
  authDomain: "fir-c6bef.firebaseapp.com",
  databaseURL: "https://fir-c6bef.firebaseio.com",
  projectId: "fir-c6bef",
  storageBucket: "fir-c6bef.appspot.com",
  messagingSenderId: "905773074619",
  appId: "1:905773074619:web:8840b2b37c4c48b8e9019e",
  measurementId: "G-R6N2NJ9B6Q",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
