'use strict';

(function() {
    function validarForm() {
        var inputs = $('#contacta input, #contacta select, #contacta textarea');
        var validity = [];

        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push();
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
            $("#contacta .datos").append('<label for="evaluacion">Sé que lo has puesto por error...</label>');
            $("#contacta .datos").append('<select name ="evaluacion" id="selectEval">');

            (function() {
                for (var i = 0; i < nElem; i++) {
                    select = document.getElementById("selectEval");
                    var option = document.createElement("option");
                    option.text = array[i];
                    select.add(option);
                }
            })();

        } else if (+puntuacion > 5) {
            console.log("Senquiu");
        }
    }

    var button = document.querySelector('#contacta button').addEventListener('click', function(event) {
        event.preventDefault(); //Evitar que tenga el comportamiento por defecto

        var result = validarForm();
        if (result)
            validarGuay();
    });

})();
