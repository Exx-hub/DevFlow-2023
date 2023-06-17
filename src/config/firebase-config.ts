import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBpg-P2PJUR_m-OImoI1D_6DLSQUN26QE",
  authDomain: "devflow-ai.firebaseapp.com",
  projectId: "devflow-ai",
  storageBucket: "devflow-ai.appspot.com",
  messagingSenderId: "1050742324779",
  appId: "1:1050742324779:web:c66b19bd364a6ad3b7b46e",
  measurementId: "G-YSH9FBMQYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
