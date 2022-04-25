import { Jugador } from "../models/jugador.js";
import { Question } from "../models/Question.js";
import { data } from "./data.js";


export const questions = data.map(
    (pregunta) =>
        new Question(pregunta.categoria, pregunta.dificultad, pregunta.pregunta, pregunta.opciones, pregunta.correcta)
);


const nivel0 = questions.filter(pregunta => pregunta.dificultad === "principiante");
const nivel1 = questions.filter(pregunta => pregunta.dificultad === "facil");
const nivel2 = questions.filter(pregunta => pregunta.dificultad === "dificil");
const nivel3 = questions.filter(pregunta => pregunta.dificultad === "avanzado");
const nivel4 = questions.filter(pregunta => pregunta.dificultad === "experto");

let arrPreguntas = [];

export const arregloRandom = function completarArreglo() {
    arrPreguntas.push(nivel0[Math.floor(Math.random() * 5)]);
    arrPreguntas.push(nivel1[Math.floor(Math.random() * 5)]);
    arrPreguntas.push(nivel2[Math.floor(Math.random() * 5)]);
    arrPreguntas.push(nivel3[Math.floor(Math.random() * 5)]);
    arrPreguntas.push(nivel4[Math.floor(Math.random() * 5)]);
    return arrPreguntas;
}