// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import firestore from "firebase/compat/firestore";

//Initialize Firebae
const firebaseConfig = {
  apiKey: "AIzaSyAwCcB1YjyTHho_XCMuwHIH5jeDcYwrkrE",
  authDomain: "geo-location-5b34d.firebaseapp.com",
  projectId: "geo-location-5b34d",
  storageBucket: "geo-location-5b34d.appspot.com",
  messagingSenderId: "368347625701",
  appId: "1:368347625701:web:02a4b847d1f3b3bbbe3c0c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//export firestore database
export default firebaseApp.firestore();
