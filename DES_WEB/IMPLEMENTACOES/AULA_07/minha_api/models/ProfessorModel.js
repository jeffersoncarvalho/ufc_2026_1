class ProfessorModel {
    
    constructor(id, nome, imagem, coordenador = false) {

        //propriedades úteis ao usuário final
        this.id = id
        this.nome = nome
        this.imagem = imagem
        this.coordenador = coordenador

        //propriedades úteis ao sistema interno
        this.ativo = true
    }

}

module.exports = ProfessorModel