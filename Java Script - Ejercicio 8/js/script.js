function verificacion(){
    let contador_aciertos = 0;
    let contador_equivocadas= 0;
    let pregun1 = document.getElementById("pregunta1");
    let pregun2 = document.getElementById("pregunta2");
    let pregun3 = document.getElementById("pregunta3");
    let pregun4 = document.getElementById("pregunta4");
    opcion_pregun1 = ( pregun1.options[pregun1.selectedIndex].value);
    opcion_pregun2 = ( pregun2.options[pregun2.selectedIndex].value);
    opcion_pregun3 = (pregun3.options[pregun3.selectedIndex].value);
    opcion_pregun4 = (pregun4.options[pregun4.selectedIndex].value);
    //Pregunta 1
    if (opcion_pregun1=="3"){
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //Pregunta 2
    if (opcion_pregun2=="0"){    
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //Pregunta 3
    if (opcion_pregun3=="0"){
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //Pregunta 4
    if (opcion_pregun4=="0"){    
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    alert("Acertaste en "+String(contador_aciertos)+" y te equivocaste en "+ String(contador_equivocadas));
}