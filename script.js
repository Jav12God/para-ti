const correctPassword = "132518";
const messages = [
  "Sigue intentando amor 💕",
  "Estuviste cerca 😘",
  "Tú puedes mi vida 💖",
  "Inténtalo otra vez 🥰"
];

function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (input === correctPassword) {
    window.open("Amor/carta.pdf", "_blank");
    message.textContent = "Contraseña correcta 💌";
  } else {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMsg;
  }
}

function openMedia(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = "";

  if (type === "video") {
    body.innerHTML = `
      <video controls autoplay>
        <source src="Amor/Morado1.webm" type="video/webm">
      </video>`;
  }

  if (type === "gif") {
    body.innerHTML = `<img src="Amor/marcianos.gif">`;
  }

  if (type === "image") {
    body.innerHTML = `<img src="Amor/cart.png">`;
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
