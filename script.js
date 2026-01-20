document.addEventListener("DOMContentLoaded", () => {
  const btnPassword = document.getElementById("btnPassword");
  const inputPassword = document.getElementById("password");
  const mensaje = document.getElementById("mensaje");

  const btnCarta = document.getElementById("btnCarta");
  const btnVideo = document.getElementById("btnVideo");

  const cartView = document.getElementById("cartView");
  const videoView = document.getElementById("videoView");

  const closeCart = document.getElementById("closeCart");
  const closeVideo = document.getElementById("closeVideo");

  const videoPlayer = document.getElementById("videoPlayer");

  // Contraseña: solo muestra mensaje (todo visible al abrir el sitio)
  btnPassword.addEventListener("click", () => {
    const pass = inputPassword.value.trim();
    if (pass === "172513") {
      mensaje.textContent = "oye amor… ahora sí 😘";
      mensaje.style.color = "blue";
    } else {
      mensaje.textContent = "suerte la próxima corazón 💙";
      mensaje.style.color = "blue";
    }
  });

  // Abrir carta (overlay)
  btnCarta.addEventListener("click", () => {
    cartView.classList.remove("hidden");
  });

  // Abrir video (overlay + play). user gesture from click allows playback with sound.
  btnVideo.addEventListener("click", () => {
    videoView.classList.remove("hidden");
    // ensure playback starts from 0
    try {
      videoPlayer.currentTime = 0;
      videoPlayer.play();
    } catch (e) {
      // some browsers block auto-play with sound until user interacts; but this is triggered by click so should be fine
      console.warn("No se pudo reproducir automáticamente:", e);
    }
  });

  // Cerrar cart
  closeCart.addEventListener("click", () => {
    cartView.classList.add("hidden");
  });

  // Cerrar video (pause + reset)
  closeVideo.addEventListener("click", () => {
    videoPlayer.pause();
    try { videoPlayer.currentTime = 0; } catch(e){}
    videoView.classList.add("hidden");
  });

  // Hide overlays if user taps outside media (optional)
  cartView.addEventListener("click", (e) => {
    if (e.target === cartView) closeCart.click();
  });
  videoView.addEventListener("click", (e) => {
    if (e.target === videoView) closeVideo.click();
  });
});
