import { useContext } from "react"
import { UsuarioLogadoContexto } from "./Context"

const CompC = () => {

    const usuarioLogado = useContext(UsuarioLogadoContexto)

    return (
        <>
            <h1>Componente C</h1>
            <h3>Usuario logado é: {usuarioLogado.ativo+""}</h3>
        </>
    )
}

export default CompC