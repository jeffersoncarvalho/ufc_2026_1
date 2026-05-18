import { useRef, useState } from "react"

const Contador = () => {
    let cont = 0
    const [contState, setContState] = useState(0)
    const contRef = useRef(0)
    function contarLet() {
        cont = cont + 1
        console.log(cont)
    }
    function contarState() {
        setContState((x) => x + 1)
    }
    function contarRef() {
        contRef.current = contRef.current + 1
        console.log(contRef.current)
    }
    return (
        <>
            <h2>Contador: {contState}</h2>
            <h3>Ref: {contRef.current}</h3>
            <button onClick={contarLet}>Contar!</button>
            <button onClick={contarState}>Contar State!</button>
            <button onClick={contarRef}>Contar Ref!</button>

        </>
    )
}

export default Contador