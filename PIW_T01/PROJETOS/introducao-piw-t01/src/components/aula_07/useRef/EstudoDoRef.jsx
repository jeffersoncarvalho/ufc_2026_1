import { useState, useRef } from "react"

const EstudoDoRef = () => {
    //solução 1
    let contadorLet = 0
    let contadorRef = useRef(0)

    //solucao 2
    const [contador, setContador] = useState(0)


    function contarLet() {
        contadorLet += 1
        console.log(contadorLet)
    }

    function contarState() {
        setContador(
            (contadorAnterior) => {
                return contadorAnterior + 1
            }
        )
    }

    function contarRef() {
        contadorRef.current = contadorRef.current + 1
        console.log(contadorRef.current)
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={contarState}>Contar!</button>
            <button onClick={contarLet}>Contar Let!</button>
            <button onClick={contarRef}>Contar Ref!</button>
        </div>
    )
}
export default EstudoDoRef