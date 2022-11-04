// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqAop1h7ViuhcViUZGwQWibTKC0d4mJbs",
    authDomain: "ekart-7d4b9.firebaseapp.com",
    projectId: "ekart-7d4b9",
    storageBucket: "ekart-7d4b9.appspot.com",
    messagingSenderId: "254593463325",
    appId: "1:254593463325:web:cf5627c1136f4a128902f4",
    measurementId: "G-4Z9PZ2R71F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
