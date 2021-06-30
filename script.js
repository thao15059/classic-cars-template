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
