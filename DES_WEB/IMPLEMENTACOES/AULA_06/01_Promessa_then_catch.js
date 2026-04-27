const minhaPromessa = new Promise(
    (resolvida, rejeitada) => {
        //aconteceu alguma comunicação externa...
        const res = 4
        if ( res % 2 == 0){
            resolvida(`DEU CERTO, RESPOSTA: ${res}`)
        }else {
            rejeitada(`NÃO DEU CERTO. RESPOSTA: ${res}`)
        }

    }
)

const minhaPromessaComTimeOut = new Promise(
    (resolvido, rejeitado) => {
        setTimeout(
            () => {
                const res = 1
                if(res % 2 ==0) resolvido(`DEU CERTO, RESPOSTA: ${res}`)
                else rejeitado(`NÃO DEU CERTO. RESPOSTA: ${res}`)
            },
            3000
        )
    } //fim resolvido, rejeitado
) // fim da promessa

function consumirGET_API(url) {
    //processamento com axios ou fetch
    //return minhaPromessa
    return minhaPromessaComTimeOut
}

//processamento no FRONT!
function processarConsumoAPI() {
    consumirGET_API("http://localhost:8080/get")
    .then(
        (res) => {
            console.log(res)
        }
    )
    .catch(
        (error) => {
            console.log(error)
            console.log("FINALIZOU O ERROR!")
        }
    )
    .finally(() => {
        console.log("Finalizando alguma computação.")
    })
}

//FRONT-END
console.log("Iniciou o programa!")
processarConsumoAPI()
console.log("Finalizou o programa!")