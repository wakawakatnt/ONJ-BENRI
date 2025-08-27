const overlay = document.getElementById("overlay");
const video = document.getElementById("video");
const startImage = document.getElementById("startImage");

setTimeout(() => {
  startImage.style.display = "block";
}, 500);

async function startVideo() {
  try {
    overlay.style.display = "none";
    video.volume = 1.0;
    await video.play();
    const elem = document.documentElement;
    if (elem.requestFullscreen) await elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) await elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) await elem.msRequestFullscreen();
  } catch (err) {
    console.error("エラー:", err);
  }
}

overlay.addEventListener("click", startVideo);

window.addEventListener("resize", () => {
  video.style.height = `${window.innerHeight}px`;
});
