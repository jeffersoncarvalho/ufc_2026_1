const professorRepository = require("../repositories/ProfessorRepository")

class ProfessorService {
    
    async listarTodos() {
        const professores = await professorRepository.listarTodos()
        return professores   
    }

    async buscarPorId(id) {
        const professor = await professorRepository.buscarPorId(id)
        if(!professor) return null
        return professor
    }

    async adicionar(professor) {
        await professorRepository.adicionar(professor)
        return true
    }
}

module.exports = new ProfessorService()