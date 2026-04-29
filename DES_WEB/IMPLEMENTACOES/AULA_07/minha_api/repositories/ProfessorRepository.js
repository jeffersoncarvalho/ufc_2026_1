const ProfessorModel = require("../models/ProfessorModel") 

const professores = [
    new ProfessorModel(1,"Alexandre Matos Arruda","https://www.quixada.ufc.br/wp-content/uploads/2026/03/Alexandre-1-e1775493896295-199x300.jpeg"),
    new ProfessorModel(2,"Alisson Barbosa de Souza","https://www.quixada.ufc.br/wp-content/uploads/2015/05/Alisson-Barbosa-de-Souza1-225x300.png"),
    new ProfessorModel(3,"André Ribeiro Braga","https://www.quixada.ufc.br/wp-content/uploads/2016/02/Andr%C3%A9_Ribeiro_Braga1-225x300.png")
]

//acessa a base de dados
//no momento, iremos simular em memória
class ProfessorRepository {

    async listarTodos() {
        return Promise.resolve(professores)
    }
}

//module.exports = ProfessorRepository
module.exports = new ProfessorRepository()