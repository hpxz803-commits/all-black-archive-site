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

const rawCatalogProducts = window.catalogData?.products || [];

function formatCatalogPrice(pricing, fallbackCurrency = window.catalogData?.currency || "EUR") {
  if (!pricing || typeof pricing !== "object") {
    return "";
  }

  const amount = Number(pricing.amount);
  if (!Number.isFinite(amount)) {
    return "";
  }

  const currency = pricing.currency || fallbackCurrency;
  const locale = window.catalogData?.locale || "en-US";

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    return `${currency} ${amount}`;
  }
}

function normalizeCatalogProduct(product) {
  const gallery = (product.media?.gallery || [product.media?.cover || ""])
    .filter(Boolean)
    .map((src, index) => ({
      src,
      alt: pickCatalogText(product.copy?.name || "") || `Gallery image ${index + 1}`,
    }));

  return {
    id: product.id,
    slug: product.slug,
    category: product.category,
    image: product.media?.cover || "",
    gallery,
    price: formatCatalogPrice(product.pricing),
    delivery: product.fulfillment?.type || "ready",
    color: product.attributes?.color || "",
    availability: product.inventory?.quantityLabel || "",
    shipping: product.fulfillment?.leadTime || "",
    sizes: product.sizing?.options || [],
    defaultSize: product.sizing?.default || "",
    name: product.copy?.name || "",
    cardCategory: product.copy?.categoryLabel || "",
    cardCaption: product.copy?.cardCaption || "",
    intro: product.copy?.intro || "",
    features: product.copy?.features || [],
    details: {
      condition: product.notes?.condition || "",
      source: product.notes?.source || "",
    },
    metadata: {
      conditionGrade: product.attributes?.conditionGrade || "",
      designer: product.attributes?.designer || "",
      origin: product.attributes?.origin || "",
      era: product.attributes?.era || "",
      status: product.inventory?.status || "",
      quantityLabel: product.inventory?.quantityLabel || "",
      oneOfAKind: Boolean(product.inventory?.oneOfAKind),
    },
    searchTokens: product.searchTokens || [],
  };
}

const catalogProducts = rawCatalogProducts.map(normalizeCatalogProduct);

const catalogInteractionCopy = {
  en: {
    quickView: "Quick view",
    close: "Close",
    viewDetails: "View details",
    previous: "Previous piece",
    next: "Next piece",
  },
  zh: {
    quickView: "快速查看",
    close: "关闭",
    viewDetails: "查看详情",
    previous: "上一件单品",
    next: "下一件单品",
  },
};

function getCatalogInteractionPack() {
  return catalogInteractionCopy[currentLanguageCode] || catalogInteractionCopy.en;
}

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

const mobileNavQuery = window.matchMedia("(max-width: 720px)");
const navDropdowns = document.querySelectorAll(".nav-dropdown");
const mobileHeaders = document.querySelectorAll("[data-mobile-header]");

function closeMobileHeaderMenus() {
  mobileHeaders.forEach((header) => {
    header.classList.remove("is-mobile-menu-open");
    header.querySelector("[data-mobile-menu-button]")?.setAttribute("aria-expanded", "false");
  });
  document.body.classList.remove("is-mobile-menu-open");
}

if (mobileHeaders.length > 0) {
  mobileHeaders.forEach((header) => {
    const toggleButton = header.querySelector("[data-mobile-menu-button]");
    const panel = header.querySelector("[data-mobile-menu-panel]");

    toggleButton?.addEventListener("click", () => {
      if (!mobileNavQuery.matches) {
        return;
      }

      const willOpen = !header.classList.contains("is-mobile-menu-open");
      closeMobileHeaderMenus();

      if (willOpen) {
        header.classList.add("is-mobile-menu-open");
        toggleButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("is-mobile-menu-open");
      }
    });

    panel?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (!mobileNavQuery.matches || event.defaultPrevented) {
          return;
        }

        closeMobileHeaderMenus();
      });
    });

    panel?.querySelectorAll("[data-language-option]").forEach((option) => {
      option.addEventListener("click", () => {
        if (!mobileNavQuery.matches) {
          return;
        }

        closeMobileHeaderMenus();
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileNavQuery.matches || event.target.closest("[data-mobile-header]")) {
      return;
    }

    closeMobileHeaderMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileHeaderMenus();
    }
  });

  mobileNavQuery.addEventListener("change", () => {
    closeMobileHeaderMenus();
  });
}

