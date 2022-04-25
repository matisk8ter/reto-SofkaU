// @ts-nocheck
// import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { arregloRandom } from "./data/questions.js"
import { Jugador } from "./models/jugador.js";



const renderPage = (quiz, ui) => {

    if (quiz.isEnded()) {
        ui.mostrarScore(quiz.score);
        const scoreP = quiz.score;
        if (quiz.score > 0) {
            const nombre = prompt();
            const datosJugador = new Jugador(nombre, scoreP);
            datosJugador.guardarDatos();
            ui.mostrarTabla();
        }
    } else {
        ui.mostrarPregunta(quiz.obtenerQuestionIndex().pregunta);
        ui.mostrarOpciones(quiz.obtenerQuestionIndex().opciones, (currentChoice) => {
            quiz.validacion(currentChoice);
            renderPage(quiz, ui);
        });

    }
};
function main() {
    const dataRandom = arregloRandom();
    const quiz = new Quiz(dataRandom);
    const ui = new UI();
    renderPage(quiz, ui);

}

main();




