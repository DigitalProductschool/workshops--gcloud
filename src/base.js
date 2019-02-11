import firebase from "firebase";
require('dotenv').config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyCRMDtJfde3awuWoLHNZS5PdfyMdKN95Bk",
  authDomain: "gcloud-intro.firebaseapp.com",
  databaseURL: "https://gcloud-intro.firebaseio.com",
  projectId: "gcloud-intro",
  storageBucket: "gcloud-intro.appspot.com",
  messagingSenderId: "905301150822"
});

export default app;
