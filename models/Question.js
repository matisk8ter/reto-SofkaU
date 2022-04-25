
export class Question {

    constructor(categoria,dificultad,pregunta, opciones, correcta) {
        this.categoria = categoria;
        this.dificultad = dificultad;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.correcta = correcta;
    }
 
    respuestaCorrecta(opcion) {
        return opcion === this.correcta;
    }

    
}