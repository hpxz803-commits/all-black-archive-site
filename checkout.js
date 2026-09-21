(() => {
  const form = document.querySelector("[data-checkout-form]");
  const catalog = window.catalogData?.products || [];

  if (!form || catalog.length === 0) {
    return;
  }

  const languageKey = "site-language";
  const localeMap = {
    en: "en-GB", zh: "zh-CN", de: "de-DE", it: "it-IT", fr: "fr-FR",
    ja: "ja-JP", es: "es-ES", ru: "ru-RU", ko: "ko-KR",
  };

  const copy = {
    en: {
      header: "Secure checkout", kicker: "Private checkout / Guest", title: "Complete your order.", progress: ["Bag", "Details", "Payment"],
      contact: ["Contact", "Where should we send your receipt?"], delivery: ["Delivery", "International shipping details"], shipping: ["Shipping", "Choose a delivery pace"], payment: ["Payment", "Continue through a protected provider"],
      labels: ["Email address", "Phone (optional)", "First name", "Last name", "Country / Region", "Street address", "City", "Postal code"], destination: "Select destination",
      standard: ["Standard tracked", "5-8 business days"], express: ["Express archive", "2-4 business days"], shippingNote: "Final delivery availability and duties depend on destination.",
      card: "Card / Wallet", paypal: "PAYPAL ACCOUNT", security: ["No card details are stored here.", "This preview hands payment to Stripe or PayPal after your delivery details are confirmed."],
      consent: "I agree to the purchase, privacy and returns terms.", submit: "Continue to secure payment", quoteSubmit: "Request private quote", returnShop: "Return to shop",
      summary: "Order summary", piece: "01 piece", selected: "Selected", edit: "Edit selection", totals: ["Subtotal", "Shipping", "Taxes & duties", "Total"], tax: "Calculated next step", quote: "Price on request", afterQuote: "Confirmed with quote",
      reserve: ["Reserved while you complete checkout", "One-off pieces are held for this session only."], preview: "Interface preview only. No payment will be initiated.",
      required: "Please complete this field.", email: "Enter a valid email address.", terms: "Please accept the purchase terms to continue.", formError: "Check the highlighted information before continuing.",
      demo: ["Prototype handoff", "Ready for secure payment.", "Your information passed validation. A live version would now open the selected payment provider; this preview has not charged you.", "Method", "Return to checkout"],
      quoteDemo: ["Private enquiry", "Your request is ready.", "A live version would send this item and your delivery details to the ALL BLACK team for a confirmed price. No payment has been initiated."],
    },
    zh: {
      header: "安全结账", kicker: "私人结账 / 游客", title: "完成您的订单。", progress: ["购物袋", "信息", "支付"],
      contact: ["联系方式", "订单回执发送到哪里？"], delivery: ["配送", "国际配送信息"], shipping: ["运输方式", "选择配送速度"], payment: ["支付", "通过受保护的支付平台继续"],
      labels: ["电子邮箱", "电话号码（选填）", "名字", "姓氏", "国家 / 地区", "街道地址", "城市", "邮政编码"], destination: "选择目的地",
      standard: ["标准追踪配送", "5-8 个工作日"], express: ["档案加急配送", "2-4 个工作日"], shippingNote: "最终可用的配送方式和关税取决于目的地。",
      card: "银行卡 / 钱包", paypal: "PAYPAL 账户", security: ["本站不会保存银行卡信息。", "确认配送信息后，演示流程会将支付交给 Stripe 或 PayPal。"],
      consent: "我同意购买、隐私及退货条款。", submit: "继续安全支付", quoteSubmit: "申请私人报价", returnShop: "返回商店",
      summary: "订单摘要", piece: "01 件单品", selected: "已选择", edit: "修改选择", totals: ["商品小计", "配送", "税费与关税", "合计"], tax: "下一步计算", quote: "价格咨询", afterQuote: "报价时确认",
      reserve: ["结账期间为您保留", "单件商品仅在本次会话期间暂时保留。"], preview: "当前仅为界面预览，不会发起真实付款。",
      required: "请填写此项。", email: "请输入有效的电子邮箱。", terms: "请先同意购买条款。", formError: "请检查标出的信息后再继续。",
      demo: ["支付跳转演示", "已准备进入安全支付。", "您的信息已通过检查。正式版本将在此打开所选支付平台；本次预览不会扣款。", "支付方式", "返回结账页"],
      quoteDemo: ["私人询价", "您的询价已准备完成。", "正式版本会将商品和配送信息发送给 ALL BLACK 团队确认价格，本次没有发起付款。"],
    },
    de: {
      header: "Sicherer Checkout", kicker: "Privater Checkout / Gast", title: "Bestellung abschließen.", progress: ["Warenkorb", "Angaben", "Zahlung"],
      contact: ["Kontakt", "Wohin dürfen wir den Beleg senden?"], delivery: ["Lieferung", "Internationale Versandangaben"], shipping: ["Versand", "Liefergeschwindigkeit wählen"], payment: ["Zahlung", "Über einen geschützten Anbieter fortfahren"],
      labels: ["E-Mail-Adresse", "Telefon (optional)", "Vorname", "Nachname", "Land / Region", "Straße und Hausnummer", "Ort", "Postleitzahl"], destination: "Ziel auswählen",
      standard: ["Standard mit Tracking", "5-8 Werktage"], express: ["Express Archive", "2-4 Werktage"], shippingNote: "Verfügbarkeit, Steuern und Zoll hängen vom Zielort ab.",
      card: "Karte / Wallet", paypal: "PAYPAL-KONTO", security: ["Hier werden keine Kartendaten gespeichert.", "Nach Bestätigung der Lieferdaten erfolgt die Zahlung über Stripe oder PayPal."],
      consent: "Ich akzeptiere Kauf-, Datenschutz- und Rückgabebedingungen.", submit: "Zur sicheren Zahlung", quoteSubmit: "Private Preisanfrage", returnShop: "Zurück zum Shop",
      summary: "Bestellübersicht", piece: "01 Stück", selected: "Ausgewählt", edit: "Auswahl ändern", totals: ["Zwischensumme", "Versand", "Steuern & Zoll", "Gesamt"], tax: "Im nächsten Schritt", quote: "Preis auf Anfrage", afterQuote: "Mit Angebot bestätigt",
      reserve: ["Während des Checkouts reserviert", "Einzelstücke werden nur für diese Sitzung gehalten."], preview: "Nur Vorschau. Es wird keine Zahlung ausgelöst.",
      required: "Bitte dieses Feld ausfüllen.", email: "Bitte gültige E-Mail eingeben.", terms: "Bitte Bedingungen akzeptieren.", formError: "Bitte markierte Angaben prüfen.",
      demo: ["Prototyp-Weiterleitung", "Bereit zur sicheren Zahlung.", "Ihre Angaben sind gültig. Live würde nun der Zahlungsanbieter geöffnet; es wurde nichts belastet.", "Methode", "Zurück zum Checkout"], quoteDemo: ["Private Anfrage", "Ihre Anfrage ist bereit.", "Live würden Artikel und Lieferdaten zur Preisbestätigung an ALL BLACK gesendet. Es wurde keine Zahlung ausgelöst."],
    },
    it: {
      header: "Checkout sicuro", kicker: "Checkout privato / Ospite", title: "Completa il tuo ordine.", progress: ["Bag", "Dati", "Pagamento"],
      contact: ["Contatto", "Dove inviamo la ricevuta?"], delivery: ["Consegna", "Dati per la spedizione internazionale"], shipping: ["Spedizione", "Scegli la velocità di consegna"], payment: ["Pagamento", "Continua tramite un provider protetto"],
      labels: ["Email", "Telefono (facoltativo)", "Nome", "Cognome", "Paese / Regione", "Indirizzo", "Città", "CAP"], destination: "Seleziona destinazione",
      standard: ["Standard tracciata", "5-8 giorni lavorativi"], express: ["Express archive", "2-4 giorni lavorativi"], shippingNote: "Disponibilità, imposte e dazi dipendono dalla destinazione.",
      card: "Carta / Wallet", paypal: "CONTO PAYPAL", security: ["Qui non salviamo i dati della carta.", "Dopo la conferma dei dati, il pagamento passa a Stripe o PayPal."],
      consent: "Accetto le condizioni di acquisto, privacy e reso.", submit: "Continua al pagamento sicuro", quoteSubmit: "Richiedi preventivo privato", returnShop: "Torna allo shop",
      summary: "Riepilogo ordine", piece: "01 articolo", selected: "Selezionato", edit: "Modifica selezione", totals: ["Subtotale", "Spedizione", "Imposte e dazi", "Totale"], tax: "Calcolati nel passaggio successivo", quote: "Prezzo su richiesta", afterQuote: "Confermata con preventivo",
      reserve: ["Riservato durante il checkout", "I pezzi unici sono trattenuti solo per questa sessione."], preview: "Solo anteprima. Nessun pagamento verrà avviato.",
      required: "Compila questo campo.", email: "Inserisci un indirizzo email valido.", terms: "Accetta le condizioni per continuare.", formError: "Controlla i dati evidenziati.",
      demo: ["Passaggio prototipo", "Pronto per il pagamento sicuro.", "I dati sono validi. La versione live aprirebbe ora il provider scelto; non è stato effettuato alcun addebito.", "Metodo", "Torna al checkout"], quoteDemo: ["Richiesta privata", "La richiesta è pronta.", "La versione live invierebbe articolo e consegna al team ALL BLACK per confermare il prezzo. Nessun pagamento è stato avviato."],
    },
    fr: {
      header: "Paiement sécurisé", kicker: "Commande privée / Invité", title: "Finalisez votre commande.", progress: ["Sac", "Coordonnées", "Paiement"],
      contact: ["Contact", "Où envoyer votre reçu ?"], delivery: ["Livraison", "Coordonnées de livraison internationale"], shipping: ["Expédition", "Choisissez le rythme de livraison"], payment: ["Paiement", "Continuer via un prestataire protégé"],
      labels: ["Adresse e-mail", "Téléphone (facultatif)", "Prénom", "Nom", "Pays / Région", "Adresse", "Ville", "Code postal"], destination: "Sélectionner la destination",
      standard: ["Standard avec suivi", "5 à 8 jours ouvrés"], express: ["Express archive", "2 à 4 jours ouvrés"], shippingNote: "La disponibilité, les taxes et les droits dépendent de la destination.",
      card: "Carte / Wallet", paypal: "COMPTE PAYPAL", security: ["Aucune donnée bancaire n'est stockée ici.", "Après confirmation, le paiement est confié à Stripe ou PayPal."],
      consent: "J'accepte les conditions d'achat, de confidentialité et de retour.", submit: "Continuer vers le paiement sécurisé", quoteSubmit: "Demander un devis privé", returnShop: "Retour à la boutique",
      summary: "Récapitulatif", piece: "01 pièce", selected: "Sélection", edit: "Modifier", totals: ["Sous-total", "Livraison", "Taxes et droits", "Total"], tax: "Calculés à l'étape suivante", quote: "Prix sur demande", afterQuote: "Confirmé avec le devis",
      reserve: ["Réservé pendant votre commande", "Les pièces uniques sont retenues pour cette session uniquement."], preview: "Aperçu uniquement. Aucun paiement ne sera lancé.",
      required: "Veuillez compléter ce champ.", email: "Saisissez une adresse e-mail valide.", terms: "Acceptez les conditions pour continuer.", formError: "Vérifiez les informations signalées.",
      demo: ["Redirection prototype", "Prêt pour le paiement sécurisé.", "Vos informations sont valides. La version active ouvrirait le prestataire choisi ; aucun débit n'a été effectué.", "Méthode", "Retour au paiement"], quoteDemo: ["Demande privée", "Votre demande est prête.", "La version active enverrait l'article et la livraison à ALL BLACK pour confirmer le prix. Aucun paiement n'a été lancé."],
    },
    ja: {
      header: "安全なチェックアウト", kicker: "プライベート購入 / ゲスト", title: "ご注文を完了します。", progress: ["バッグ", "お届け先", "お支払い"],
      contact: ["連絡先", "領収書の送付先"], delivery: ["配送", "海外配送情報"], shipping: ["配送方法", "配送速度を選択"], payment: ["お支払い", "保護された決済サービスへ進む"],
      labels: ["メールアドレス", "電話番号（任意）", "名", "姓", "国 / 地域", "住所", "市区町村", "郵便番号"], destination: "配送先を選択",
      standard: ["追跡付き標準配送", "5〜8営業日"], express: ["アーカイブ速達", "2〜4営業日"], shippingNote: "利用可能な配送、税金、関税は配送先により異なります。",
      card: "カード / ウォレット", paypal: "PAYPALアカウント", security: ["カード情報は当サイトに保存されません。", "配送情報確認後、StripeまたはPayPalへ安全に移動します。"],
      consent: "購入、プライバシー、返品条件に同意します。", submit: "安全な支払いへ進む", quoteSubmit: "プライベート見積りを依頼", returnShop: "ショップへ戻る",
      summary: "注文概要", piece: "01点", selected: "選択済み", edit: "選択を変更", totals: ["小計", "配送料", "税金・関税", "合計"], tax: "次のステップで計算", quote: "価格はお問い合わせください", afterQuote: "見積り時に確定",
      reserve: ["チェックアウト中は取り置き", "一点物はこのセッション中のみ確保されます。"], preview: "画面プレビューです。実際の決済は行われません。",
      required: "この項目を入力してください。", email: "有効なメールアドレスを入力してください。", terms: "購入条件に同意してください。", formError: "入力内容を確認してください。",
      demo: ["決済移動プレビュー", "安全な決済の準備ができました。", "入力内容を確認しました。本番では決済サービスが開きます。このプレビューでは請求されません。", "方法", "チェックアウトへ戻る"], quoteDemo: ["個別お問い合わせ", "お問い合わせの準備ができました。", "本番では商品と配送情報をALL BLACKへ送り価格を確定します。決済は行われていません。"],
    },
    es: {
      header: "Pago seguro", kicker: "Compra privada / Invitado", title: "Completa tu pedido.", progress: ["Bolsa", "Datos", "Pago"],
      contact: ["Contacto", "¿Dónde enviamos el recibo?"], delivery: ["Entrega", "Datos de envío internacional"], shipping: ["Envío", "Elige la velocidad de entrega"], payment: ["Pago", "Continúa mediante un proveedor protegido"],
      labels: ["Correo electrónico", "Teléfono (opcional)", "Nombre", "Apellidos", "País / Región", "Dirección", "Ciudad", "Código postal"], destination: "Selecciona destino",
      standard: ["Estándar con seguimiento", "5-8 días laborables"], express: ["Express archive", "2-4 días laborables"], shippingNote: "La disponibilidad, impuestos y aranceles dependen del destino.",
      card: "Tarjeta / Wallet", paypal: "CUENTA PAYPAL", security: ["Aquí no se guardan datos de tarjeta.", "Tras confirmar tus datos, el pago pasa a Stripe o PayPal."],
      consent: "Acepto las condiciones de compra, privacidad y devolución.", submit: "Continuar al pago seguro", quoteSubmit: "Solicitar precio privado", returnShop: "Volver a la tienda",
      summary: "Resumen del pedido", piece: "01 pieza", selected: "Seleccionado", edit: "Editar selección", totals: ["Subtotal", "Envío", "Impuestos y aranceles", "Total"], tax: "Se calculan en el siguiente paso", quote: "Precio bajo consulta", afterQuote: "Confirmado con la oferta",
      reserve: ["Reservado durante el pago", "Las piezas únicas se guardan solo durante esta sesión."], preview: "Solo vista previa. No se iniciará ningún pago.",
      required: "Completa este campo.", email: "Introduce un correo válido.", terms: "Acepta las condiciones para continuar.", formError: "Revisa los datos marcados.",
      demo: ["Redirección de prototipo", "Listo para el pago seguro.", "Tus datos son válidos. La versión activa abriría el proveedor elegido; no se ha realizado ningún cargo.", "Método", "Volver al pago"], quoteDemo: ["Consulta privada", "Tu solicitud está lista.", "La versión activa enviaría el artículo y la entrega a ALL BLACK para confirmar el precio. No se ha iniciado ningún pago."],
    },
    ru: {
      header: "Безопасная оплата", kicker: "Приватный заказ / Без регистрации", title: "Завершите заказ.", progress: ["Корзина", "Данные", "Оплата"],
      contact: ["Контакты", "Куда отправить чек?"], delivery: ["Доставка", "Данные международной доставки"], shipping: ["Доставка", "Выберите скорость доставки"], payment: ["Оплата", "Перейти к защищенному провайдеру"],
      labels: ["Электронная почта", "Телефон (необязательно)", "Имя", "Фамилия", "Страна / Регион", "Адрес", "Город", "Почтовый индекс"], destination: "Выберите страну",
      standard: ["Стандартная с отслеживанием", "5-8 рабочих дней"], express: ["Экспресс archive", "2-4 рабочих дня"], shippingNote: "Доступность, налоги и пошлины зависят от страны назначения.",
      card: "Карта / Кошелек", paypal: "АККАУНТ PAYPAL", security: ["Данные карты здесь не сохраняются.", "После подтверждения доставка передается Stripe или PayPal."],
      consent: "Я принимаю условия покупки, конфиденциальности и возврата.", submit: "Перейти к безопасной оплате", quoteSubmit: "Запросить частную цену", returnShop: "Вернуться в магазин",
      summary: "Состав заказа", piece: "01 вещь", selected: "Выбрано", edit: "Изменить выбор", totals: ["Товары", "Доставка", "Налоги и пошлины", "Итого"], tax: "Расчет на следующем шаге", quote: "Цена по запросу", afterQuote: "Подтверждается с ценой",
      reserve: ["Зарезервировано на время оформления", "Единичные вещи удерживаются только в этой сессии."], preview: "Только демонстрация. Оплата не будет запущена.",
      required: "Заполните это поле.", email: "Введите корректный адрес почты.", terms: "Примите условия покупки.", formError: "Проверьте отмеченные поля.",
      demo: ["Демонстрация перехода", "Все готово к безопасной оплате.", "Данные проверены. В рабочей версии откроется выбранный провайдер; списания не было.", "Способ", "Вернуться к заказу"], quoteDemo: ["Частный запрос", "Запрос готов.", "В рабочей версии товар и доставка будут отправлены ALL BLACK для подтверждения цены. Оплата не запускалась."],
    },
    ko: {
      header: "안전 결제", kicker: "프라이빗 체크아웃 / 비회원", title: "주문을 완료하세요.", progress: ["백", "정보", "결제"],
      contact: ["연락처", "영수증을 어디로 보내드릴까요?"], delivery: ["배송", "해외 배송 정보"], shipping: ["배송 방식", "배송 속도 선택"], payment: ["결제", "보호된 결제 서비스로 계속"],
      labels: ["이메일", "전화번호(선택)", "이름", "성", "국가 / 지역", "도로명 주소", "도시", "우편번호"], destination: "배송지 선택",
      standard: ["추적 표준 배송", "영업일 기준 5-8일"], express: ["아카이브 특급 배송", "영업일 기준 2-4일"], shippingNote: "배송 가능 여부, 세금 및 관세는 목적지에 따라 달라집니다.",
      card: "카드 / 월렛", paypal: "PAYPAL 계정", security: ["카드 정보는 이 사이트에 저장되지 않습니다.", "배송 정보 확인 후 Stripe 또는 PayPal로 안전하게 이동합니다."],
      consent: "구매, 개인정보 및 반품 약관에 동의합니다.", submit: "안전 결제로 계속", quoteSubmit: "프라이빗 가격 문의", returnShop: "숍으로 돌아가기",
      summary: "주문 요약", piece: "01개 상품", selected: "선택", edit: "선택 수정", totals: ["소계", "배송", "세금 및 관세", "합계"], tax: "다음 단계에서 계산", quote: "가격 문의", afterQuote: "견적 시 확정",
      reserve: ["결제 중 상품 보관", "단일 상품은 현재 세션 동안만 보관됩니다."], preview: "인터페이스 미리보기입니다. 실제 결제는 진행되지 않습니다.",
      required: "이 항목을 입력하세요.", email: "올바른 이메일을 입력하세요.", terms: "구매 약관에 동의하세요.", formError: "표시된 정보를 확인하세요.",
      demo: ["결제 이동 미리보기", "안전 결제 준비가 완료되었습니다.", "정보 확인이 완료되었습니다. 실제 버전에서는 결제 서비스가 열리며, 이 미리보기에서는 청구되지 않습니다.", "방법", "체크아웃으로 돌아가기"], quoteDemo: ["프라이빗 문의", "문의가 준비되었습니다.", "실제 버전에서는 상품과 배송 정보를 ALL BLACK 팀에 보내 가격을 확정합니다. 결제는 시작되지 않았습니다."],
    },
  };

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("item");
  const product = catalog.find((item) => item.slug === requestedSlug)
    || catalog.find((item) => Number.isFinite(Number(item.pricing?.amount)))
    || catalog[0];
  const selectedSize = product.sizing?.options?.includes(params.get("size")) ? params.get("size")
    : product.sizing?.default || product.sizing?.options?.[0] || "One size";
  const baseAmount = Number(product.pricing?.amount);
  const hasPrice = Number.isFinite(baseAmount);
  const baseCurrency = product.pricing?.currency || window.catalogData?.currency || "EUR";
  const savedPreferences = window.allBlackPreferences?.get?.() || {};
  const euCountries = new Set(["IT", "DE", "FR", "ES"]);
  let language = "zh";
  let currency = savedPreferences.currency || baseCurrency;
  let paymentMethod = "card";
  let shippingBaseAmount = 18;
  let shippingAmount = 18;
  let lastSubmitButton = null;

  try {
    const saved = window.localStorage.getItem(languageKey);
    if (saved && copy[saved]) language = saved;
  } catch {
    language = "zh";
  }
  const requestedLanguage = params.get("lang");
  if (requestedLanguage && copy[requestedLanguage]) {
    language = requestedLanguage;
  }

  const pick = (value) => {
    if (typeof value === "string") return value;
    if (!value || typeof value !== "object") return "";
    return value[language] || value.en || value.zh || Object.values(value)[0] || "";
  };

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value !== undefined) node.textContent = value;
  };

  const convertAmount = (value, sourceCurrency = baseCurrency) => {
    if (window.allBlackPreferences?.convert) {
      return window.allBlackPreferences.convert(value, sourceCurrency, currency);
    }
    return Number(value);
  };

  const formatMoney = (value) => {
    try {
      return new Intl.NumberFormat(localeMap[language] || "en-GB", {
        style: "currency", currency, maximumFractionDigits: 0,
      }).format(value);
    } catch {
      return `${currency} ${value}`;
    }
  };

  const getPricingLabel = () => {
    if (hasPrice) return formatMoney(convertAmount(baseAmount));
    return pick(product.pricing?.label) || (copy[language] || copy.en).quote;
  };

  const updateTotals = () => {
    const text = copy[language] || copy.en;
    const shippingText = hasPrice ? formatMoney(shippingAmount) : text.afterQuote;
    setText("[data-checkout-price]", getPricingLabel());
    setText("[data-checkout-subtotal]", getPricingLabel());
    setText("[data-checkout-shipping]", shippingText);
    setText("[data-checkout-total]", hasPrice ? formatMoney(convertAmount(baseAmount) + shippingAmount) : text.quote);

    document.querySelectorAll("[data-shipping-options] .checkout-option").forEach((option) => {
      const input = option.querySelector("input");
      const price = option.querySelector("b");
      if (input && price) price.textContent = hasPrice ? formatMoney(convertAmount(Number(input.value), "EUR")) : text.afterQuote;
    });
  };

  const updateShippingRates = () => {
    const country = form.elements.country.value;
    const rates = !country || euCountries.has(country) ? [18, 34] : [32, 54];
    const inputs = Array.from(form.querySelectorAll('input[name="shipping"]'));
    inputs.forEach((input, index) => { input.value = String(rates[index]); });
    const selected = form.querySelector('input[name="shipping"]:checked');
    shippingBaseAmount = Number(selected?.value || rates[0]);
    shippingAmount = convertAmount(shippingBaseAmount, "EUR");
    updateTotals();
  };

  const renderLanguage = (nextLanguage) => {
    language = copy[nextLanguage] ? nextLanguage : "en";
    const text = copy[language];
    setText("[data-checkout-header]", text.header);
    setText("[data-checkout-kicker]", text.kicker);
    setText("[data-checkout-title]", text.title);
    ["[data-progress-bag]", "[data-progress-details]", "[data-progress-payment]"].forEach((selector, index) => setText(selector, text.progress[index]));
    [["[data-contact-kicker]", "[data-contact-title]"], ["[data-delivery-kicker]", "[data-delivery-title]"], ["[data-shipping-kicker]", "[data-shipping-title]"], ["[data-payment-kicker]", "[data-payment-title]"]].forEach((selectors, index) => {
      const values = [text.contact, text.delivery, text.shipping, text.payment][index];
      setText(selectors[0], values[0]); setText(selectors[1], values[1]);
    });
    ["[data-label-email]", "[data-label-phone]", "[data-label-first]", "[data-label-last]", "[data-label-country]", "[data-label-address]", "[data-label-city]", "[data-label-postal]"].forEach((selector, index) => setText(selector, text.labels[index]));
    const destination = form.elements.country.querySelector('option[value=""]');
    if (destination) destination.textContent = text.destination;
    Array.from(form.elements.country.options).forEach((option) => {
      if (!option.value) return;
      const regionCode = option.value === "OTHER" ? "INTL" : option.value;
      if (window.allBlackPreferences?.getRegionLabel) {
        option.textContent = window.allBlackPreferences.getRegionLabel(regionCode, language);
      }
    });
    setText("[data-standard-title]", text.standard[0]); setText("[data-standard-time]", text.standard[1]);
    setText("[data-express-title]", text.express[0]); setText("[data-express-time]", text.express[1]);
    setText("[data-shipping-note]", text.shippingNote); setText("[data-card-label]", text.card); setText("[data-paypal-label]", text.paypal);
    setText("[data-security-title]", text.security[0]); setText("[data-security-copy]", text.security[1]); setText("[data-consent]", text.consent);
    setText("[data-submit-label]", hasPrice ? text.submit : text.quoteSubmit); setText("[data-return-shop]", text.returnShop);
    setText("[data-summary-kicker]", text.summary); setText("[data-summary-count]", text.piece); setText("[data-edit-item]", text.edit);
    ["[data-subtotal-label]", "[data-shipping-label]", "[data-tax-label]", "[data-total-label]"].forEach((selector, index) => setText(selector, text.totals[index]));
    setText("[data-tax-value]", text.tax); setText("[data-reserve-title]", text.reserve[0]); setText("[data-reserve-copy]", text.reserve[1]); setText("[data-preview-note]", text.preview);
    setText("[data-checkout-product]", pick(product.copy?.name));
    const selectionLabel = product.sizing?.optionLabels?.[selectedSize];
    setText("[data-checkout-meta]", `${text.selected}: ${selectionLabel?.[language] || selectionLabel?.en || selectedSize}`);
    setText("[data-demo-kicker]", hasPrice ? text.demo[0] : text.quoteDemo[0]);
    setText("[data-demo-title]", hasPrice ? text.demo[1] : text.quoteDemo[1]);
    setText("[data-demo-copy]", hasPrice ? text.demo[2] : text.quoteDemo[2]);
    setText("[data-demo-method]", text.demo[3]); setText("[data-demo-action]", text.demo[4]);
    setText("[data-demo-method-value]", paymentMethod === "paypal" ? "PayPal" : text.card);
    document.title = `all black - ${text.header}`;
    updateTotals();
  };

  const cover = product.media?.variants?.[selectedSize]?.cover || product.media?.cover || product.media?.gallery?.[0];
  const image = document.querySelector("[data-checkout-image]");
  if (image && cover) {
    image.src = cover;
    image.alt = pick(product.copy?.name);
  }
  const editLink = document.querySelector("[data-edit-item]");
  if (editLink) editLink.href = `product.html?item=${encodeURIComponent(product.slug)}&size=${encodeURIComponent(selectedSize)}`;

  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    button.addEventListener("click", () => {
      paymentMethod = button.dataset.paymentMethod || "card";
      document.querySelectorAll("[data-payment-method]").forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-checked", String(selected));
      });
      renderLanguage(language);
    });
  });

  form.querySelectorAll('input[name="shipping"]').forEach((input) => {
    input.addEventListener("change", () => {
      form.querySelectorAll(".checkout-option").forEach((option) => option.classList.toggle("is-selected", option.contains(input)));
      shippingBaseAmount = Number(input.value);
      shippingAmount = convertAmount(shippingBaseAmount, "EUR");
      updateTotals();
    });
  });
  form.elements.country.addEventListener("change", () => {
    const nextRegion = form.elements.country.value === "OTHER" ? "INTL" : form.elements.country.value;
    if (nextRegion) window.allBlackPreferences?.setRegion?.(nextRegion);
    updateShippingRates();
  });

  const clearError = (field) => {
    const wrapper = field.closest(".checkout-field");
    wrapper?.classList.remove("is-invalid");
    const error = wrapper?.querySelector("small");
    if (error) error.textContent = "";
  };

  Array.from(form.elements).forEach((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) return;
    field.addEventListener("input", () => clearError(field));
    field.addEventListener("change", () => clearError(field));
  });

  const validate = () => {
    const text = copy[language] || copy.en;
    let firstInvalid = null;
    ["email", "firstName", "lastName", "country", "address", "city", "postalCode"].forEach((name) => {
      const field = form.elements[name];
      clearError(field);
      const invalidEmail = name === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      if (!field.value.trim() || invalidEmail) {
        const wrapper = field.closest(".checkout-field");
        wrapper?.classList.add("is-invalid");
        const error = wrapper?.querySelector("small");
        if (error) error.textContent = invalidEmail ? text.email : text.required;
        if (!firstInvalid) firstInvalid = field;
      }
    });
    const consent = form.querySelector(".checkout-consent");
    consent.classList.toggle("is-invalid", !form.elements.terms.checked);
    if (!form.elements.terms.checked && !firstInvalid) firstInvalid = form.elements.terms;
    setText("[data-checkout-status]", firstInvalid ? (form.elements.terms.checked ? text.formError : text.terms) : "");
    firstInvalid?.focus();
    return !firstInvalid;
  };

  const demo = document.querySelector("[data-checkout-demo]");
  const closeDemo = () => {
    if (!demo) return;
    demo.hidden = true;
    document.body.classList.remove("is-checkout-demo-open");
    lastSubmitButton?.focus();
  };

  document.querySelectorAll("[data-demo-close]").forEach((button) => button.addEventListener("click", closeDemo));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && demo && !demo.hidden) closeDemo();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validate() || !demo) return;
    lastSubmitButton = form.querySelector("[data-checkout-submit]");
    renderLanguage(language);
    demo.hidden = false;
    document.body.classList.add("is-checkout-demo-open");
    window.requestAnimationFrame(() => demo.querySelector("[data-demo-close]:last-child")?.focus());
  });

  window.addEventListener("allblack-language-change", (event) => renderLanguage(event.detail?.language || "en"));
  window.addEventListener("allblack-preferences-change", (event) => {
    const nextCurrency = event.detail?.currency;
    const nextRegion = event.detail?.region;
    if (nextCurrency) currency = nextCurrency;
    if (nextRegion) {
      const countryValue = nextRegion === "INTL" ? "OTHER" : nextRegion;
      if (form.elements.country.querySelector(`option[value="${countryValue}"]`)) {
        form.elements.country.value = countryValue;
      }
    }
    shippingAmount = convertAmount(shippingBaseAmount, "EUR");
    updateShippingRates();
  });

  if (savedPreferences.region) {
    const countryValue = savedPreferences.region === "INTL" ? "OTHER" : savedPreferences.region;
    if (form.elements.country.querySelector(`option[value="${countryValue}"]`)) {
      form.elements.country.value = countryValue;
    }
  }
  renderLanguage(language);
  updateShippingRates();
})();
