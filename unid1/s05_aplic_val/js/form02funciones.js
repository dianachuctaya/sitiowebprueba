function validarjs()
{
    var nombre = document.getElementById("txtNombres").value;
    if (nombre == "" || /^\s+$/.test(apellido)) {
        alert("[ERROR] Falta Nombre... ");
        return false;
    }
    var apellido = document.getElementById("txtApellidos").value;
    if (apellido == "" || /^\s+$/.test(apellido)) {
        alert("Falta Apellidos... ");
        return false;
    }
    var direccion = document.getElementById("txtDireccion").value;
    if (direccion == "") {
        alert("Falta Direccion... ");
        return false;
    }
 
    var genero = document.getElementById("lstEstado").value;
    if (genero == null || etcivil == 0) {
        alert("Seleccione su estado civil");
        return false;
    }


    return true;
}