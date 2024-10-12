document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// Inicializa EmailJS con tu Public Key
emailjs.init("VPFVKZZSxafNyFloi");

// Selecciona el formulario y añade el evento 'submit'
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página por defecto

    // Muestra un mensaje mientras se envía el correo
    document.getElementById("status-message").innerHTML = "Enviando...";

    // Envía el formulario con EmailJS
    emailjs.sendForm("service_w941mkr", "template_prcaaxo", this).then(
      function () {
        // Mensaje de éxito
        document.getElementById("status-message").innerHTML =
          "¡Mensaje enviado con éxito!";
        document.getElementById("status-message").classList.add("success");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // Mensaje de error
        console.error("Error al enviar el mensaje:", error);
        document.getElementById("status-message").innerHTML =
          "Ocurrió un error al enviar el mensaje.";
        document.getElementById("status-message").classList.add("error");
      }
    );
  });

// Cuando se hace scroll, mostrar u ocultar el botón
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Función para desplazarse hacia arriba cuando se clickea el botón
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
    nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
