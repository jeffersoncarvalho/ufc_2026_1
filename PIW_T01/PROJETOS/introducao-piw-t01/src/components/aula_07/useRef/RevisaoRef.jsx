import { useRef, useState } from "react"

const RevisaoRef = () => {

    let contadorLet = 0
    const [contadorState, setContadorState] = useState(0)
    let contadorRef = useRef(0)

    function aumentarContadorRef() {
        contadorRef.current = contadorRef.current + 1
        console.log(contadorRef.current)
    }

    function aumentarContadorLet() {
        //contadorLet = contadorLet + 1
        //contadorLet ++
        contadorLet += 1
        console.log(`Contador Let ${contadorLet}`)
    }

    function aumentarContadorState() {
        //setContadorState(contadorState + 1)
        setContadorState(contadorAnterior => contadorAnterior + 1)
    }

    return (
        <div>
            <h1>Revisão Ref</h1>
            <h2>Contador Let: {contadorLet}</h2>
            <h2>Contador State: {contadorState}</h2>
            <h2>Cotnador Ref: {contadorRef.current}</h2>
            <button onClick={aumentarContadorLet}>
                Aumentar Contador Let
            </button>
            <br />
            <button onClick={aumentarContadorState}>
                Aumentar Contador State
            </button>
            <br />
            <button onClick={aumentarContadorRef}>
                Aumentar Contador Ref
            </button>
        </div>
    )
}

export default RevisaoRef