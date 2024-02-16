$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    
    username=searchParams.get('nombre');
    if(username==null || username==""){
        location.href="index.html";
    }
    document.getElementById("user").innerHTML ="Jugador: "+ username;
});