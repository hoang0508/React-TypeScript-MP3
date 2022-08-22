import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFfiKv8lWlm8PkUt3Ay0aZlRC-O3CE6XU",
  authDomain: "fruits-app-28cb7.firebaseapp.com",
  projectId: "fruits-app-28cb7",
  storageBucket: "fruits-app-28cb7.appspot.com",
  messagingSenderId: "145756122068",
  appId: "1:145756122068:web:489bcb836ecc639a328441",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
