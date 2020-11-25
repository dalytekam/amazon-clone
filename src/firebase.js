import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNNhOAKo5Xr2f5qy_jS8wt3XDpkqV1-tU",
  authDomain: "amzn-clone-75600.firebaseapp.com",
  databaseURL: "https://amzn-clone-75600.firebaseio.com",
  projectId: "amzn-clone-75600",
  storageBucket: "amzn-clone-75600.appspot.com",
  messagingSenderId: "380488746382",
  appId: "1:380488746382:web:6f622443d3def7ba8010df",
  measurementId: "G-SDRWVJ6YLC"
};
const fb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = fb.firestore();
export { auth, db };
