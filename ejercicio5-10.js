let numeros1 = [];
let numeros2 = [];
let nTemp=0;
let resultado = []

for (i=0; i<10; i++){
    nTemp = +prompt(`Ingrese un número en la posición ${i+1} de 10 para el primer arreglo`);
    numeros1.push(nTemp);
}

for (i=0; i<10; i++){
    nTemp = +prompt(`Ingrese un número en la posición ${i+1} de 10 para el segundo arreglo`);
    numeros2.push(nTemp);
}

for (i=0; i<10; i++){
    resultado[i]= numeros1[i] + numeros2[i];
}

console.log(`El arreglo final contiene los siguientes números: `);
console.log(`${resultado}`);

