
export class Jugador {

    constructor(nombre, score) {
        this.nombre = nombre;
        this.score = score
    }

    guardarDatos() {

        if (localStorage.getItem('objJugador') === null) {
            const arrInit = [];
            localStorage.setItem('objJugador', JSON.stringify(arrInit));
        }
        let arrPuntos = JSON.parse(localStorage.getItem('objJugador'));
        const player = {
            nombre: this.nombre,
            score: this.score
        }
        arrPuntos.push(player);
        localStorage.setItem('objJugador', JSON.stringify(arrPuntos));
    }

    

}