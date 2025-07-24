import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClWwbyQ91j9iOr5KxlbY2oWO93nhVSQGI",
  authDomain: "rentaround-d0a78.firebaseapp.com",
  projectId: "rentaround-d0a78",
  storageBucket: "rentaround-d0a78.firebasestorage.app",
  messagingSenderId: "890004436012",
  appId: "1:890004436012:web:6fbed2c6aced84bb7ccd89",
  measurementId: "G-1VYWWLQL6B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
