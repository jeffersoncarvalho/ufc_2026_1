import "./SistemaVotacao.css"

import CidadeCard from "./CidadeCard"

const SistemaVotacao = () => {
    return (
        <>
        <CidadeCard 
            nome = "Fortaleza"
            imagem="https://t4.ftcdn.net/jpg/05/87/80/53/240_F_587805382_3hwST7qeAvdAH25NIBpnGqIRfMNwmCpY.jpg"
            votos = {5}
        />
        <CidadeCard 
            nome = "Fortaleza"
            imagem="https://t4.ftcdn.net/jpg/05/87/80/53/240_F_587805382_3hwST7qeAvdAH25NIBpnGqIRfMNwmCpY.jpg"
            votos = {5}
        />
        </>

        
    )
}

export default SistemaVotacao