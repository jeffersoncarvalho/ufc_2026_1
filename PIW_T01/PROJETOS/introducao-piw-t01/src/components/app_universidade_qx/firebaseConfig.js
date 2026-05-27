import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-KKx6IfiBB8ChlPhAW2YWovtkoa-3q4M",
  authDomain: "jeff-piwt01.firebaseapp.com",
  projectId: "jeff-piwt01",
  storageBucket: "jeff-piwt01.firebasestorage.app",
  messagingSenderId: "931650123312",
  appId: "1:931650123312:web:758e69ebc83c1af773dff5"
};

const app = initializeApp(firebaseConfig) //criou a aplicação
const dbFirestore = getFirestore(app)

export default dbFirestore