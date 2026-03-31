/* Implemente um componente com a seguinte interface:

Contador: 0

[CONTAR] 

Ao clicar no botão [CONTAR], o Contador é atualizado em +1
 */

import { useState, useEffect } from "react"

const MeuContador = () => {

    const [contador, setContador] = useState(0)
    const [paridade, setParidade] = useState(true)

    function mudarParidade() {
        setParidade(
            (paridadeAnterior) => !paridadeAnterior
        )
    }

    useEffect(
        () => {
            //console.log("DISPAROU!")
            /*if (contador % 2 === 0) setParidade(true)
            else setParidade(false)*/
            mudarParidade()
        },
        [contador]
    )

    
    
    function contar() {
        setContador(
           (contadorAnterior) => contadorAnterior + 1 
        )
    }

    function reset() {
        setContador(0)
    }

    return (
        <>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h1 style={{paddingTop:"8rem"}}>CONTADOR: {contador}</h1>
                <h3>PAR ou ÍMPAR: {paridade+""}</h3>
                <div>
                    <button onClick={contar}>CONTAR</button>
                </div>
                <div style={{paddingTop:"1rem"}}>
                    <button onClick={reset}>RESET</button>
                </div>
            </div>
        </>
    )
}

export default MeuContador