document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const hoverElements = document.querySelectorAll(
    ".name, .title, .description, .footer a"
  );

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hovered");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovered");
    });
  });
});
