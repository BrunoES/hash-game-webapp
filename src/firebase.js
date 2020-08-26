import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzhXMyVz7AlPbx6QzSCAwBrXTIxfyFGU8",
    authDomain: "hash-game-c4ae1.firebaseapp.com",
    databaseURL: "https://hash-game-c4ae1.firebaseio.com",
    projectId: "hash-game-c4ae1",
    storageBucket: "hash-game-c4ae1.appspot.com",
    messagingSenderId: "193943482660",
    appId: "1:193943482660:web:1ddfc79f4328fd73ce83b1",
    measurementId: "G-S4BXGQ88KN"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;