/*
Strings
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
variable (utilizar substring, toUpperCase, toLowerCase y el operador +)..
*/

var palabra1, palabra2;

palabra1 = "rEUTILIZANDO LA ULTIMA ORACIoN";

palabra2 = palabra1.substring(0,1).toUpperCase() + palabra1.substring(1).toLowerCase();

console.log(palabra2);