
let resultado = 0;

function multiplicar(primero,segundo){
    resultado = primero * segundo
}

function conversor(){
    let valorInicial = prompt("Ingrese valor en pesos")
    while (valorInicial == ""){
        alert("El valor ingresado es incorrecto, por favor indique un valor numerico" )
        valorInicial = prompt("Ingrese nuevamente el valor en pesos")
    }

    alert("El valor ingresado es $" + valorInicial)

    let tipoMoneda = prompt("Indique el tipo de moneda, pudiendo ser dolar o euro")

    alert("El tipo de moneda seleccionado es " + tipoMoneda)

    switch(tipoMoneda){
        case "dolar":
            multiplicar(valorInicial,291)
            alert("$"+ valorInicial + " equivalen a " + resultado + " dolares")
            break;
        case "euro":
            multiplicar(valorInicial,293)
            alert("$"+ valorInicial + " equivalen a " + resultado + " euros")
            break;
    }
}

    
conversor();
