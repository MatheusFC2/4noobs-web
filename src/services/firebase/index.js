// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjoAiXdtUMgBpX7eu4bPUa690ZGRftBBs",
  authDomain: "noobs-web.firebaseapp.com",
  projectId: "noobs-web",
  storageBucket: "noobs-web.appspot.com",
  messagingSenderId: "363287840325",
  appId: "1:363287840325:web:ed57261a8f153467e0852c",
  measurementId: "G-8C8Z969EY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
