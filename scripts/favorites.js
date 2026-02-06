(function () {
  function toggleFavorite(buttonEl) {
    const iconEl = buttonEl.querySelector("i");
    if (!iconEl) return;

    const isPressed = buttonEl.getAttribute("aria-pressed") === "true";
    const nextPressed = !isPressed;

    buttonEl.setAttribute("aria-pressed", String(nextPressed));

    // Font Awesome: regular = outline, solid = filled
    iconEl.classList.toggle("fa-solid", nextPressed);
    iconEl.classList.toggle("fa-regular", !nextPressed);
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const buttonEl = target.closest(".favorite-btn");
    if (!buttonEl) return;

    event.preventDefault();
    toggleFavorite(buttonEl);
  });
})();
