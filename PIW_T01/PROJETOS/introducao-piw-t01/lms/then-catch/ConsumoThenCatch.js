function consumirAPI() {

    fetch("http://localhost:3000/api/piwt01/professor")
    .then(
        (res) => 
            res.json()
        
    )
    .then(
        (dados) => {
            console.log(dados)
        }
    )
    .catch(error => console.log(error))
}

consumirAPI()
console.log("Terminou")