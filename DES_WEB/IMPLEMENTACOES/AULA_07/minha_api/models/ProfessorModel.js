class ProfessorModel {
    
    constructor(id, nome, imagem) {

        //propriedades úteis ao usuário final
        this.id = id
        this.nome = nome
        this.imagem = imagem

        //propriedades úteis ao sistema interno
        this.ativo = true
    }

}

module.exports = ProfessorModel