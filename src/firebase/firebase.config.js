// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHg0Bf0lXPu53Xnyb-6aoH3Hl3RYXf80w",
  authDomain: "a10-tourism-management-websit.firebaseapp.com",
  projectId: "a10-tourism-management-websit",
  storageBucket: "a10-tourism-management-websit.appspot.com",
  messagingSenderId: "358003980450",
  appId: "1:358003980450:web:7fe5ed2dbeaf98a333fffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);