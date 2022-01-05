import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCajfGSY5WylwjowU9zhjtoaHWWKGD_6Os",
  authDomain: "year-end-and-new-year-task.firebaseapp.com",
  projectId: "year-end-and-new-year-task",
  storageBucket: "year-end-and-new-year-task.appspot.com",
  messagingSenderId: "994895005720",
  appId: "1:994895005720:web:95f5d5c895bcca795adb6d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;