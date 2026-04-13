const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = reducedMotionQuery.matches;
const homeTransitionFlag = "home-entry-transition";
const languageStorageKey = "site-language";
let currentLanguageCode = "zh";
const supportedLanguages = {
  en: { label: "English", tag: "en" },
  zh: { label: "中文", tag: "zh-CN" },
  de: { label: "Deutsch", tag: "de" },
  it: { label: "Italiano", tag: "it" },
  fr: { label: "Français", tag: "fr" },
  ja: { label: "日本語", tag: "ja" },
  es: { label: "Español", tag: "es" },
  ru: { label: "Русский", tag: "ru" },
  ko: { label: "한국어", tag: "ko" },
};

const catalogProducts = window.catalogData?.products || [];

function pickCatalogText(value, languageCode = currentLanguageCode) {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return value[languageCode] || value.zh || value.en || Object.values(value)[0] || "";
}

const languagePickers = document.querySelectorAll("[data-language-picker]");

if (languagePickers.length > 0) {
  const defaultLanguage = "zh";
  let activeLanguage = defaultLanguage;

  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage && supportedLanguages[savedLanguage]) {
      activeLanguage = savedLanguage;
    }
  } catch (error) {
    // Ignore storage issues and keep the default language.
  }

  const applyLanguageSelection = (languageCode) => {
    const language = supportedLanguages[languageCode] || supportedLanguages[defaultLanguage];
    currentLanguageCode = supportedLanguages[languageCode] ? languageCode : defaultLanguage;
    document.documentElement.lang = language.tag;

    languagePickers.forEach((picker) => {
      const current = picker.querySelector("[data-language-current]");
      const trigger = picker.querySelector("[data-language-trigger]");
      const options = picker.querySelectorAll("[data-language-option]");

      if (current) {
        current.textContent = language.label;
      }

      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }

      options.forEach((option) => {
        const isActive = option.dataset.lang === languageCode;
        option.classList.toggle("is-active", isActive);
        option.setAttribute("aria-checked", String(isActive));
      });

      picker.classList.remove("is-open");
    });

    window.siteTranslator?.render(currentLanguageCode);
    window.requestAnimationFrame(() => {
      updateCatalogUi();
      updateSearchUi();
    });
  };

  applyLanguageSelection(activeLanguage);

  languagePickers.forEach((picker) => {
    const trigger = picker.querySelector("[data-language-trigger]");

    trigger?.addEventListener("click", () => {
      const willOpen = !picker.classList.contains("is-open");

      languagePickers.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
      });

      picker.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    picker.querySelectorAll("[data-language-option]").forEach((option) => {
      option.addEventListener("click", () => {
        const nextLanguage = option.dataset.lang || defaultLanguage;
        activeLanguage = supportedLanguages[nextLanguage] ? nextLanguage : defaultLanguage;

        try {
          window.localStorage.setItem(languageStorageKey, activeLanguage);
        } catch (error) {
          // Ignore storage issues and still update the current page state.
        }

        applyLanguageSelection(activeLanguage);
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-language-picker]")) {
      return;
    }

    languagePickers.forEach((picker) => {
      picker.classList.remove("is-open");
      picker.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    languagePickers.forEach((picker) => {
      picker.classList.remove("is-open");
      picker.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
    });
  });
}

if (languagePickers.length === 0) {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage && supportedLanguages[savedLanguage]) {
      currentLanguageCode = savedLanguage;
    }
  } catch (error) {
    currentLanguageCode = "zh";
  }

  window.siteTranslator?.render(currentLanguageCode);
  window.requestAnimationFrame(() => {
    updateCatalogUi();
    updateSearchUi();
  });
}

const armHomeEntryAnimation = () => {
  if (document.body?.dataset.page !== "home") {
    return;
  }

  if (!document.documentElement.classList.contains("home-transition-armed")) {
    return;
  }

  if (prefersReducedMotion) {
    try {
      sessionStorage.removeItem(homeTransitionFlag);
    } catch (error) {
      // Ignore storage access issues and keep the page usable.
    }
    document.documentElement.classList.remove("home-transition-armed");
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add("is-home-entered");
    });
  });

  window.setTimeout(() => {
    document.documentElement.classList.remove("home-transition-armed");
    try {
      sessionStorage.removeItem(homeTransitionFlag);
    } catch (error) {
      // Ignore storage access issues and keep the page usable.
    }
  }, 900);
};

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href]');
  if (!link) {
    return;
  }

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    link.target === "_blank" ||
    link.hasAttribute("download") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return;
  }

  const destination = new URL(link.href, window.location.href);
  const current = new URL(window.location.href);
  const isHomeNavigation =
    destination.origin === current.origin &&
    destination.pathname === current.pathname.replace(/[^/]*$/, "index.html") &&
    destination.pathname !== current.pathname;

  if (!isHomeNavigation || document.body?.dataset.page === "home") {
    return;
  }

  if (prefersReducedMotion) {
    return;
  }

  event.preventDefault();

  try {
    sessionStorage.setItem(homeTransitionFlag, "1");
  } catch (error) {
    // Ignore storage access issues and continue with the navigation.
  }

  document.body.classList.add("is-transitioning-home");
  window.setTimeout(() => {
    window.location.href = destination.href;
  }, 220);
});

