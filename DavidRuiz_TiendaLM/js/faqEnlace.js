// Lo hice opcional, no hace falta corregir!!!. Añadí esto para los enlaces internos de preguntas frecuentes
// porque estaba teniendo problemas con los enlaces, se quedaban mal posicionados no justo en el id. En formato móvil a veces se buguea todavía, no sé que puede ser.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var header = document.querySelector('.header');
            var nav = document.querySelector('.nav');
            var target = document.querySelector(this.getAttribute('href'));

            if (header && nav && target) {
                var headerHeight = header.offsetHeight;
                var navHeight = nav.offsetHeight;

                window.scrollTo({
                    top: target.offsetTop - headerHeight - navHeight + 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});
