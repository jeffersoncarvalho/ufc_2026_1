const express = require("express")
const professorService = require("../services/ProfessorService")

const router = express.Router()

router.get(
    "/"
    ,
    async (request, response) => {
        const professores = await professorService.findAll()
        response.json(professores)
    }
)

module.exports = router