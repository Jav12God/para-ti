function verificar() {
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("mensaje");

  if (pass === "172513") {
    msg.textContent = "💙";
    msg.style.color = "blue";
  } else {
    msg.textContent = "Suerte la próxima corazón 💙";
    msg.style.color = "blue";
  }
}

function abrirCarta() {
  document.getElementById("carta").classList.remove("oculto");
}

function abrirVideo() {
  document.getElementById("videoBox").classList.remove("oculto");
}

function cerrar() {
  document.getElementById("carta").classList.add("oculto");
  document.getElementById("videoBox").classList.add("oculto");
}
