class Producto{
    constructor(id, nombre, categoria, descripcion, marca, precio, stock, codImg){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.codImg = codImg;
    }
}

class Pedido{
    constructor(producto, cantidad, precioFinal){
        this.producto = producto;
        this.cantidad = parseInt(cantidad);
        this.precioFinal = precioFinal;
    }
}

class Compra{
    constructor(pedidos, envio, importeFinal){
        this.pedidos = pedidos;
        this.envio = envio;
        this.importeFinalFinal = importeFinal;
    }
}