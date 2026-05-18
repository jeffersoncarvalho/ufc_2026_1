import { useContext } from "react"
import { TemaContexto } from "./Context"


const CompD = () => {
    const tema = useContext(TemaContexto)
    return (
        <>
            <h1>Componente D</h1>
            <h3>O tema do site é: {tema}</h3>
        </>
    )
}
export default CompD