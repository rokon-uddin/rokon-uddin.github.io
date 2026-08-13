document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
