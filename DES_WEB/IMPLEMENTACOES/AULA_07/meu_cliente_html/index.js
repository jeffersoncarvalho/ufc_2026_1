function consumirVetor() {
    //console.log("TESTE")
    const professores = ["Fulano","Sicrano","Beltrano"]
    const listaProfessoresDiv = document.getElementById("lista-professores")
    //listaProfessoresDiv.innerHTML = "<h2>TESTE</h2>"
    let myHTML = ""
    professores.forEach(
        (professor) => {
            myHTML += `<h3>${professor}</h3>`
        }
    )
    listaProfessoresDiv.innerHTML = myHTML
}

function consumirAPIProfessor() {
    fetch("http://localhost:3000/api/professores/")
    .then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (data) => {
            //console.log(data[0].nome)
            montarListaDeProfessoresHTML(data)   
        }
    )
    .catch((error) => {console.log(error)})
    .finally(() => {console.log("Computação final.")})
}

function montarListaDeProfessoresHTML(professores) {
    const listaProfessoresDiv = document.getElementById("lista-professores")
    
    //let myHTML = ""
    professores.forEach(
       (professor) => {
            const professorCardDiv = document.createElement("div")
            if (professor.coordenador){
                professorCardDiv.classList.add("professor-card-coordenador")
            }else professorCardDiv.classList.add("professor-card")
            
            const header = `
                <h3>${professor.nome}</h3>
            `
            const img = `
                <img src="${professor.imagem}"
                     width="200px" 
                />
            `
            //myHTML += header + img
            professorCardDiv.innerHTML = header + img
            listaProfessoresDiv.appendChild(professorCardDiv)
       } 
    )
    //listaProfessoresDiv.innerHTML = myHTML
}

consumirAPIProfessor()
