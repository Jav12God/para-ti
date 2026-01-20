function entrar() {
  const pass = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (pass === "172513") {
    document.getElementById("login").classList.add("oculto");
    document.getElementById("contenido").classList.remove("oculto");
  } else {
    mensaje.textContent = "Suerte la próxima corazón 💙";
    mensaje.style.color = "blue";
  }
}

function abrirCarta() {
  ocultarTodo();
  document.getElementById("carta").classList.remove("oculto");
}

function abrirVideo() {
  ocultarTodo();
  document.getElementById("video").classList.remove("oculto");
}

function volver() {
  ocultarTodo();
}

function ocultarTodo() {
  document.getElementById("carta").classList.add("oculto");
  document.getElementById("video").classList.add("oculto");
}
