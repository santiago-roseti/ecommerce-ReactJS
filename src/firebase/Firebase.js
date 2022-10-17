import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwhEQxNjQPzzATaO6-wKkxb7SC-m2f7G0",
  authDomain: "top-cine-880fa.firebaseapp.com",
  projectId: "top-cine-880fa",
  storageBucket: "top-cine-880fa.appspot.com",
  messagingSenderId: "952990038271",
  appId: "1:952990038271:web:27e9e8aadf3a07754af4ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);