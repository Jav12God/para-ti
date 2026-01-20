function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "172513") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.textContent = "Suerte la próxima, corazón 💔";
  }
}

function openImage() {
  document.getElementById("imageView").classList.remove("hidden");
}

function openVideo() {
  document.getElementById("videoView").classList.remove("hidden");
  document.getElementById("video").play();
  document.getElementById("music").play();
}

function closeAll() {
  document.getElementById("imageView").classList.add("hidden");
}

function closeVideo() {
  document.getElementById("videoView").classList.add("hidden");
  document.getElementById("video").pause();
  document.getElementById("music").pause();
}
