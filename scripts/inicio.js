'use strict';

(function() {

    $(document).ready(function() {

        $(document).on('click', 'a[href*="#"]', function(event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
        });

    });

    /*
        function inicio() {
            var fondo = document.getElementById('cabecera');

            function frame() {
                var tam = 100;
                var id = setInterval(frame, 5);
                if (tam === 30) {
                    clearInterval(id);
                } else {
                    pos++;
                    tam -= 10;
                    fondo.width = tam + '%';
                    fondo.height = tam + '%';
                    console.log(document.getElementById('cabecera').width);
                }
            }
        }
        document.querySelector('#cabecera').addEventListener('click', function(event) {
            event.preventDefault();
            inicio();
        });
    */
})();
