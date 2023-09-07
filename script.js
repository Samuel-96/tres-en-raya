//VARIABLES GLOBALES
const tablero = document.querySelectorAll(".cuadricula"); //en tablero guardamos el array de cuadriculas
const imgX = "url(./resources/x.png)";
const imgO = "url(./resources/o.png";
const infoTurno = document.querySelector(".info-turno");
let finPartida = false;
let reiniciar = false;

//constructor
function Tablero(){

    const tablero = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    function llenarTablero(posicion, marcador){
        tablero.splice(posicion, 1, marcador);
        console.log(tablero[0] + tablero[1] + tablero[2] + "\n" + tablero[3] + tablero[4] + tablero[5] + "\n" + tablero[6] + tablero[7] + tablero[8] + "\n");
    }

    function limpiarTablero(){
        tablero.forEach((cuadricula, index) => {
            tablero[index] = "-";
        })
    }

    return{tablero, llenarTablero, limpiarTablero};
}

//function factory
const jugadorFactory = (nombre, marcador) => {
    return { nombre, marcador};
}

const jugador1 = jugadorFactory("Samuel", imgX);
const jugador2 = jugadorFactory("Emet-Selch", imgO);
const gameboard = new Tablero();

function borrarTablero(){
    tablero.forEach(cuadricula => {
        cuadricula.style.backgroundImage = "none";
        gameboard.limpiarTablero();
    })
}
const botonReset = document.querySelector(".reset-button");
botonReset.addEventListener("click", () =>{
    borrarTablero();
})

let turno = "X";

tablero.forEach(cuadricula => {

    cuadricula.addEventListener("click", () =>{
    
        //si la cuadricula esta vacia
          if (!cuadricula.style.backgroundImage.includes("url(")) {
            //compruebo de quien es el turno
            if(turno === "O"){
                cuadricula.style.backgroundImage = jugador2.marcador;
                gameboard.llenarTablero(cuadricula.getAttribute("data-index"),"O");
                comprobarGanador();
                //cambio de turno
                if (reiniciar) {
                    infoTurno.textContent = "FIN DE LA PARTIDA";
                
                    
                    setTimeout(() => {
                        borrarTablero();
                    }, 1300); 
                    reiniciar = false;
                    return;
                }
                infoTurno.textContent = "Turno del jugador X";
                turno = "X";
            }
            else{
                cuadricula.style.backgroundImage = jugador1.marcador;
                gameboard.llenarTablero(cuadricula.getAttribute("data-index"),"X");
                comprobarGanador();
                //cambio de turno
                if (reiniciar) {
                    infoTurno.textContent = "FIN DE LA PARTIDA";
                
                    
                    setTimeout(() => {
                        borrarTablero();
                    }, 1300); 
                    reiniciar = false;
                    return;
                }
                infoTurno.textContent = "Turno del jugador O";
                turno = "O";
            }
                    
        }
        
        //si la casilla tiene marcador
        else {
                console.log("Ya hay una imagen de fondo");
                return;
        }

    });
})


function comprobarGanador() {
    //GANADOR x COMBINACIONES

    //combinaciones horizontales
    if (gameboard.tablero[0] == 'X' && gameboard.tablero[1] == 'X' && gameboard.tablero[2] == 'X') {
        finPartida = true;
    }
    if (gameboard.tablero[3] == 'X' && gameboard.tablero[4] == 'X' && gameboard.tablero[5] == 'X') {
        finPartida = true;
    }
    if (gameboard.tablero[6] == 'X' && gameboard.tablero[7] == 'X' && gameboard.tablero[8] == 'X') {
        finPartida = true;
    }
    //las combinaciones diagonales
    if (gameboard.tablero[0] == 'X' && gameboard.tablero[4] == 'X' && gameboard.tablero[8] == 'X') {
        finPartida = true;
    }
    if (gameboard.tablero[2] == 'X' && gameboard.tablero[4] == 'X' && gameboard.tablero[6] == 'X') {
        finPartida = true;
    }
    //las combinaciones verticales
    if (gameboard.tablero[0] == 'X' && gameboard.tablero[3] == 'X' && gameboard.tablero[6] == 'X') {
        finPartida = true;
    }
    if (gameboard.tablero[1] == 'X' && gameboard.tablero[4] == 'X' && gameboard.tablero[7] == 'X') {
        finPartida = true;
    }
    if (gameboard.tablero[2] == 'O' && gameboard.tablero[5] == 'O' && gameboard.tablero[8] == 'O') {
        finPartida = true;
    }

    //GANADOR O COMBINACIONES

    //combinaciones horizontales
    if (gameboard.tablero[0] == 'O' && gameboard.tablero[1] == 'O' && gameboard.tablero[2] == 'O') {
        finPartida = true;
    }
    if (gameboard.tablero[3] == 'O' && gameboard.tablero[4] == 'O' && gameboard.tablero[5] == 'O') {
        finPartida = true;
    }
    if (gameboard.tablero[6] == 'O' && gameboard.tablero[7] == 'O' && gameboard.tablero[8] == 'O') {
        finPartida = true;
    }
    //las combinaciones diagonales
    if (gameboard.tablero[0] == 'O' && gameboard.tablero[4] == 'O' && gameboard.tablero[8] == 'O') {
        finPartida = true;
    }
    if (gameboard.tablero[2] == 'O' && gameboard.tablero[4] == 'O' && gameboard.tablero[6] == 'O') {
        finPartida = true;
    }
    //las combinaciones verticales
    if (gameboard.tablero[0] == 'O' && gameboard.tablero[3] == 'O' && gameboard.tablero[6] == 'O') {
        finPartida = true;
    }
    if (gameboard.tablero[1] == 'O' && gameboard.tablero[4] == 'O' && gameboard.tablero[7] == 'O') {
        finPartida = true;
    }
    if (gameboard.tablero[2] == 'O' && gameboard.tablero[5] == 'O' && gameboard.tablero[8] == 'O') {
        finPartida = true;
    }

    if(finPartida){
        reiniciar = true;
    }
    finPartida = false;
}







