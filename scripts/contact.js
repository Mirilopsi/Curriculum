'use strict';

(function() {
    function validarForm() {
        var inputs = $('#contacta input, #contacta select, #contacta textarea');
        var validity = [];

        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push();

            if (!elem.checkValidity()) {

                $(elem).css("background-color", "#8a1111");
                $(elem).css("box-shadow", "0px -3px 65px 0px #ff2a2a");
                $(elem).css("color", "beige");

            }

        });




        return validity.reduce(function(total, value) {
            return total && value;
        }, true);
    }


    function validarGuay() {
        var puntuacion = $('input[name="evalua"]').val();
        var array = ['maravillosa', 'genial', 'lo mejor que he visto en mi vida'];
        var nElem = 3;
        var select = document.getElementById('selectEval');

        if (+puntuacion < 5 && puntuacion !== "" && select === null) {
            $('.evalua').hide();
            $('#boton-encuesta').hide();

            $(".form-evalua").append('<label for="evaluacion">Sé que lo has puesto por error...</label>');
            $(".form-evalua").append('<select name ="evaluacion" id="selectEval">');

            (function() {
                for (var i = 0; i < nElem; i++) {
                    select = document.getElementById("selectEval");
                    var option = document.createElement("option");
                    option.text = array[i];
                    select.add(option);
                }
            })();

            $(".form-evalua").append('<button id="boton-revota" type="submit">Revota!</button>');

            document.querySelector('#boton-revota').addEventListener('click', function(event) {
                event.preventDefault(); //Evitar que tenga el comportamiento por defecto
                alert("Gracias por tu más sincera opínión.");
            });

        } else if (+puntuacion > 5) {
            console.log("Senquiu");
        }
    }

    var button1 = document.querySelector('#boton-form').addEventListener('click', function(event) {
        event.preventDefault(); //Evitar que tenga el comportamiento por defecto

        var result = validarForm();
    });
    var button2 = document.querySelector('#boton-encuesta').addEventListener('click', function(event) {
        event.preventDefault(); //Evitar que tenga el comportamiento por defecto

        validarGuay();
    });


})();
