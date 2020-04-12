import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWhCOblmctAldeqjoqPD_90Jf38A6O8Tw",
    authDomain: "crwn-db-7f01e.firebaseapp.com",
    databaseURL: "https://crwn-db-7f01e.firebaseio.com",
    projectId: "crwn-db-7f01e",
    storageBucket: "crwn-db-7f01e.appspot.com",
    messagingSenderId: "150491447040",
    appId: "1:150491447040:web:424b4a3a6ddad992f1fde5",
    measurementId: "G-KB7NBTERLQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;