if (navDropdowns.length > 0) {
  const closeMobileNavMenus = () => {
    navDropdowns.forEach((dropdown) => dropdown.classList.remove("is-open"));
  };

  navDropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(":scope > .nav-link");
    const menu = dropdown.querySelector(".nav-menu");

    trigger?.addEventListener("click", (event) => {
      if (!mobileNavQuery.matches || !menu) {
        return;
      }

      const isOpen = dropdown.classList.contains("is-open");
      if (!isOpen) {
        event.preventDefault();
        closeMobileNavMenus();
        dropdown.classList.add("is-open");
      }
    });

    menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileNavMenus();
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".nav-dropdown")) {
      return;
    }

    closeMobileNavMenus();
  });

  mobileNavQuery.addEventListener("change", () => {
    closeMobileNavMenus();
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
  const interactionUi = getCatalogInteractionPack();
  shopGrid.innerHTML = catalogProducts
    .map((product) => {
      const name = pickCatalogText(product.name);
      const category = pickCatalogText(product.cardCategory);
      const caption = pickCatalogText(product.cardCaption);
      const href = `product.html?item=${product.slug}`;
      return `
        <article class="product-card is-clickable" data-category="${product.category}" data-delivery="${product.delivery}" data-item="${product.slug}" data-href="${href}" tabindex="0" role="link" aria-label="${name}">
          <img src="${product.image}" alt="${name}">
          <div class="product-card-copy">
            <p>${category}</p>
            <h3 class="editorial-title">${name}</h3>
            <span class="product-price">${product.price}</span>
            <span class="product-caption">${caption}</span>
            <div class="product-card-actions">
              <button class="inline-link inline-link-button" type="button" data-quick-view-trigger data-item="${product.slug}">${interactionUi.quickView}</button>
              <a class="inline-link" href="${href}">${ui.viewDetails}</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  shopGrid.querySelectorAll(".product-card.is-clickable").forEach((card) => {
    const href = card.dataset.href;
    if (!href) {
      return;
    }

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }

      window.location.href = href;
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      if (event.target.closest("a, button")) {
        return;
      }

      event.preventDefault();
      window.location.href = href;
    });
  });

  bindQuickViewTriggers();
}

function getActiveProduct() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("item");
  return catalogProducts.find((product) => product.slug === requested) || catalogProducts[0] || null;
}

function bindProductGallery(product) {
  const image = document.querySelector("[data-product-image]");
  const nextImage = document.querySelector("[data-product-image-next]");
  const shell = document.querySelector("[data-gallery-shell]");
  const thumbs = document.querySelector("[data-gallery-thumbs]");
  const prevButton = document.querySelector("[data-gallery-prev]");
  const nextButton = document.querySelector("[data-gallery-next]");
  const counter = document.querySelector("[data-gallery-counter]");
  const lightbox = document.querySelector("[data-gallery-lightbox]");
  const lightboxImage = document.querySelector("[data-gallery-lightbox-image]");
  const lightboxCounter = document.querySelector("[data-gallery-lightbox-counter]");
  const lightboxPrev = document.querySelector("[data-gallery-lightbox-prev]");
  const lightboxNext = document.querySelector("[data-gallery-lightbox-next]");
  const lightboxCloseButtons = document.querySelectorAll("[data-gallery-lightbox-close]");

  if (!image || !nextImage || !shell || !thumbs || !product) {
    return;
  }

  const gallery = product.gallery?.length ? product.gallery : [{ src: product.image, alt: pickCatalogText(product.name) }];
  let activeIndex = 0;
  let thumbButtons = [];
  let currentDirection = "next";
  let transitionTimer = 0;
  let zoomOpen = false;

  thumbs.innerHTML = gallery
    .map((item, index) => {
      const isActive = index === activeIndex;
      return `
        <button class="gallery-thumb${isActive ? " is-active" : ""}" type="button" data-gallery-index="${index}" aria-pressed="${isActive}" aria-label="View image ${index + 1}">
          <img src="${item.src}" alt="${item.alt || pickCatalogText(product.name)}">
        </button>
      `;
    })
    .join("");

  thumbButtons = Array.from(thumbs.querySelectorAll("[data-gallery-index]"));

  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.galleryIndex) || 0;
      currentDirection = nextIndex >= activeIndex ? "next" : "prev";
      activeIndex = nextIndex;
      renderGallery(true);
    });
  });

  const syncThumbState = () => {
    thumbButtons.forEach((button) => {
      const index = Number(button.dataset.galleryIndex) || 0;
      const isActive = index === activeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const renderLightbox = () => {
    if (!lightbox || !lightboxImage) {
      return;
    }

    const activeImage = gallery[activeIndex] || gallery[0];
    lightboxImage.src = activeImage.src;
    lightboxImage.alt = activeImage.alt || pickCatalogText(product.name);

    if (lightboxCounter) {
      const current = String(activeIndex + 1).padStart(2, "0");
      const total = String(gallery.length).padStart(2, "0");
      lightboxCounter.textContent = `${current} / ${total}`;
    }
  };

  const closeLightbox = () => {
    if (!lightbox) {
      return;
    }

    zoomOpen = false;
    lightbox.hidden = true;
    document.body.classList.remove("is-gallery-zoom-open");
  };

  const openLightbox = () => {
    if (!lightbox) {
      return;
    }

    zoomOpen = true;
    renderLightbox();
    lightbox.hidden = false;
    document.body.classList.add("is-gallery-zoom-open");
  };

  const renderGallery = (withTransition = false) => {
    const activeImage = gallery[activeIndex] || gallery[0];

    if (withTransition) {
      window.clearTimeout(transitionTimer);
      shell.dataset.direction = currentDirection;
      nextImage.src = activeImage.src;
      nextImage.alt = activeImage.alt || pickCatalogText(product.name);
      shell.classList.add("is-transitioning");

      transitionTimer = window.setTimeout(() => {
        shell.classList.add("is-resetting");
        image.src = activeImage.src;
        image.alt = activeImage.alt || pickCatalogText(product.name);
        shell.classList.remove("is-transitioning");
        nextImage.src = activeImage.src;
        nextImage.alt = activeImage.alt || pickCatalogText(product.name);
        window.requestAnimationFrame(() => {
          shell.classList.remove("is-resetting");
        });
      }, 420);
    } else {
      window.clearTimeout(transitionTimer);
      image.src = activeImage.src;
      image.alt = activeImage.alt || pickCatalogText(product.name);
      nextImage.src = activeImage.src;
      nextImage.alt = activeImage.alt || pickCatalogText(product.name);
      shell.classList.remove("is-resetting");
      shell.classList.remove("is-transitioning");
    }

    if (counter) {
      const current = String(activeIndex + 1).padStart(2, "0");
      const total = String(gallery.length).padStart(2, "0");
      counter.textContent = `${current} / ${total}`;
    }

    syncThumbState();
    if (zoomOpen) {
      renderLightbox();
    }

    const showNav = gallery.length > 1;
    if (prevButton) {
      prevButton.hidden = !showNav;
      prevButton.disabled = !showNav;
    }

    if (nextButton) {
      nextButton.hidden = !showNav;
      nextButton.disabled = !showNav;
    }
  };

  if (prevButton) {
    prevButton.onclick = () => {
      currentDirection = "prev";
      activeIndex = (activeIndex - 1 + gallery.length) % gallery.length;
      renderGallery(true);
    };
  }

  if (nextButton) {
    nextButton.onclick = () => {
      currentDirection = "next";
      activeIndex = (activeIndex + 1) % gallery.length;
      renderGallery(true);
    };
  }

  shell.onclick = (event) => {
    if (event.target.closest("[data-gallery-prev], [data-gallery-next]")) {
      return;
    }

    openLightbox();
  };

  if (lightboxPrev) {
    lightboxPrev.onclick = () => {
      currentDirection = "prev";
      activeIndex = (activeIndex - 1 + gallery.length) % gallery.length;
      renderGallery(false);
    };
  }

  if (lightboxNext) {
    lightboxNext.onclick = () => {
      currentDirection = "next";
      activeIndex = (activeIndex + 1) % gallery.length;
      renderGallery(false);
    };
  }

  lightboxCloseButtons.forEach((button) => {
    button.onclick = closeLightbox;
  });

  renderGallery(false);
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
  const prevLink = productPanel.querySelector("[data-product-prev]");
  const nextLink = productPanel.querySelector("[data-product-next]");
  const interactionUi = getCatalogInteractionPack();

  bindProductGallery(product);

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

  const currentIndex = catalogProducts.findIndex((item) => item.slug === product.slug);
  const previousProduct = currentIndex > 0 ? catalogProducts[currentIndex - 1] : catalogProducts[catalogProducts.length - 1];
  const nextProduct = currentIndex < catalogProducts.length - 1 ? catalogProducts[currentIndex + 1] : catalogProducts[0];

  if (prevLink && previousProduct) {
    prevLink.href = `product.html?item=${previousProduct.slug}`;
    prevLink.textContent = `${interactionUi.previous} / ${pickCatalogText(previousProduct.name)}`;
  }

  if (nextLink && nextProduct) {
    nextLink.href = `product.html?item=${nextProduct.slug}`;
    nextLink.textContent = `${interactionUi.next} / ${pickCatalogText(nextProduct.name)}`;
  }

  return product;
}

function updateCatalogUi() {
  renderShopCatalog();
  activeCatalogProduct = renderProductCatalog();
  if (activeQuickViewProduct) {
    const refreshed = catalogProducts.find((item) => item.slug === activeQuickViewProduct.slug);
    if (refreshed) {
      renderQuickView(refreshed);
    }
  }
  if (window.applyShopFilters) {
    window.applyShopFilters();
  }
  if (window.rebindProductInteractions) {
    window.rebindProductInteractions();
  }
  return activeCatalogProduct;
}

const quickViewOverlay = document.querySelector("[data-quick-view-overlay]");
const quickViewImage = document.querySelector("[data-quick-view-image]");
const quickViewCategory = document.querySelector("[data-quick-view-category]");
const quickViewTitle = document.querySelector("[data-quick-view-title]");
const quickViewPrice = document.querySelector("[data-quick-view-price]");
const quickViewCaption = document.querySelector("[data-quick-view-caption]");
const quickViewIntro = document.querySelector("[data-quick-view-intro]");
const quickViewDetails = document.querySelector("[data-quick-view-details]");
const quickViewKicker = document.querySelector("[data-quick-view-kicker]");
const quickViewCloseButtons = document.querySelectorAll("[data-quick-view-close]");
let activeQuickViewProduct = null;

function renderQuickView(product) {
  if (!product || !quickViewOverlay) {
    return;
  }

  const interactionUi = getCatalogInteractionPack();
  activeQuickViewProduct = product;

  if (quickViewKicker) {
    quickViewKicker.textContent = interactionUi.quickView;
  }

  if (quickViewImage) {
    quickViewImage.src = product.image;
    quickViewImage.alt = pickCatalogText(product.name);
  }

  if (quickViewCategory) {
    quickViewCategory.textContent = pickCatalogText(product.cardCategory);
  }

  if (quickViewTitle) {
    quickViewTitle.textContent = pickCatalogText(product.name);
  }

  if (quickViewPrice) {
    quickViewPrice.textContent = product.price;
  }

  if (quickViewCaption) {
    quickViewCaption.textContent = pickCatalogText(product.cardCaption);
  }

  if (quickViewIntro) {
    quickViewIntro.textContent = pickCatalogText(product.intro);
  }

  if (quickViewDetails) {
    quickViewDetails.href = `product.html?item=${product.slug}`;
    quickViewDetails.textContent = interactionUi.viewDetails;
  }

  quickViewCloseButtons.forEach((button) => {
    if (button.classList.contains("search-close") || button.classList.contains("button")) {
      button.textContent = interactionUi.close;
    }
  });
}

function closeQuickView() {
  if (!quickViewOverlay) {
    return;
  }

  quickViewOverlay.hidden = true;
  document.body.classList.remove("is-quick-view-open");
}

function openQuickView(product) {
  if (!product || !quickViewOverlay) {
    return;
  }

  renderQuickView(product);
  quickViewOverlay.hidden = false;
  document.body.classList.add("is-quick-view-open");
}

function bindQuickViewTriggers() {
  if (!quickViewOverlay) {
    return;
  }

  document.querySelectorAll("[data-quick-view-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const slug = trigger.dataset.item;
      const product = catalogProducts.find((item) => item.slug === slug);
      openQuickView(product || null);
    });
  });
}

if (quickViewOverlay) {
  quickViewCloseButtons.forEach((button) => {
    button.addEventListener("click", closeQuickView);
  });
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
    closeMobileHeaderMenus();
    closeQuickView();
    document.querySelector("[data-gallery-lightbox-close]")?.click();
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
      return;
    }

    if (event.key === "Escape" && quickViewOverlay && !quickViewOverlay.hidden) {
      closeQuickView();
      return;
    }

    const galleryLightbox = document.querySelector("[data-gallery-lightbox]");
    if (event.key === "Escape" && galleryLightbox && !galleryLightbox.hidden) {
      document.querySelector("[data-gallery-lightbox-close]")?.click();
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
