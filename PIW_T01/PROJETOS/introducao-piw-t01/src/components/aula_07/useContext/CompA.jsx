//useContext
import CompB from "./CompB"
import { useState} from "react"

import { UsuarioContext, TemaContext } from "./Contexts"

const CompA = () => {

    const [usuario, setUsuario] = useState("Ritcher Belmond")
    return (
        <UsuarioContext value={{usuarioLogado: usuario, ativo: true}}>
            <TemaContext value="dark">
                <div>
                    <h1>Sou o Componente A</h1>
                    <CompB/>
                </div>
            </TemaContext>
        </UsuarioContext>
    )
}
export default CompA