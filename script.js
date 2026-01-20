document.addEventListener("DOMContentLoaded", () => {

  const btnPassword = document.getElementById("btnPassword");
  const btnCarta = document.getElementById("btnCarta");
  const btnVideo = document.getElementById("btnVideo");
  const mensaje = document.getElementById("mensaje");

  const carta = document.getElementById("carta");
  const videoBox = document.getElementById("videoBox");
  const video = document.getElementById("videoRomantico");

  const cerrarCarta = document.getElementById("cerrarCarta");
  const cerrarVideo = document.getElementById("cerrarVideo");

  let acceso = false;

  // Contraseña
  btnPassword.addEventListener("click", () => {
    const pass = document.getElementById("password").value;

    if (pass === "172513") {
      mensaje.textContent = "oye amor… ahora sí 😘";
      mensaje.style.color = "blue";
      acceso = true;

      btnCarta.classList.remove("bloqueado");
      btnVideo.classList.remove("bloqueado");
    } else {
      mensaje.textContent = "suerte la próxima corazón 💙";
      mensaje.style.color = "blue";
    }
  });

  // Abrir carta
  btnCarta.addEventListener("click", () => {
    if (!acceso) return;
    carta.classList.remove("oculto");
  });

  // Abrir video
  btnVideo.addEventListener("click", () => {
    if (!acceso) return;
    video.currentTime = 0;
    video.play();
    videoBox.classList.remove("oculto");
  });

  // Cerrar carta
  cerrarCarta.addEventListener("click", () => {
    carta.classList.add("oculto");
  });

  // Cerrar video
  cerrarVideo.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
    videoBox.classList.add("oculto");
  });

});
