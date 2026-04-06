import "./CidadeCard.css"

const CidadeCard = ({titulo, imagem, votos}) => {
    return (
        <div className="card">
            <div className="titulo">
                {titulo}
            </div>
            <div className="imagem">
                <img src={imagem} width={"100px"} alt={titulo} />
            </div>
            <div className="votos">
                Votos: {votos}
            </div>
        </div>
    )
}

export default CidadeCard