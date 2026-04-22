const ProfessorRepository = require("../repositories/ProfessorRepository")


class ProfessorService {
    
    constructor() {
        this.professorRepository = new ProfessorRepository()
    }

    async findAll() {
       const professores = await this.professorRepository.findAll()
       return professores
    }
}

module.exports = new ProfessorService