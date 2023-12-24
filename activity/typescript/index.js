// Ejercicio 1console.log('Ejercicio #1');
var getPersonInfo = function (person) {
  var personData = [person.name, person.age, person.profession];
  return personData;
};
var person1 = {
  name: "Esteban Ramirez",
  age: 37,
  profession: "Front End Developer",
};
var result = getPersonInfo(person1);
console.log(result);
// Ejercicio 2
console.log("Ejercicio #2");
function sumOrConcatenate(param1, param2) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    // Ambos son números, devuelve la suma
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    // Ambos son cadenas, devuelve la concatenación con el símbolo '-'
    return param1 + "-" + param2;
  } else {
    // Un número y una cadena, devuelve la concatenación con ':'
    return "".concat(param1, ":").concat(param2);
  }
}
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumOrConcatenate("Hello", "World")); // --> Hello-World
// Ejercicio 3
console.log("Ejercicio #3");
function isCar(vehicle) {
  return "pressPedal" in vehicle;
}
function startVehicle(vehicle) {
  vehicle.turnOnEngine();
  if (isCar(vehicle)) {
    // Si es Car, llamar a pressPedal
    vehicle.pressPedal();
  } else {
    // Si es Motorcycle, llamar a openThrottle
    vehicle.openThrottle();
  }
}
var car = {
  tires: 4,
  turnOnEngine: function () {
    return console.log("Car engine is on");
  },
  pressPedal: function () {
    return console.log("Pressing the pedal");
  },
};
var motorcycle = {
  tires: 2,
  turnOnEngine: function () {
    return console.log("Motorcycle engine is on");
  },
  openThrottle: function () {
    return console.log("Opening the throttle");
  },
};
startVehicle(car); // Salida esperada: Car engine is on, Pressing the pedal
startVehicle(motorcycle); // Salida esperada: Motorcycle engine is on, Opening the throttle
// Ejercicio 4
console.log("Ejercicio #4");
function removeFirstEntry(arr) {
  // Verificar si el array tiene al menos un elemento
  if (arr.length > 1) {
    // Devolver el array sin el primer elemento usando slice
    return arr.slice(1);
  } else {
    // Si el array está vacío o tiene solo un elemento, devolver un array vacío
    return [];
  }
}
var strArray = ["Hello", "World", "Im", "a", "Full", "Stack", "Developer"];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ["Hello", "I", "have", 3, "tasks"];
var unsupportedArray = [{ name: "Lucas", surname: "Fernandez" }, "Hello", 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
