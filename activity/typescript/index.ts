// Ejercicio 1
console.log('Ejercicio #1');
interface Person {
  name: string;
  age: number;
  profession: string;
}

const getPersonInfo = (person: Person): (string | number)[] => {
  const personData: (string | number)[] = [
    person.name,
    person.age,
    person.profession,
  ];

  return personData;
};

const person1: Person = {
  name: "Esteban Ramirez",
  age: 37,
  profession: "Front End Developer",
};

const result = getPersonInfo(person1);
console.log(result);
// Ejercicio 2
console.log('Ejercicio #2');
function sumOrConcatenate(
  param1: number | string,
  param2: number | string
): number | string {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    // Ambos son números, devuelve la suma
    return param1 + param2;
  } else if (typeof param1 === 'string' && typeof param2 === 'string') {
    // Ambos son cadenas, devuelve la concatenación con el símbolo '-'
    return param1 + '-' + param2;
  } else {
    // Un número y una cadena, devuelve la concatenación con ':'
    return `${param1}:${param2}`;
  }
}
console.log(sumOrConcatenate(4, 3)); // --> 7 
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello  
console.log(sumOrConcatenate("Hello", "World")); // --> Hello-World 

// Ejercicio 3
console.log('Ejercicio #3');
// Interfaz Car
interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

// Interfaz Motorcycle
interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return 'pressPedal' in vehicle;
}

function startVehicle(vehicle: Car | Motorcycle): void {  
  vehicle.turnOnEngine();
  
  if (isCar(vehicle)) {
    // Si es Car, llamar a pressPedal
    vehicle.pressPedal();
  } else {
    // Si es Motorcycle, llamar a openThrottle
    vehicle.openThrottle();
  }
}

const car: Car = {
  tires: 4,
  turnOnEngine: () => console.log('Car engine is on'),
  pressPedal: () => console.log('Pressing the pedal'),
};

const motorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine: () => console.log('Motorcycle engine is on'),
  openThrottle: () => console.log('Opening the throttle'),
};

startVehicle(car); // Salida esperada: Car engine is on, Pressing the pedal
startVehicle(motorcycle); // Salida esperada: Motorcycle engine is on, Opening the throttle

// Ejercicio 4
console.log('Ejercicio #4');
function removeFirstEntry<T>(arr: T[]): T[] {
  // Verificar si el array tiene al menos un elemento
  if (arr.length > 1) {
    // Devolver el array sin el primer elemento usando slice
    return arr.slice(1);
  } else {
    // Si el array está vacío o tiene solo un elemento, devolver un array vacío
    return [];
  }
}
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];