// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log(`Respuesta: Según el orden de ejecución se ejecuta primero el contenido del fichero aboutme.js, 
esto debido a que Javascript en un lenguaje lineal.`);

// Ejercicio 3
for (let number = 1; number <= 100; number++) {
  if (number % 7 === 0) {
    console.log(number);
  }
}

// Ejercicio 4
for (var i = 0; i < 101; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}
console.log(i);
console.log(`El valor de la variable i tiene un valor de ${i}, lo cual hace que mantenga en referencia el ultimo valor asignado. 
Esto sucede debido a que se esta utilizando una declaración de la variable mediante el uso de var y declarar variables de este 
tipo NO respeta el llamado scope de la variable y es una mala práctica.`);

// Ejercicio 5
console.log(
  `La principal diferencia entre ejecutar un archivo JavaScript en un navegador web con el formato <script> y <script type="module"> está relacionada con el alcance de las variables y el sistema de módulos de JavaScript.`
);
console.log("Principales puntos:");
console.log(`1. Alcance de las variables.\n
2. Uso de import/export\n
3. Carga diferida\n`);
console.log("\n\n");

// Ejercicio 6
console.log("Ejercicio 6");
let formatter = {
  prefix: "Hello",
  append: (str) => {
    console.log(`${formatter.prefix} ${str}`);
  },
};

formatter.append("World");

formatter.toLowerString = (str2) => {
  console.log(str2.toLowerCase());
};
formatter.toLowerString("I’m Lucas");
