const seleccion_2 = document.getElementById('opciones_2');

envio.forEach(objeto => {
    const opcion_2 = document.createElement('option');
    opcion_2.text = objeto.opcion + ' - $' + objeto.costo;
    seleccion_2.add(opcion_2);
});

const formulario = document.getElementById('form_in');

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const envioSeleccionado = seleccion_2.value;
    const cadenaEnvioSeleccionado = envioSeleccionado.split('-');
    const costoEnvioSeleccionado = cadenaEnvioSeleccionado[1].replace(/\$/g, '');
    
    sumaPedido += parseFloat(costoEnvioSeleccionado);
    let contenedor = document.createElement('tr');
    contenedor.innerHTML = `<td> $${parseFloat(costoEnvioSeleccionado)} </td>
                            <td> $${sumaPedido.toFixed(2)} </td>`;
    tablaBody_Media.appendChild(contenedor);

    compras.push({
        pedidos: pedidos,
        envio: costoEnvioSeleccionado,
        importeFinal: sumaPedido.toFixed(2)
    });

    pedidos.forEach(function(item, index){
        let contenedor = document.createElement('tr');
        contenedor.innerHTML = `<td> ${index+1}- COMPRA CONFIRMADA DE (${item.cantidad}) ${item.marca.toUpperCase()} - ${item.nombre.toUpperCase()}</td>`;
        tablaBody_Final.appendChild(contenedor);
    });

    guardarCompraSessionStorage();
});

var sumaPedido = 0;
pedidos.forEach(item => {
sumaPedido += item.precioFinal;
});

const tablaMedia = document.getElementById('tablaMedia');
const tablaBody_Media = document.createElement('tbody');
tablaMedia.appendChild(tablaBody_Media);

const tablaFinal = document.getElementById('tablaFinal');
const tablaBody_Final = document.createElement('tbody');
tablaFinal.appendChild(tablaBody_Final);
