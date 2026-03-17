import PromptSync from "prompt-sync";

let prompt = PromptSync();
let CantidadAlumno = parseInt(prompt("ingrese la cantidad de alumno:"));
let i = 0;
let Totalalumno = [];
let Nota_alumno = [];
let promedioNota = 0;
let totalnota = 0;

while (i != CantidadAlumno) {
  let alumno = [];
  alumno.push(prompt("Ingrese el Nombre del alumno: "));
  alumno.push(parseInt(prompt("ingrese la Edad del alumno: ")));
  alumno.push(parseInt(prompt("ingrese la Nota del alumno: ")));
  Totalalumno.push(alumno);
  Nota_alumno.push(Totalalumno[i][2]);
  totalnota = totalnota + alumno[2];

  i++;
}
Nota_alumno.sort((a, b) => b - a);
promedioNota = totalnota / CantidadAlumno;
console.log("Alumno:nombre,edad,nota", Totalalumno);
console.log("notas de mayor a menor: ", Nota_alumno);
console.log("Promedio de las notas:", promedioNota);
