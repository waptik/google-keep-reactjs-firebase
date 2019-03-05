import firebase from 'firebase/app';
import 'firebase/database';

//import firestore from 'firebase/firestore';

if (!firebase.apps.length) {
  // Initialize Firebase
  //const settings = {timestampsInSnapshots: true};
  const config = {
    apiKey: `{process.env.FIREBASE_API_KEY}`,
    authDomain: `{process.env.FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `{process.env.FIREBASE_DATABASE_URL}`,
    projectId: `{process.env.FIREBASE_PROJECT_ID}`,
    storageBucket: `{process.env.FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `{process.env.FIREBASE_MESSAGING_SENDER_ID}`,
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings(settings);

  console.log(process.env.FIREBASE_DATABASE_URL)
}

const db = firebase.database();

export { db };