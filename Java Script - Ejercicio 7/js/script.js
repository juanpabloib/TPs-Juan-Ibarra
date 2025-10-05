const precios = {
    procesador: 0,
    monitor: 0,
    disco: 0
};

function procesar(){
    let procesador = document.getElementById("procesador").value;
    let precioprocesador = 0;
    switch (procesador) {
        case "inteli3":
            precioprocesador = 400;
            break;
        case "inteli5":
            precioprocesador = 600;
            break;
        case "inteli7":
            precioprocesador = 800;
            break;
        default:
            alert("Procesador no reconocido");
            return;
    }
    console.log("Precio del procesador: " + precioprocesador);
    return precioprocesador;
}
function monitor(){
    let monitor = document.getElementById("monitor").value;
    let preciomonitor = 0;
    switch (monitor) {
        case "samsung20":
            preciomonitor = 250;
            break;
        case "samsung22":
            preciomonitor = 350;
            break;
        case "samsung24":
            preciomonitor = 550;
            break;
        default:
            alert("Monitor no reconocido");
            return;
    }
    console.log("Precio del monitor: " + preciomonitor);
    return preciomonitor;
}
function disco(){
    let disco = document.getElementById("disco").value;
    let preciodisco = 0;
    switch (disco) {
        case "disco500":
            preciodisco = 300;
            break;
        case "disco1000":
            preciodisco = 440;
            break;
        case "disco3000":
            preciodisco = 500;
            break;
        default:
            alert("Disco no reconocido");
            return;
    }
    console.log("Precio del disco: " + preciodisco);
    return preciodisco;
}
function calcularPrecioTotal(){
    precios.procesador = procesar();
    precios.monitor = monitor();
    precios.disco = disco();
    let total = precios.procesador + precios.monitor + precios.disco;
    console.log("Precio total: " + total);
    document.getElementById("precioTotal").value = "El costo total es de " + total;
}