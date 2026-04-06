import "./SistemaVotacao.css"

const CidadeCard = ({nome, imagem, votos}) => {
    return (
        <div className="card">
            <div className="nome">
                <h2>
                    {nome}
                </h2>
            </div>
            <div className="imagem">
                <img 
                    src={imagem}
                    width="250px"
                    alt={nome}
                />
            </div>
            <div className="votos">
                <h3>Votos: {votos}</h3>
            </div>
        </div>
    )
}

export default CidadeCard