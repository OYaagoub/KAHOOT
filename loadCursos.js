$(document).ready(function () {
    fetch('cursos.json')
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            $('#cursos').html("");
            // Aquí puedes procesar los datos JSON
            data["cursos"].forEach(element => {
                // Creating a new div element as a jQuery object
                var div = $("<div>");
                // Adding a class to the new div
                div.addClass('col');
                var div1 = $("<div>");
                div1.addClass('card');
                var img = $("<img>");
                img.addClass('img-thumbnail');
                img.attr("src", element.image);
                img.css( 'height', '200px');
                div1.append(img);
                var button = $("<button>");
                button.addClass('btn btn-primary');
                button.text("start");
                button.attr('data-id', element.title);
                div1.append(button);
                div.append(div1);
                $('#cursos').append(div);
            });

        })
        .catch(function (error) {
            console.log(error);
        });

});