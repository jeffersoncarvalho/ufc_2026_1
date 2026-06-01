import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { firebase_key } from "../keys/firebase_key.js"

//listagem de professores
async function listar_professores() {

    const app = initializeApp(firebase_key)
    const db = getFirestore(app)

    const professorCollection = collection(db,"professores")
    const snapshot = await getDocs(professorCollection)

    const professoresDiv = document.getElementById("lista-professores")
    const ul = document.createElement("ul")

    snapshot.forEach(
        (professor) => {
            //console.log(`${professor.data().nome} - ${professor.data().curso}`)
            const li = document.createElement("li")
            const strong = document.createElement("strong")
            strong.textContent = professor.data().nome
            const em = document.createElement("em")
            em.textContent = " - " + professor.data().curso
            li.appendChild(strong)
            li.appendChild(em)
            ul.appendChild(li)
        }
    )

    professoresDiv.appendChild(ul)
}

//evento do click
const botaoListar = document.getElementById("btn-listar-professores")
botaoListar.addEventListener(
    "click",
    async () => {
        try{
            await listar_professores()
        }catch(error) {
            console.error("Falha ao carregar professores!")
            console.error(error)
        }
        
    }
)