import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMyDsM6UTKVFaeFSZEmBpTm6hLr84itoc",
  authDomain: "mitienda-ecommerce-reactjs.firebaseapp.com",
  projectId: "mitienda-ecommerce-reactjs",
  storageBucket: "mitienda-ecommerce-reactjs.firebasestorage.app",
  messagingSenderId: "1008109299233",
  appId: "1:1008109299233:web:3e26a1ee8b3a11a3c7e560"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)