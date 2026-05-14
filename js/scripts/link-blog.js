const links = document.querySelectorAll(".link");

links.forEach((link) => {
  const icon = link.querySelector(".icon-link");

  if (!icon) return;

  const defaultIcon = icon.dataset.default;
  const hoverIcon = icon.dataset.hover;

  link.addEventListener("mouseenter", () => {
    icon.src = hoverIcon;
  });

  link.addEventListener("mouseleave", () => {
    icon.src = defaultIcon;
  });
});