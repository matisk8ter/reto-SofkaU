//@ts-check
import { Question } from "./Question.js";
const gta = document.getElementById("finalizar")
export class Quiz {
    questionIndex = 0;
    score = 0;
    constructor(questions) {
        this.questions = questions;
    }
    obtenerQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    isEnded() {
        return this.questions.length === this.questionIndex || this.questionIndex === -1;
    }
    finalizar() {
        this.questions.length === this.questionIndex - 1
    }

    validacion(respuesta) {
        console.log(respuesta);
        if (this.obtenerQuestionIndex().respuestaCorrecta(respuesta)) {
            this.questionIndex++;
            switch (this.questionIndex) {
                case -1: this.score = 0
                    break;
                case 1: this.score += 100;
                    break;
                case 2: this.score += 200;
                    break;
                case 3: this.score += 300;
                    break;
                case 4: this.score += 400;
                    break;
                case 5: this.score += 500;
                    break;
            }
        } else {
            this.questionIndex = -1;
            swal("La respuesta no es correcta, Fin del juego!");
        }   
    }
} 