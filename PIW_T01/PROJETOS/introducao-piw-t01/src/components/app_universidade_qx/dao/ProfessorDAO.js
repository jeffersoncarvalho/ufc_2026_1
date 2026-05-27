import dbFirestore from "../firebaseConfig"
import { collection, getDocs } from "firebase/firestore"


const ProfessorDAO = {
    async getAll() {

        const professoresCollection = collection(dbFirestore, "professores")
        const snapshot = await getDocs(professoresCollection)
        snapshot.forEach( 
            professor => {
                console.log(`ID: ${professor.id} -> ${professor.data().nome}`)
            }
        )//forEach
    }//getAll
}//ProfessorDAO

export default ProfessorDAO