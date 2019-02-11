import firebase from "firebase";
require('dotenv').config();

const app = firebase.initializeApp({
  // TODO add firebase credentials here. 
});

export default app;
