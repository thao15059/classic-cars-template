document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((el) => {
    el.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((el) => {
      el.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
