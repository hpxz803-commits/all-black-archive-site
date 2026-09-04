(function () {
  "use strict";

  const conversationStorageKey = "allblack-support-conversations-v1";
  const visitorStorageKey = "allblack-support-visitor-v1";
  const activeConversationStorageKey = "allblack-support-active-v1";
  const localUpdateEvent = "allblack-support-updated";

  const chatCopy = {
    en: {
      eyebrow: "Online client care",
      trigger: "Live chat",
      title: "Private client service",
      status: "A specialist is available",
      intro: "Ask about a piece, condition, sizing, or international delivery.",
      attached: "Current piece attached",
      attachProduct: "Reference current piece",
      remove: "Remove",
      openProduct: "View piece",
      placeholder: "Write your message",
      send: "Send",
      defaultEnquiry: "I would like to ask about this piece.",
      close: "Close live chat",
      messageSent: "Sent",
    },
    zh: {
      eyebrow: "在线客户服务",
      trigger: "联系客服",
      title: "私人客户服务",
      status: "客服专员当前在线",
      intro: "您可以咨询商品、成色、尺寸或国际配送问题。",
      attached: "已引用当前商品",
      attachProduct: "引用当前商品",
      remove: "移除",
      openProduct: "查看商品",
      placeholder: "请输入您的问题",
      send: "发送",
      defaultEnquiry: "您好，我想咨询这件商品。",
      close: "关闭在线客服",
      messageSent: "已发送",
    },
    de: {
      eyebrow: "Online-Kundenservice",
      trigger: "Live-Chat",
      title: "Persönlicher Kundenservice",
      status: "Ein Berater ist verfügbar",
      intro: "Fragen Sie nach Artikel, Zustand, Größe oder internationalem Versand.",
      attached: "Aktueller Artikel angehängt",
      attachProduct: "Aktuellen Artikel zitieren",
      remove: "Entfernen",
      openProduct: "Artikel ansehen",
      placeholder: "Nachricht schreiben",
      send: "Senden",
      defaultEnquiry: "Ich möchte mich nach diesem Artikel erkundigen.",
      close: "Live-Chat schließen",
      messageSent: "Gesendet",
    },
    it: {
      eyebrow: "Assistenza online",
      trigger: "Chat live",
      title: "Servizio clienti privato",
      status: "Un consulente è disponibile",
      intro: "Chiedi informazioni su articolo, condizioni, taglia o spedizione internazionale.",
      attached: "Articolo corrente allegato",
      attachProduct: "Allega l'articolo corrente",
      remove: "Rimuovi",
      openProduct: "Vedi articolo",
      placeholder: "Scrivi il tuo messaggio",
      send: "Invia",
      defaultEnquiry: "Vorrei chiedere informazioni su questo articolo.",
      close: "Chiudi la chat",
      messageSent: "Inviato",
    },
    fr: {
      eyebrow: "Service client en ligne",
      trigger: "Chat en direct",
      title: "Service client privé",
      status: "Un conseiller est disponible",
      intro: "Posez vos questions sur une pièce, son état, la taille ou la livraison internationale.",
      attached: "Pièce actuelle jointe",
      attachProduct: "Joindre la pièce actuelle",
      remove: "Retirer",
      openProduct: "Voir la pièce",
      placeholder: "Écrivez votre message",
      send: "Envoyer",
      defaultEnquiry: "Je souhaite obtenir des informations sur cette pièce.",
      close: "Fermer le chat",
      messageSent: "Envoyé",
    },
    ja: {
      eyebrow: "オンラインカスタマーケア",
      trigger: "ライブチャット",
      title: "プライベートカスタマーサービス",
      status: "担当者が対応可能です",
      intro: "商品、状態、サイズ、海外配送についてご相談いただけます。",
      attached: "現在の商品を添付しました",
      attachProduct: "現在の商品を引用",
      remove: "削除",
      openProduct: "商品を見る",
      placeholder: "メッセージを入力",
      send: "送信",
      defaultEnquiry: "この商品について詳しく教えてください。",
      close: "チャットを閉じる",
      messageSent: "送信済み",
    },
    es: {
      eyebrow: "Atención al cliente en línea",
      trigger: "Chat en vivo",
      title: "Atención privada",
      status: "Hay un asesor disponible",
      intro: "Consulta sobre una pieza, su estado, talla o envío internacional.",
      attached: "Pieza actual adjunta",
      attachProduct: "Adjuntar la pieza actual",
      remove: "Quitar",
      openProduct: "Ver pieza",
      placeholder: "Escribe tu mensaje",
      send: "Enviar",
      defaultEnquiry: "Me gustaría consultar esta pieza.",
      close: "Cerrar el chat",
      messageSent: "Enviado",
    },
    ru: {
      eyebrow: "Онлайн-поддержка",
      trigger: "Онлайн-чат",
      title: "Персональная поддержка",
      status: "Консультант доступен",
      intro: "Уточните информацию о вещи, состоянии, размере или международной доставке.",
      attached: "Текущий товар прикреплен",
      attachProduct: "Прикрепить текущий товар",
      remove: "Удалить",
      openProduct: "Посмотреть товар",
      placeholder: "Введите сообщение",
      send: "Отправить",
      defaultEnquiry: "Я хотел(а) бы уточнить информацию об этом товаре.",
      close: "Закрыть чат",
      messageSent: "Отправлено",
    },
    ko: {
      eyebrow: "온라인 고객 지원",
      trigger: "실시간 채팅",
      title: "프라이빗 고객 서비스",
      status: "상담원이 응대 가능합니다",
      intro: "상품, 상태, 사이즈 또는 해외 배송에 대해 문의하세요.",
      attached: "현재 상품 첨부됨",
      attachProduct: "현재 상품 첨부",
      remove: "삭제",
      openProduct: "상품 보기",
      placeholder: "메시지를 입력하세요",
      send: "보내기",
      defaultEnquiry: "이 상품에 대해 문의하고 싶습니다.",
      close: "채팅 닫기",
      messageSent: "전송됨",
    },
  };

  function createId(prefix) {
    const value = window.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    return `${prefix}-${value}`;
  }

  function readStorage(key, fallback = null) {
    try {
      const value = window.localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new CustomEvent(localUpdateEvent));
      return true;
    } catch {
      return false;
    }
  }

  const conversationStore = {
    list() {
      const conversations = readStorage(conversationStorageKey, []);
      return Array.isArray(conversations) ? conversations : [];
    },
    save(conversation) {
      const conversations = this.list();
      const index = conversations.findIndex((item) => item.id === conversation.id);
      if (index >= 0) {
        conversations[index] = conversation;
      } else {
        conversations.push(conversation);
      }
      writeStorage(conversationStorageKey, conversations);
      return conversation;
    },
    subscribe(callback) {
      const handleStorage = (event) => {
        if (!event.key || event.key === conversationStorageKey) callback();
      };
      window.addEventListener("storage", handleStorage);
      window.addEventListener(localUpdateEvent, callback);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(localUpdateEvent, callback);
      };
    },
  };

  function getLanguageCode() {
    let storedLanguage = "";
    try {
      storedLanguage = window.localStorage.getItem("site-language") || "";
    } catch {
      storedLanguage = "";
    }

    const documentLanguage = (document.documentElement.lang || "").toLowerCase();
    const documentCode = documentLanguage.split("-")[0];
    const code = (chatCopy[documentCode] && documentCode) || storedLanguage || "zh";
    return chatCopy[code] ? code : "en";
  }

  function pickText(value, language = getLanguageCode()) {
    if (typeof value === "string" || typeof value === "number") return String(value);
    if (!value || typeof value !== "object") return "";
    return value[language] || value.en || value.zh || Object.values(value).find((item) => typeof item === "string") || "";
  }

  function formatPrice(product, language) {
    const label = pickText(product.pricing?.label, language);
    if (label) return label;
    const amount = Number(product.pricing?.amount);
    if (!Number.isFinite(amount)) return "";
    const localeByLanguage = { en: "en-GB", zh: "zh-CN", de: "de-DE", it: "it-IT", fr: "fr-FR", ja: "ja-JP", es: "es-ES", ru: "ru-RU", ko: "ko-KR" };
    try {
      return new Intl.NumberFormat(localeByLanguage[language] || "en-GB", {
        style: "currency",
        currency: product.pricing?.currency || window.catalogData?.currency || "EUR",
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `${product.pricing?.currency || "EUR"} ${amount}`;
    }
  }

  function getCurrentProductContext() {
    if (document.body.dataset.page !== "product") return null;
    const slug = new URLSearchParams(window.location.search).get("item");
    const product = window.catalogData?.products?.find((item) => item.slug === slug);
    if (!product) return null;
    const language = getLanguageCode();
    return {
      id: product.id,
      slug: product.slug,
      sku: product.attributes?.sku || product.id,
      selection: document.querySelector("[data-product-panel]")?.dataset.selectedSize || product.sizing?.default || "",
      name: pickText(product.copy?.name, language),
      price: formatPrice(product, language),
      image: product.media?.cover || "",
      url: new URL(`product.html?item=${encodeURIComponent(product.slug)}`, window.location.href).href,
    };
  }

  function createProductCard(product, options = {}) {
    const copy = chatCopy[getLanguageCode()] || chatCopy.en;
    const card = document.createElement(options.linked ? "a" : "article");
    card.className = `support-product-card${options.compact ? " is-compact" : ""}`;
    if (options.linked) {
      card.href = product.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    const content = document.createElement("div");
    const label = document.createElement("span");
    label.className = "support-product-label";
    label.textContent = [product.sku || product.id, product.selection].filter(Boolean).join(" / ") || "ARCHIVE PIECE";
    const name = document.createElement("strong");
    name.textContent = product.name;
    const meta = document.createElement("span");
    meta.className = "support-product-meta";
    meta.textContent = [product.price, options.linked ? copy.openProduct : ""].filter(Boolean).join("  ·  ");
    content.append(label, name, meta);
    card.append(image, content);

    if (options.onRemove) {
      const remove = document.createElement("button");
      remove.className = "support-product-remove";
      remove.type = "button";
      remove.textContent = copy.remove;
      remove.addEventListener("click", options.onRemove);
      card.appendChild(remove);
    }

    return card;
  }

  function appendMessage(container, message) {
    const item = document.createElement("article");
    item.className = `support-message is-${message.sender}`;
    const body = document.createElement("div");
    body.className = "support-message-body";
    if (message.text) {
      const text = document.createElement("p");
      text.textContent = message.text;
      body.appendChild(text);
    }
    if (message.product) body.appendChild(createProductCard(message.product, { linked: true, compact: true }));
    const time = document.createElement("time");
    time.dateTime = message.createdAt;
    time.textContent = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(message.createdAt));
    item.append(body, time);
    container.appendChild(item);
  }

  function getVisitorId() {
    let visitorId = readStorage(visitorStorageKey, "");
    if (!visitorId) {
      visitorId = createId("visitor");
      writeStorage(visitorStorageKey, visitorId);
    }
    return visitorId;
  }

  function mountCustomerChat() {
    if (document.body.dataset.page === "support-desk" || document.querySelector("[data-site-chat]")) return;

    let language = getLanguageCode();
    let copy = chatCopy[language] || chatCopy.en;
    const productContext = getCurrentProductContext();
    let pendingProduct = productContext;
    let activeConversationId = readStorage(activeConversationStorageKey, "");

    const root = document.createElement("div");
    root.className = "site-chat";
    root.dataset.siteChat = "";
    root.innerHTML = `
      <button class="site-chat-trigger" type="button" aria-expanded="false" aria-controls="site-chat-panel" aria-label="${copy.trigger}">
        <span class="site-chat-trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M5.5 17.5 4 21l4.2-1.4A8.7 8.7 0 1 0 5.5 17.5Z"></path><path d="M8 10.5h8M8 14h5"></path></svg>
        </span>
        <span class="site-chat-trigger-copy"><small>${copy.eyebrow}</small><strong>${copy.trigger}</strong></span>
        <span class="site-chat-presence" aria-hidden="true"></span>
      </button>
      <section class="site-chat-panel" id="site-chat-panel" role="dialog" aria-modal="false" aria-hidden="true" aria-labelledby="site-chat-title">
        <header class="site-chat-head">
          <div>
            <span class="site-chat-overline">ALL BLACK / CLIENT SERVICE</span>
            <h2 id="site-chat-title">${copy.title}</h2>
            <p><span aria-hidden="true"></span>${copy.status}</p>
          </div>
          <button class="site-chat-close" type="button" aria-label="${copy.close}"><span></span><span></span></button>
        </header>
        <div class="site-chat-thread" aria-live="polite"></div>
        <div class="site-chat-reference"></div>
        <form class="site-chat-composer">
          <label for="site-chat-input">${copy.placeholder}</label>
          <div>
            <textarea id="site-chat-input" rows="2" maxlength="1000" placeholder="${copy.placeholder}"></textarea>
            <button type="submit"><span>${copy.send}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 14-7-4.5 14-3-5.5L5 12Z"></path><path d="m11.5 13.5 3.8-3.8"></path></svg></button>
          </div>
        </form>
      </section>
    `;

    const trigger = root.querySelector(".site-chat-trigger");
    const panel = root.querySelector(".site-chat-panel");
    const closeButton = root.querySelector(".site-chat-close");
    const thread = root.querySelector(".site-chat-thread");
    const reference = root.querySelector(".site-chat-reference");
    const form = root.querySelector(".site-chat-composer");
    const input = root.querySelector("textarea");
    panel.inert = true;

    const getActiveConversation = () => conversationStore.list().find((item) => item.id === activeConversationId) || null;

    const renderReference = () => {
      const currentProduct = getCurrentProductContext();
      reference.replaceChildren();
      reference.classList.toggle("is-empty", !pendingProduct && !currentProduct);
      if (!pendingProduct && currentProduct) {
        const attachButton = document.createElement("button");
        attachButton.className = "support-product-attach";
        attachButton.type = "button";
        attachButton.textContent = `+ ${copy.attachProduct}`;
        attachButton.addEventListener("click", () => {
          pendingProduct = getCurrentProductContext();
          renderReference();
        });
        reference.appendChild(attachButton);
        return;
      }
      if (!pendingProduct) return;
      const label = document.createElement("p");
      label.textContent = copy.attached;
      reference.append(label, createProductCard(pendingProduct, {
        onRemove: () => {
          pendingProduct = null;
          renderReference();
        },
      }));
    };

    const renderThread = () => {
      const conversation = getActiveConversation();
      thread.replaceChildren();
      if (!conversation?.messages?.length) {
        const welcome = document.createElement("div");
        welcome.className = "site-chat-welcome";
        const mark = document.createElement("span");
        mark.textContent = "AB";
        const text = document.createElement("p");
        text.textContent = copy.intro;
        welcome.append(mark, text);
        thread.appendChild(welcome);
      } else {
        conversation.messages.forEach((message) => appendMessage(thread, message));
      }
      thread.scrollTop = thread.scrollHeight;
    };

    const openChat = () => {
      if (pendingProduct) {
        pendingProduct = getCurrentProductContext() || pendingProduct;
        renderReference();
      }
      root.classList.add("is-open");
      document.body.classList.add("is-site-chat-open");
      trigger.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
      panel.inert = false;
      window.setTimeout(() => input.focus({ preventScroll: true }), 260);
    };

    const closeChat = () => {
      root.classList.remove("is-open");
      document.body.classList.remove("is-site-chat-open");
      trigger.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      panel.inert = true;
      trigger.focus({ preventScroll: true });
    };

    trigger.addEventListener("click", () => (root.classList.contains("is-open") ? closeChat() : openChat()));
    closeButton.addEventListener("click", closeChat);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && root.classList.contains("is-open")) closeChat();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = input.value.trim() || (pendingProduct ? copy.defaultEnquiry : "");
      if (!text) return;

      const now = new Date().toISOString();
      let conversation = getActiveConversation();
      if (!conversation) {
        conversation = {
          id: createId("conversation"),
          visitorId: getVisitorId(),
          status: "open",
          createdAt: now,
          updatedAt: now,
          messages: [],
        };
        activeConversationId = conversation.id;
        writeStorage(activeConversationStorageKey, activeConversationId);
      }

      conversation.messages.push({
        id: createId("message"),
        sender: "customer",
        text,
        product: pendingProduct || null,
        createdAt: now,
      });
      conversation.status = "open";
      conversation.updatedAt = now;
      conversationStore.save(conversation);
      pendingProduct = null;
      input.value = "";
      renderReference();
      renderThread();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    window.addEventListener("allblack-language-change", () => {
      language = getLanguageCode();
      copy = chatCopy[language] || chatCopy.en;
      root.querySelector(".site-chat-trigger-copy small").textContent = copy.eyebrow;
      root.querySelector(".site-chat-trigger-copy strong").textContent = copy.trigger;
      trigger.setAttribute("aria-label", copy.trigger);
      root.querySelector(".site-chat-head h2").textContent = copy.title;
      root.querySelector(".site-chat-head p").lastChild.textContent = copy.status;
      root.querySelector(".site-chat-close").setAttribute("aria-label", copy.close);
      root.querySelector(".site-chat-composer > label").textContent = copy.placeholder;
      root.querySelector(".site-chat-composer textarea").placeholder = copy.placeholder;
      root.querySelector('.site-chat-composer button[type="submit"] span').textContent = copy.send;
      if (pendingProduct) pendingProduct = getCurrentProductContext() || pendingProduct;
      renderReference();
      renderThread();
    });

    conversationStore.subscribe(renderThread);
    document.body.appendChild(root);
    renderReference();
    renderThread();
  }

  function mountSupportDesk() {
    if (document.body.dataset.page !== "support-desk") return;
    const list = document.querySelector("[data-support-conversation-list]");
    const empty = document.querySelector("[data-support-empty]");
    const detail = document.querySelector("[data-support-detail]");
    const messages = document.querySelector("[data-support-messages]");
    const title = document.querySelector("[data-support-title]");
    const meta = document.querySelector("[data-support-meta]");
    const form = document.querySelector("[data-support-reply-form]");
    const input = document.querySelector("[data-support-reply-input]");
    const statusButton = document.querySelector("[data-support-status]");
    if (!list || !empty || !detail || !messages || !form || !input) return;

    let selectedConversationId = "";

    const getSortedConversations = () => conversationStore.list().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    const getSelectedConversation = () => getSortedConversations().find((item) => item.id === selectedConversationId) || null;

    const renderMessages = (conversation) => {
      messages.replaceChildren();
      conversation.messages.forEach((message) => appendMessage(messages, message));
      messages.scrollTop = messages.scrollHeight;
    };

    const renderDesk = () => {
      const conversations = getSortedConversations();
      if (!selectedConversationId && conversations.length) selectedConversationId = conversations[0].id;
      if (selectedConversationId && !conversations.some((item) => item.id === selectedConversationId)) {
        selectedConversationId = conversations[0]?.id || "";
      }

      list.replaceChildren();
      conversations.forEach((conversation, index) => {
        const latest = conversation.messages[conversation.messages.length - 1];
        const latestProduct = [...conversation.messages].reverse().find((message) => message.product)?.product;
        const button = document.createElement("button");
        button.className = `support-conversation-item${conversation.id === selectedConversationId ? " is-active" : ""}`;
        button.type = "button";
        button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><div><strong></strong><p></p><small></small></div><i></i>`;
        button.querySelector("strong").textContent = latestProduct?.name || `Client ${conversation.visitorId.slice(-6).toUpperCase()}`;
        button.querySelector("p").textContent = latest?.text || "New enquiry";
        button.querySelector("small").textContent = new Intl.DateTimeFormat(undefined, { month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(conversation.updatedAt));
        button.querySelector("i").className = conversation.status === "resolved" ? "is-resolved" : "";
        button.addEventListener("click", () => {
          selectedConversationId = conversation.id;
          renderDesk();
          input.focus();
        });
        list.appendChild(button);
      });

      const selected = getSelectedConversation();
      empty.hidden = Boolean(selected);
      detail.hidden = !selected;
      if (!selected) return;

      title.textContent = `Client ${selected.visitorId.slice(-6).toUpperCase()}`;
      meta.textContent = `${selected.messages.length} messages  /  ${selected.status.toUpperCase()}`;
      statusButton.textContent = selected.status === "resolved" ? "Reopen" : "Resolve";
      statusButton.dataset.status = selected.status;
      renderMessages(selected);
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = input.value.trim();
      const conversation = getSelectedConversation();
      if (!text || !conversation) return;
      const now = new Date().toISOString();
      conversation.messages.push({ id: createId("message"), sender: "agent", text, product: null, createdAt: now });
      conversation.updatedAt = now;
      conversation.status = "open";
      conversationStore.save(conversation);
      input.value = "";
      renderDesk();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    statusButton.addEventListener("click", () => {
      const conversation = getSelectedConversation();
      if (!conversation) return;
      conversation.status = conversation.status === "resolved" ? "open" : "resolved";
      conversation.updatedAt = new Date().toISOString();
      conversationStore.save(conversation);
      renderDesk();
    });

    conversationStore.subscribe(renderDesk);
    renderDesk();
  }

  mountCustomerChat();
  mountSupportDesk();
})();
