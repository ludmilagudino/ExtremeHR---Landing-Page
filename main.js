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
emailjs.init("NZVWKqPBudnSwUDcn");

// Selecciona el formulario y añade el evento 'submit'
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página por defecto

    // Muestra un mensaje mientras se envía el correo
    document.getElementById("status-message").innerHTML = "Enviando...";

    // Envía el formulario con EmailJS
    emailjs.sendForm("service_0yw59mn", "template_c2viwti", this).then(
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
