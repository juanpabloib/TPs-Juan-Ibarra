function elevarAlCubo() {
    inputNum = document.getElementById("inputNum");
    num = parseInt(inputNum.value);
    resultado = num ** 3;
    alert("El resultado de elevar " + num + " al cubo es: " + resultado);
}