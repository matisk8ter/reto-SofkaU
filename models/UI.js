
export class UI {
    constructor() { }

    mostrarPregunta(pregunta) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerText = pregunta;
    }

    mostrarOpciones(opc, callback) {
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        for (let i = 0; i < opc.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(opc[i]));
            button.className = "button";
            button.innerText = opc[i];
            choicesContainer.append(button);
        }
    }
    mostrarScore(score) {
        const quizEndHTML = `
            <h1>Resultado</h1>
            <h2>Tu Score: ${score}</h2>
            <a href="index.html">Jugar</a>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }
    mostrarTabla() {

        let claveUser = JSON.parse(localStorage.getItem('objJugador'));
        let desocultar = document.getElementById("tabla");
        let mostrar = document.getElementById("contTabla");
        let arrOrdenado = claveUser.sort((a, b) => { 
            if (a.score > b.score){
                return -1;
            }else if(a.score < b.score){
                return 1;
            }else{
                return 0;
            }
        });
        desocultar.style = "display: inline-block";
        for (let i = 0; i <= arrOrdenado.length; i++) {
            let contentToHappend = `
                <li>Nombre: <span>${arrOrdenado[i].nombre}</span> ,Puntuación: <span>${arrOrdenado[i].score}</span></li>`;
            mostrar.innerHTML += contentToHappend;
        };
    };

}