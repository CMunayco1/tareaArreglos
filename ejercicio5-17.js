let choferes = [
  {
    nombre: "Martín",
    horasTrabajadas: [8, 12, 3, 6, 10, 8],
    sueldoHora: 50,
    totalHorasSemana: 0,
    sueldoPagar: 0,
  },

  {
    nombre: "Patricio",
    horasTrabajadas: [4, 12, 8, 6, 4, 3],
    sueldoHora: 40,
    totalHorasSemana: 0,
    sueldoPagar: 0,
  },
  {
    nombre: "Tolentino",
    horasTrabajadas: [5, 8, 8, 8, 8, 8],
    sueldoHora: 45,
    totalHorasSemana: 0,
    sueldoPagar: 0,
  },
  {
    nombre: "John",
    horasTrabajadas: [7, 4, 0, 8, 11, 12],
    sueldoHora: 70,
    totalHorasSemana: 0,
    sueldoPagar: 0,
  },
  {
    nombre: "Oliver",
    horasTrabajadas: [6, 5, 8, 5, 8, 4],
    sueldoHora: 35,
    totalHorasSemana: 0,
    sueldoPagar: 0,
  },
];

// Calcule el total de horas trabajadas a la semana para cada trabajador
let sumaTemp = 0;
const totalHoras = () => {
  for (let i = 0; i < choferes.length; i++) {
    for (let j = 0; j < choferes[i].horasTrabajadas.length; j++) {
      sumaTemp += choferes[i].horasTrabajadas[j];
    }
    choferes[i].totalHorasSemana = sumaTemp;
    sumaTemp = 0;
    console.log(
      `El total de horas en la semana de ${choferes[i].nombre} es ${choferes[i].totalHorasSemana}`
    );
  }
  return "-------------------------------------------------------------------";
};
//-----------------------------------------------------------------------

//Calcule el sueldo semanal para cada uno de ellos
const sueldoSemanal = () => {
  for (let i = 0; i < choferes.length; i++) {
    choferes[i].sueldoPagar =
      choferes[i].sueldoHora * choferes[i].totalHorasSemana;
    console.log(
      `El total de sueldo de la semana de ${choferes[i].nombre} es S/${choferes[i].sueldoPagar}`
    );
  }
  return "-------------------------------------------------------------------";
};
//-----------------------------------------------------------------------

//Calcule el total que pagará la empresa
const totalPagar = () => {
  for (let i = 0; i < choferes.length; i++) {
    sumaTemp += choferes[i].sueldoPagar;
  }
  console.log(`El total a pagar por la empresa es S/${sumaTemp}`);
  return "-------------------------------------------------------------------";
};
//-----------------------------------------------------------------------

// Indique el nombre del trabajador que labora más horas el día lunes.
const horasLunes = () => {
  let mayorHorasLunes = 0;
  let nombreMayorHoras = 0;
  for (let i = 0; i < choferes.length; i++) {
    if (mayorHorasLunes < choferes[i].horasTrabajadas[0]) {
      mayorHorasLunes = choferes[i].horasTrabajadas[0];
      nombreMayorHoras = choferes[i].nombre;
    }
  }
  console.log(
    `El trabajador que labora más horas el día lunes es ${nombreMayorHoras}`
  );
  return "-------------------------------------------------------------------";
};
//-----------------------------------------------------------------------

console.log("*************************************************");
console.log(`   Reporte semanal de horas de trabajo y pagos`);
console.log("*************************************************");
console.log(totalHoras());
console.log(sueldoSemanal());
console.log(totalPagar());
console.log(horasLunes());
