import ProfessorDAO from "../dao/ProfessorDAO";

const ProfessorList = () => {
    return (
        <div>
            <h1>Lista de Professores</h1>
            <button onClick={() => ProfessorDAO.getAll()}>Carregar Professores!</button>
        </div>
    )
}
export default ProfessorList