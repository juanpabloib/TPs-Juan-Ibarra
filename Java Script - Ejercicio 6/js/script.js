function verificar() {
    pizzaSeleccionada = document.getElementById("pizzas").value;
    if (pizzaSeleccionada === "JyQ") {
        alert("El precio de la pizza de Jamon y queso es $500");
    }
    else if (pizzaSeleccionada === "Muzarella") {
        alert("El precio de la pizza de Muzarella es $450");
    }
    else if (pizzaSeleccionada === "Morrones") {
        alert("El precio de la pizza de Morrones es $600");
    }
}