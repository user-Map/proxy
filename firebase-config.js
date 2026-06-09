import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO4z_CJBNbL6-JWXS42foF6dwKVQj403I",
  authDomain: "proxy-275.firebaseapp.com",
  projectId: "proxy-275",
  storageBucket: "proxy-275.firebasestorage.app",
  messagingSenderId: "1019852776299",
  appId: "1:1019852776299:web:f82f681236bc42e16ea22e",
  measurementId: "G-HZBBYKZKRD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
