/*
Funciones
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean
enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número
convertido a entero (redondeado).
*/


var resultado,mensaje;

function suma(a,b){
    if (a === parseInt(a)){      
        if(b === parseInt(b)){
            resultado = a + b;
            return mensaje = 'La sumatoria es ' + resultado;
        }
        else{
            resultado = a + Math.round(b);
            return  mensaje = 'Error en el segundo numero, corregimos y sumamos ' + resultado;
        }    
    }
    else if(b === parseInt(b)){
            resultado = Math.round(a) + b;
            return mensaje = 'Error en el primer numero, corregimos y sumamos '+ resultado;
        }
        else{
            resultado = Math.round(a) + Math.round(b);
            return mensaje = 'Error en ambos numeros, corregimos y sumamos ' + resultado;
        } 
    
}

console.log(suma(28.3,7.7));
