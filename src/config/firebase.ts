import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLGRxAAddU0Rk_2OqFF3djsgHCRsKVKkU",
  authDomain: "qipl-30934.firebaseapp.com",
  projectId: "qipl-30934",
  storageBucket: "qipl-30934.firebasestorage.app",
  messagingSenderId: "995054408711",
  appId: "1:995054408711:web:c93d18d60f772b93cfc6a2",
  measurementId: "G-JRMBZMVWYL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