armHomeEntryAnimation();

const searchUiCopy = {
  en: {
    title: "Search archive",
    placeholder: "Search by item or category",
    close: "Close",
    empty: "No matching pieces or categories.",
    itemType: "Piece",
    categoryType: "Category",
  },
  zh: {
    title: "搜索档案单品",
    placeholder: "搜索具体衣服或品类",
    close: "关闭",
    empty: "没有找到对应的单品或品类。",
    itemType: "单品",
    categoryType: "品类",
  },
};

const catalogUiCopy = {
  en: { viewDetails: "View details" },
  zh: { viewDetails: "查看详情" },
};

const categoryLabels = {
  outerwear: { en: "Outerwear", zh: "外套", de: "Outerwear", it: "Outerwear", fr: "Outerwear", ja: "アウター", es: "Outerwear", ru: "Верхняя одежда", ko: "아우터" },
  set: { en: "Set", zh: "套装", de: "Set", it: "Set", fr: "Set", ja: "セット", es: "Set", ru: "Комплект", ko: "세트" },
  layering: { en: "Layering", zh: "叠穿", de: "Layering", it: "Layering", fr: "Layering", ja: "レイヤリング", es: "Layering", ru: "Слои", ko: "레이어링" },
  eyewear: { en: "Eyewear", zh: "眼镜", de: "Brillen", it: "Occhiali", fr: "Lunettes", ja: "アイウェア", es: "Gafas", ru: "Очки", ko: "아이웨어" },
  tshirt: { en: "T-Shirt", zh: "T恤", de: "T-Shirts", it: "T-Shirt", fr: "T-Shirts", ja: "Tシャツ", es: "T-Shirts", ru: "Футболки", ko: "티셔츠" },
  shoes: { en: "Shoes", zh: "鞋子", de: "Schuhe", it: "Scarpe", fr: "Chaussures", ja: "シューズ", es: "Zapatos", ru: "Обувь", ko: "슈즈" },
};
let activeCatalogProduct = null;

const searchCatalog = [
  ...catalogProducts.map((product) => ({
    type: "item",
    slug: product.slug,
    title: pickCatalogText(product.name, "en"),
    category: product.category,
    description: pickCatalogText(product.cardCaption, "en"),
    href: `product.html?item=${product.slug}`,
    tokens: [pickCatalogText(product.name, "en"), pickCatalogText(product.name, "zh"), ...(product.searchTokens || [])],
  })),
  ...["outerwear", "set", "layering", "eyewear", "tshirt", "shoes"].map((category) => ({
    type: "category",
    slug: category,
    title: category,
    category,
    description: "",
    href: `shop.html?category=${category}`,
    tokens: [category, ...Object.values(categoryLabels[category])],
  })),
];

