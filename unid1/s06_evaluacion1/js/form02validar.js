function fnValidar02() {
    var texto = document.getElementById("txtTexto").value;
    if (texto = "" || /\s+$/.test(texto)) {
        alert("[ERROR] No puede tener espacios ")
        return false
    }
    if (!document.querySelector('input[name="rdGenero"]:checked')) {
        alert('Selecciona Genero');
        return false;
    }
    var chk = document.getElementsByName("chkPref[]");
    var e=0;
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked){
            e=e+1;
        }
    }
    if(e!=2){
        alert("Debes selecionar 2 opciones");
        return false;
    }

    
    

    return true;
}