// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACBTF_LbVejGx34ij7aHHL53uYgUHqWzE',
  authDomain: 'react-disney-plus-app-b981e.firebaseapp.com',
  projectId: 'react-disney-plus-app-b981e',
  storageBucket: 'react-disney-plus-app-b981e.appspot.com',
  messagingSenderId: '369472027992',
  appId: '1:369472027992:web:98c33db6a538d71780b92d',
  measurementId: 'G-06Y100KQ71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
