import * as readlineSync from 'readline-sync'
let i :number,nmrMayor :number
let arrMeses :number[] = new Array (12) ;
arrMeses[0] = 4
arrMeses[1] = 7
arrMeses[2] = 9
arrMeses[3] = 3
arrMeses[4] = 1
arrMeses[5] = 45
arrMeses[6] = 67
arrMeses[7] = 23
arrMeses[8] = 29
arrMeses[9] = 78
arrMeses[10] = 11
arrMeses[11] = 16
//Declaro valor de variable
nmrMayor = arrMeses[0]

//For para recorrer el numero mayor
for (i=1 ;i< 12 ;i++){
    if (arrMeses[i]>nmrMayor){
         nmrMayor =arrMeses[i];
        } 
                             }
//Muestro el resultado
console.log( "el mayor es " + nmrMayor);
parImpar();

//Funcion par impar
function parImpar(){
   if (nmrMayor % 2 == 0) {  
        console.log("El numero mayor es par  :  " + nmrMayor);
                          }
     else{
        console.log("El numero es impar  :   " + nmrMayor)
         }
                          }
 
