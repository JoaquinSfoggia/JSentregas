"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numBase = readlineSync.questionInt("Ingrese un numero(base): ");
var numExpo = readlineSync.questionInt("Ingrese un numero(exponente): ");
var resultado = 1;
if (numExpo > 0) {
    resultadoExpo();
}
else if (numExpo < 0)
    console.log("El numero ingresado es negativo");
else
    console.log("Todo numero elevado ´0´ es " + resultado);
//Funcion para mostrar potencia                 
function resultadoExpo() {
    var i;
    for (i = 1; i <= numExpo; i++) {
        resultado = resultado * numBase;
    }
    console.log("El resultado de " + numBase + " Elevado " + numExpo + " Es " + resultado);
}
