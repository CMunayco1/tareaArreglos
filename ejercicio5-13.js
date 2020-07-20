let notas = [11, 12, 13, 08, 14, 10, 10, 11, 15, 16, 18, 17, 15, 15, 19];
let promedio = 0;
let suma=0;
let estudiantesTop=0;
console.log(notas.length);

for(i=0;i<notas.length;i++){
    suma += notas[i];
    promedio = suma/notas.length;
}

for(i=0; i<notas.length;i++){
    if(promedio<notas[i]){
        estudiantesTop++;
    }
}

console.log(`La nota promedio del grupo es ${promedio.toPrecision(4)}`);
console.log(`Son ${estudiantesTop} que superan la nota promedio`);
