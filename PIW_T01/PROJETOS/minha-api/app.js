const express = require("express")
const path = require("path")



const professorRouter = require("./routers/ProfessorRouter")

const app = express() //criando a API
const PORT = 3000

//app.use(express.static(path.join(__dirname,"..","public")))
app.use("/api/piwt01/professor",professorRouter)

app.listen(
    PORT,
    () => {
        console.log(`API executando em http://localhost:${PORT}/api/piwt01/professor`)
    }
)
