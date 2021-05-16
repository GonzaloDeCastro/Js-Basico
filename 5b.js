/*
For
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
por cada palabra modificada.
*/
var  Mascotas;

Mascotas = ["perro", "gato", "loro", "tortuga", "pez"];

for ( i = 0; i < Mascotas.length; i++ ){

    console.log(Mascotas[i]);
    console.log('Comienza con Mayúscula ' + Mascotas[i].substring(0,1).toUpperCase() + Mascotas[i].substring(1).toLowerCase());
}