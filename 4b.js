/*
If Else
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes
mensajes de alerta:
i) “Bebe” si la edad es menor a 2 años
ii) “Nino” si la edad es entre 2 y 12 años
iii) “Adolecente” si la edad es entre 13 y 19 años
iv) “Joven” si la edad está entre 20 y 30 años
v) “Adulto” entre 31 y 60 años
vi) “Adulto mayor” entre 61 y 75 años
vii) “Anciano” si es mayor a 75 años
*/




Age = Math.random() * 100;


if (Age < 2){

    console.log('Bebe');  
}
else if (Age >= 2 && Age <= 12 ){

    console.log('Nino');  

}else if (Age >= 13 && Age <= 19  ){

    console.log('Adolescente');  
}
else if (Age >= 20 && Age <= 30){

    console.log('Joven');  
}
else if ((Age >= 31 && Age <= 60 )){

    console.log('Adulto');  
}
else if (Age >= 61 && Age <= 75 ){

    console.log('Adulto mayor');  
}
else
{
    console.log('Anciano');  
}



console.log('Edad: ' + Age.toFixed());

