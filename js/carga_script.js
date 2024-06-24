let productos = [
    {
        id: 1,
        nombre: "Red",
        categoria: "Blend / Inicial",
        descripcion: "6 años / 750ml",
        marca: "Johnnie Walker",
        precio: 27500,
        stock: 15,
        codImg: "Red.jpg"
    },
    {
        id: 2,
        nombre: "Black",
        categoria: "Blend / Medio",
        descripcion: "12 años / 750ml",
        marca: "Johnnie Walker",
        precio: 55800,
        stock: 12,
        codImg: "Black.jpg"
    },
    {
        id: 3,
        nombre: "Double Black",
        categoria: "Blend / Medio",
        descripcion: "12 años / 750ml",
        marca: "Johnnie Walker",
        precio: 56700,
        stock: 5,
        codImg: "Double.jpg"
    },
    {
        id: 4,
        nombre: "Gold Reserve",
        categoria: "Blend / Medio",
        descripcion: "18 años / 750ml",
        marca: "Johnnie Walker",
        precio: 79100,
        stock: 7,
        codImg: "Gold.jpg"
    },
    {
        id: 5,
        nombre: "Green",
        categoria: "Blend / Superior",
        descripcion: "15 años / 750ml",
        marca: "Johnnie Walker",
        precio: 102200,
        stock: 4,
        codImg: "Green.jpg"
    },
    {
        id: 6,
        nombre: "Blue",
        categoria: "Blend / Premium",
        descripcion: "18 años / 750ml",
        marca: "Johnnie Walker",
        precio: 216400,
        stock: 3,
        codImg: "Blue.jpg"
    },
]
productos = cargaProductosLocalStorage();

const envio = [
    {opcion: "Retiro en local", costo: 0},
    {opcion: "Zona CABA", costo: 3200},
    {opcion: "Zona GBA (Todas)", costo: 6400},
    {opcion: "Interior del país", costo: 8500},
];

let pedidos = cargaPedidosSessionStorage();
let compras = cargaComprasLocalStorage();

document.addEventListener('DOMContentLoaded', () => {
    mostrarPedido();
});

const tablaPedidos = document.getElementById('tablaPedidos');
const tablaBody_Pedidos = document.createElement('tbody');
tablaPedidos.appendChild(tablaBody_Pedidos);



