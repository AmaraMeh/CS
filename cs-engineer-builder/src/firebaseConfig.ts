import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtv9tiAg4dGG2MfVj-nS-CzoNEUIR_14Y",
  authDomain: "sample-firebase-ai-apph-48570.firebaseapp.com",
  projectId: "sample-firebase-ai-apph-48570",
  storageBucket: "sample-firebase-ai-apph-48570.firebasestorage.app",
  messagingSenderId: "560740686768",
  appId: "1:560740686768:web:2b61a3a13069cfecef5475"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 