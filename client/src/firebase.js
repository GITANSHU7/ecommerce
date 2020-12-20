import  firebase from "firebase";
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyADWPD-MI-tYuWDYdcW6yJ12tZIU7rdt64",
    authDomain: "hypekar-a2490.firebaseapp.com",
    projectId: "hypekar-a2490",
    storageBucket: "hypekar-a2490.appspot.com",
    messagingSenderId: "73237754567",
    appId: "1:73237754567:web:4f1134145702e9d46844e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  //export
  export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
