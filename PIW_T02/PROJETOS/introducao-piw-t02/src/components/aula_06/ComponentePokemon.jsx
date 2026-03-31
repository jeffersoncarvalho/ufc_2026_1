import { useEffect, useState } from "react"

function ComponentePokemon() {

    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")

    useEffect(
        () => {
            
            fetch("https://pokeapi.co/api/v2/pokemon/25")
            .then(
                (resposta) => {
                    return resposta.json()
                }
            )
            .then(
                (dados) => {
                    console.log(dados.name)
                    //console.log(dados.sprites.front_default)
                    setNome(dados.name)
                    setImagem(dados.sprites.front_default)
                }
            )
            .catch(error => console.log(error))

        },
        []
    )

    return (
        <div>
            <h1>Pokemon: {nome[0].toUpperCase()+nome.slice(1)}</h1>
            <img src={imagem} width="100px" />
        </div>
    )
}

export default ComponentePokemon