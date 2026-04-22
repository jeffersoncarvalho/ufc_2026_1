const ProfessorModel = require("../models/ProfessorModel")

const professores = [
    new ProfessorModel(1,"Jefferson de Carvalho", "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-225x300.png"),
    new ProfessorModel(2,"Fco. Aragão","https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png"),
    new ProfessorModel(3,"Ingrid Teixeira", "https://www.quixada.ufc.br/wp-content/uploads/2015/05/ingrid-azulejo-150x150.jpeg")
]

class ProfessorRepository {

    //editar, pegar, deletar, inserir...
    
    buscarTodos() {
        return professores
    }

    buscarPorId(id) {
        
    }

}

module.exports = ProfessorRepository