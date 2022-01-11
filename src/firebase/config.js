import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTN0wcI8J350RN02SonRiSrWTrpNvLNdA",
  authDomain: "myexpence-a7e3b.firebaseapp.com",
  projectId: "myexpence-a7e3b",
  storageBucket: "myexpence-a7e3b.appspot.com",
  messagingSenderId: "895423412654",
  appId: "1:895423412654:web:051d04a4baefcc20b2303f",
};

firebase.initializeApp(firebaseConfig);

const fireStore = firebase.firestore();
const firebaseAuth = firebase.auth();
const timeStamp = firebase.firestore.Timestamp;

export { fireStore, firebaseAuth, timeStamp };
