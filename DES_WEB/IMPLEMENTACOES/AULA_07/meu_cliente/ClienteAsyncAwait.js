import axios from "axios"

async function consumirAPI() {
    try{
        const res = await fetch("http://localhost:3000/api/professores/")
        const dados = await res.json()
        console.log(dados)
    }catch(error) {
        console.log(error)
    }
    
}

async function consumirAPIAxios() {
    const res = await axios.get("http://localhost:3000/api/professores/")
    //imprima apenas os nomes dos professores!
    const nomes = res.data.map(
        ({nome}) => "Prof.: " + nome
    )
    console.log(nomes)
}

//consumirAPI()
consumirAPIAxios()