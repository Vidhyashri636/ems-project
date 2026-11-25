import { initializeApp } from "firebase/app";
//! authentication services provided by the firebase
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg8RYtGcWIHBYqj-nLU_CxCxDtDymzTVM",
  authDomain: "ems-project-2df2d.firebaseapp.com",
  projectId: "ems-project-2df2d",
  storageBucket: "ems-project-2df2d.firebasestorage.app",
  messagingSenderId: "54852502461",
  appId: "1:54852502461:web:f41a77775bb73a3fc648d4"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export let __AUTH=getAuth(firebaseapp);