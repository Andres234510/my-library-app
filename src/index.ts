/* 
Instru lo que pasa es que no fui capas de hacer que me funcionara el prompt para hacer que se ingresen los datos desde la consola
para hacer la eleccion del menu se debe directamente en el bloque de codigo
*/

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
