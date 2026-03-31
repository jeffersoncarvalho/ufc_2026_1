import { useState } from "react"

const MeuFormulario = () => {

    const [aluno, setAluno] = useState({
        nome:"",
        sobrenome:"",
        idade:18,
        universidade: "", //select
        curso:"dd", //radio button
        areas_interesse: {mat:false, alg:false} 
    })

    const onHandleInput = (evento) => {
        const {value, name} = evento.target
        setAluno(alunoAnterior => ({...alunoAnterior, [name]:value}))
    }

    const onHandleCheckbox = (evento) => {
        const {value, name, checked} = evento.target
        setAluno(
            (alunoAnterior) => ({
                ...alunoAnterior,
                [name]: {
                    ...alunoAnterior[name],
                    [value]: checked
                }
            })
        )
    }

    const onHandleSubmit = (evento) => {
        evento.preventDefault()
        alert(
            "Nome: " + aluno.nome + "\n" +
            "Sobrenome: " + aluno.sobrenome + "\n" +
            "Idade: " + aluno.idade + "\n" +
            "Curso: " + aluno.curso + "\n" +
            "Universidade:" + aluno.universidade + "\n" +
            "Áreas de Interesse: " + JSON.stringify(aluno.areas_interesse)
        )
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
                <form onSubmit={onHandleSubmit}>
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
                        <label>Idade: </label>
                        <input
                            type="number"
                            value={aluno.idade} 
                            name="idade"
                            onChange={onHandleInput}
                        />
                    </div>
                    <div>
                        <label>Universidade</label>
                        <select 
                            name="universidade"
                            onChange={onHandleInput}
                        >
                            <option value="ufc">Universidade Federal do Ceará</option>
                            <option value="uece">Universidade Estadual do Ceará</option>
                            <option value="ifce">Instituto Federal do Ceará</option>
                        </select>
                    </div>
                    <div>
                        <label>Curso:</label>
                        <br />
                        Design Digital:
                        <input 
                            type="radio"
                            name="curso"
                            value="dd"
                            onChange={onHandleInput}
                            checked={aluno.curso == "dd"} 
                        />
                        Engenharia de Software:
                        <input 
                            type="radio"
                            name="curso"
                            value="es" 
                            onChange={onHandleInput}
                            checked={aluno.curso == "es"} 
                        />
                    </div>
                    <div>
                        <label>Áreas de Interesse:</label>
                        <br />
                        Matemática:
                        <input 
                            type="checkbox"
                            name="areas_interesse"
                            value="mat"
                            onChange={onHandleCheckbox}
                        />
                        Algorítimo:
                        <input 
                            type="checkbox"
                            name="areas_interesse"
                            value="alg"
                            onChange={onHandleCheckbox}
                        />
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default MeuFormulario