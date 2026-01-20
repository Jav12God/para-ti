function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "172513") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
  } else {
    error.textContent = "suerte la próxima corazón 💔";
  }
}

function openCart() {
  document.getElementById("cartView").classList.remove("hidden");
}

function openVideo() {
  const video = document.getElementById("video");
  document.getElementById("videoView").classList.remove("hidden");
  video.currentTime = 0;
  video.play();
}

function closeAll() {
  document.getElementById("cartView").classList.add("hidden");
}

function closeVideo() {
  const video = document.getElementById("video");
  video.pause();
  document.getElementById("videoView").classList.add("hidden");
}
