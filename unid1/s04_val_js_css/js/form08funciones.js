var alu=Array(
	Array("1","Ruben","Montoya Luna"),
	Array("2","Rolando","Perez Manrique")
	);
function bucleTabla(cantidad)
{
	
	// for (let f = 0; f < cantidad; f++) {
	// 	document.write("<table border='1'>");
	// 	document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr>");
	// 	document.write("<tr>");
	// 	for (let c = 0; c < 3; c++) {
	// 		document.write("<td>" + alu[f][c]+"</td>")	;
	// 	}
	// 	document.write("</tr>");
	// 	document.write("</table> <br>");
		
	// }
	for(var f=0; f < cantidad; f++){ 
		document.write("<table border='1'> <tr><th colspan='3'>Datos</th></tr> <tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr> <tr>");
		for(var c=0; c < 3; c++){
			document.write("<td>"+alu[f][c]+"</td>"); 
		}
		document.write("</tr> </table> <br>");
	}
}