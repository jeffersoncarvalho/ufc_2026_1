const ProfessorRepository = require("../repositories/ProfessorRepository")

class ProfessorService {

    constructor () {
        this.professorRepository = new ProfessorRepository()
    }

    buscarTodos() {
        //algumas regras de negócio
        return this.professorRepository.buscarTodos()
    }

}

module.exports = new ProfessorService