import "./SistemaVotacao.css"
import cidadesDados from "./cidades_dados"
import CidadeCard from "./CidadeCard"
import { useState, useEffect} from "react"

const SistemaVotacao = () => {
    const [cidades, setCidades] = useState(cidadesDados)
    const [desabilitar, setDesabilitar] = useState(false)

    useEffect(
        () => {
            for(let cidade of cidades) {
                if(cidade.votos >=10){
                    setDesabilitar(true)
                    alert(`Cidade ${cidade.nome} venceu!`)
                }
            }
        },
        [cidades]
    )

   

    function votarCidadeV2(nome) {
       const novaCidades = cidades.map(
        (cidade) => {
            if(cidade.nome == nome) {
                return ({
                    ...cidade,
                    votos: cidade.votos + 1
                })
            }else {
                return cidade
            }    
        }
       )
       setCidades(novaCidades)
    }

    /*function votarCidade(nome) {
        //alert("Votando na cidade " + nome)
        for(let i=0;i<cidades.length;i++){
            if(nome == cidades[i].nome){
                cidades[i].votos = cidades[i].votos + 1
                console.log("Nome: " + nome + " Votos: " + cidades[i].votos)
                break
             }
        }

    }*/

    return (
        <div>
            <div>
                <h1>Votação de Cidades</h1>
            </div>
            <div>
                {
                    cidades.map(
                        (cidade) => <CidadeCard 

                            nome = {cidade.nome}
                            imagem={cidade.imagem}
                            votos={cidade.votos}
                        /> 
                    )
                }
            </div>
            <div>
                {
                    cidades.map(
                        (cidade) => <button 
                            disabled = {desabilitar}
                            onClick={() => votarCidadeV2(cidade.nome)}>
                            {cidade.nome}
                        </button> 
                    )
                }
            </div>
        </div>
    )
}

export default SistemaVotacao