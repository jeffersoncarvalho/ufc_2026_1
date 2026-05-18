import { MeuA as BtnSimples, MeuB as BtnComplexo, MeuA} from "./MuitosComponentes"

const UsandoComponentes = () => {
    return(
        <div>
            <BtnSimples cor="red" titulo="Alerta" acao={
                () => {
                    console.log("Btn Apertado!")
                }
            }/>
            <BtnComplexo />

        </div>
    )
}

export default UsandoComponentes