import { useContext } from "react"
import { UsuarioContext } from "./Contexts"

const CompD = () => {


    const user = useContext(UsuarioContext)
    return (
        <div>
            <h1>Sou o Componente D</h1>
            <h3>O usuário é {user.usuarioLogado}</h3>
            <h3>O ativo é {user.ativo+""}</h3>
        </div>
    )
}

export default CompD