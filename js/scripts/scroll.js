document.querySelectorAll("a[data-target]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("data-target");
    const section = document.getElementById(id);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
