function verificar() {
    let inputNum1 = document.getElementById("inputNum1");
    let inputNum2 = document.getElementById("inputNum2");
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);

    if (num1 > num2) {
        alert("El numero " + num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
        alert("El numero " + num2 + " es mayor que " + num1);
    } else {
        alert("Ambos numeros son iguales: " + num1);
    }
}