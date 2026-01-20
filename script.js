// Espera a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

  const btnPassword = document.getElementById("btnPassword");
  const btnCarta = document.getElementById("btnCarta");
  const btnVideo = document.getElementById("btnVideo");
  const mensaje = document.getElementById("mensaje");

  const carta = document.getElementById("carta");
  const videoBox = document.getElementById("videoBox");

  const cerrarCarta = document.getElementById("cerrarCarta");
  const cerrarVideo = document.getElementById("cerrarVideo");

  // Contraseña
  btnPassword.addEventListener("click", () => {
    const pass = document.getElementById("password").value;

    if (pass === "172513") {
      mensaje.textContent = "💙";
      mensaje.style.color = "blue";
    } else {
      mensaje.textContent = "Suerte la próxima corazón 💙";
      mensaje.style.color = "blue";
    }
  });

  // Abrir carta
  btnCarta.addEventListener("click", () => {
    carta.classList.remove("oculto");
  });

  // Abrir video
  btnVideo.addEventListener("click", () => {
    videoBox.classList.remove("oculto");
  });

  // Cerrar
  cerrarCarta.addEventListener("click", () => {
    carta.classList.add("oculto");
  });

  cerrarVideo.addEventListener("click", () => {
    videoBox.classList.add("oculto");
  });

});
