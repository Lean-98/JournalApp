// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
      VITE_APP_FIREBASE_APIKEY,
      VITE_AUTHDOMAIN,
      VITE_PROJECTID,
      VITE_STORAGEBUCKET,
      VITE_MESSAGINGSENDERID,
      VITE_APPID,
      VITE_APP_FIREBASE_APIKEY_TEST,
      VITE_AUTHDOMAIN_TEST,
      VITE_PROJECTID_TEST,
      VITE_STORAGEBUCKET_TEST,
      VITE_MESSAGINGSENDERID_TEST,
      VITE_APPID_TEST,
      VITE_MEASUREMENTID_TEST,
    } = getEnvironments();

// Your web app's Firebase configuration
// Dev/Prod
const firebaseConfig = {
    apiKey: VITE_APP_FIREBASE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// Testing 
// const firebaseConfig = {
//     apiKey: VITE_APP_FIREBASE_APIKEY_TEST,
//     authDomain: VITE_AUTHDOMAIN_TEST,
//     projectId: VITE_PROJECTID_TEST,
//     storageBucket: VITE_STORAGEBUCKET_TEST,
//     messagingSenderId: VITE_MESSAGINGSENDERID_TEST,
//     appId: VITE_APPID_TEST,
//     measurementId: VITE_MEASUREMENTID_TEST
//   };


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp);