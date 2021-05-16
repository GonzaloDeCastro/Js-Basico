/*
For
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al
final mostrar una única alerta con la cadena completa.
*/

var sentence = '', Mascotas = ["Perro", "Gato", "Loro", "Tortuga", "Pez"];



for ( i = 0; i < Mascotas.length; i++ ){

    sentence = sentence + Mascotas[i];
}

console.log(sentence);