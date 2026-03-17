import { useState } from "react"

const PokemonPages = () => {

    const spriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    
    const [id, setId] = useState(100)

    const addId = () => {
        setId((prevId) => prevId + 1)
    }

    const subId = () => {
        setId((prevId) => prevId - 1)
    }

    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pokemon Pages</a>
                </div>
            </nav>
            <main className="container">
                <h2>Navegador de Pokemons</h2>
                <div className="card" style={{width:300}}>
                    <img src={spriteURL + id + ".png"} className="card-img-top" alt="Pokemon" style={{width:250}}/>
                    <div className="card-body">
                        <h5 className="card-title">Nome do Pokemon</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque aliquid odit, sint ducimus amet omnis eaque expedita odio veritatis voluptatum vero blanditiis possimus earum laudantium, ut suscipit laboriosam cum.</p>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <button className="btn btn-primary" onClick={subId}>Diminuir</button>
                            <button className="btn btn-primary" onClick={addId}>Acrescentar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default PokemonPages