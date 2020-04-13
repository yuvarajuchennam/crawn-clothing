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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;