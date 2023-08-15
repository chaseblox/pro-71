import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUdHOiXVfjdbPwobXNL87zcDgI-OLPsdU",
  authDomain: "pro-71-5d3b1.firebaseapp.com",
  projectId: "pro-71-5d3b1",
  storageBucket: "pro-71-5d3b1.appspot.com",
  messagingSenderId: "357778146068",
  appId: "1:357778146068:web:8c02676086ac0d620b7801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.firestore();
