function fnValidar02() {
    var xValor = document.getElementById("lsPreferencias").value;
    if (xValor == "") {
        alert("Seleccione una preferencia..");
        return false;

    }
    return true;
}