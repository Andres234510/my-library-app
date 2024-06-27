export class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "¡Hola, " + this.greeting + "!";
    }
}

const greeter = new Greeter("mundo");
console.log(greeter.greet()); // Imprime "¡Hola, mundo!"

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Qué son los modificadores de acceso (public, private, protected) y cómo se usan en TypeScript? Proporciona un ejemplo de cada uno.


//PUBLIC
export class Persona {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`¡Hola, ${this.nombre}!`);
    }
}

//const persona = new Persona("Juan");
//persona.saludar(); // Imprime "¡Hola, Juan!"

//---------------------------------------------------------------------------------------------------------------------------------------

//PRIVATE

export class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.consultarSaldo(); // Imprime "Saldo actual: $1000"
// cuenta.saldo; // Error: propiedad 'saldo' es privada

//---------------------------------------------------------------------------------------------------------------------------------------

// PROTECTED

export class Vehiculo {
    protected velocidad: number;

    constructor(velocidad: number) {
        this.velocidad = velocidad;
    }
}

class Coche extends Vehiculo {
    acelerar() {
        console.log(`Acelerando a ${this.velocidad} km/h`);
    }
}

const coche = new Coche(120);
coche.acelerar(); // Imprime "Acelerando a 120 km/h"
// coche.velocidad; // Error: propiedad 'velocidad' es protegida

//---------------------------------------------------------------------------------------------------------------------------------------

//Explica el concepto de herencia en POO. ¿Cómo se implementa en TypeScript?

export class Persona2 {
    hablar(mensaje: string) {
        console.log(mensaje);
    }
}

class PersonaEducada extends Persona2 {
    saludar() {
        this.hablar('Buen día, señor');
    }
}

const persona1 = new PersonaEducada();
persona1.saludar(); // Imprime "Buen día, señor"


//---------------------------------------------------------------------------------------------------------------------------------------

//¿Cómo se define una propiedad de solo lectura en una clase de TypeScript?

export class Persona3 {
    readonly nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

const persona = new Persona3("Juan");
console.log(persona.nombre); // Imprime "Juan"
// persona.nombre = "Pedro"; // Error: propiedad 'nombre' es de solo lectura

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Qué es un método estático en TypeScript y cómo se usa?

export class Calculadora {
    static suma(a: number, b: number): number {
        return a + b;
    }
}

const resultado = Calculadora.suma(5, 3);
console.log(resultado); // Imprime 8

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Cómo se define un constructor con parámetros en TypeScript? Proporciona un ejemplo

export class Producto {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal(): number {
        return this.precio * this.cantidad;
    }
}

const producto1 = new Producto("Camiseta", 25, 3);
console.log(`Producto: ${producto1.nombre}`);
console.log(`Precio unitario: $${producto1.precio}`);
console.log(`Cantidad: ${producto1.cantidad}`);
console.log(`Total: $${producto1.calcularTotal()}`);

//---------------------------------------------------------------------------------------------------------------------------------------

//Explica el concepto de clases abstractas en TypeScript. ¿Cómo se define y utiliza una clase abstracta?

export abstract class Figura {
    abstract calcularArea(): number;
}

export class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

const circulo = new Circulo(5);
console.log("Área del círculo:", circulo.calcularArea());

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Qué es el polimorfismo en POO y cómo se puede aplicar en TypeScript?

export class Empleado {
    constructor(public nombre: string, public salario: number) {}

    calcularSalarioMensual(): number {
        return this.salario / 12;
    }
}

class Desarrollador extends Empleado {
    constructor(nombre: string, salario: number) {
        super(nombre, salario);
    }

    // Funcionalidad específica para desarrolladores
    escribirCodigo(): void {
        console.log(`${this.nombre} está escribiendo código.`);
    }
}

class Gerente extends Empleado {
    constructor(nombre: string, salario: number) {
        super(nombre, salario);
    }

    // Funcionalidad específica para gerentes
    aprobarVacaciones(): void {
        console.log(`${this.nombre} ha aprobado las vacaciones.`);
    }
}

// Crear instancias
const desarrollador1 = new Desarrollador("Ana", 60000);
const gerente1 = new Gerente("Carlos", 80000);

// Usar métodos polimórficos
console.log(`Salario mensual de ${desarrollador1.nombre}: $${desarrollador1.calcularSalarioMensual()}`);
console.log(`Salario mensual de ${gerente1.nombre}: $${gerente1.calcularSalarioMensual()}`);

desarrollador1.escribirCodigo(); // Imprime "Ana está escribiendo código."
gerente1.aprobarVacaciones(); // Imprime "Carlos ha aprobado las vacaciones."

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Cómo se implementa una interfaz en una clase en TypeScript? Proporciona un ejemplo.

interface Person {
    name: string;
    age: number;
    hairColor: string;
    weight: number;
    height: number;
}
class Student implements Person {
    constructor(public name: string, public age: number, public hairColor: string, public weight: number, public height: number) {
        // Implementación de los métodos y propiedades
    }

    greet(): void {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`);
    }
}
const student1 = new Student("Juan", 20, "castaño", 185, 90);
student1.greet(); // Salida: "Hola, soy Juan y tengo 20 años."

//---------------------------------------------------------------------------------------------------------------------------------------

//¿Puede una clase implementar múltiples interfaces en TypeScript? ¿Cómo?

interface Name {
    name: string;
}

interface Weight {
    weight: number;
}

interface Height {
    height: number;
}

class Animal implements Name, Weight, Height {
    name: string;
    height: number;
    weight: number;

    constructor(name: string, weight: number, height: number) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
}

const animal = new Animal("Bruno", 5, 3);
console.log(animal.name); // Salida: "Bruno"
console.log(animal.weight); // Salida: 5
console.log(animal.height); // Salida: 3
