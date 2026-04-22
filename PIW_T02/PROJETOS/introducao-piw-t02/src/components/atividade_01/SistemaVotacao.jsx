import "./SistemaVotacao.css"
import cidadesData from "./cidades_dados"

import CidadeCard from "./CidadeCard"

import { useEffect, useState } from "react"

const SistemaVotacao = () => {

    const [cidades, setCidades] = useState(cidadesData)
    const [desabilitar, setDesabilitar] = useState(false)

    useEffect(
        () => {
            
            for( const cidade of cidades) {
               if(cidade.votos >= 10) {
                setDesabilitar((desabilitarAnterior) => !desabilitarAnterior)
                alert(`A cidade mais votada foi ${cidade.nome}`)
               }
            }

        }
        ,
        [cidades]
    )
    

    function votaCidadeV2(nome) {
        const novaCidades = 
        cidades.map(
            (cidade) => {
                if( cidade.nome == nome) {
                    return ({
                        ...cidade, votos: cidade.votos + 1
                    })
                } else return cidade
            }
        )
        setCidades(novaCidades)
    }

    /*function votaCidade(nome) {
        
        for (let index = 0; index < cidades.length; index++){
            if(cidades[index].nome == nome) {
                cidades[index].votos = cidades[index].votos + 1
                console.log("Nome: " + nome + " Votos: " + cidades[index].votos)
                break
            }
        }
    }*/

    return (
        <div className="container">
            <div className="cabecalho">
                <h1>Votação de Cidades</h1>
            </div>
            <div className="cidades">
                {
                    cidades.map(
                        (cidade) => <CidadeCard 
                            titulo={cidade.nome}
                            imagem={cidade.imagem}
                            votos={cidade.votos}
                        />
                    )
                }
            </div>
            <div className="botoes">
                {
                    cidades.map(
                        (cidade) => 
                        <button
                            onClick={() => votaCidadeV2(cidade.nome)}
                            disabled = {desabilitar}
                        >
                            {cidade.nome}
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default SistemaVotacao