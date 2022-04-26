// @ts-nocheck
// import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { arregloRandom } from "./data/questions.js"
import { Jugador } from "./models/jugador.js";



const renderPage = (quiz, ui) => {

    if (quiz.isEnded()) {
        ui.mostrarScore(quiz.score);
        let scoreP = quiz.score;
        if (quiz.score > 0) {
            let nombre = prompt();
            let datosJugador = new Jugador(nombre, scoreP);
            datosJugador.guardarDatos();
            ui.mostrarTabla();
        }
    } else {
        ui.mostrarPregunta(quiz.obtenerQuestionIndex().pregunta);
        ui.mostrarOpciones(quiz.obtenerQuestionIndex().opciones, (currentChoice) => {
            quiz.validacion(currentChoice);
            renderPage(quiz, ui);
        });
        ui.puntos(quiz.score);
        ui.mostrarNivel(quiz.questionIndex);

    }
};

document.getElementById("salir").addEventListener("click", () => {
    let puntosActuales = document.getElementById("scoreActual").innerHTML;
    let score = parseInt(puntosActuales);
    if (puntosActuales > 0) {
        let nombre = prompt("coloque su nombre");
        let datosJugador = new Jugador(nombre, puntosActuales);
        datosJugador.guardarDatos();
        const ui = new UI();
        ui.mostrarScore(score);
        ui.mostrarTabla(); 
    }
});

function main() {
    const dataRandom = arregloRandom();
    const quiz = new Quiz(dataRandom);
    const ui = new UI();
    renderPage(quiz, ui);
}

main();




