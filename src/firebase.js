


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
   apiKey: "AIzaSyAN8pG2MSS2ZOcGBifcBqnAvvUZvwDYL-M",
  authDomain: "chat-db-f0c81.firebaseapp.com",
  projectId: "chat-db-f0c81",
  storageBucket: "chat-db-f0c81.appspot.com",
  messagingSenderId: "1053733030658",
  appId: "1:1053733030658:web:9c9758372b8d31a1e0d01b"


};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const storage = getStorage();
 
 export const db = getFirestore();
