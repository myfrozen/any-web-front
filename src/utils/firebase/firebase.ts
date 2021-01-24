import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43aFfCUgoSr7J8_p6E7K6vJwDr6DSBWE",
  authDomain: "attack-on-react.firebaseapp.com",
  projectId: "attack-on-react",
  storageBucket: "attack-on-react.appspot.com",
  messagingSenderId: "580854629408",
  appId: "1:580854629408:web:b936590a6cfec24b316845",
  measurementId: "G-KWWRRY3QFZ"
};

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();