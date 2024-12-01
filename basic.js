//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5")


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let animal="cat"
console.log(animal)

let number= 13
console.log(number)

let boolean= true
console.log(boolean)

let alone= null
console.log(alone)

let lost
console.log(lost)

let la_gordis = {
    animal:"gata", 
    color: "amarilla",
    peso:6.2,
    come_mucho: true
}
console.log(la_gordis)

let conjunto= [
    "cat",
    13,
    boolean,
    la_gordis
]
console.log(conjunto)



//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
 const postres= [
    "helado",
    "tarta",
    "pastel"
 ]
console.log(postres)


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder= {
    nombre:"lorenzo",
    edad:9
}
console.log(coder)

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí
 
console.log(typeof animal)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof alone)
console.log(typeof lost)
console.log(typeof la_gordis)
console.log(typeof conjunto)

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let addition = 2+1
console.log(addition)

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let subtraction = 2-1
console.log(subtraction)


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let multiplication = 2*1
console.log(multiplication)


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let division= 2/1
console.log(division)


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let one = 1
let two = 2
let is_different= one==two
console.log(is_different)


// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let other= one!=two
console.log(other)


//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2 = 20

let comparision = num1!=num2 //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparision)


//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result =   num3 === num3AsString //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 14: completa el ejercicio

let result2 = num3 !== num3AsString //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let nam = "leidy"
let lastname = "ocoro"
let complete = nam + " " + lastname
console.log(complete)


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 &&  b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)
