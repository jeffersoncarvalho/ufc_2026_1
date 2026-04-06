import "./SistemaVotacao.css"
import CidadeCard from "./CidadeCard"

const SistemaVotacao = () => {

    const cidades = [
        {
            nome: "Quixadá",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        {
            nome: "Quixadá",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        {
            nome: "Quixadá",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        {
            nome: "Quixadá",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        
    ]

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
        </div>
    )
}

export default SistemaVotacao