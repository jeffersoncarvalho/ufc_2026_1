const professorRepository = require("../repositories/ProfessorRepository")

class ProfessorService {
    
    async listarTodos() {
        const professores = await professorRepository.listarTodos()
        return professores   
    }
}

module.exports = new ProfessorService()