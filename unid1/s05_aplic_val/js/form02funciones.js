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
    var edad = document.getElementById("txtEdad").value;
    if (edad == "" || /^([0-2])*$/.test(edad)) {
        alert("Falta Edad...");
        return false;
    }
    var datenacimiento = document.getElementById("txtEdad").value;
    if (datenacimiento == "" || /^([0-2])*$/.test(datenacimiento)) {
        alert("Falta Edad...");
        return false;
    }
    var genero = document.getElementById("lstEstado").value;
    if (genero == null || etcivil == 0) {
        alert("Seleccione su estado civil");
        return false;
    }
    var etcivil = document.getElementById("lstEstado").value;
    if (etcivil == null || etcivil == 0) {
        alert("Seleccione su estado civil");
        return false;
    }

    return true;
}