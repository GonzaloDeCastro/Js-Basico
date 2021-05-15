/*
Strings
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que
tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar
indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var variable1, variable2, variable3;

variable1 = "eLeCTRoenNceFaloGrafISTa cONTRARREVOluciONArio";

variable2 = variable1.substring(0,1).toUpperCase() + variable1.substring(1, variable1.indexOf(' ') ).toLowerCase();

variable3 = variable1.substring(variable1.indexOf(' '),variable1.indexOf(' ')+2).toUpperCase() + variable1.substring(variable1.indexOf(' ')+2 ).toLowerCase();



console.log(variable2 + variable3);

