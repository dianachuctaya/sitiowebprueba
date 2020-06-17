var alu = Array(
    Array("1", "Ruben", "Montoya Luna","Dia"),
    Array("2", "Rolando", "Perez Manrique","Dia"),
    Array("3", "Rosario", "Francisco Luque", "Dia")
);
function bucleTabla(cantidad) {

    for (let f = 0; f < cantidad; f++) {
       
        //document.getElementById("alum").innerHTML="<th colspan='3'>Datos</th></tr> <tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr> <tr>";

        document.write("<table border='1'>");
        document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td><td>Turno</td></tr>");
        document.write("<tr>");
        for (let c = 0; c < 3; c++) {
            document.write("<td>" + alu[1] + "</td>");
        }
       
        document.write("</tr>");
        document.write("</table>");

    }
   
}