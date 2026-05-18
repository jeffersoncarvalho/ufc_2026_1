import CompB from "./CompB"
import { useState } from "react"

import { UsuarioLogadoContexto, TemaContexto } from "./Context"

const CompA = () => {

    const [usuario, setUsuario] = useState("Victor Belmont")

    return (
        <UsuarioLogadoContexto value={{user:usuario, ativo:true}}>
            <TemaContexto value="light">
                <>
                    <h1>Componente A</h1>
                    <CompB/>
                </>
            </TemaContexto>
        </UsuarioLogadoContexto>
    )
}

export default CompA