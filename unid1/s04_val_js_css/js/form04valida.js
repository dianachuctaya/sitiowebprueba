function fnValidar04()
{	
    var elementoPref = document.getElementsByName("chkPrefer");
    var e=0;
    var selecionado;
    for (var i = 0; i < elementoPref.length; i++) 
    {
        if (elementoPref[i].checked) 
        {
            e++;
            alert("elemento check " + elementoPref[i].value + " "+e);
            if (e = 2) seleccionado = true;
        }
        
        if(!selecionado){
            alert("Falta Seleccionar");
            return false;
        } return true
        
    }
}
