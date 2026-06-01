import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { firebase_key } from "../keys/firebase_key.js"

import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function carregarProfessores() {
  const app = initializeApp(firebase_key);
  const db = getFirestore(app);

  const professoresCollection = collection(db, "professores");
  const snapshot = await getDocs(professoresCollection);
  snapshot.forEach((professor) => {
    console.log(`ID: ${professor.id} -> ${professor.data().nome}`);
  });
}

carregarProfessores();
