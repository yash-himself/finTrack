import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
//   authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
//   projectId: "personal-finance-tracker-ec56e",
//   storageBucket: "personal-finance-tracker-ec56e.appspot.com",
//   messagingSenderId: "669303047696",
//   appId: "1:669303047696:web:5b4b41cc896752c03e6c95",
//   measurementId: "G-7X36E69HYW",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCQUdd-JbEYeEWbc7F3lx_NSsB0jYmlu9o",
  authDomain: "the-fintracker.firebaseapp.com",
  projectId: "the-fintracker",
  storageBucket: "the-fintracker.appspot.com",
  messagingSenderId: "339050404595",
  appId: "1:339050404595:web:8b8353627fcc106efa3586"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
