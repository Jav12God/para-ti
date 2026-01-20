function verCarta() {
  const contraseñaCorrecta = "teamo"; // cámbiala
  const input = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");
  const pdf = document.getElementById("pdf");

  if (input === contraseñaCorrecta) {
    mensaje.textContent = "Siempre fuiste tú ❤️";
    mensaje.style.color = "green";
    pdf.classList.remove("oculto");
  } else {
    mensaje.textContent = "Nope… inténtalo de nuevo, amor 😘";
    mensaje.style.color = "red";
  }
}
