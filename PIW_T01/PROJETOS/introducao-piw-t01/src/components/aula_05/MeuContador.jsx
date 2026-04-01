import { useState, useEffect } from "react"

function MeuContador() {
    
    const [contador, setContador] = useState(0)
    const [paridade, setParidade] = useState(true)
    const [loading, setLoading] = useState(false)
    
    useEffect(
        () => {
            console.log("Efeito disparado!")
            if ( contador % 2 == 0) setParidade(true)
            else setParidade(false)

        },
        []
    )

    function modificarLoading() {
        setLoading(
            (loadingAnterior) => !loadingAnterior
        )
    }

    function testeParidade() {
        if (paridade == true) return "PAR"
        else return "ÍMPAR"
    }

    function contar() {
        setContador(contadorAnterior => contadorAnterior + 1)    
    }

    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                paddingTop: "4em"
            }}
        >
            <h1>CONTADOR: {contador}</h1>
            <h2>PARIDADE: {testeParidade()}</h2>
            <button onClick={contar}>
                CONTAR
            </button>
            <button onClick={modificarLoading} style={{marginTop:"1rem"}}>
                MODIFICAR LOADING
            </button>
        </div>
    )
}

export default MeuContador