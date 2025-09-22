function verificarContrasena() {
    password = document.getElementById("inputPassword").value;
    confirmPassword = document.getElementById("inputConfirmPassword").value;
    if (password === confirmPassword) {
        alert("Las contraseñas coinciden.");
    } else {
        alert("Las contraseñas no coinciden.");
    }
}