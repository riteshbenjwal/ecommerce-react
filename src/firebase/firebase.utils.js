import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCjmyXRN4R2Pb-fs2BlwECbTW-a4auVQGc",
    authDomain: "crwn-db-204bc.firebaseapp.com",
    projectId: "crwn-db-204bc",
    storageBucket: "crwn-db-204bc.appspot.com",
    messagingSenderId: "418367818796",
    appId: "1:418367818796:web:c7bf0cf5140d88809a1589"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;