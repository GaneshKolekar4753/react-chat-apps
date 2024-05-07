


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  
  // apiKey: "AIzaSyCao2Ft3fQtZKbrez98S6Jzez0R6oKE6J0",
  // authDomain: "chatting-app-3a348.firebaseapp.com",
  // projectId: "chatting-app-3a348",
  // storageBucket: "chatting-app-3a348.appspot.com",
  // messagingSenderId: "598357170191",
  // appId: "1:598357170191:web:203c738aa66ef128deeb7a"
  apiKey: "AIzaSyB-U-0RPiH81bEgFG5ZklMaBhqcO91zof0",
  authDomain: "chat-db-fa224.firebaseapp.com",
  projectId: "chat-db-fa224",
  storageBucket: "chat-db-fa224.appspot.com",
  messagingSenderId: "294837577089",
  appId: "1:294837577089:web:05370d9b231aa943513480"


};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const storage = getStorage();
 
 export const db = getFirestore();
