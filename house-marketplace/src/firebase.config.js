// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqOn64KROx007-HNM1LIsJiNLeUuvxiXc",
  authDomain: "house-marketplace-app-a8fe2.firebaseapp.com",
  projectId: "house-marketplace-app-a8fe2",
  storageBucket: "house-marketplace-app-a8fe2.appspot.com",
  messagingSenderId: "57906955132",
  appId: "1:57906955132:web:a0b95df03a18a0d31b9af9",
  measurementId: "G-L39JCT69ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore()