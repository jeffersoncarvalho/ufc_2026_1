const express = require("express")
const professorService = require("../services/ProfessorService")

const router = express.Router()

router.get(
    "/",
    async (request, resolve) => {
        const professores = await professorService.listarTodos()
        resolve.json(professores)
    }
)

module.exports = router