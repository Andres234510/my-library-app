/* Este fragmento de código utiliza una expresión de función de invocación inmediata (IIFE) en
TypeScript. 
(()=> {
    /* El código declara una variable constante `myName` de tipo `string` con el valor ``Nicolas''. Luego,
    registra el valor de la variable `myName` en la consola. Todo el código está incluido en una
    expresión de función invocada inmediatamente (IIFE) en TypeScript, lo que significa que la función
    se ejecuta inmediatamente después de definirse. 
        const myName: string = 'Nicolas';
        console.log(myName);
    })();*/

import { Libro } from "./models/libros";
import { mostrarMenu } from "./models/librosStore";
import { agregarNuevoLibro } from "./models/librosStore";

// Ejemplo de uso
const libro1 = new Libro('123456', 'El Gran Gatsby', 'imagen1.jpg', 5000, 8000);

let opcion : number;

    mostrarMenu();
    opcion = 3; // Lee la opción desde la consola

    switch (opcion) {
        case 1:
            const cantidadAbastecimiento = 4;
            libro1.abastecer(cantidadAbastecimiento);
            console.log('Abastecimiento realizado.');
            break;
        case 2:
            const cantidadVenta = 2;
            if (libro1.vender(cantidadVenta)) {
                console.log(`Venta de ${cantidadVenta} ejemplares realizada.`);
            } else {
                console.log('No hay suficientes ejemplares para vender.');
            } 
            break;
        case 3:
            libro1.mostrarInformacion();
            break;
        case 4:
            const nuevoLibro = agregarNuevoLibro();
            break;
        case 0:
            console.log('Saliendo del programa.');
            break;
        default:
            console.log('Opción no válida.');
    }
