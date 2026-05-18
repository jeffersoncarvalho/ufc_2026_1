import CompD from "./CompD"
import { useContext } from "react"
import { TemaContext } from "./Contexts"

const CompC = () => {
    const tema = useContext(TemaContext)
    return (
        <div>
            <h1>Sou o Componente C</h1>
            <h4>O tema é: {tema}</h4>
            <CompD/>
        </div>
    )
}

export default CompC