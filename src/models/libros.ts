class Transaccion {
    constructor(private tipo: string, private fecha: Date, private cantidad: number) {}
}


export class Libro {
    private isbn: string;
    private titulo: string;
    private imagen: string;
    private precioCompra: number;
    private precioVenta: number;
    private cantidadActual: number;
    private transacciones: Transaccion[];

    constructor(isbn: string, titulo: string, imagen: string, precioCompra: number, precioVenta: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.imagen = imagen;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadActual = 0; // Inicialmente no hay ejemplares
        this.transacciones = [];
    }

    abastecer(cantidad: number) {
        this.cantidadActual += cantidad;
        this.transacciones.push(new Transaccion("abastecimiento", new Date(), cantidad));
    }

    vender(cantidad: number) {
        if (this.cantidadActual >= cantidad) {
            this.cantidadActual -= cantidad;
            this.transacciones.push(new Transaccion('venta', new Date(), cantidad));
            return true; // Venta exitosa
        } else {
            return false; // No hay suficientes ejemplares para vender
        }
    }   
        mostrarInformacion() {
        console.log(`Libro: ${this.titulo}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Cantidad actual: ${this.cantidadActual}`);
        console.log(`Precio de compra: $${this.precioCompra}`);
        console.log(`Precio de venta: $${this.precioVenta}`);
        console.log(`Transacciones:`, this.transacciones);
    }
}
    