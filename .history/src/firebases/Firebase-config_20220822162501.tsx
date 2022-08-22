import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPrQVrkvESdY8Lke7WTPcCyI9bfMGBSU",
  authDomain: "musicapp-react.firebaseapp.com",
  projectId: "musicapp-react",
  storageBucket: "musicapp-react.appspot.com",
  messagingSenderId: "82337501615",
  appId: "1:82337501615:web:2ba04d63b64d573be5df5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
