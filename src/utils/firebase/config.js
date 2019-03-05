import firebase from 'firebase/app';
import 'firebase/database';

//import firestore from 'firebase/firestore';

if (!firebase.apps.length) {
  // Initialize Firebase
  //const settings = {timestampsInSnapshots: true};
  const config = {
    apiKey: `{process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `{process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `{process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
    projectId: `{process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `{process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `{process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings(settings);

  //console.log(process.env) // view environment keys in console log
}

const db = firebase.database();

export { db };