/*
If Else
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor
o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el
mensaje “Lower than 0,5”
*/

var numero_aleatorio

numero_aleatorio = Math.random();

if (numero_aleatorio > 0.5 ){
    console.log('Greater than 0,5');
}
else
{
    console.log('Lower than 0,5');
}

console.log(numero_aleatorio);