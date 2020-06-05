function fnValidar01() {
    var xTexto = document.getElementById("txttexto").value;
    if (xTexto == "" || /^\s+$/.test(xTexto))
    {
        alert("Falta Texto... ");
        return false;
    }

    var xNumero = document.getElementById("txtnumero").value;
    if (xNumero == "") {
        alert("Falta Número...");
        return false;
    }
  
    return true;

}