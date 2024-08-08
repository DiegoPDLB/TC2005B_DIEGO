var numero = parseInt(prompt("Por favor, ingresa un número:"));

if (isNaN(numero)) {
    document.write("Por favor, ingresa un número válido.");
} else {
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
        for (var i = 1; i <= numero; i++) {
        var cuadrado = i * i;
        var cubo = i * i * i;
        
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }
    
    document.write("</table>");
}

var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;

var sumaCorrecta = num1 + num2;

var inicio = new Date();

var respuestaUsuario = parseInt(prompt("Por favor, ingresa el resultado de " + num1 + " + " + num2));

var fin = new Date();

var tiempoTranscurrido = (fin - inicio) / 1000; 

var mensajeResultado;
if (respuestaUsuario === sumaCorrecta) {
    mensajeResultado = "¡Correcto!";
} else {
    mensajeResultado = "Incorrecto :(";
}

document.write("<p>Resultado: " + mensajeResultado + "</p>");
document.write("<p>Tiempo transcurrido: " + tiempoTranscurrido + " segundos</p>");

function contador(numeros) {
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;
    
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos++;
        } else if (numeros[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    
    return {
        negativos: negativos,
        ceros: ceros,
        positivos: positivos
    };
}

function inverso(numero) {
    var numeroInvertido = numero.toString().split('').reverse().join('');
    return parseInt(numeroInvertido);
}

var numeros = [];
var cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

for (var i = 0; i < cantidadNumeros; i++) {
    var numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

var resultados = contador(numeros);

document.write("<p>Cantidad de números negativos: " + resultados.negativos + "</p>");
document.write("<p>Cantidad de 0's: " + resultados.ceros + "</p>");
document.write("<p>Cantidad de números mayores a 0: " + resultados.positivos + "</p>");

var numeroAInvertir = parseInt(prompt("Ingrese un número para invertir:"));

var resultadoInverso = inverso(numeroAInvertir);

document.write("<p>El número invertido es: " + resultadoInverso + "</p>");

function crearPersona() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));
    var estatura = parseFloat(prompt("Ingrese la estatura (en metros) de " + nombre + ":"));
    
    var persona = {
        nombre: nombre,
        edad: edad,
        estatura: estatura
    };
    
    return persona;
}

var cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));

var personas = [];

for (var i = 0; i < cantidadPersonas; i++) {
    var persona = crearPersona();
    personas.push(persona);
}

personas.sort(function(a, b) {
    return b.edad - a.edad;
});

document.write("Personas ordenadas por edad de mayor a menor:");
for (var i = 0; i < personas.length; i++) {
    document.write("<p>Nombre: " + personas[i].nombre + ", Edad: " + personas[i].edad + ", Estatura: " + personas[i].estatura + "m</p>");
}

