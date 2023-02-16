// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8LbVB_EPvW--RNrtGLN9JZAoor8or1UE",
  authDomain: "full-stack-portfolio-project.firebaseapp.com",
  projectId: "full-stack-portfolio-project",
  storageBucket: "full-stack-portfolio-project.appspot.com",
  messagingSenderId: "76714011877",
  appId: "1:76714011877:web:f0bc1028931903c2c7b80c",
  measurementId: "G-317M8N0Q2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
