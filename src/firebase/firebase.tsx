import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Loading firebaseConfig with env variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initializing the firebase app and analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initializing the firestore from the app config
const db = getFirestore(app);

// Initializing firebase authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { db, auth, provider };

