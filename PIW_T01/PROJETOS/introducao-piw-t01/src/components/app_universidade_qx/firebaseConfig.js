import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration


const app = initializeApp(firebaseConfig) //criou a aplicação
const dbFirestore = getFirestore(app)

export default dbFirestore