// firebase.js (for Firebase v9+)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD5DHUrkujkjfNj2dvArVGpwGPatAtohtU",
  authDomain: "protekpower-blog.firebaseapp.com",
  projectId: "protekpower-blog",
  storageBucket: "protekpower-blog.firebasestorage.app",
  messagingSenderId: "729993364506",
  appId: "1:729993364506:web:0871a27e8b58220d46fda3",
  measurementId: "G-DKG9SRZYYJ"
};

const app = initializeApp(firebaseConfig);

// Get Firestore and Storage instances
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };