const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = reducedMotionQuery.matches;
const homeTransitionFlag = "home-entry-transition";
const languageStorageKey = "site-language";
const regionStorageKey = "site-region";
const currencyStorageKey = "site-currency";
const siteContactConfig = Object.freeze({
  whatsapp: Object.freeze({
    phone: "393475681155",
    customerPrefill: "",
  }),
});
let currentLanguageCode = "zh";
let currentRegionCode = "IT";
let currentCurrencyCode = "EUR";
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

const supportedRegions = {
  IT: { currency: "EUR", labels: { en: "Italy", zh: "意大利", de: "Italien", it: "Italia", fr: "Italie", ja: "イタリア", es: "Italia", ru: "Италия", ko: "이탈리아" } },
  DE: { currency: "EUR", labels: { en: "Germany", zh: "德国", de: "Deutschland", it: "Germania", fr: "Allemagne", ja: "ドイツ", es: "Alemania", ru: "Германия", ko: "독일" } },
  FR: { currency: "EUR", labels: { en: "France", zh: "法国", de: "Frankreich", it: "Francia", fr: "France", ja: "フランス", es: "Francia", ru: "Франция", ko: "프랑스" } },
  ES: { currency: "EUR", labels: { en: "Spain", zh: "西班牙", de: "Spanien", it: "Spagna", fr: "Espagne", ja: "スペイン", es: "España", ru: "Испания", ko: "스페인" } },
  GB: { currency: "GBP", labels: { en: "United Kingdom", zh: "英国", de: "Vereinigtes Königreich", it: "Regno Unito", fr: "Royaume-Uni", ja: "イギリス", es: "Reino Unido", ru: "Великобритания", ko: "영국" } },
  US: { currency: "USD", labels: { en: "United States", zh: "美国", de: "Vereinigte Staaten", it: "Stati Uniti", fr: "États-Unis", ja: "アメリカ", es: "Estados Unidos", ru: "США", ko: "미국" } },
  JP: { currency: "JPY", labels: { en: "Japan", zh: "日本", de: "Japan", it: "Giappone", fr: "Japon", ja: "日本", es: "Japón", ru: "Япония", ko: "일본" } },
  KR: { currency: "KRW", labels: { en: "South Korea", zh: "韩国", de: "Südkorea", it: "Corea del Sud", fr: "Corée du Sud", ja: "韓国", es: "Corea del Sur", ru: "Южная Корея", ko: "대한민국" } },
  CN: { currency: "CNY", labels: { en: "China", zh: "中国", de: "China", it: "Cina", fr: "Chine", ja: "中国", es: "China", ru: "Китай", ko: "중국" } },
  INTL: { currency: "EUR", labels: { en: "Other destination", zh: "其他地区", de: "Anderes Ziel", it: "Altra destinazione", fr: "Autre destination", ja: "その他の地域", es: "Otro destino", ru: "Другой регион", ko: "기타 지역" } },
};

const supportedCurrencies = {
  EUR: { label: "EUR", symbol: "€" },
  USD: { label: "USD", symbol: "$" },
  GBP: { label: "GBP", symbol: "£" },
  JPY: { label: "JPY", symbol: "¥" },
  CNY: { label: "CNY", symbol: "¥" },
  KRW: { label: "KRW", symbol: "₩" },
};

// Fixed preview rates keep the prototype deterministic. Live checkout must price server-side.
const currencyRatesPerEuro = Object.freeze({ EUR: 1, USD: 1.08, GBP: 0.86, JPY: 164, CNY: 7.82, KRW: 1580 });
const preferenceCopy = {
  en: { title: "Regional settings", language: "Language", region: "Ship to", currency: "Currency", defaultCurrency: "Regional default", note: "Region selects a local currency automatically. You can change it manually; final pricing is confirmed at checkout." },
  zh: { title: "区域设置", language: "语言", region: "配送地区", currency: "货币", defaultCurrency: "地区默认", note: "选择地区会自动匹配当地货币，也可手动调整；最终价格将在结账时确认。" },
  de: { title: "Regionale Einstellungen", language: "Sprache", region: "Versand nach", currency: "Währung", defaultCurrency: "Regionaler Standard", note: "Die Region wählt automatisch die lokale Währung. Eine manuelle Änderung ist jederzeit möglich." },
  it: { title: "Impostazioni regionali", language: "Lingua", region: "Spedisci a", currency: "Valuta", defaultCurrency: "Predefinita locale", note: "La regione seleziona automaticamente la valuta locale, modificabile manualmente." },
  fr: { title: "Paramètres régionaux", language: "Langue", region: "Livrer vers", currency: "Devise", defaultCurrency: "Devise locale", note: "La région sélectionne automatiquement la devise locale, qui reste modifiable manuellement." },
  ja: { title: "地域設定", language: "言語", region: "配送先", currency: "通貨", defaultCurrency: "地域の既定通貨", note: "地域に応じて通貨が自動選択されます。通貨は手動でも変更できます。" },
  es: { title: "Configuración regional", language: "Idioma", region: "Enviar a", currency: "Moneda", defaultCurrency: "Predeterminada local", note: "La región selecciona la moneda local automáticamente; también puedes cambiarla manualmente." },
  ru: { title: "Региональные настройки", language: "Язык", region: "Доставка", currency: "Валюта", defaultCurrency: "Валюта региона", note: "Регион автоматически выбирает местную валюту, но ее можно изменить вручную." },
  ko: { title: "지역 설정", language: "언어", region: "배송 지역", currency: "통화", defaultCurrency: "지역 기본 통화", note: "지역을 선택하면 현지 통화가 자동 적용되며, 통화는 직접 변경할 수도 있습니다." },
};

try {
  const savedRegion = window.localStorage.getItem(regionStorageKey);
  const savedCurrency = window.localStorage.getItem(currencyStorageKey);
  if (savedRegion && supportedRegions[savedRegion]) currentRegionCode = savedRegion;
  if (savedCurrency && supportedCurrencies[savedCurrency]) currentCurrencyCode = savedCurrency;
} catch (error) {
  // Storage is optional; the site still works with the defaults above.
}

const rawCatalogProducts = window.catalogData?.products || [];

function convertCatalogAmount(amount, fromCurrency, toCurrency = currentCurrencyCode) {
  const sourceRate = currencyRatesPerEuro[fromCurrency] || 1;
  const targetRate = currencyRatesPerEuro[toCurrency] || 1;
  return (Number(amount) / sourceRate) * targetRate;
}

function formatCatalogPrice(pricing, fallbackCurrency = window.catalogData?.currency || "EUR") {
  if (!pricing || typeof pricing !== "object") {
    return "";
  }

  const amount = Number(pricing.amount);
  if (!Number.isFinite(amount)) {
    return "";
  }

  const sourceCurrency = pricing.currency || fallbackCurrency;
  const currency = supportedCurrencies[currentCurrencyCode] ? currentCurrencyCode : sourceCurrency;
  const locale = supportedLanguages[currentLanguageCode]?.tag || window.catalogData?.locale || "en-US";
  const convertedAmount = convertCatalogAmount(amount, sourceCurrency, currency);

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(convertedAmount);
  } catch (error) {
    return `${currency} ${Math.round(convertedAmount)}`;
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
    variantMedia: product.media?.variants || {},
    galleryLayout: product.media?.layout || "",
    price: product.pricing?.label || "",
    priceAmount: Number.isFinite(Number(product.pricing?.amount)) ? Number(product.pricing.amount) : null,
    priceCurrency: product.pricing?.currency || window.catalogData?.currency || "EUR",
    delivery: product.fulfillment?.type || "ready",
    color: product.attributes?.color || "",
    availability: product.inventory?.quantityLabel || "",
    shipping: product.fulfillment?.leadTime || "",
    sizes: product.sizing?.options || [],
    defaultSize: product.sizing?.default || "",
    sizeLabel: product.sizing?.label || "",
    optionLabels: product.sizing?.optionLabels || {},
    selectionMessages: product.sizing?.messages || null,
    name: product.copy?.name || "",
    cardCategory: product.copy?.categoryLabel || "",
    cardCaption: product.copy?.cardCaption || "",
    intro: product.copy?.intro || "",
    features: product.copy?.features || [],
    details: {
      condition: product.notes?.condition || "",
      source: product.notes?.source || "",
      conditionLabel: product.notes?.conditionLabel || "",
      sourceLabel: product.notes?.sourceLabel || "",
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
    specifications: product.specifications || [],
    searchTokens: product.searchTokens || [],
  };
}

const catalogProducts = rawCatalogProducts.map(normalizeCatalogProduct);

function getProductDisplayPrice(product) {
  if (product?.priceAmount !== null && Number.isFinite(Number(product?.priceAmount))) {
    return formatCatalogPrice({ amount: product.priceAmount, currency: product.priceCurrency });
  }
  return pickCatalogText(product?.price);
}

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
  de: { quickView: "Schnellansicht", close: "Schließen", viewDetails: "Details ansehen", previous: "Vorheriges Stück", next: "Nächstes Stück" },
  it: { quickView: "Anteprima", close: "Chiudi", viewDetails: "Vedi dettagli", previous: "Articolo precedente", next: "Articolo successivo" },
  fr: { quickView: "Aperçu rapide", close: "Fermer", viewDetails: "Voir les détails", previous: "Pièce précédente", next: "Pièce suivante" },
  ja: { quickView: "クイックビュー", close: "閉じる", viewDetails: "詳細を見る", previous: "前のアイテム", next: "次のアイテム" },
  es: { quickView: "Vista rápida", close: "Cerrar", viewDetails: "Ver detalles", previous: "Pieza anterior", next: "Pieza siguiente" },
  ru: { quickView: "Быстрый просмотр", close: "Закрыть", viewDetails: "Подробнее", previous: "Предыдущая вещь", next: "Следующая вещь" },
  ko: { quickView: "빠른 보기", close: "닫기", viewDetails: "상세 보기", previous: "이전 상품", next: "다음 상품" },
};

const purchaseStateCopy = {
  en: { buy: "Buy now", inquiry: "Request price", reserved: "Reserved / Join waitlist", sold: "Sold / View similar", notify: "Notify me" },
  zh: { buy: "立即购买", inquiry: "咨询价格", reserved: "已被预订 / 候补咨询", sold: "已售出 / 查看相似", notify: "到货通知" },
  de: { buy: "Jetzt kaufen", inquiry: "Preis anfragen", reserved: "Reserviert / Warteliste", sold: "Verkauft / Ähnliche ansehen", notify: "Verfügbarkeit melden" },
  it: { buy: "Acquista ora", inquiry: "Richiedi il prezzo", reserved: "Riservato / Lista d'attesa", sold: "Venduto / Vedi simili", notify: "Avvisami" },
  fr: { buy: "Acheter maintenant", inquiry: "Demander le prix", reserved: "Réservé / Liste d'attente", sold: "Vendu / Voir similaire", notify: "M'alerter" },
  ja: { buy: "今すぐ購入", inquiry: "価格を問い合わせる", reserved: "予約済み / 順番待ち", sold: "売り切れ / 類似商品を見る", notify: "入荷通知" },
  es: { buy: "Comprar ahora", inquiry: "Consultar precio", reserved: "Reservado / Lista de espera", sold: "Vendido / Ver similares", notify: "Avisarme" },
  ru: { buy: "Купить сейчас", inquiry: "Узнать цену", reserved: "Зарезервировано / Лист ожидания", sold: "Продано / Похожие вещи", notify: "Сообщить о наличии" },
  ko: { buy: "바로 구매", inquiry: "가격 문의", reserved: "예약됨 / 대기 문의", sold: "판매 완료 / 유사 상품", notify: "입고 알림" },
};

function getProductPurchaseState(product) {
  const status = product?.metadata?.status || "";
  const purchasableStock = status === "in_stock" || status === "low_stock";

  if (status === "sold_out") return "sold";
  if (status === "reserved") return "reserved";
  if (status === "restockable") return "notify";
  if (status === "paused" || status === "sourcing") return "inquiry";
  if (!purchasableStock || product?.priceAmount === null) return "inquiry";
  return "buy";
}

function getCatalogInteractionPack() {
  return catalogInteractionCopy[currentLanguageCode] || catalogInteractionCopy.en;
}

const homeArrivalsCopy = {
  en: {
    kicker: "Current arrivals / 2026",
    title: "Current arrivals.",
    copy: "A continuous edit of seasonal selections and newly listed archive pieces.",
    pause: "Pause",
    resume: "Resume",
    viewAll: "View all",
    drag: "Hold and drag to explore",
    status: "{count} pieces / live edit",
    aria: "Seasonal and new arrivals carousel",
    newIn: "New in",
  },
  zh: {
    kicker: "当季新入 / 2026",
    title: "当季新入",
    copy: "把本季精选与刚上新的单品放进一条不断更新的编辑流。",
    pause: "暂停",
    resume: "继续",
    viewAll: "查看全部",
    drag: "按住拖动浏览",
    status: "{count} 件单品 / 实时精选",
    aria: "当季与新品轮播",
    newIn: "新入",
  },
  de: {
    kicker: "Neu eingetroffen / 2026",
    title: "Neu eingetroffen.",
    copy: "Eine fortlaufende Auswahl saisonaler und neu eingetroffener Archivstücke.",
    pause: "Pause",
    resume: "Weiter",
    viewAll: "Alle ansehen",
    drag: "Ziehen zum Entdecken",
    status: "{count} Stücke / Live-Auswahl",
    aria: "Karussell mit saisonalen Neuheiten",
    newIn: "Neu",
  },
  it: {
    kicker: "Nuovi arrivi / 2026",
    title: "Nuovi arrivi.",
    copy: "Una selezione continua di pezzi stagionali e nuovi arrivi d'archivio.",
    pause: "Pausa",
    resume: "Riprendi",
    viewAll: "Vedi tutto",
    drag: "Trascina per esplorare",
    status: "{count} pezzi / selezione live",
    aria: "Carosello di arrivi stagionali e nuovi",
    newIn: "Novità",
  },
  fr: {
    kicker: "Nouveautés / 2026",
    title: "Nouveautés.",
    copy: "Une sélection continue de pièces saisonnières et de nouvelles archives.",
    pause: "Pause",
    resume: "Reprendre",
    viewAll: "Tout voir",
    drag: "Maintenir et faire glisser",
    status: "{count} pièces / sélection en direct",
    aria: "Carrousel des nouveautés saisonnières",
    newIn: "Nouveau",
  },
  ja: {
    kicker: "新着 / 2026",
    title: "今季の新着。",
    copy: "今季のセレクトと新着アーカイブを、絶えず更新されるエディットで紹介します。",
    pause: "一時停止",
    resume: "再開",
    viewAll: "すべて見る",
    drag: "ドラッグして見る",
    status: "{count} 点 / ライブセレクト",
    aria: "シーズンと新着商品のカルーセル",
    newIn: "新着",
  },
  es: {
    kicker: "Novedades / 2026",
    title: "Novedades.",
    copy: "Una edición continua de selecciones de temporada y nuevas piezas de archivo.",
    pause: "Pausar",
    resume: "Continuar",
    viewAll: "Ver todo",
    drag: "Mantén y arrastra para explorar",
    status: "{count} piezas / selección en vivo",
    aria: "Carrusel de novedades de temporada",
    newIn: "Nuevo",
  },
  ru: {
    kicker: "Новые поступления / 2026",
    title: "Новые поступления.",
    copy: "Непрерывная подборка сезонных и недавно добавленных архивных вещей.",
    pause: "Пауза",
    resume: "Продолжить",
    viewAll: "Смотреть все",
    drag: "Удерживайте и перетаскивайте",
    status: "{count} вещей / живая подборка",
    aria: "Карусель сезонных новинок",
    newIn: "Новинка",
  },
  ko: {
    kicker: "신상품 / 2026",
    title: "이번 시즌 신상품.",
    copy: "시즌 셀렉션과 새로 입고된 아카이브 피스를 하나의 흐름으로 소개합니다.",
    pause: "일시 정지",
    resume: "계속",
    viewAll: "전체 보기",
    drag: "누른 채 드래그하여 보기",
    status: "{count}개 / 라이브 셀렉션",
    aria: "시즌 및 신상품 캐러셀",
    newIn: "신상품",
  },
};

function getHomeArrivalsPack() {
  return homeArrivalsCopy[currentLanguageCode] || homeArrivalsCopy.en;
}

function pickCatalogText(value, languageCode = currentLanguageCode) {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return value[languageCode] || value.en || value.zh || Object.values(value)[0] || "";
}

function getRegionLabel(regionCode, languageCode = currentLanguageCode) {
  const region = supportedRegions[regionCode] || supportedRegions.INTL;
  return region.labels[languageCode] || region.labels.en;
}

function buildPreferencePickers() {
  document.querySelectorAll("[data-language-picker]").forEach((picker) => {
    picker.classList.add("preferences-picker");
    const menu = picker.querySelector(".language-menu");
    if (!menu) return;

    menu.classList.add("preferences-menu");
    menu.setAttribute("role", "dialog");
    menu.innerHTML = `
      <div class="preferences-head">
        <span>ALL BLACK / GLOBAL</span>
        <strong data-preferences-title></strong>
      </div>
      <section class="preferences-group">
        <span class="preferences-label" data-preferences-language-label></span>
        <div class="preferences-options preferences-languages">
          ${Object.entries(supportedLanguages).map(([code, language]) => `<button class="language-option preference-option" type="button" data-language-option data-lang="${code}" role="menuitemradio" aria-checked="false">${language.label}</button>`).join("")}
        </div>
      </section>
      <section class="preferences-group">
        <span class="preferences-label" data-preferences-region-label></span>
        <div class="preferences-options preferences-regions">
          ${Object.keys(supportedRegions).map((code) => `<button class="preference-option" type="button" data-region-option="${code}" role="menuitemradio" aria-checked="false"></button>`).join("")}
        </div>
      </section>
      <section class="preferences-group">
        <span class="preferences-label" data-preferences-currency-label></span>
        <div class="preferences-options preferences-currencies">
          ${Object.entries(supportedCurrencies).map(([code, currency]) => `<button class="preference-option currency-option" type="button" data-currency-option="${code}" role="menuitemradio" aria-checked="false"><span>${currency.symbol}</span><b>${currency.label}</b><small data-currency-default></small></button>`).join("")}
        </div>
      </section>
      <p class="preferences-note" data-preferences-note></p>
    `;
  });
}

function updatePreferencePickers() {
  const copy = preferenceCopy[currentLanguageCode] || preferenceCopy.en;
  const language = supportedLanguages[currentLanguageCode] || supportedLanguages.en;

  document.querySelectorAll("[data-language-picker]").forEach((picker) => {
    const summary = picker.querySelector("[data-language-current]");
    if (summary) summary.textContent = `${language.label} · ${currentRegionCode} · ${currentCurrencyCode}`;
    const title = picker.querySelector("[data-preferences-title]");
    const languageLabel = picker.querySelector("[data-preferences-language-label]");
    const regionLabel = picker.querySelector("[data-preferences-region-label]");
    const currencyLabel = picker.querySelector("[data-preferences-currency-label]");
    const note = picker.querySelector("[data-preferences-note]");
    if (title) title.textContent = copy.title;
    if (languageLabel) languageLabel.textContent = copy.language;
    if (regionLabel) regionLabel.textContent = copy.region;
    if (currencyLabel) currencyLabel.textContent = copy.currency;
    if (note) note.textContent = copy.note;

    picker.querySelectorAll("[data-region-option]").forEach((option) => {
      const code = option.dataset.regionOption;
      const isActive = code === currentRegionCode;
      option.textContent = getRegionLabel(code);
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-checked", String(isActive));
    });
    picker.querySelectorAll("[data-currency-option]").forEach((option) => {
      const isActive = option.dataset.currencyOption === currentCurrencyCode;
      const isRegionalDefault = option.dataset.currencyOption === supportedRegions[currentRegionCode]?.currency;
      option.classList.toggle("is-active", isActive);
      option.classList.toggle("is-regional-default", isRegionalDefault);
      option.setAttribute("aria-checked", String(isActive));
      const defaultLabel = option.querySelector("[data-currency-default]");
      if (defaultLabel) defaultLabel.textContent = isRegionalDefault ? copy.defaultCurrency : "";
    });
  });
}

function applyRegionalPreference(next = {}, emit = true) {
  if (next.region && supportedRegions[next.region]) {
    currentRegionCode = next.region;
    if (!next.currency) currentCurrencyCode = supportedRegions[next.region].currency;
  }
  if (next.currency && supportedCurrencies[next.currency]) currentCurrencyCode = next.currency;

  try {
    window.localStorage.setItem(regionStorageKey, currentRegionCode);
    window.localStorage.setItem(currencyStorageKey, currentCurrencyCode);
  } catch (error) {
    // Keep the in-memory preference if storage is unavailable.
  }

  updatePreferencePickers();
  updateCatalogUi();
  updateSearchUi();
  if (emit) {
    window.dispatchEvent(new CustomEvent("allblack-preferences-change", {
      detail: { language: currentLanguageCode, region: currentRegionCode, currency: currentCurrencyCode },
    }));
  }
}

window.allBlackPreferences = {
  get: () => ({ language: currentLanguageCode, region: currentRegionCode, currency: currentCurrencyCode }),
  setRegion: (region) => applyRegionalPreference({ region }),
  setCurrency: (currency) => applyRegionalPreference({ currency }),
  convert: (amount, fromCurrency = "EUR", toCurrency = currentCurrencyCode) => convertCatalogAmount(amount, fromCurrency, toCurrency),
  format: (amount, fromCurrency = "EUR") => formatCatalogPrice({ amount, currency: fromCurrency }),
  getRegionLabel,
};

buildPreferencePickers();

const languagePickers = document.querySelectorAll("[data-language-picker]");

