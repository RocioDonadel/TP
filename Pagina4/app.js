function validacion(){
    const NOMBRE = document.getElementById('Nombre');
    const STR_NOMBRE= NOMBRE.value;
    if (campo_vacio(STR_NOMBRE)){
        alert("No ha ingresado su nombre");
        return;
    }
    else{
        for (i=0; i < ((STR_NOMBRE).length); i++){
            const caracter= Number.parseInt((STR_NOMBRE)[i]);
            if (isNaN(caracter) != true){
                alert("Su nombre no es válido");
                return;
            }
        }
    }
    //
    const EMAIL = document.getElementById('Email');
    const STR_EMAIL= EMAIL.value;
    if (campo_vacio(STR_EMAIL)){
        alert("No ha ingresado su email");
        return;
    }
    else{
        if(((STR_EMAIL).includes('@') == false) || ((STR_EMAIL).includes('.') == false) ){
            alert("Su email es inválido");
            return;
        }
    }
    //
    const TELEFONO = document.getElementById('Telefono');
    const STR_TELEFONO= TELEFONO.value;
    if (campo_vacio(STR_TELEFONO)){
        alert("No ha ingresado su telefono");
        return;
    }
    else{
        for (i=0;i<(STR_TELEFONO.length); i++){
            const CARACTER= (STR_TELEFONO[i]);
            if(CARACTER != "-"){
                if(isNaN(CARACTER)){
                    alert("Número de telefono invalido");
                    return;
                }
           }
         }
    }
    //
    const RADIO_SI= document.getElementById('Si');
    if (RADIO_SI.checked){
        const MASCOTAS = document.getElementById('Mascotas');
        const STR_MASCOTAS= MASCOTAS.value;
        if (STR_MASCOTAS.trim() == ""){
            alert("No especificó nada en el cuadro de mascotas");
            return;
        }
    }
    else{
        const MASCOTAS = document.getElementById('Mascotas');
        const STR_MASCOTAS= MASCOTAS.value;
        if (STR_MASCOTAS.trim() != ""){
            alert("No seleccionó la opción correcta en Ha tenido mascotas antes o tiene");
            return;
        }
    }
    // 
    const PERFIL= document.getElementById('Perfil');
    const STR_PERFIL = PERFIL.value;
    if (campo_vacio(STR_PERFIL)) {
        alert("No ingresó ningún perfil");
        return;
    }
    document.formulario_.submit();
    alert("Enviado");
}

function campo_vacio(elemento){
    var devolver = false;
    if (elemento == ""){
        devolver= true
    }
    return devolver;
}