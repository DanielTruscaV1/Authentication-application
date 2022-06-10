// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgHDSP2tSqFFgL1cH8qoy06AsNYDdjUuk",
  authDomain: "fir-auth-yt-91f56.firebaseapp.com",
  projectId: "fir-auth-yt-91f56",
  storageBucket: "fir-auth-yt-91f56.appspot.com",
  messagingSenderId: "958743377545",
  appId: "1:958743377545:web:16d04527398f962946b858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;