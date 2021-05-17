/*
Funciones
c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero
si es un número entero.
*/

var resultado;

function validaentero(a){ 
    if ( a === parseInt(a)){
        return resultado = true;
    }
    else{
        return resultado = false;
    }
}



console.log(validaentero(2.9));
