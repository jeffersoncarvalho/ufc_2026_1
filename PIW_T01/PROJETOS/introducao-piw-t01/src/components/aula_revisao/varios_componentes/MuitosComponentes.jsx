function MeuA({cor,titulo,acao}) {

    
    return (
        <div>
            <h1>Meu A</h1>
            <h1>
                {cor}
            </h1>
            <button onClick={acao}>
                {titulo}
            </button>
        </div>
    )
}

function MeuB() {
    return (
        <div>
            <h1>Meu B</h1>
        </div>
    )
}

function MeuC() {
    return (
        <div>
            <h1>Meu C</h1>
        </div>
    )
}

export {MeuA, MeuB, MeuC}