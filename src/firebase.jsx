// firebaseConfig.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv62IDO02DZEHfHtIJCroaT-35v1W9NPs",
  authDomain: "authentiction-stream.firebaseapp.com",
  projectId: "authentiction-stream",
  storageBucket: "authentiction-stream.appspot.com",
  messagingSenderId: "763468719233",
  appId: "1:763468719233:web:c0dcefb88763f7486b5980",
  measurementId: "G-YQK5GBEH4N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, fbProvider, githubProvider };
