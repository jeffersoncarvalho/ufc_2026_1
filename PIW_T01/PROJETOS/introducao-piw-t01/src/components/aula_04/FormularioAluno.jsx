import { useState } from "react"

const FormularioAluno = () => {

    const [aluno, setAluno] = useState(
        {
            nome:"",
            sobrenome:"",
            idade:18,
            universidade:"", //select
            curso:"si", // radio button
            areas_interesse:{"mat":false,"alg":false,"des": false } //check box
        }
    )

    /*const onHandleChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno(
            (alunoAnterior) => (
                {
                    ...alunoAnterior,
                    [event.target.name]:event.target.value
                }
            )
        )
    }*/

    //v3
    const onHandleInput = (event) => {
        const {name,value} = event.target
        setAluno({...aluno, [name]:value})
    }

    const onHandleCheckBox = (event) => {
        const {value,checked} = event.target
        /*console.log(name)
        console.log(value)
        console.log(checked)*/
        setAluno({
            ...aluno,
            areas_interesse:{
                ...aluno.areas_interesse,
                [value]:checked
            }
        })
    }
    //v2
   /* const onHandleNome = (event) => {
        const {name,value} = event.target
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({...aluno, [name]:value})
    }

    const onHandleSurname = (event) => {
        const {name,value} = event.target
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({...aluno, [name]:value})

    }*/

    //v1
    /*const onHandleName = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({name:event.target.value, surname:aluno.surname})
    }

    const onHandleSurname = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setAluno({name:aluno.name, surname:event.target.value})

    }*/

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + aluno.nome + 
              "\n" + "Sobrenome: " + aluno.sobrenome + 
              "\n" + "Idade: " + aluno.idade +
              "\n" + "Universidade: " + aluno.universidade +
              "\n" + "Curso: " + aluno.curso + 
              "\n" + "Áreas de Interesse: " + JSON.stringify(aluno.areas_interesse)
            )
              
    }

    return (
        <>
            <h1>Formulário Aluno</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        id="nome"
                        type="text"
                        name="nome"
                        value = {aluno.nome}
                        placeholder="Insira o seu nome"
                        onChange={onHandleInput}
                    />
                </div>
                <div>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input
                        id="sobrenome" 
                        type="text"
                        name="sobrenome"
                        value={aluno.sobrenome}
                        placeholder="Entre com seu sobrenome"
                        onChange={onHandleInput}
                    />
                </div>
                <div>
                    <label htmlFor="idade">Idade:</label>
                    <input
                        id="idade" 
                        type="number"
                        name="idade"
                        value={aluno.idade}
                        onChange={onHandleInput}
                    />
                </div>
                <div>
                    <label htmlFor="universidade">Universidade:</label>
                    <select
                        id="universidade"
                        name="universidade"
                        value={aluno.universidade}
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
                    Design Digital
                    <input 
                        type="radio"
                        name="curso"
                        value="dd"
                        onChange={onHandleInput}
                        checked = {aluno.curso == "dd"}
                    />
                    Sistemas de Informação
                    <input 
                        type="radio"
                        name="curso"
                        value="si"
                        onChange={onHandleInput}
                        checked = {aluno.curso == "si"}
                    />
                    Engenharia de Software
                    <input 
                        type="radio"
                        name="curso"
                        value="es"
                        onChange={onHandleInput}
                        checked = {aluno.curso == "es"}
                    />
                </div>
                <div>
                    <label>Áreas de Interesse</label>
                    <br />
                    Matemática
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="mat" 
                        onChange={onHandleCheckBox}
                    />
                    Algorítimo
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="alg" 
                        onChange={onHandleCheckBox}

                    />
                    Desenvolvimento de Software
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="des"
                        onChange={onHandleCheckBox}
                    />
                </div>
                <div>
                    <button type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormularioAluno