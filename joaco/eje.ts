import * as readlineSync from 'readline-sync'

let numBase= readlineSync.questionInt("Ingrese un numero(base): ");
let numExpo= readlineSync.questionInt("Ingrese un numero(exponente): ");
let resultado : number = 1;


if (numExpo > 0){
    resultadoExpo() }
     else  if(numExpo <0)
        console.log("El numero ingresado es negativo")
             else
                 console.log("Todo numero elevado ´0´ es " + resultado)
 
//Funcion para mostrar potencia                 

function resultadoExpo() {
  let i : number;
      for (i=1 ;i <= numExpo;i++){
          resultado=resultado *numBase ;
         }     
console.log("El resultado de " + numBase + " Elevado " + numExpo + " Es " + resultado);
} 