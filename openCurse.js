$(document).ready(function () {
    $("#cursos").on("click", "button", function () {
        id=$(this).data("id");
        $("#load").addClass("block")
        $("#load").html("<img style='position:absolute;top:50%;right:45%;width:100px' src='loadd.gif' />")
        $(this).parent().parent().parent().hide();
        fetch("preguntas.json")
        .then(response => response.json())
        .then(data => {
            preguntas=data[id];
            len = preguntas[0].preguntas.length;
            $("#kahootPreguntas").empty();
            
            setTimeout(function(){
                startQuiz() 
            },3000)
            $("#load").removeClass("block")
            
        })
        .catch(error => {
            console.log(error)
            $("#load").removeClass("block");
        });
    })
});

function startQuiz() {
    e=count;
    $("#kahootPreguntas").empty();
    console.log(preguntas);
    divparent1= document.createElement("div");
    divparent1.className="row";
    pregunta = document.createElement("div");
    pregunta.className="col text-center m-4";
    h2 = document.createElement("h2");
    h2.innerHTML=preguntas[0].preguntas[e];
    pregunta.appendChild(h2);
    divparent1.appendChild(pregunta);
    document.getElementById("kahootPreguntas").appendChild(divparent1);
    divparent2_1= document.createElement("div");
    divparent2_1.className="row mt-4";
    divanswer1= document.createElement("div");
    divanswer1.className="col card text-center m-1 p-2 bg-success";
    divanswer1.role="button";
    divanswer1.title=preguntas[0].respuestas[e].opciones[0];
    divanswer1.textContent=preguntas[0].respuestas[e].opciones[0];
    divanswer2= document.createElement("div");
    divanswer2.className="col card text-center m-1 p-2 bg-danger";
    divanswer2.role="button";
    divanswer2.title=preguntas[0].respuestas[e].opciones[1];
    divanswer2.textContent=preguntas[0].respuestas[e].opciones[1];
    divparent2_2= document.createElement("div");
    divparent2_2.className="row mt-4";
    divanswer3= document.createElement("div");
    divanswer3.className="col card text-center m-1 p-2 bg-warning";
    divanswer3.role="button";
    divanswer3.title=preguntas[0].respuestas[e].opciones[2];
    divanswer3.textContent=preguntas[0].respuestas[e].opciones[2];
    divanswer4= document.createElement("div");
    divanswer4.className="col card text-center m-1 p-2 bg-info";
    divanswer4.role="button";
    divanswer4.title=preguntas[0].respuestas[e].opciones[3];
    divanswer4.textContent=preguntas[0].respuestas[e].opciones[3];
    divparent2_1.appendChild(divanswer1);
    divparent2_1.appendChild(divanswer2);
    divparent2_2.appendChild(divanswer3);
    divparent2_2.appendChild(divanswer4);
    document.getElementById("kahootPreguntas").appendChild(divparent2_1);
    document.getElementById("kahootPreguntas").appendChild(divparent2_2);
    respuestaCorecta=preguntas[0].respuestas[e].correcta;
    runTime();
    pointsCorrent=1000;
    time=10;
    count++;
    


    
    
}