const searchOverlay = document.querySelector("[data-search-overlay]");
const searchTriggers = document.querySelectorAll("[data-search-trigger]");
const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");
const searchShortcuts = document.querySelector("[data-search-shortcuts]");
const searchTitle = document.querySelector("[data-search-title]");
const searchCloseButtons = document.querySelectorAll("[data-search-close]");

function normalizeSearchValue(value) {
  return (value || "")
    .toString()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getSearchLanguagePack() {
  return searchUiCopy[currentLanguageCode] || searchUiCopy.en;
}

function getCatalogUiPack() {
  return catalogUiCopy[currentLanguageCode] || catalogUiCopy.en;
}

function getCategoryLabel(category) {
  const labels = categoryLabels[category];
  if (!labels) {
    return category;
  }

  return labels[currentLanguageCode] || labels.zh || labels.en;
}

function renderShopCatalog() {
  const shopGrid = document.querySelector("[data-shop-grid]");
  if (!shopGrid) {
    return;
  }

  const ui = getCatalogUiPack();
  shopGrid.innerHTML = catalogProducts
    .map((product) => {
      const name = pickCatalogText(product.name);
      const category = pickCatalogText(product.cardCategory);
      const caption = pickCatalogText(product.cardCaption);
      return `
        <article class="product-card" data-category="${product.category}" data-delivery="${product.delivery}" data-item="${product.slug}">
          <img src="${product.image}" alt="${name}">
          <div class="product-card-copy">
            <p>${category}</p>
            <h3 class="editorial-title">${name}</h3>
            <span class="product-price">${product.price}</span>
            <span class="product-caption">${caption}</span>
            <a class="inline-link" href="product.html?item=${product.slug}">${ui.viewDetails}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function getActiveProduct() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("item");
  return catalogProducts.find((product) => product.slug === requested) || catalogProducts[0] || null;
}

function renderProductCatalog() {
  const productPanel = document.querySelector("[data-product-panel]");
  if (!productPanel) {
    return null;
  }

  const product = getActiveProduct();
  if (!product) {
    return null;
  }

  const image = document.querySelector("[data-product-image]");
  const title = document.querySelector("[data-product-title]");
  const price = document.querySelector("[data-product-price]");
  const intro = document.querySelector("[data-product-intro]");
  const color = document.querySelector("[data-product-color]");
  const availability = document.querySelector("[data-product-availability]");
  const shipping = document.querySelector("[data-product-shipping]");
  const sizes = productPanel.querySelector("[data-size-selector]");
  const features = productPanel.querySelector("[data-product-features]");
  const condition = productPanel.querySelector("[data-product-condition]");
  const source = productPanel.querySelector("[data-product-source]");
  const backLink = productPanel.querySelector("[data-product-back]");

  if (image) {
    image.src = product.image;
    image.alt = pickCatalogText(product.name);
  }

  if (title) title.textContent = pickCatalogText(product.name);
  document.title = `all black - ${pickCatalogText(product.name)}`;
  if (price) price.textContent = product.price;
  if (intro) intro.textContent = pickCatalogText(product.intro);
  if (color) color.textContent = pickCatalogText(product.color);
  if (availability) availability.textContent = pickCatalogText(product.availability);
  if (shipping) shipping.textContent = pickCatalogText(product.shipping);
  if (condition) condition.textContent = pickCatalogText(product.details?.condition);
  if (source) source.textContent = pickCatalogText(product.details?.source);
  if (backLink) backLink.href = `shop.html?category=${product.category}`;

  if (sizes) {
    sizes.innerHTML = (product.sizes || []).map((size) => {
      const active = size === product.defaultSize;
      return `<button class="filter-chip${active ? " active" : ""}" type="button" data-size="${size}" aria-pressed="${active}">${size}</button>`;
    }).join("");
  }

  if (features) {
    features.innerHTML = (pickCatalogText(product.features) || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  return product;
}

function updateCatalogUi() {
  renderShopCatalog();
  activeCatalogProduct = renderProductCatalog();
  if (window.applyShopFilters) {
    window.applyShopFilters();
  }
  if (window.rebindProductInteractions) {
    window.rebindProductInteractions();
  }
  return activeCatalogProduct;
}

function createSearchResult(entry) {
  const labels = getSearchLanguagePack();
  const result = document.createElement("a");
  result.className = "search-result";
  result.href = entry.href;

  const type = document.createElement("span");
  type.className = "search-result-type";
  type.textContent = entry.type === "item" ? labels.itemType : labels.categoryType;

  const title = document.createElement("strong");
  title.className = `search-result-title${entry.type === "item" ? " editorial-title" : ""}`;
  title.textContent = entry.type === "category" ? getCategoryLabel(entry.category) : entry.title;

  const meta = document.createElement("span");
  meta.className = "search-result-meta";
  meta.textContent = entry.type === "category" ? getCategoryLabel(entry.category) : `${getCategoryLabel(entry.category)} / ${entry.description}`;

  result.append(type, title, meta);
  return result;
}

function renderSearchResults(query = "") {
  if (!searchResults || !searchShortcuts) {
    return;
  }

  const labels = getSearchLanguagePack();
  const normalizedQuery = normalizeSearchValue(query);
  searchResults.innerHTML = "";
  searchShortcuts.innerHTML = "";

  ["outerwear", "set", "layering", "eyewear", "tshirt", "shoes"].forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-tag";
    button.textContent = getCategoryLabel(category);
    button.addEventListener("click", () => {
      window.location.href = `shop.html?category=${category}`;
    });
    searchShortcuts.appendChild(button);
  });

  const matches = normalizedQuery
    ? searchCatalog.filter((entry) => entry.tokens.some((token) => normalizeSearchValue(token).includes(normalizedQuery)))
    : searchCatalog.filter((entry) => entry.type === "item").slice(0, 6);

  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = labels.empty;
    searchResults.appendChild(empty);
    return;
  }

  matches.slice(0, 8).forEach((entry) => {
    searchResults.appendChild(createSearchResult(entry));
  });
}

function updateSearchUi() {
  if (!searchOverlay) {
    return;
  }

  const labels = getSearchLanguagePack();

  if (searchTitle) {
    searchTitle.textContent = labels.title;
  }

  searchCloseButtons.forEach((button) => {
    if (button.classList.contains("search-close")) {
      button.textContent = labels.close;
    }
  });

  if (searchInput) {
    searchInput.placeholder = labels.placeholder;
  }

  renderSearchResults(searchInput?.value || "");
}

if (searchOverlay && searchInput && searchResults) {
  const openSearch = () => {
    searchOverlay.hidden = false;
    document.body.classList.add("is-search-open");
    updateSearchUi();
    window.requestAnimationFrame(() => {
      searchInput.focus();
      searchInput.select();
    });
  };

  const closeSearch = () => {
    searchOverlay.hidden = true;
    document.body.classList.remove("is-search-open");
  };

  searchTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openSearch);
  });

  searchCloseButtons.forEach((button) => {
    button.addEventListener("click", closeSearch);
  });

  searchInput.addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  document.addEventListener("keydown", (event) => {
    const isTyping =
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target?.isContentEditable;

    if ((event.key === "/" && !isTyping) || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k")) {
      event.preventDefault();
      openSearch();
      return;
    }

    if (event.key === "Escape" && !searchOverlay.hidden) {
      closeSearch();
    }
  });
}

const hero = document.querySelector("[data-motion-hero]");

if (hero) {
  let scrollFrame = 0;

  const updateScrollMotion = () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
    const shift = (progress - 0.5) * 90;

    hero.style.setProperty("--hero-progress", progress.toFixed(4));
    hero.style.setProperty("--hero-shift", `${shift.toFixed(2)}px`);
    scrollFrame = 0;
  };

  if (!prefersReducedMotion) {
    const requestScrollUpdate = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScrollMotion);
      }
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    updateScrollMotion();
  } else {
    hero.style.setProperty("--hero-progress", "0");
    hero.style.setProperty("--hero-shift", "0px");
  }
}

const revealItems = document.querySelectorAll("[data-reveal]");

if (revealItems.length > 0) {
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
}

const shopControls = document.querySelector("[data-shop-controls]");
const shopGrid = document.querySelector("[data-shop-grid]");

if (shopControls && shopGrid) {
  const params = new URLSearchParams(window.location.search);
  const state = {
    category: params.get("category") || "all",
    delivery: params.get("delivery") || "all",
    item: params.get("item") || "all",
  };

  const buttons = Array.from(shopControls.querySelectorAll("[data-filter-group]"));

  const applyFilters = () => {
    const cards = Array.from(shopGrid.querySelectorAll("[data-category][data-delivery][data-item]"));
    cards.forEach((card) => {
      const categoryMatch = state.category === "all" || card.dataset.category === state.category;
      const deliveryMatch = state.delivery === "all" || card.dataset.delivery === state.delivery;
      const itemMatch = state.item === "all" || card.dataset.item === state.item;
      const visible = categoryMatch && deliveryMatch && itemMatch;

      card.hidden = !visible;
      card.classList.toggle("is-filtered-out", !visible);
    });
  };

  buttons.forEach((button) => {
    const group = button.dataset.filterGroup;
    const value = button.dataset.filterValue;
    const active = state[group] === value;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  shopControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-group]");
    if (!button) {
      return;
    }

    const group = button.dataset.filterGroup;
    const value = button.dataset.filterValue;
    state[group] = value;
    state.item = "all";

    buttons
      .filter((item) => item.dataset.filterGroup === group)
      .forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

    applyFilters();
  });

  window.applyShopFilters = applyFilters;
  applyFilters();
}

const productPanel = document.querySelector("[data-product-panel]");

if (productPanel) {
  const addToBagButton = productPanel.querySelector("[data-add-to-bag]");
  const saveButton = productPanel.querySelector("[data-save-item]");
  const feedback = productPanel.querySelector("[data-product-feedback]");
  let selectedSize = activeCatalogProduct?.defaultSize || getActiveProduct()?.defaultSize || "S";
  const runtimeText = (key, size = "") => {
    const currentProduct = activeCatalogProduct || getActiveProduct();
    const runtime = window.siteTranslator?.getRuntime(currentLanguageCode);
    const template = runtime?.[key] || "";
    return template
      .replace("Archive Leather Trench", pickCatalogText(currentProduct?.name) || "Archive Leather Trench")
      .replace("{size}", size);
  };

  const updateFeedback = (message) => {
    if (feedback) {
      feedback.textContent = message;
    }
  };

  const bindSizeButtons = () => {
    const sizeButtons = Array.from(productPanel.querySelectorAll("[data-size]"));
    const currentProduct = activeCatalogProduct || getActiveProduct();
    selectedSize = currentProduct?.defaultSize || sizeButtons.find((button) => button.classList.contains("active"))?.dataset.size || "S";

    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedSize = button.dataset.size || selectedSize;

        sizeButtons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        updateFeedback(runtimeText("selected", selectedSize));
      });
    });
  };

  window.rebindProductInteractions = bindSizeButtons;
  bindSizeButtons();

  if (addToBagButton) {
    addToBagButton.addEventListener("click", () => {
      updateFeedback(runtimeText("added", selectedSize));
      addToBagButton.textContent = runtimeText("addedBtn");
      window.setTimeout(() => {
        addToBagButton.textContent = runtimeText("addBtn");
      }, 1400);
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      const active = saveButton.getAttribute("aria-pressed") !== "true";
      saveButton.setAttribute("aria-pressed", String(active));
      saveButton.classList.toggle("active", active);
      saveButton.textContent = active ? runtimeText("savedBtn") : runtimeText("saveBtn");
      updateFeedback(active ? runtimeText("saved") : runtimeText("unsaved"));
    });
  }
}
