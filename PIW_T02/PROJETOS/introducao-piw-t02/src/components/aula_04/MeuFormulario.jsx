import { useState } from "react"

const MeuFormulario = () => {

    const [aluno, setAluno] = useState({nome:"", sobrenome:""})

    const onHandleInput = (evento) => {
        const {value, name} = evento.target
        setAluno(alunoAnterior => ({...alunoAnterior, [name]:value}))
    }

    /*const onHandleInput = (evento) => {
        const {value, name} = evento.target
        setAluno(
            (alunoAnterior) => {
                return {...alunoAnterior, [name]:value}
            }
        )
    }*/

    /*const onHandleInput = (evento) => {
        const {value, name} = evento.target
        setAluno({...aluno, [name]:value})
    } */

    /*const onHandleNome = (evento) => {
        const {value, name} = evento.target
        //console.log(name)
        setAluno({...aluno, [name]:value})
    }

    const onHandleSobrenome = (evento) => {
        const {value, name} = evento.target
        //console.log(name)
        setAluno({...aluno, [name]:value})
    }*/

    return (
        <div className="container">
            <header>
                <h2>Inscrição do Aluno</h2>
            </header>
            <main>
                <div>
                    {JSON.stringify(aluno)}
                </div>
                <form>
                    <div>
                        <label>Nome: </label>
                        <input
                            type="text" 
                            value={aluno.nome}
                            name="nome"
                            onChange={onHandleInput}
                        />
                    </div>
                    <div>
                        <label>Sobrenome: </label>
                        <input
                            type="text"
                            value={aluno.sobrenome} 
                            name="sobrenome"
                            onChange={onHandleInput}
                        />
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default MeuFormulario