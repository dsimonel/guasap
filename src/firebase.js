import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
  apiKey: "AIzaSyBcHk8Zf7E5W9T6evHVS0GSnSQ9yYx-TXE",
  authDomain: "cb-waitlist.firebaseapp.com",
  databaseURL: "https://cb-waitlist-default-rtdb.firebaseio.com",
  projectId: "cb-waitlist",
  storageBucket: "cb-waitlist.appspot.com",
  messagingSenderId: "412632578433",
  appId: "1:412632578433:web:6538cd547f43df72da5080",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
//   useFetchStreams: false,});
export const db = getFirestore()
