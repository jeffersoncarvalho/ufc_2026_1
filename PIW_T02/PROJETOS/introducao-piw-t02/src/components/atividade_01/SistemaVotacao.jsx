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
            nome: "Quixeramobim",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        {
            nome: "Ibaretema",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        {
            nome: "Iguatu",
            imagem: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png",
            votos: 0
        },
        
    ]

    function votaCidade(nome) {
        let index = 0;
        for (index = 0; index < cidades.length; index++){
            if(cidades[index].nome == nome) {
                cidades[index].votos = cidades[index].votos + 1
                console.log("Nome: " + nome + " Votos: " + cidades[index].votos)
                break
            }
        }
    }

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
                            onClick={() => votaCidade(cidade.nome)}
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