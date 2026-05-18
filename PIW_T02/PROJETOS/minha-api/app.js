const express = require("express")
//const path = require("path")
const professorRouter = require("./routers/ProfessorRouter")

const app = express()
const PORT = 3000

//app.use(express.static(path.join(__dirname,"..","public")))
app.use("/api/piwt02/professor",professorRouter)

app.listen(
    PORT,
    () => {
        console.log(`API executando no endereço: http://localhost:${PORT}/api/piwt02/`)
    }
)
