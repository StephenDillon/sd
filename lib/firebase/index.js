// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwxYrfBBYSew4HxAP_o_2Lel5-jL1L7WQ",
    authDomain: "sd-blog-414516.firebaseapp.com",
    projectId: "sd-blog-414516",
    storageBucket: "sd-blog-414516.appspot.com",
    messagingSenderId: "645868349138",
    appId: "1:645868349138:web:5aa4123d44d59ae186af0b",
    measurementId: "G-B5Q2Y0E4M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);