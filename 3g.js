/*
Arrays
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses = meses.slice(4,11);

console.log(meses);