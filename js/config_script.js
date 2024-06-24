const main = document.getElementById('main');
main.style.margin = '80px 100px';
main.style.display = 'flex';
main.style.flexDirection = 'column';

let contenedor = document.createElement('div');
contenedor.innerHTML = `<h2> Listado de productos disponibles </h2>
                        <h2> Registro de pedidos </h2>
                        <button style="margin: 60px 20px; padding: 20px;" onclick="localStorage.clear(); sessionStorage.clear();"> Reset "local/session" storage / Para prueba</button>`
contenedor.style.width = '40%';
contenedor.addEventListener('mouseover', () => {
    contenedor.style.border = '2px outset cadetblue';
    contenedor.style.fontSize = 'larger';
})
contenedor.addEventListener('mouseout', () => {
    contenedor.style.border = 'none';
    contenedor.style.fontSize = 'medium';
})
main.appendChild(contenedor);

