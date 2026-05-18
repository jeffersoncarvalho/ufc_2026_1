const express = require("express")
const professorService = require("../services/ProfessorService")

const router = express.Router()

//S.T.A temporária
router.use(
    (request, response, next) => {
        response.setHeader("Access-Control-Allow-Origin","*")
        response.setHeader("Access-Control-Allow-Methods","GET")
        response.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization")
        next()
    }
)



router.get(
    "/",
    async (request, resolve) => {
        const professores = await professorService.listarTodos()
        resolve.json(professores)
    }
)

module.exports = router