if (languagePickers.length > 0) {
  const defaultLanguage = "zh";
  let activeLanguage = defaultLanguage;
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");

  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage && supportedLanguages[savedLanguage]) {
      activeLanguage = savedLanguage;
    }
  } catch (error) {
    // Ignore storage issues and keep the default language.
  }

  if (requestedLanguage && supportedLanguages[requestedLanguage]) {
    activeLanguage = requestedLanguage;
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

    updatePreferencePickers();

    window.siteTranslator?.render(currentLanguageCode);
    window.requestAnimationFrame(() => {
      updateCatalogUi();
      updateSearchUi();
      updateInterfaceUi();
    });
    window.dispatchEvent(new CustomEvent("allblack-language-change", { detail: { language: currentLanguageCode } }));
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
        picker.classList.add("is-open");
        trigger?.setAttribute("aria-expanded", "true");
      });
    });

    picker.querySelectorAll("[data-region-option]").forEach((option) => {
      option.addEventListener("click", () => applyRegionalPreference({ region: option.dataset.regionOption }));
    });

    picker.querySelectorAll("[data-currency-option]").forEach((option) => {
      option.addEventListener("click", () => applyRegionalPreference({ currency: option.dataset.currencyOption }));
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
    navDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
    });
  };

  navDropdowns.forEach((dropdown) => {
    // Preference pickers already own their toggle behavior on every screen size.
    if (dropdown.matches("[data-language-picker]")) return;

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
  de: { title: "Archiv durchsuchen", placeholder: "Nach Artikel oder Kategorie suchen", close: "Schließen", empty: "Keine passenden Stücke oder Kategorien.", itemType: "Stück", categoryType: "Kategorie" },
  it: { title: "Cerca nell'archivio", placeholder: "Cerca per articolo o categoria", close: "Chiudi", empty: "Nessun articolo o categoria corrispondente.", itemType: "Articolo", categoryType: "Categoria" },
  fr: { title: "Rechercher dans l'archive", placeholder: "Rechercher un article ou une catégorie", close: "Fermer", empty: "Aucune pièce ni catégorie correspondante.", itemType: "Pièce", categoryType: "Catégorie" },
  ja: { title: "アーカイブを検索", placeholder: "商品名またはカテゴリーで検索", close: "閉じる", empty: "一致する商品またはカテゴリーはありません。", itemType: "商品", categoryType: "カテゴリー" },
  es: { title: "Buscar en el archivo", placeholder: "Buscar por artículo o categoría", close: "Cerrar", empty: "No hay piezas ni categorías coincidentes.", itemType: "Pieza", categoryType: "Categoría" },
  ru: { title: "Поиск по архиву", placeholder: "Искать вещь или категорию", close: "Закрыть", empty: "Подходящие вещи или категории не найдены.", itemType: "Вещь", categoryType: "Категория" },
  ko: { title: "아카이브 검색", placeholder: "상품 또는 카테고리 검색", close: "닫기", empty: "일치하는 상품이나 카테고리가 없습니다.", itemType: "상품", categoryType: "카테고리" },
};

const interfaceUiCopy = {
  en: { openMenu: "Open menu", primaryNav: "Primary navigation", shopCategories: "Shop categories", utilityNav: "Utility navigation", changeLanguage: "Change language", languageSelector: "Language selector", previousImage: "Previous image", nextImage: "Next image", viewImage: "View image", closeImage: "Close image view", privateEnquiry: "Private enquiry", whatsappAria: "Contact ALL BLACK on WhatsApp" },
  zh: { openMenu: "打开菜单", primaryNav: "主导航", shopCategories: "商店分类", utilityNav: "辅助导航", changeLanguage: "更改语言", languageSelector: "语言选择", previousImage: "上一张图片", nextImage: "下一张图片", viewImage: "查看图片", closeImage: "关闭图片查看", privateEnquiry: "私人咨询", whatsappAria: "通过 WhatsApp 联系 ALL BLACK" },
  de: { openMenu: "Menü öffnen", primaryNav: "Hauptnavigation", shopCategories: "Shop-Kategorien", utilityNav: "Zusatznavigation", changeLanguage: "Sprache ändern", languageSelector: "Sprachauswahl", previousImage: "Vorheriges Bild", nextImage: "Nächstes Bild", viewImage: "Bild ansehen", closeImage: "Bildansicht schließen", privateEnquiry: "Private Anfrage", whatsappAria: "ALL BLACK über WhatsApp kontaktieren" },
  it: { openMenu: "Apri menu", primaryNav: "Navigazione principale", shopCategories: "Categorie shop", utilityNav: "Navigazione di servizio", changeLanguage: "Cambia lingua", languageSelector: "Selezione lingua", previousImage: "Immagine precedente", nextImage: "Immagine successiva", viewImage: "Visualizza immagine", closeImage: "Chiudi visualizzazione", privateEnquiry: "Richiesta privata", whatsappAria: "Contatta ALL BLACK su WhatsApp" },
  fr: { openMenu: "Ouvrir le menu", primaryNav: "Navigation principale", shopCategories: "Catégories de la boutique", utilityNav: "Navigation utilitaire", changeLanguage: "Changer de langue", languageSelector: "Sélection de la langue", previousImage: "Image précédente", nextImage: "Image suivante", viewImage: "Voir l'image", closeImage: "Fermer l'image", privateEnquiry: "Demande privée", whatsappAria: "Contacter ALL BLACK sur WhatsApp" },
  ja: { openMenu: "メニューを開く", primaryNav: "メインナビゲーション", shopCategories: "ショップカテゴリー", utilityNav: "補助ナビゲーション", changeLanguage: "言語を変更", languageSelector: "言語選択", previousImage: "前の画像", nextImage: "次の画像", viewImage: "画像を見る", closeImage: "画像表示を閉じる", privateEnquiry: "個別のお問い合わせ", whatsappAria: "WhatsAppでALL BLACKに問い合わせる" },
  es: { openMenu: "Abrir menú", primaryNav: "Navegación principal", shopCategories: "Categorías de la tienda", utilityNav: "Navegación auxiliar", changeLanguage: "Cambiar idioma", languageSelector: "Selector de idioma", previousImage: "Imagen anterior", nextImage: "Imagen siguiente", viewImage: "Ver imagen", closeImage: "Cerrar imagen", privateEnquiry: "Consulta privada", whatsappAria: "Contactar con ALL BLACK por WhatsApp" },
  ru: { openMenu: "Открыть меню", primaryNav: "Основная навигация", shopCategories: "Категории магазина", utilityNav: "Дополнительная навигация", changeLanguage: "Изменить язык", languageSelector: "Выбор языка", previousImage: "Предыдущее изображение", nextImage: "Следующее изображение", viewImage: "Посмотреть изображение", closeImage: "Закрыть просмотр", privateEnquiry: "Личный запрос", whatsappAria: "Связаться с ALL BLACK в WhatsApp" },
  ko: { openMenu: "메뉴 열기", primaryNav: "주요 내비게이션", shopCategories: "숍 카테고리", utilityNav: "보조 내비게이션", changeLanguage: "언어 변경", languageSelector: "언어 선택", previousImage: "이전 이미지", nextImage: "다음 이미지", viewImage: "이미지 보기", closeImage: "이미지 보기 닫기", privateEnquiry: "개인 문의", whatsappAria: "WhatsApp으로 ALL BLACK에 문의" },
};

const catalogUiCopy = {
  en: { viewDetails: "View details" },
  zh: { viewDetails: "查看详情" },
  de: { viewDetails: "Details ansehen" },
  it: { viewDetails: "Vedi dettagli" },
  fr: { viewDetails: "Voir les détails" },
  ja: { viewDetails: "詳細を見る" },
  es: { viewDetails: "Ver detalles" },
  ru: { viewDetails: "Подробнее" },
  ko: { viewDetails: "상세 보기" },
};

const categoryLabels = {
  outerwear: { en: "Outerwear", zh: "外套", de: "Outerwear", it: "Capispalla", fr: "Manteaux", ja: "アウター", es: "Abrigos", ru: "Верхняя одежда", ko: "아우터" },
  set: { en: "Set", zh: "套装", de: "Set", it: "Completo", fr: "Ensemble", ja: "セット", es: "Conjunto", ru: "Комплект", ko: "세트" },
  layering: { en: "Layering", zh: "叠穿", de: "Layering", it: "Layering", fr: "Superposition", ja: "レイヤリング", es: "Capas", ru: "Многослойность", ko: "레이어링" },
  eyewear: { en: "Eyewear", zh: "眼镜", de: "Brillen", it: "Occhiali", fr: "Lunettes", ja: "アイウェア", es: "Gafas", ru: "Очки", ko: "아이웨어" },
  tshirt: { en: "T-Shirt", zh: "T恤", de: "T-Shirt", it: "T-shirt", fr: "T-shirt", ja: "Tシャツ", es: "Camiseta", ru: "Футболка", ko: "티셔츠" },
  shoes: { en: "Shoes", zh: "鞋子", de: "Schuhe", it: "Scarpe", fr: "Chaussures", ja: "シューズ", es: "Calzado", ru: "Обувь", ko: "슈즈" },
  jewelry: { en: "Jewelry", zh: "首饰", de: "Schmuck", it: "Gioielli", fr: "Bijoux", ja: "ジュエリー", es: "Joyería", ru: "Украшения", ko: "주얼리" },
};
categoryLabels.objects = { en: "Everyday objects", zh: "生活器物", de: "Alltagsobjekte", it: "Oggetti quotidiani", fr: "Objets du quotidien", ja: "暮らしの道具", es: "Objetos cotidianos", ru: "Предметы быта", ko: "생활 오브제" };
const catalogCategories = ["outerwear", "set", "layering", "eyewear", "tshirt", "shoes", "jewelry", "objects"];
let activeCatalogProduct = null;

const searchCatalog = [
  ...catalogProducts.map((product) => ({
    type: "item",
    slug: product.slug,
    title: product.name,
    category: product.category,
    description: product.cardCaption,
    href: `product.html?item=${product.slug}`,
    tokens: [
      ...Object.values(product.name || {}),
      ...Object.values(product.cardCategory || {}),
      ...Object.values(product.cardCaption || {}),
      ...(product.searchTokens || []),
    ],
  })),
  ...catalogCategories.map((category) => ({
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

function getInterfaceUiPack() {
  return interfaceUiCopy[currentLanguageCode] || interfaceUiCopy.en;
}

function updateInterfaceUi() {
  const labels = getInterfaceUiPack();
  const preferences = preferenceCopy[currentLanguageCode] || preferenceCopy.en;
  document.querySelectorAll("[data-mobile-menu-button]").forEach((button) => button.setAttribute("aria-label", labels.openMenu));
  document.querySelector(".nav")?.setAttribute("aria-label", labels.primaryNav);
  document.querySelector(".nav-dropdown .nav-menu")?.setAttribute("aria-label", labels.shopCategories);
  document.querySelector(".header-tools")?.setAttribute("aria-label", labels.utilityNav);
  document.querySelectorAll("[data-language-trigger]").forEach((button) => button.setAttribute("aria-label", preferences.title));
  document.querySelectorAll(".language-menu").forEach((menu) => menu.setAttribute("aria-label", preferences.title));
  document.querySelectorAll("[data-category-nav]").forEach((link) => {
    link.textContent = getCategoryLabel(link.dataset.categoryNav);
  });
  document.querySelectorAll('[data-filter-group="category"][data-filter-value]').forEach((button) => {
    if (button.dataset.filterValue !== "all") {
      button.textContent = getCategoryLabel(button.dataset.filterValue);
    }
  });
  document.querySelectorAll("[data-gallery-prev], [data-gallery-lightbox-prev]").forEach((button) => button.setAttribute("aria-label", labels.previousImage));
  document.querySelectorAll("[data-gallery-next], [data-gallery-lightbox-next]").forEach((button) => button.setAttribute("aria-label", labels.nextImage));
  document.querySelectorAll("[data-gallery-lightbox-close]").forEach((button) => button.setAttribute("aria-label", labels.closeImage));

  const contact = document.querySelector("[data-whatsapp-contact]");
  if (contact) {
    contact.setAttribute("aria-label", labels.whatsappAria);
    const small = contact.querySelector("small");
    if (small) small.textContent = labels.privateEnquiry;
  }
}

function getCategoryLabel(category) {
  const labels = categoryLabels[category];
  if (!labels) {
    return category;
  }

  return labels[currentLanguageCode] || labels.zh || labels.en;
}

let homeArrivalsController = null;

function escapeArrivalsMarkup(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createHomeArrivalsController() {
  const root = document.querySelector("[data-arrivals-showcase]");
  const viewport = root?.querySelector("[data-arrivals-viewport]");
  const track = root?.querySelector("[data-arrivals-track]");
  const toggle = root?.querySelector("[data-arrivals-toggle]");

  if (!root || !viewport || !track || !toggle) {
    return null;
  }

  const desktopMotionQuery = window.matchMedia("(min-width: 721px)");
  let cycleWidth = 0;
  let preciseScrollPosition = 0;
  let motionSpeed = 0.05;
  let tickerTrack = null;
  let tickerCycleWidth = 0;
  let lastTickerPosition = null;
  let lastFrame = performance.now();
  let forcedPaused = false;
  let hoveredCard = false;
  let pointerPressed = false;
  let dragging = false;
  let visible = true;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let suppressClick = false;
  let interactionPausedUntil = 0;

  const shouldMove = (timestamp) => (
    desktopMotionQuery.matches
    && visible
    && !forcedPaused
    && !hoveredCard
    && !pointerPressed
    && !dragging
    && timestamp >= interactionPausedUntil
    && document.visibilityState === "visible"
  );

  const updateMotionSpeed = () => {
    tickerTrack = document.querySelector(".ticker-track");
    if (!tickerTrack) {
      return;
    }

    const durationValue = getComputedStyle(tickerTrack).animationDuration.split(",")[0].trim();
    const parsedDuration = Number.parseFloat(durationValue);
    const durationMs = durationValue.endsWith("ms") ? parsedDuration : parsedDuration * 1000;
    tickerCycleWidth = tickerTrack.scrollWidth / 2;

    if (Number.isFinite(durationMs) && durationMs > 0 && tickerCycleWidth > 0) {
      motionSpeed = tickerCycleWidth / durationMs;
    }

    lastTickerPosition = null;
  };

  const getTickerPosition = () => {
    if (!tickerTrack) {
      return null;
    }

    try {
      return new DOMMatrixReadOnly(getComputedStyle(tickerTrack).transform).m41;
    } catch (error) {
      return null;
    }
  };

  const normalizeScrollPosition = () => {
    if (!cycleWidth) {
      return;
    }

    if (preciseScrollPosition >= cycleWidth * 2) {
      preciseScrollPosition -= cycleWidth;
    } else if (preciseScrollPosition <= 0) {
      preciseScrollPosition += cycleWidth;
    }

    viewport.scrollLeft = Math.round(preciseScrollPosition);
  };

  const measureCycle = (resetPosition = false) => {
    const sequence = track.querySelector(".arrivals-sequence");
    const nextWidth = sequence?.getBoundingClientRect().width || 0;

    if (!nextWidth) {
      return;
    }

    if (resetPosition || !cycleWidth) {
      cycleWidth = nextWidth;
      preciseScrollPosition = cycleWidth;
      viewport.scrollLeft = Math.round(preciseScrollPosition);
      return;
    }

    const progress = (preciseScrollPosition - cycleWidth) / cycleWidth;
    cycleWidth = nextWidth;
    preciseScrollPosition = cycleWidth + progress * cycleWidth;
    normalizeScrollPosition();
  };

  const updateToggle = () => {
    const copy = getHomeArrivalsPack();
    toggle.textContent = forcedPaused ? copy.resume : copy.pause;
    toggle.setAttribute("aria-pressed", String(forcedPaused));
    root.classList.toggle("is-paused", forcedPaused);
  };

  const render = () => {
    const copy = getHomeArrivalsPack();
    const products = [...catalogProducts].reverse();
    const countLabel = String(products.length).padStart(2, "0");

    root.querySelector("[data-arrivals-kicker]").textContent = copy.kicker;
    root.querySelector("[data-arrivals-title]").textContent = copy.title;
    root.querySelector("[data-arrivals-copy]").textContent = copy.copy;
    root.querySelector("[data-arrivals-view]").textContent = copy.viewAll;
    root.querySelector("[data-arrivals-drag]").textContent = copy.drag;
    root.querySelector("[data-arrivals-status]").textContent = copy.status.replace("{count}", countLabel);
    viewport.setAttribute("aria-label", copy.aria);

    const sequences = [0, 1, 2].map((sequenceIndex) => {
      const accessible = sequenceIndex === 1;
      const cards = products.map((product, productIndex) => {
        const name = pickCatalogText(product.name);
        const category = pickCatalogText(product.cardCategory) || getCategoryLabel(product.category);
        const price = getProductDisplayPrice(product);
        const loading = accessible && productIndex < 2 ? "eager" : "lazy";
        const tabIndex = accessible ? "" : ' tabindex="-1"';

        return `
          <a class="arrival-card" href="product.html?item=${encodeURIComponent(product.slug)}"${tabIndex}>
            <figure class="arrival-card-media">
              <img src="${escapeArrivalsMarkup(product.image)}" alt="${escapeArrivalsMarkup(name)}" loading="${loading}" decoding="async" draggable="false">
              <span class="arrival-card-index">${String(productIndex + 1).padStart(2, "0")}</span>
            </figure>
            <div class="arrival-card-copy">
              <p>${escapeArrivalsMarkup(copy.newIn)} / ${escapeArrivalsMarkup(category)}</p>
              <h3 class="editorial-title">${escapeArrivalsMarkup(name)}</h3>
              <span>${escapeArrivalsMarkup(price)}</span>
            </div>
          </a>
        `;
      }).join("");

      return `<div class="arrivals-sequence"${accessible ? "" : ' aria-hidden="true"'}>${cards}</div>`;
    }).join("");

    track.innerHTML = sequences;
    updateToggle();
    window.requestAnimationFrame(() => {
      updateMotionSpeed();
      measureCycle(true);
    });
  };

  const animate = (timestamp) => {
    const delta = Math.min(timestamp - lastFrame, 48);
    const tickerPosition = getTickerPosition();
    let frameDistance = delta * motionSpeed;
    lastFrame = timestamp;

    if (tickerPosition !== null && lastTickerPosition !== null) {
      const tickerDelta = tickerPosition - lastTickerPosition;
      const isContinuousFrame = tickerDelta <= 0 && Math.abs(tickerDelta) < tickerCycleWidth / 4;
      if (isContinuousFrame) {
        frameDistance = Math.abs(tickerDelta);
      }
    }

    lastTickerPosition = tickerPosition;

    if (shouldMove(timestamp) && cycleWidth) {
      preciseScrollPosition += frameDistance;
      normalizeScrollPosition();
    }

    window.requestAnimationFrame(animate);
  };

  viewport.addEventListener("pointerover", (event) => {
    if (event.pointerType === "mouse" && event.target.closest(".arrival-card")) {
      hoveredCard = true;
      root.classList.add("is-card-hovered");
    }
  });

  viewport.addEventListener("pointerout", (event) => {
    if (event.pointerType !== "mouse" || !event.target.closest(".arrival-card")) {
      return;
    }

    const nextCard = event.relatedTarget instanceof Element
      ? event.relatedTarget.closest(".arrival-card")
      : null;
    hoveredCard = Boolean(nextCard && viewport.contains(nextCard));
    root.classList.toggle("is-card-hovered", hoveredCard);
  });

  viewport.addEventListener("pointerleave", () => {
    hoveredCard = false;
    root.classList.remove("is-card-hovered");
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    pointerPressed = true;
    dragging = false;
    suppressClick = false;
    dragStartX = event.clientX;
    dragStartScroll = viewport.scrollLeft;
    preciseScrollPosition = dragStartScroll;
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!pointerPressed) {
      return;
    }

    const distance = event.clientX - dragStartX;
    if (Math.abs(distance) <= 5) {
      return;
    }

    if (!dragging) {
      dragging = true;
      suppressClick = true;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
    }

    event.preventDefault();
    preciseScrollPosition = dragStartScroll - distance;
    normalizeScrollPosition();
  });

  viewport.addEventListener("wheel", () => {
    window.requestAnimationFrame(() => {
      preciseScrollPosition = viewport.scrollLeft;
    });
  }, { passive: true });

  const endDrag = (event) => {
    if (!pointerPressed && !dragging) {
      return;
    }

    const wasDragging = dragging;
    pointerPressed = false;
    dragging = false;
    viewport.classList.remove("is-dragging");
    if (wasDragging) {
      interactionPausedUntil = performance.now() + 900;
    }
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => {
      suppressClick = false;
    }, 0);
  };

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("click", (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  toggle.addEventListener("click", () => {
    forcedPaused = !forcedPaused;
    updateToggle();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.08 });
    observer.observe(root);
  }

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      updateMotionSpeed();
      measureCycle(false);
    });
    resizeObserver.observe(viewport);
  } else {
    window.addEventListener("resize", () => measureCycle(false));
  }

  render();
  window.requestAnimationFrame(animate);
  return { render };
}

function renderHomeArrivals() {
  if (!document.querySelector("[data-arrivals-showcase]")) {
    return;
  }

  if (!homeArrivalsController) {
    homeArrivalsController = createHomeArrivalsController();
    return;
  }

  homeArrivalsController.render();
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
      const price = getProductDisplayPrice(product);
      const href = `product.html?item=${product.slug}`;
      return `
        <article class="product-card is-clickable" data-category="${product.category}" data-delivery="${product.delivery}" data-item="${product.slug}" data-href="${href}" tabindex="0" role="link" aria-label="${name}">
          <img src="${product.image}" alt="${name}">
          <div class="product-card-copy">
            <p>${category}</p>
            <h3 class="editorial-title">${name}</h3>
            <span class="product-price">${price}</span>
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
  // Cancel pending image decodes/animations before replacing a variant gallery.
  bindProductGallery.dispose?.();
  const image = document.querySelector("[data-product-image]");
  const nextImage = document.querySelector("[data-product-image-next]");
  const shell = document.querySelector("[data-gallery-shell]");
  const thumbs = document.querySelector("[data-gallery-thumbs]");
  const prevButton = document.querySelector("[data-gallery-prev]");
  const nextButton = document.querySelector("[data-gallery-next]");
  const counter = document.querySelector("[data-gallery-counter]");
  const lightbox = document.querySelector("[data-gallery-lightbox]");
  const lightboxImage = document.querySelector("[data-gallery-lightbox-image]");
  const lightboxViewport = document.querySelector("[data-gallery-lightbox-viewport]");
  const lightboxCounter = document.querySelector("[data-gallery-lightbox-counter]");
  const lightboxHint = document.querySelector("[data-gallery-lightbox-hint]");
  const lightboxThumbs = document.querySelector("[data-gallery-lightbox-thumbs]");
  const lightboxPrev = document.querySelector("[data-gallery-lightbox-prev]");
  const lightboxNext = document.querySelector("[data-gallery-lightbox-next]");
  const lightboxCloseButtons = document.querySelectorAll("[data-gallery-lightbox-close]");

  if (!image || !nextImage || !shell || !thumbs || !product) {
    return;
  }

  const selection = document.querySelector("[data-product-panel]")?.dataset.selectedSize || product.defaultSize;
  const variantGallery = product.variantMedia?.[selection]?.gallery;
  const gallery = (variantGallery?.length ? variantGallery.map(src => ({ src }))
    : product.gallery?.length ? product.gallery : [{ src: product.image }])
    .map((item) => ({ ...item, alt: pickCatalogText(product.name) }));
  let activeIndex = 0;
  let thumbButtons = [];
  let currentDirection = "next";
  let transitionTimer = 0;
  let transitionFrame = 0;
  let transitionToken = 0;
  let displayedIndex = 0;
  let pendingIndex = 0;
  let zoomOpen = false;
  let zoomScale = 1;
  let panX = 0;
  let panY = 0;
  let isPanning = false;
  let activePointerId = null;
  let startPointerX = 0;
  let startPointerY = 0;
  let startPanX = 0;
  let startPanY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let touchPanStartX = 0;
  let touchPanStartY = 0;
  let touchTapStartX = 0;
  let touchTapStartY = 0;
  let touchMoved = false;
  let touchGestureWasPinch = false;
  let lastTapTime = 0;
  let suppressDoubleClickUntil = 0;

  const zoomHintCopy = {
    en: "Double-click or pinch to zoom. Drag to inspect detail.",
    zh: "双击或双指缩放查看细节，放大后可拖动查看局部。",
    de: "Doppelklicken oder mit zwei Fingern zoomen. Zum Prüfen der Details ziehen.",
    it: "Fai doppio clic o pizzica per ingrandire. Trascina per osservare i dettagli.",
    fr: "Double-cliquez ou pincez pour zoomer. Faites glisser pour examiner les détails.",
    ja: "ダブルクリックまたはピンチで拡大し、ドラッグして細部を確認できます。",
    es: "Haz doble clic o pellizca para ampliar. Arrastra para ver los detalles.",
    ru: "Дважды нажмите или разведите пальцы для масштаба. Перетаскивайте для просмотра деталей.",
    ko: "더블 클릭하거나 핀치하여 확대하고 드래그하여 디테일을 확인하세요.",
  };

  thumbs.innerHTML = gallery
    .map((item, index) => {
      const isActive = index === activeIndex;
      return `
        <button class="gallery-thumb${isActive ? " is-active" : ""}" type="button" data-gallery-index="${index}" aria-pressed="${isActive}" aria-label="${getInterfaceUiPack().viewImage} ${index + 1}">
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
    if (thumbs.scrollWidth > thumbs.clientWidth) {
      const activeThumb = thumbButtons[activeIndex]?.getBoundingClientRect();
      const viewport = thumbs.getBoundingClientRect();
      if (activeThumb?.left < viewport.left) thumbs.scrollLeft += activeThumb.left - viewport.left;
      else if (activeThumb?.right > viewport.right) thumbs.scrollLeft += activeThumb.right - viewport.right;
    }
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

    if (lightboxHint) {
      lightboxHint.textContent = zoomHintCopy[currentLanguageCode] || zoomHintCopy.en;
    }

    if (lightboxThumbs) {
      lightboxThumbs.innerHTML = gallery
        .map((item, index) => {
          const isActive = index === activeIndex;
          return `
            <button class="gallery-thumb gallery-thumb-lightbox${isActive ? " is-active" : ""}" type="button" data-gallery-lightbox-index="${index}" aria-pressed="${isActive}" aria-label="${getInterfaceUiPack().viewImage} ${index + 1}">
              <img src="${item.src}" alt="${item.alt || pickCatalogText(product.name)}">
            </button>
          `;
        })
        .join("");

      lightboxThumbs.querySelectorAll("[data-gallery-lightbox-index]").forEach((button) => {
        button.onclick = () => {
          const nextIndex = Number(button.dataset.galleryLightboxIndex) || 0;
          currentDirection = nextIndex >= activeIndex ? "next" : "prev";
          activeIndex = nextIndex;
          resetZoomState();
          renderGallery(false);
        };
      });
    }

    applyZoomTransform();
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const getTouchDistance = (touches) => {
    if (touches.length < 2) {
      return 0;
    }

    const [first, second] = touches;
    return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
  };

  const applyZoomTransform = () => {
    if (!lightboxImage || !lightboxViewport) {
      return;
    }

    const renderedWidth = lightboxImage.clientWidth;
    const renderedHeight = lightboxImage.clientHeight;
    const maxOffsetX = zoomScale > 1 ? Math.max(0, (renderedWidth * zoomScale - lightboxViewport.clientWidth) / 2) : 0;
    const maxOffsetY = zoomScale > 1 ? Math.max(0, (renderedHeight * zoomScale - lightboxViewport.clientHeight) / 2) : 0;

    panX = clamp(panX, -maxOffsetX, maxOffsetX);
    panY = clamp(panY, -maxOffsetY, maxOffsetY);

    lightboxImage.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoomScale})`;
    lightboxViewport.classList.toggle("is-zoomed", zoomScale > 1.02);
    lightboxViewport.classList.toggle("is-panning", isPanning && zoomScale > 1.02);
  };

  const releaseActivePointer = () => {
    if (activePointerId === null || !lightboxViewport) {
      activePointerId = null;
      return;
    }

    const pointerId = activePointerId;
    activePointerId = null;
    if (lightboxViewport.hasPointerCapture?.(pointerId)) {
      try {
        lightboxViewport.releasePointerCapture(pointerId);
      } catch {
        // The browser may already have released capture after a cancelled gesture.
      }
    }
  };

  const resetZoomState = () => {
    releaseActivePointer();
    zoomScale = 1;
    panX = 0;
    panY = 0;
    isPanning = false;
    pinchStartDistance = 0;
    touchMoved = false;
    touchGestureWasPinch = false;
    lastTapTime = 0;
    applyZoomTransform();
  };

  const closeLightbox = () => {
    if (!lightbox) {
      return;
    }

    zoomOpen = false;
    lightbox.hidden = true;
    document.body.classList.remove("is-gallery-zoom-open");
    resetZoomState();
  };

  const openLightbox = () => {
    if (!lightbox) {
      return;
    }

    languagePickers.forEach((picker) => {
      picker.classList.remove("is-open");
      picker.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
    });
    zoomOpen = true;
    renderLightbox();
    lightbox.hidden = false;
    document.body.classList.add("is-gallery-zoom-open");
    resetZoomState();
  };

  const cancelGalleryTransition = (commitPending = false) => {
    transitionToken += 1;
    window.clearTimeout(transitionTimer);
    window.cancelAnimationFrame(transitionFrame);

    if (commitPending && shell.classList.contains("is-transitioning")) {
      const pendingImage = gallery[pendingIndex] || gallery[0];
      image.src = pendingImage.src;
      image.alt = pendingImage.alt || pickCatalogText(product.name);
      displayedIndex = pendingIndex;
    }

    shell.classList.add("is-resetting");
    shell.classList.remove("is-transitioning");
    nextImage.src = image.src;
    nextImage.alt = image.alt;
    void shell.offsetWidth;
    shell.classList.remove("is-resetting");
  };

  const runGalleryTransition = async (activeImage, targetIndex) => {
    cancelGalleryTransition(true);

    if (targetIndex === displayedIndex) {
      return;
    }

    const token = ++transitionToken;
    const preloadImage = new Image();
    preloadImage.src = activeImage.src;

    try {
      if (preloadImage.decode) {
        await preloadImage.decode();
      } else if (!preloadImage.complete) {
        await new Promise((resolve) => {
          preloadImage.onload = resolve;
          preloadImage.onerror = resolve;
        });
      }
    } catch {
      // A failed decode can still be displayed by the browser; avoid blocking navigation.
    }

    if (token !== transitionToken) {
      return;
    }

    pendingIndex = targetIndex;
    shell.dataset.direction = currentDirection;
    shell.classList.add("is-resetting");
    nextImage.src = activeImage.src;
    nextImage.alt = activeImage.alt || pickCatalogText(product.name);
    void shell.offsetWidth;
    shell.classList.remove("is-resetting");

    transitionFrame = window.requestAnimationFrame(() => {
      if (token !== transitionToken) {
        return;
      }

      shell.classList.add("is-transitioning");
      transitionTimer = window.setTimeout(() => {
        if (token !== transitionToken) {
          return;
        }

        shell.classList.add("is-resetting");
        image.src = activeImage.src;
        image.alt = activeImage.alt || pickCatalogText(product.name);
        displayedIndex = targetIndex;
        shell.classList.remove("is-transitioning");
        nextImage.src = activeImage.src;
        nextImage.alt = activeImage.alt || pickCatalogText(product.name);
        void shell.offsetWidth;
        shell.classList.remove("is-resetting");
      }, 380);
    });
  };

  const renderGallery = (withTransition = false) => {
    const activeImage = gallery[activeIndex] || gallery[0];

    if (withTransition) {
      runGalleryTransition(activeImage, activeIndex);
    } else {
      cancelGalleryTransition(false);
      image.src = activeImage.src;
      image.alt = activeImage.alt || pickCatalogText(product.name);
      nextImage.src = activeImage.src;
      nextImage.alt = activeImage.alt || pickCatalogText(product.name);
      displayedIndex = activeIndex;
      pendingIndex = activeIndex;
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
      resetZoomState();
      renderGallery(false);
    };
  }

  if (lightboxNext) {
    lightboxNext.onclick = () => {
      currentDirection = "next";
      activeIndex = (activeIndex + 1) % gallery.length;
      resetZoomState();
      renderGallery(false);
    };
  }

  lightboxCloseButtons.forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeLightbox();
    };
  });

  if (lightboxViewport && lightboxImage) {
    lightboxViewport.ondblclick = (event) => {
      const isTouchGenerated = event.sourceCapabilities?.firesTouchEvents;
      if (!zoomOpen || isTouchGenerated || performance.now() < suppressDoubleClickUntil) {
        return;
      }

      zoomScale = zoomScale > 1.2 ? 1 : 2;
      if (zoomScale === 1) {
        panX = 0;
        panY = 0;
      }
      applyZoomTransform();
    };

    lightboxViewport.onwheel = (event) => {
      if (!zoomOpen) {
        return;
      }

      event.preventDefault();
      const delta = event.deltaY < 0 ? 0.18 : -0.18;
      zoomScale = clamp(zoomScale + delta, 1, 3);
      if (zoomScale <= 1.02) {
        panX = 0;
        panY = 0;
      }
      applyZoomTransform();
    };

    lightboxViewport.onpointerdown = (event) => {
      if (!zoomOpen || zoomScale <= 1.02 || event.pointerType === "touch" || event.button !== 0) {
        return;
      }

      releaseActivePointer();
      activePointerId = event.pointerId;
      isPanning = true;
      startPointerX = event.clientX;
      startPointerY = event.clientY;
      startPanX = panX;
      startPanY = panY;
      event.preventDefault();
      try {
        lightboxViewport.setPointerCapture?.(event.pointerId);
      } catch {
        // Pointer capture is optional; document-level movement is not required here.
      }
      applyZoomTransform();
    };

    lightboxViewport.onpointermove = (event) => {
      if (!isPanning || activePointerId !== event.pointerId || zoomScale <= 1.02 || event.pointerType === "touch") {
        return;
      }

      event.preventDefault();
      panX = startPanX + (event.clientX - startPointerX);
      panY = startPanY + (event.clientY - startPointerY);
      applyZoomTransform();
    };

    const finishPointerPan = (event) => {
      if (event.pointerType === "touch" || activePointerId !== event.pointerId) {
        return;
      }

      isPanning = false;
      releaseActivePointer();
      applyZoomTransform();
    };

    lightboxViewport.onpointerup = finishPointerPan;
    lightboxViewport.onpointercancel = finishPointerPan;
    lightboxViewport.onlostpointercapture = (event) => {
      if (activePointerId !== event.pointerId) {
        return;
      }

      activePointerId = null;
      isPanning = false;
      applyZoomTransform();
    };

    lightboxViewport.onpointerleave = (event) => {
      if (activePointerId !== event.pointerId || lightboxViewport.hasPointerCapture?.(event.pointerId)) {
        return;
      }

      finishPointerPan(event);
    };

    lightboxViewport.ontouchstart = (event) => {
      if (!zoomOpen) {
        return;
      }

      if (event.touches.length === 2) {
        event.preventDefault();
        pinchStartDistance = getTouchDistance(event.touches);
        pinchStartScale = zoomScale;
        isPanning = false;
        touchMoved = true;
        touchGestureWasPinch = true;
        return;
      }

      if (event.touches.length === 1) {
        const touch = event.touches[0];
        touchTapStartX = touch.clientX;
        touchTapStartY = touch.clientY;
        touchMoved = false;
        touchGestureWasPinch = false;
        isPanning = zoomScale > 1.02;
        touchPanStartX = touch.clientX;
        touchPanStartY = touch.clientY;
        startPanX = panX;
        startPanY = panY;
      }
    };

    lightboxViewport.ontouchmove = (event) => {
      if (!zoomOpen) {
        return;
      }

      if (event.touches.length === 2) {
        event.preventDefault();
        touchMoved = true;
        touchGestureWasPinch = true;
        const distance = getTouchDistance(event.touches);
        if (!pinchStartDistance) {
          pinchStartDistance = distance;
          pinchStartScale = zoomScale;
        }

        const ratio = distance / pinchStartDistance;
        zoomScale = clamp(pinchStartScale * ratio, 1, 3);
        if (zoomScale <= 1.02) {
          panX = 0;
          panY = 0;
        }
        applyZoomTransform();
        return;
      }

      if (event.touches.length === 1) {
        const touch = event.touches[0];
        if (Math.hypot(touch.clientX - touchTapStartX, touch.clientY - touchTapStartY) > 6) {
          touchMoved = true;
        }

        if (!isPanning || zoomScale <= 1.02) {
          return;
        }

        event.preventDefault();
        panX = startPanX + (touch.clientX - touchPanStartX);
        panY = startPanY + (touch.clientY - touchPanStartY);
        applyZoomTransform();
      }
    };

    lightboxViewport.ontouchend = (event) => {
      if (!zoomOpen) {
        return;
      }

      if (event.touches.length < 2) {
        pinchStartDistance = 0;
      }

      if (event.touches.length === 1) {
        const touch = event.touches[0];
        isPanning = zoomScale > 1.02;
        touchPanStartX = touch.clientX;
        touchPanStartY = touch.clientY;
        startPanX = panX;
        startPanY = panY;
        applyZoomTransform();
        return;
      }

      if (event.touches.length === 0) {
        if (!touchMoved && !touchGestureWasPinch) {
          const now = Date.now();
          if (now - lastTapTime < 280) {
            zoomScale = zoomScale > 1.2 ? 1 : 2;
            suppressDoubleClickUntil = performance.now() + 500;
            if (zoomScale === 1) {
              panX = 0;
              panY = 0;
            }
            lastTapTime = 0;
          } else {
            lastTapTime = now;
          }
        }

        isPanning = false;
        touchMoved = false;
        touchGestureWasPinch = false;
        applyZoomTransform();
      }
    };

    lightboxViewport.ontouchcancel = () => {
      pinchStartDistance = 0;
      isPanning = false;
      touchMoved = false;
      touchGestureWasPinch = false;
      applyZoomTransform();
    };
  }

  bindProductGallery.dispose = () => {
    cancelGalleryTransition(false);
    closeLightbox();
  };
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
  const sizeLabel = productPanel.querySelector(".size-selector > .meta-label");
  const features = productPanel.querySelector("[data-product-features]");
  const condition = productPanel.querySelector("[data-product-condition]");
  const source = productPanel.querySelector("[data-product-source]");
  const backLink = productPanel.querySelector("[data-product-back]");
  const buyNowLink = productPanel.querySelector("[data-buy-now]");
  const prevLink = productPanel.querySelector("[data-product-prev]");
  const nextLink = productPanel.querySelector("[data-product-next]");
  const specificationList = productPanel.querySelector(".specification-list");
  productPanel.dataset.productCategory = product.category;
  productPanel.closest(".product-layout")?.classList.toggle("has-variant-gallery", product.galleryLayout === "filmstrip" || Object.keys(product.variantMedia).length > 0);
  const specificationValues = {
    type: product.cardCategory,
    sku: product.id,
    condition: product.metadata?.conditionGrade,
    origin: product.metadata?.origin,
    era: product.metadata?.era,
    quantity: product.metadata?.quantityLabel,
  };
  const interactionUi = getCatalogInteractionPack();

  const requestedOption = productPanel.dataset.productSlug === product.slug
    ? productPanel.dataset.selectedSize : new URLSearchParams(window.location.search).get("size");
  productPanel.dataset.productSlug = product.slug;
  productPanel.dataset.selectedSize = product.sizes.includes(requestedOption) ? requestedOption : product.defaultSize;
  bindProductGallery(product);

  if (title) title.textContent = pickCatalogText(product.name);
  document.title = `all black - ${pickCatalogText(product.name)}`;
  if (price) price.textContent = getProductDisplayPrice(product);
  if (intro) intro.textContent = pickCatalogText(product.intro);
  if (color) color.textContent = product.variantMedia?.[productPanel.dataset.selectedSize]
    ? pickCatalogText(product.optionLabels[productPanel.dataset.selectedSize]) : pickCatalogText(product.color);
  if (availability) availability.textContent = pickCatalogText(product.availability);
  if (shipping) shipping.textContent = pickCatalogText(product.shipping);
  if (condition) condition.textContent = pickCatalogText(product.details?.condition);
  if (source) source.textContent = pickCatalogText(product.details?.source);
  [[condition, "conditionLabel"], [source, "sourceLabel"]].forEach(([element, key]) => {
    const label = element?.parentElement.querySelector(".meta-label");
    if (label && product.details?.[key]) label.textContent = pickCatalogText(product.details[key]);
  });
  if (backLink) backLink.href = `shop.html?category=${product.category}`;
  if (buyNowLink) {
    const purchaseState = getProductPurchaseState(product);
    const labels = purchaseStateCopy[currentLanguageCode] || purchaseStateCopy.en;
    buyNowLink.dataset.purchaseState = purchaseState;
    buyNowLink.textContent = labels[purchaseState];
    buyNowLink.href = purchaseState === "buy"
      ? `checkout.html?item=${encodeURIComponent(product.slug)}`
      : purchaseState === "sold"
        ? `shop.html?category=${encodeURIComponent(product.category)}`
        : `service.html?item=${encodeURIComponent(product.slug)}`;
  }

  Object.entries(specificationValues).forEach(([key, value]) => {
    const target = productPanel.querySelector(`[data-product-spec-value="${key}"]`);
    if (target) {
      target.textContent = pickCatalogText(value) || "-";
      target.parentElement.hidden = !pickCatalogText(value);
    }
  });

  if (specificationList) {
    specificationList.querySelectorAll("[data-product-custom-spec]").forEach((row) => row.remove());
    (product.specifications || []).forEach((specification) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const value = document.createElement("dd");
      row.dataset.productCustomSpec = "";
      term.textContent = pickCatalogText(specification.label);
      value.textContent = pickCatalogText(specification.value);
      row.append(term, value);
      specificationList.appendChild(row);
    });
  }

  if (sizeLabel && product.sizeLabel) {
    sizeLabel.textContent = pickCatalogText(product.sizeLabel);
  }

  if (sizes) {
    const selected = product.sizes?.includes(productPanel.dataset.selectedSize)
      ? productPanel.dataset.selectedSize : product.defaultSize;
    sizes.innerHTML = (product.sizes || []).map((size) => {
      const active = size === selected;
      const label = pickCatalogText(product.optionLabels?.[size]) || size;
      return `<button class="filter-chip${active ? " active" : ""}" type="button" data-size="${size}" aria-pressed="${active}">${label}</button>`;
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
  renderHomeArrivals();
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
  quickViewPrice.textContent = getProductDisplayPrice(product);
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
  title.textContent = entry.type === "category" ? getCategoryLabel(entry.category) : pickCatalogText(entry.title);

  const meta = document.createElement("span");
  meta.className = "search-result-meta";
  meta.textContent = entry.type === "category" ? getCategoryLabel(entry.category) : `${getCategoryLabel(entry.category)} / ${pickCatalogText(entry.description)}`;

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

  catalogCategories.forEach((category) => {
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
  const buyNowLink = productPanel.querySelector("[data-buy-now]");
  const saveButton = productPanel.querySelector("[data-save-item]");
  const feedback = productPanel.querySelector("[data-product-feedback]");
  let selectedSize = activeCatalogProduct?.defaultSize || getActiveProduct()?.defaultSize || "S";
  const runtimeText = (key, size = "") => {
    const currentProduct = activeCatalogProduct || getActiveProduct();
    const runtime = window.siteTranslator?.getRuntime(currentLanguageCode);
    const productTemplate = currentProduct?.selectionMessages?.[key];
    const template = pickCatalogText(productTemplate) || runtime?.[key] || "";
    return template
      .replace("Archive Leather Trench", pickCatalogText(currentProduct?.name) || "Archive Leather Trench")
      .replace("{size}", pickCatalogText(currentProduct?.optionLabels?.[size]) || size);
  };

  const updateFeedback = (message) => {
    if (feedback) {
      feedback.textContent = message;
    }
  };

  const bindSizeButtons = () => {
    const sizeButtons = Array.from(productPanel.querySelectorAll("[data-size]"));
    const currentProduct = activeCatalogProduct || getActiveProduct();
    selectedSize = sizeButtons.find((button) => button.classList.contains("active"))?.dataset.size || currentProduct?.defaultSize || "S";
    productPanel.dataset.selectedSize = selectedSize;

    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const previousSize = selectedSize;
        selectedSize = button.dataset.size || selectedSize;
        productPanel.dataset.selectedSize = selectedSize;

        sizeButtons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        if (currentProduct?.variantMedia?.[selectedSize] && previousSize !== selectedSize) {
          bindProductGallery(currentProduct);
          const color = productPanel.querySelector("[data-product-color]");
          if (color) color.textContent = pickCatalogText(currentProduct.optionLabels[selectedSize]);
          const url = new URL(window.location.href);
          url.searchParams.set("size", selectedSize);
          window.history.replaceState(null, "", url);
        }
        updateFeedback(runtimeText("selected", selectedSize));
      });
    });
  };

  window.rebindProductInteractions = bindSizeButtons;
  bindSizeButtons();

  if (buyNowLink) {
    buyNowLink.addEventListener("click", (event) => {
      const currentProduct = activeCatalogProduct || getActiveProduct();
      if (!currentProduct) {
        return;
      }

      const purchaseState = getProductPurchaseState(currentProduct);
      if (purchaseState === "buy") {
        buyNowLink.href = `checkout.html?item=${encodeURIComponent(currentProduct.slug)}&size=${encodeURIComponent(selectedSize)}`;
        return;
      }

      if (purchaseState !== "sold") {
        const chatTrigger = document.querySelector(".site-chat-trigger");
        if (chatTrigger) {
          event.preventDefault();
          chatTrigger.click();
        }
      }
    });
  }

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

function mountWhatsAppContact() {
  const phone = siteContactConfig.whatsapp.phone.replace(/\D/g, "");
  const customerPrefill = siteContactConfig.whatsapp.customerPrefill.trim();
  const whatsappUrl = `https://wa.me/${phone}${customerPrefill ? `?text=${encodeURIComponent(customerPrefill)}` : ""}`;

  if (!phone) {
    return;
  }

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  if (document.querySelector("[data-whatsapp-contact]")) {
    return;
  }

  const contactLink = document.createElement("a");
  contactLink.className = "whatsapp-contact";
  contactLink.dataset.whatsappContact = "";
  contactLink.href = whatsappUrl;
  contactLink.target = "_blank";
  contactLink.rel = "noopener noreferrer";
  contactLink.setAttribute("aria-label", getInterfaceUiPack().whatsappAria);
  contactLink.innerHTML = `
    <span class="whatsapp-contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20 11.5a8 8 0 0 1-11.5 7.2L4 20l1.3-4.1A8 8 0 1 1 20 11.5Z"></path>
        <path d="M8.7 8.1c.3-.3.8-.2 1 .2l.8 1.6c.2.3.1.7-.2.9l-.7.5a6.8 6.8 0 0 0 3.1 3.1l.5-.7c.2-.3.6-.4.9-.2l1.6.8c.4.2.5.7.2 1-.6.7-1.5 1-2.4.8a8.2 8.2 0 0 1-6.6-6.6c-.2-.9.1-1.8.8-2.4Z"></path>
      </svg>
    </span>
    <span class="whatsapp-contact-copy">
      <small>${getInterfaceUiPack().privateEnquiry}</small>
      <strong>WhatsApp</strong>
    </span>
  `;

  document.body.appendChild(contactLink);
  updateInterfaceUi();
}

mountWhatsAppContact();
