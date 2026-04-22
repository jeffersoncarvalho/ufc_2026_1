const express = require("express")
const professorService = require("../services/ProfessorService")

const router = express.Router()

router.get(
    "/"
    ,
    (request, response) => {
        const professores = professorService.buscarTodos()
        response.json(professores)
    }
)

module.exports = router