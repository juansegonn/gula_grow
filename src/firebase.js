// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import manual para agregar la funcion que obtiene la instacia firestore
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAJgEcKKsoSdbA1ACw_wZUfiL3TSXGcyA",
  authDomain: "gulagrow.firebaseapp.com",
  projectId: "gulagrow",
  storageBucket: "gulagrow.appspot.com",
  messagingSenderId: "333790262511",
  appId: "1:333790262511:web:059ea2d5fa40dada35d71a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exportar la base de datos de firestore para usarla en la app 
export const db = getFirestore(app)