function verTablas(turnoElegido, mtzAlumnos, generoElegido)
{
    orden=0;
    res="";
    t01= "<table>";
    t01+= "<tr>";
    t01+= "<th class='titulo' colspan='4' > Datos Personales"+res + "</th>";
    t01+= "</tr>";
    t01+= "<th>NO. </th> <th> Apellidos y Nombres </th> <th> Genero </th> <th> Turno </th>";
    t01+= "</tr>";

    if (mtzAlumnos.length > 0) {
        for (let i = 0; i < mtzAlumnos.length; i++) {
                turnoMtz = mtzAlumnos[i][3];
                generoMtz = mtzAlumnos[i][4];
            if (turnoMtz == turnoElegido && generoMtz== generoElegido) {
                orden ++;
                apeNom = mtzAlumnos[i][2]+" , "+mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);
                turno = fnTurno(mtzAlumnos[i][3])
                t01+= "<tr>"
                t01+= "<td>" + orden + "</td> <td>"+apeNom+ "</td> <td>"+genero+"</td> <td>"+turno+"</td>" ;
                t01+= "</tr>"
                
            }
            
        }
    }
    t01+="</table>"
    document.getElementById("marco").innerHTML=t01;

}

function fnGenero(xGenero){
    if (xGenero == "M") {
        return "Masculino"
    }
    else if (xGenero == "F") {
        return "Femenino"
    } 
	
}
function fnTurno(xTurno) {
    if (xTurno == "M") {
        return "Mañana"
    }
    else if (xTurno == "N") {
        return "Noche"
    }
    else if (xTurno == "T") {
        return "Tarde"
    }

}

function borrarMarco(){
    document.getElementById("marco").innerHTML="Resultado borrado";
	
}