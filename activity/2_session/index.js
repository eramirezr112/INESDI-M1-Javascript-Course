// Ejercicio 1
const getAllProperties = (obj) => {
  return Object.keys(obj);
};

const person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
};
const properties = getAllProperties(person);

console.log("Ejercicio #1");
console.log(properties);

// Ejercicio 2
console.log("Ejercicio #2");
console.log(
  "En JavaScript, el valor de this depende del contexto en el que se utiliza"
);
console.log("EJEMPLOS:");
console.log("1- Global Context: -");
console.log("=======================================");
console.log(
  "En el contexto global, fuera de cualquier función, this se refiere al objeto global"
);
console.log("--- ej. ");
console.log(this);

console.log("\n\n");

console.log("2- Function Context (Contexto de Función): -");
console.log("=======================================");
console.log(
  "Dentro de una función, el valor de this depende de cómo se invoca la función.\nEn una función normal, this se refiere al objeto que invoca la función."
);
console.log("--- ej. ");
function example2() {
  console.log(this);
}

example2();

console.log("\n\n");

console.log("3- Method Context (Contexto de Método): -");
console.log("=======================================");
console.log(
  "Cuando una función se utiliza como método de un objeto, this se refiere al objeto que contiene el método."
);
console.log("--- ej. ");
const myObject = {
  methodExample3: function () {
    console.log(this);
  },
};

myObject.methodExample3(); // Se refiere a `myObject`

console.log("\n\n");

console.log("4- Constructor Context (Contexto de Constructor): -");
console.log("=======================================");
console.log(
  "Dentro de una función constructora (creada con new), this se refiere a la instancia del objeto que se está creando"
);
console.log("--- ej. ");
function ConstructorEj4() {
  this.propertyTest = "Ejemplo";
  console.log(this);
}

const instancia = new ConstructorEj4(); // `this` se refiere a la instancia creada por el constructor

console.log("\n\n");

console.log("5- Event Handler Context (Contexto de Manejador de Eventos): -");
console.log("=======================================");
console.log(
  "Dentro de un manejador de eventos, this se refiere al elemento DOM que disparó el evento"
);
console.log("--- ej. ");
const currentElement = document.getElementById("someId");

currentElement.addEventListener("click", function () {
  console.log(this); // `this` se refiere a `currentElement`
});
console.log("\n\n");

console.log("6- Arrow Function Context (Contexto de Arrow Function): -");
console.log("=======================================");
console.log(
  "En una arrow function, this se hereda del contexto en el que se define la función, no se ve afectado por cómo se llama la función."
);
console.log("--- ej. ");
const student = {
  name: "Juanito Mora",
  greeting: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};
// This will be lucas as this.name references the global context and name is defined with Lucas
student.greeting();

console.log("\n\n");

console.log(
  "* Enumera las diferencias entre arrow functions y function expressions."
);
console.log(
  `1. Sintaxis: \n 
  - Arrow Function: Utiliza una sintaxis más concisa y consiste en una expresión simple o una declaración de bloque.\n 
  - Function Expression: Utiliza la palabra clave function y puede ser una expresión anónima o tener un nombre.`
);
console.log(
  `2. 'this' en Arrow Functions: \n 
  - Arrow Function: No tiene su propio this. El valor de this dentro de una arrow function se hereda del contexto en el que se define. \n
  - Function Expression: Tiene su propio this, que depende de cómo se llama la función.`
);
console.log(
  `3. Arguments object: \n
  - Arrow Function: No tiene su propio objeto arguments. Puedes acceder a los argumentos utilizando el objeto arguments del ámbito que lo contiene. \n 
  - Function Expression: Tiene su propio objeto arguments que contiene los argumentos pasados a la función.`
);
console.log(`4. Constructor: \n 
- Arrow Function: No puede ser utilizada como un constructor. No se puede usar con new.\n 
- Function Expression: Puede ser utilizada como un constructor para crear instancias de objetos.`);
console.log(`5. Return Implicito:\n 
- Arrow Function: Si la función tiene una única expresión, el valor de esa expresión se considera implícitamente como el valor de retorno. \n
- Function Expression: Requiere la palabra clave return explícita para devolver un valor.
-`);
console.log(`6. Número de Argumentos: \n 
- Arrow Function: No puede tener un número variable de argumentos utilizando arguments o rest parameters (parámetros rest).
- Function Expression: Puede tener un número variable de argumentos utilizando arguments o rest parameters.
`);

// Ejercicio 3
console.log("Ejercicio #3");
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  invertir() {
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena a invertir no puede ser vacía");
    }
    const cadenaInvertida = this.cadenaInvertir.split("").reverse().join("");
    console.log(cadenaInvertida);
  }

  nuevoMetodo() {
    console.log(
      "Para evitar un error aqui hay que simplemente definir el metodo nuevo en la clase"
    );
  }
}

console.log("Part A");
const invertirCadena = new InvertirCadena();
invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir();

console.log("Part B");
invertirCadena.cadenaInvertir = "Nueva Cadena de Caracteres";
invertirCadena.invertir();

console.log("Part C");
invertirCadena.nuevoMetodo();

// Ejercicio 4
console.log("Ejercicio #4");
class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("Usuario logeado");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

let userTrue = new Usuario("admin", "passwd"); // alert -> User logged in
let userFalse = new Usuario("pepe", "bad"); // alert -> User or passwd incorrect

// Ejercicio 5
console.log("Ejercicio #5");
const btnLoginSuccess = document.getElementById("loginSuccess");
const btnLoginFailure = document.getElementById("loginFailure");

btnLoginSuccess.addEventListener("click", function () {
  userTrue.login();
});

btnLoginFailure.addEventListener("click", function () {
  userFalse.login();
});
// Ejercicio 6
console.log("Ejercicio #6");
const btnLoginSuccessAsync = document.getElementById("loginSuccessAsync");
const btnLoginFailureAsync = document.getElementById("loginFailureAsync");

let loginWithUsername = async (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        console.log("User logged in");
      } else {
        console.log("Error: invalid username or password");
      }
    }, 200);
  });
};

btnLoginSuccessAsync.addEventListener("click", async () => {
  try {
    await loginWithUsername("admin", "passwd");
  } catch (error) {
    alert(error);
  }
});

btnLoginFailureAsync.addEventListener("click", async () => {
  try {
    await loginWithUsername("root", "xxxxxx");
  } catch (error) {
    alert(error);
  }
});
