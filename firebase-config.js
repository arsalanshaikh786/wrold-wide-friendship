// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpsoZ_648AwwL3BU-I_Hze5gZ90mFUTcs",
  authDomain: "aaaa-8683a.firebaseapp.com",
  projectId: "aaaa-8683a",
  storageBucket: "aaaa-8683a.firebasestorage.app",
  messagingSenderId: "864632443782",
  appId: "1:864632443782:web:2896df049c72439d7dd207"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);