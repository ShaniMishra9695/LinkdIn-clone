// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQgO8WC3_F51X73hZSEMn0gdFljBsQsXs",
    authDomain: "linkedin-clone-a05d6.firebaseapp.com",
    projectId: "linkedin-clone-a05d6",
    storageBucket: "linkedin-clone-a05d6.appspot.com",
    messagingSenderId: "341083769609",
    appId: "1:341083769609:web:0cfe02755e7280179921d8",
    measurementId: "G-QPKWPTRL06"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };