/*
Funciones
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.
*/

var resultado;

function suma(a,b){ 
    if (typeof a === 'number' && typeof b === 'number'){
        return resultado = a + b;
    }
    else{
        return resultado = 'NaN';
    }
}

suma('5',3);

console.log(resultado);