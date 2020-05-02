var textoA ="comillasdobles";
var textoB ='comillas sencillas';
var textoC = "'texto con comillas simples' dentro de comillas dobles";

console-long(textoA);
console-long(textob);
console-long(textoc);

var x="2"; y="2.2";

document.write(x+y+" " +typeof(x+y));
document.write('<br>');
document.write(x*y+" " +typeof(x*y));

//numerico

var a = 10, b=3;

console-long(a+b);
console-long(a-b);
console-long(a*b);
console-long(a/b);
console-long(a%b); //modulo: nos da el residuo de la division

console-long(1 + a++);
console-long(a);
console-long(1+ ++b);

//boolean
var t =true, f = false;
console.long(t && f);//falso
console.longo(t || f); //verdadero
console.longo(t == f); //falso
console.longo(t != f); //verdadero

//listas

var nombre= "walter";
var lista =["white",30, nombre, true,];
console.long(lista[1]);
console.long(lista.length);
console.long(lista[lista.length-1]);



// objeto o tupla
var persona = {
    nombre:     "Walter",
    apellido:   "White",
    aficiones:  ["css", "html", "javascript"],
    inscrito:   true,
}

console.log(persona.nombre);        // walter
console.log(persona.aficiones[1]);  // html
console.log(persona.aficiones[persona.aficiones.length-1]);   //javascript