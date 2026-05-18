async function consumirAPI() {

    try{
        const res = await fetch("http://localhost:3000/api/piwt01/professor")
        const dados = await res.json()
        console.log(dados)
    }catch(error) {
        console.log("Algo inesperado aconteceu!")
    }
}

consumirAPI()
console.log("Terminou")