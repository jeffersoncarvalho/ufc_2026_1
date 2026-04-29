const express = require("express")
//const path = require("path")

const routerProfessor = require("./routers/ProfessorRouter")

const app = express()
const port = 3000

app.use("/api/professores",routerProfessor)

app.use(
    (request, resolve) => {
        resolve.status(404).json({erro:"Rota não encontrada!"})
    }
)

app.listen(
    port,
    () => {
        console.log(`API executando na porta ${port}`)
    }
)