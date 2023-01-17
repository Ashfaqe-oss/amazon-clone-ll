import firebase from "firebase";
import "firebase/auth";


const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyDxsTqznBgwoIs6oCbpUlMifdIUCwtzJ2Y",
  authDomain: "clone-ii-db6b7.firebaseapp.com",
  databaseURL: "https://clone-ii-db6b7.firebaseio.com",
  projectId: "clone-ii-db6b7",
  storageBucket: "clone-ii-db6b7.appspot.com",
  messagingSenderId: "677579581776",
  appId: "1:677579581776:web:1787a2f0d7c69dee202455",
  measurementId: "G-R8SBWTWMK5",
} );

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
