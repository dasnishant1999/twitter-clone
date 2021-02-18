import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMhfXSDozoNZu8hkd3t4DzgxUA6spWJUA",
  authDomain: "twitter-clone-855d3.firebaseapp.com",
  projectId: "twitter-clone-855d3",
  storageBucket: "twitter-clone-855d3.appspot.com",
  messagingSenderId: "493418696202",
  appId: "1:493418696202:web:057d2819b95a90c6e299f3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
