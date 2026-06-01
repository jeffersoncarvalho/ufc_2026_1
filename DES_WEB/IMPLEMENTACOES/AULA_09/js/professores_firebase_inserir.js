import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { firebase_key } from "../keys/firebase_key.js"


async function inserir_professor(nome, curso) {
    const app = initializeApp(firebase_key)
    const db = getFirestore(app)

    const professorCollection = collection(db,"professores")
    const docRef = await addDoc(professorCollection, {
        nome,
        curso
    });
    console.log("Document written with ID: ", docRef.id);
}

const formProfessor = document.getElementById("form-professor")
formProfessor.addEventListener(
    "submit",
    async (event) => {
        event.preventDefault()
        const nome = document.getElementById("nome").value
        const curso = document.getElementById("curso").value
        try{
            await inserir_professor(nome,curso)
        }catch(error) {
            console.error(error)
            console.error("Falha ao inserir o professor!")
        }
    }
)