import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeriblLlNxzjWgYiKIlhfIKnfVrKff-rI",
  authDomain: "chat-app-10198.firebaseapp.com",
  projectId: "chat-app-10198",
  storageBucket: "chat-app-10198.appspot.com",
  messagingSenderId: "707419858520",
  appId: "1:707419858520:web:35927630771254b8478c2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
