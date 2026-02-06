(function () {
  const STORAGE_KEY = "darvy_favorites_v1";

  function byId(id) {
    return document.getElementById(id);
  }

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch {
      return new Set();
    }
  }

  function saveFavorites(favoritesSet) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...favoritesSet]));
    } catch {
      // ignore storage errors
    }
  }

  const favorites = loadFavorites();

  function setStarState(buttonEl, isFav) {
    const iconEl = buttonEl.querySelector("i");
    if (!iconEl) return;

    buttonEl.setAttribute("aria-pressed", String(isFav));
    iconEl.classList.toggle("fa-solid", isFav);
    iconEl.classList.toggle("fa-regular", !isFav);
  }

  function syncAllStars() {
    document.querySelectorAll(".favorite-btn[data-cat-name]").forEach((btn) => {
      const name = btn.dataset.catName;
      setStarState(btn, favorites.has(name));
    });
  }

  function renderFavorites() {
    const list = byId("favoritesList");
    const empty = byId("favoritesEmpty");
    if (!list || !empty) return;

    list.innerHTML = "";

    if (favorites.size === 0) {
      empty.hidden = false;
      return;
    }

    empty.hidden = true;

    const imgMap = new Map();
    document
      .querySelectorAll(".favorite-btn[data-cat-name][data-cat-img]")
      .forEach((btn) => {
        imgMap.set(btn.dataset.catName, btn.dataset.catImg);
      });

    [...favorites]
      .sort((a, b) => a.localeCompare(b))
      .forEach((name) => {
        const chip = document.createElement("div");
        chip.className = "favorite-chip";

        const imgSrc = imgMap.get(name);
        if (imgSrc) {
          const img = document.createElement("img");
          img.src = imgSrc;
          img.alt = name;
          chip.appendChild(img);
        }

        const text = document.createElement("span");
        text.textContent = name;
        chip.appendChild(text);

        list.appendChild(chip);
      });
  }

  function toggleFavoritesPanel(show) {
    const panel = byId("favoritesPanel");
    const toggleBtn = byId("catsFavoritesBtn");
    if (!panel || !toggleBtn) return;

    panel.hidden = !show;
    toggleBtn.setAttribute("aria-expanded", String(show));

    if (show) {
      renderFavorites();
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const catsBtn = target.closest("#catsFavoritesBtn");
    if (catsBtn) {
      event.preventDefault();
      const panel = byId("favoritesPanel");
      toggleFavoritesPanel(panel ? panel.hidden : true);
      return;
    }

    const clearBtn = target.closest("#clearFavoritesBtn");
    if (clearBtn) {
      event.preventDefault();
      favorites.clear();
      saveFavorites(favorites);
      syncAllStars();
      renderFavorites();
      return;
    }

    const favBtn = target.closest(".favorite-btn");
    if (!favBtn) return;

    event.preventDefault();

    const name = favBtn.dataset.catName;
    if (!name) return;

    const nextFav = !favorites.has(name);
    if (nextFav) favorites.add(name);
    else favorites.delete(name);

    saveFavorites(favorites);
    setStarState(favBtn, nextFav);
    renderFavorites();
  });

  document.addEventListener("DOMContentLoaded", () => {
    syncAllStars();
    renderFavorites();
  });
})();
