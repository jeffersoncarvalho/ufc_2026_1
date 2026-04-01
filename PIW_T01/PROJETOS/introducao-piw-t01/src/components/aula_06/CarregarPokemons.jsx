import { useEffect, useState } from "react"

const CarregarPokemons = () => {

    const [nomePokemon, setNomePokemon] = useState("")
    const [imagemPokemon, setImagemPokemon] = useState("")

    useEffect(
        () => {
            fetch("https://pokeapi.co/api/v2/pokemon/100")
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (dados) => {
                    console.log(dados.name)
                    setNomePokemon(dados.name)
                    setImagemPokemon(dados.sprites.front_default)
                }
            )
            .catch(error => console.log(error))
        },
        []
    )

    return (
        <div>
            <h1>Pokemon: </h1>
            <h3>{nomePokemon}</h3>
            <img src={imagemPokemon} width="200px" />
        </div>
    )
}

export default CarregarPokemons