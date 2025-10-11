function verificacion(){ 
    let contra= document.getElementById("password").value  
    if ((contra.length<7)){ 
        alert("La contraseña es invalida porque no cumple el minimo de 7 caracteres") 
    } 
    else if (contra.length>20){
        alert("La contraseña es invalida porque supera los 20 caracteres") 
    }
    else{
        alert("La contraseña es valida") 
    }
}