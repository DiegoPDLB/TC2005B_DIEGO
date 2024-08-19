const fs = require('fs');

function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    const suma = arr.reduce((acc, num) => acc + num, 0);
    return suma / arr.length;
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40, 50];
console.log(`El promedio es: ${calcularPromedio(numeros)}`);


function escribirEnArchivo(texto, nombreArchivo) {
    fs.writeFile(nombreArchivo, texto, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado!');
    });
}

// Ejemplo de uso
escribirEnArchivo('Hola, este es un ejemplo de texto.', 'ejemplo.txt');


function calcularFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * calcularFactorial(n - 1);
}

// Ejemplo de uso
const numero = 5;
console.log(`El factorial de ${numero} es: ${calcularFactorial(numero)}`);
