import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2bUiZyJe2rxOgZEZWiVHUZjFsBDnafHU",
  authDomain: "qi-platform-4b3a4.firebaseapp.com",
  projectId: "qi-platform-4b3a4",
  storageBucket: "qi-platform-4b3a4.appspot.com",
  messagingSenderId: "491262763397",
  appId: "1:491262763397:web:6b1454680b138299b2e4ec",
  measurementId: "G-VYY94E3ZY5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;