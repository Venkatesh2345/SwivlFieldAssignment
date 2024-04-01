import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGJ6H5zFwFOaSZbusAYCh3VfpBAQ9nh7w",
  authDomain: "swivl-field-assignment.firebaseapp.com",
  projectId: "swivl-field-assignment",
  storageBucket: "swivl-field-assignment.appspot.com",
  messagingSenderId: "716267062729",
  appId: "1:716267062729:web:c2fb38cb8ebf309cee1418",
  measurementId: "G-QH8HSL5RW8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
