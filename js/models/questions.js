export default class Question {
    constructor(id, description, options, correctResponse, points, multimedia, level) {
        this.id = id
        this.description = description  // pergunta
        this.options = options // as 4 opçoes de resposta
        this.correctResponse = correctResponse  // resposta correta
        this.points = points  // pontos de cada pergunta
        this.multimedia = multimedia // imagem ou video contidos na pergunta
        this.level = level
        
    }
}