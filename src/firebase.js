// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import manual para agregar la funcion que obtiene la instacia firestore
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exportar la base de datos de firestore para usarla en la app 
export const db = getFirestore(app)