import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdGYK6GMfKPb08_h2l1N7PVRUl6znwZv0",
  authDomain: "next-5617f.firebaseapp.com",
  projectId: "next-5617f",
  storageBucket: "next-5617f.appspot.com",
  messagingSenderId: "584564716737",
  appId: "1:584564716737:web:da057155728921b8435040",
  measurementId: "G-9S3X9CC90Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
