import firebase from "firebase";
require('dotenv').config();

const app = firebase.initializeApp({
  apiKey: "the api key",
  authDomain: "your auth domain here",
  databaseURL: "your database url here",
  projectId: "your project Id here",
  storageBucket: "your storage bucket here",
  messagingSenderId: "your messaging sender id here"
});

export default app;
