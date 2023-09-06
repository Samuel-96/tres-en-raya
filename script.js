//VARIABLES GLOBALES
const tablero = document.querySelectorAll(".cuadricula"); //en tablero guardamos el array de cuadriculas
const imgX = "url(./resources/x.png)";
const imgO = "url(./resources/o.png";
const infoTurno = document.querySelector(".info-turno");
let finPartida = false;


//CONSTRUCTORES
function Tablero(){

    //const tablero = document.querySelectorAll(".cuadricula"); //en tablero guardamos el array de cuadriculas

    function comprobarEstado(){

        tablero.forEach(cuadricula => {
            switch(cuadricula.getAttribute("data-index")){
                case "0": 
            }
        })
    }

    return{tablero, comprobarEstado};
}

//function factory
const jugadorFactory = (nombre, marcador) => {
    return { nombre, marcador};
}

const jugador1 = jugadorFactory("Samuel", imgX);
const jugador2 = jugadorFactory("Emet-Selch", imgO);

let turno = "X";

tablero.forEach(cuadricula => {

    cuadricula.addEventListener("click", () =>{
    
        //si la cuadricula esta vacia
          if (!cuadricula.style.backgroundImage.includes("url(")) {
            //compruebo de quien es el turno
            if(turno === "O"){
                cuadricula.style.backgroundImage = jugador2.marcador;
                infoTurno.textContent = "Turno del jugador X";
                turno = "X";
            }
            else{
                cuadricula.style.backgroundImage = jugador1.marcador;
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

/*
function comprobarGanador() {
if (box[1] == 'X' && box[2] == 'X' && box[3] == 'X') {
game_won = true;
    }
if (box[4] == 'X' && box[5] == 'X' && box[6] == 'X') {
game_won = true;
    }
if (box[7] == 'X' && box[8] == 'X' && box[9] == 'X') {
game_won = true;
    }
*/




