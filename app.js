let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log (intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;      
        limpiarCaja ();
    }   
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    if (listaNumerosSorteados.length == numeroMax) {
            asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
        } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        return numeroSecreto;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMax})`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}

function    reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de N°
    condicionesIniciales();
    //Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar N° de intentos
    intentos =1;
    //Desabilitar el botón de NG
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

