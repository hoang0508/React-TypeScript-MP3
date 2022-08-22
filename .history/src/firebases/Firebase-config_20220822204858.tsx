import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2MdLy0G9WUgCEm-5yYP3591oooa0D6_Q",
  authDomain: "musicapp-react-7ba75.firebaseapp.com",
  projectId: "musicapp-react-7ba75",
  storageBucket: "musicapp-react-7ba75.appspot.com",
  messagingSenderId: "636508318849",
  appId: "1:636508318849:web:323b7e3ed9caa6788a3180",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
