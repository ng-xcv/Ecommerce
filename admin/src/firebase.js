// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBLakipGafLoVRA33h6CA5fMGXb4otjKiw",
   authDomain: "ecommerce-mern-stack-app.firebaseapp.com",
   projectId: "ecommerce-mern-stack-app",
   storageBucket: "ecommerce-mern-stack-app.appspot.com",
   messagingSenderId: "595062226616",
   appId: "1:595062226616:web:24123a84152d16c8b03e4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
