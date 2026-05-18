function minhaPromessa() {

    const promessaSimples = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                     //fez uma grande computação
                    const res = 5
                    if (res % 2 == 0) resolve({"status":"ok","res":res})
                    else reject({"status":"nok","res":res})
                },
                2000
            )
           
        }
    )

    return promessaSimples
}

function consumirPromessaThenCatch() {

    minhaPromessa()
    .then(
        (resposta) => {
            console.log("Deu certo: " + JSON.stringify(resposta))
        }
    ) //quando dá certo! Resolvida!
    .catch(
        (rejeitado) => {
            console.log("Deu errado: " + JSON.stringify(rejeitado))
        }
    ) //quando dá errado! Rejeitada!
    .finally(
        () => {
            console.log("Computação executada independetemente do resultado.")
        }
    ) // sempre é executado
}

async function consumirPromessaAsyncAwait() {
    try{
        const resposta = await minhaPromessa()
        console.log(resposta)
    }catch(error) {
        console.log(error)
    }finally{
        console.log("Finalizando de qualquer jeito.")
    }
    
}

//consumirPromessaThenCatch()
consumirPromessaAsyncAwait()
console.log("FINALIZOU")