import firebase from 'firebase';
import { GoogleMap } from 'react-google-maps';

// var firebaseConfig = {
//     apiKey: "AIzaSyDDaPk0lM6HMK8yl1hASu1RcTDu--NwjsA",
//     authDomain: "ichi-station-dev.firebaseapp.com",
//     databaseURL: "https://ichi-station-dev.firebaseio.com",
//     projectId: "ichi-station-dev",
//     storageBucket: "ichi-station-dev.appspot.com",
//     messagingSenderId: "479072518171",
//     appId: "1:479072518171:web:9387a867f70ab9d7fc78be"
// };


// const firebaseConfig = {
//     apiKey: "AIzaSyDbRxWNLpZ12ZE_zFYrHRGEOYrl8G2F9JY",
//     authDomain: "ichi-station-2020.firebaseapp.com",
//     projectId: "ichi-station-2020",
//     storageBucket: "ichi-station-2020.appspot.com",
//     messagingSenderId: "27680361869",
//     appId: "1:27680361869:web:dcba30152150d0df9c01c4"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDbRxWNLpZ12ZE_zFYrHRGEOYrl8G2F9JY",
  authDomain: "ichi-station-2020.firebaseapp.com",
  databaseURL: "https://ichi-station-2020-default-rtdb.firebaseio.com",
  projectId: "ichi-station-2020",
  storageBucket: "ichi-station-2020.appspot.com",
  messagingSenderId: "27680361869",
  appId: "1:27680361869:web:dcba30152150d0df9c01c4"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
const GoogleMapsAPI = firebaseConfig.apiKey;
 
const db= firebase.firestore();
 
export    {db,firebase,GoogleMapsAPI};