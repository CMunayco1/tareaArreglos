let nombres = [];
let edades = [];
let tempNombre = "";
let tempEdad = 0;
let edadMayor = 0;
let nombreMayor = "";

for (let i=0; edades.length < 5;i++) {
  tempNombre = prompt(`Ingrese el nombre del alumno/a: `);
  tempEdad = +prompt(`Ingrese la edad del alumno/a: `);
  nombres.push(tempNombre);
  edades.push(tempEdad);
}
tempEdad = 0;
for (let i = 0; i < edades.length; i++) {
  if (tempEdad < edades[i]) {
      tempEdad = edades[i];
      tempNombre = nombres[i];
    }
}

console.log(`La edad mayor es ${tempEdad} y la tiene el alumno/a ${tempNombre}`);
