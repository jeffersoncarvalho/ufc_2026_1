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

router.get(
    "/:id",
    async (request, resolve) => {
        const professor = await professorService.buscarPorId(request.params.id)
        //resolve.json(professor)
        if(!professor) resolve.status(404).json({erro:"Professor não encontrado!"})
        else resolve.json(professor)
    }
)

router.post(
    "/",
    express.json()
    ,async (request, resolve) =>{
        const ok = await professorService.adicionar(request.body)
        resolve.json({msg:"adicionado com sucesso!"})
    }
)

module.exports = router