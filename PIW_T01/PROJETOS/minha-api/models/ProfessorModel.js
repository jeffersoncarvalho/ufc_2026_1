// a classe que representa a entidade de um Professor
class ProfessorModel {
    constructor(id, nome, imagem){
        this.id = id
        this.nome = nome
        this.imagem = imagem

        this.dataDeCriacao = new Date()
        this.status = "ATIVADO"
    }
}
//exports default ProfessorModel
module.exports = ProfessorModel