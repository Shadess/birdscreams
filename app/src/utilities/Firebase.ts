// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArqMpVbl-XTJD4InTLAC-cWNMjd_eOrSw',
  authDomain: 'birdscreams-b1657.firebaseapp.com',
  projectId: 'birdscreams-b1657',
  storageBucket: 'birdscreams-b1657.appspot.com',
  messagingSenderId: '430644090450',
  appId: '1:430644090450:web:bac822d9af3ccd10e4f18b',
  measurementId: 'G-CR48ZKVN6Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
