import { Libro } from "./libros"

// Función para mostrar el menú
export function mostrarMenu() {
    console.log('--- Menú ---');
    console.log('1. Abastecer ejemplares');
    console.log('2. Vender ejemplares');
    console.log('3. Mostrar información del libro');
    console.log('4. Agregar nuevo libro');
    console.log('0. Salir');
}

// Función para agregar un nuevo libro
export function agregarNuevoLibro() {
    const isbn = '987654'; // Ingresa el ISBN del nuevo libro
    const titulo = 'Nuevo Libro'; // Ingresa el título del nuevo libro
    const imagen = 'imagen2.jpg'; // Ingresa la imagen del nuevo libro
    const precioCompra = 6000; // Ingresa el precio de compra del nuevo libro
    const precioVenta = 10000; // Ingresa el precio de venta del nuevo libro

    const nuevoLibro = new Libro(isbn, titulo, imagen, precioCompra, precioVenta);
    console.log(`Nuevo libro "${titulo}" agregado.`);
    return nuevoLibro;
}

