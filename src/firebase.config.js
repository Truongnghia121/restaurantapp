// Cấu hình firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbBdndQHoX-NhQAodpoQIxEP4qeU5Br6U",
  authDomain: "restaurantapp-b3094.firebaseapp.com",
  databaseURL: "https://restaurantapp-b3094-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b3094",
  storageBucket: "restaurantapp-b3094.appspot.com",
  messagingSenderId: "957271415696",
  appId: "1:957271415696:web:2bc11e3f584f5ace94b115",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
