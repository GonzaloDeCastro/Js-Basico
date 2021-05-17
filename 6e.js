/*
Funciones
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función
suma probando que todo siga funcionando igual.
*/

var resultado;

function valida(a,b){ 
    if (typeof a === 'number' && typeof b === 'number'){
        return resultado = a + b;
    }
    else{
        return resultado = 'NaN';
    }
}

function suma(){
    return valida(3,5);
}


console.log(suma());