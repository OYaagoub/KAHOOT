$(document).ready(function () {
    $("#kahootPreguntas").on('click',"div[role='button']", function () {
        console.log($("div[role='button']"));
        $("div[role='button']").each(function() {
            $(this).addClass('disabled');
            $(this).removeAttr('role')
        });
        $(this).removeClass('disabled');
        stopTime();
        if($(this).attr("title")==respuestaCorecta){
            $("#ganados").html("");
            $("#ganados").append("<span>"+"Has Ganado +"+pointsCorrent+"</span>");
            points+=pointsCorrent;
            $("#totalPoints").text("Puntos: "+points);
            bien++;
            $("#bien").text("Bien : "+bien);
            if(count<len){
                $("#ganados").append('<button type="button" class="btn btn-info ml-4" onclick="startQuiz()">Seguiente Pregunta</button>');
                
               
            }
        }else{
            mal++;
            $("#mal").text("fallos : "+mal);
            $("#ganados").text("respuesta falsa Desafortunadamente");
            if(count<len){
                $("#ganados").append('<button type="button" class="btn btn-info ml-4" onclick="startQuiz()">Seguiente Pregunta</button>');
                
               
            }
        }

    });
});