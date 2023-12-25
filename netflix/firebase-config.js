// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9HQAXiTLleTgJbdFlqSOkPRx8FvdYyY",
  authDomain: "netflix-81175.firebaseapp.com",
  projectId: "netflix-81175",
  storageBucket: "netflix-81175.appspot.com",
  messagingSenderId: "63297907858",
  appId: "1:63297907858:web:e6a24b8d01fba4635d0a4b",
  measurementId: "G-Y1N4Z7E1Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
