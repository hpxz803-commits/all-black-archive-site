(() => {
  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && typeof value === "string") el.textContent = value;
  };

  const setTexts = (selector, values) => {
    if (!Array.isArray(values)) return;
    document.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.textContent = values[i];
    });
  };

  const setIn = (root, selector, value) => {
    const el = root?.querySelector(selector);
    if (el && typeof value === "string") el.textContent = value;
  };

  const pageKey = () => {
    if (document.querySelector("[data-product-panel]")) return "product";
    return document.body?.dataset.page || "home";
  };

  const twice = (items) => [...items, ...items];

  const copy = {
    en: {
      titles: { home: "all black", shop: "all black - Shop", collection: "all black - Collection", product: "all black - Product", about: "all black - About", archive: "all black - Archive" },
      nav: ["Home", "New In", "Shop", "Outerwear", "Set", "Layering", "Eyewear", "T-Shirt", "Shoes", "Ready to ship", "Collection", "Archive", "About"],
      tools: ["Search", "Saved", "Bag"],
      meta: { home: "Curated Archive", shop: "Shop", collection: "Archive edit", product: "Look 01", about: "Studio", archive: "Archive" },
      footer: "Online curated secondhand archive",
      home: {
        hero: {
          eyebrow: "Curated secondhand selection",
          intro: "all black is a curated luxury secondhand site focused on monochrome silhouettes, colder tailoring, and archive pieces that still carry weight.",
          actions: ["Shop", "Collection", "About"],
          notes: ["Curated archive / secondhand luxury / monochrome order", "Brand slogan: selected for a second life"],
          stage: ["Archive focus", "Rare black pieces, selected with restraint.", "Luxury secondhand with a quieter point of view."],
          stamp: ["Archive note", "Curated luxury resale in a black-driven selection"],
          footer: ["Curated coats / archive tailoring / monochrome selection / one-off arrivals", "Online archive store"],
          ticker: ["ALL BLACK", "CURATED SECONDHAND", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "ONE-OFF PIECES", "SELECTED FOR A SECOND LIFE"],
        },
        featured: {
          kicker: "Featured archive",
          title: "The homepage foregrounds discontinued secondhand pieces that still feel sharp and relevant.",
          copy: "all black does not chase volume. It filters archive outerwear, designer black pieces, and stronger silhouettes into a quieter edit before sending visitors into Collection or Shop.",
          list: [
            "Focus on archive coats, structured outerwear, and monochrome designer pieces",
            "Emphasize rarity, condition, provenance, and resale value",
            "Collection handles curation while Shop handles live availability and pricing",
          ],
          actions: ["View Collection", "Shop the Edit"],
        },
        image: ["Archive selection", "The homepage behaves like a monochrome secondhand editorial before it becomes a store.", "Explore the archive"],
        products: {
          kicker: "Featured products",
          title: "Hero products turn the mood into a browsing path while keeping the restraint of an archive store.",
          copy: "These are the pieces worth opening first. They keep the editorial feeling but point naturally toward the product and shop pages.",
          cards: [
            ["Outerwear", "Archive Leather Trench", "Open product"],
            ["Designer coat", "Structured Wool Coat", "Open shop"],
            ["Rare set", "Black Studio Set", "See all items"],
          ],
        },
        story: {
          kicker: "Brand slogan",
          title: "Selected for a second life.",
          copy: "all black is not interested in secondhand for its own sake, but in garments that still hold after re-entering the wardrobe. The layout stays calm so the site feels like a curated archive space instead of a resale list.",
          actions: ["Read About", "Enter Shop"],
          stats: [
            "The homepage establishes the visual atmosphere of a curated secondhand archive",
            "The collection page explains curation logic and key style directions",
            "Shop and Product carry the browsing and purchase path",
          ],
        },
      },
      shop: {
        hero: ["Shop", "Core pieces for the current season.", "The shop keeps the colder archive mood of the homepage but organizes information more clearly around provenance, condition, and rarity."],
        panels: [
          ["New in", "Latest archive arrivals updated as one-off additions.", "This entry emphasizes archive scarcity: once it arrives, it may not return."],
          ["Saved / Bag", "Keep the pieces you care about before deciding whether to buy.", "For now these complete the navigation layer. Next, they can become full saved-items and bag interactions."],
        ],
        filters: ["Category", "Delivery", "All", "Outerwear", "Set", "Layering", "Eyewear", "T-Shirt", "Shoes", "All", "Ready to ship", "Made to order"],
        cards: [
          ["Outerwear", "Archive Leather Trench", "Italian archive / condition A / ready to ship", "View details"],
          ["Outerwear", "Structured Wool Coat", "Designer secondhand / condition A- / one piece only", "View details"],
          ["Set", "Black Studio Set", "Two-piece archive set / condition B+ / low stock", "View details"],
          ["Layering", "After Dark Shell Top", "Layering piece / condition A / single item", "View details"],
          ["Eyewear", "Noir Frame 02", "Archive sunglasses / condition A / ready to ship", "View details"],
          ["T-Shirt", "Studio Essential Tee", "Designer basic / condition A- / single item", "View details"],
          ["Shoes", "Archive Square Heel", "Leather heel / condition B+ / made to order sourcing", "View details"],
        ],
      },
      collection: {
        hero: ["Archive selection", "Black archive edit", "This page presents the monochrome secondhand pieces that all black is highlighting right now. It behaves more like an archive edit than a traditional drop."],
        looks: [
          ["Look 01", "Archive leather trench with sharp shoulder architecture", "Open product"],
          ["Look 02", "Monochrome archive tailoring", ""],
          ["Look 03", "Rare black surface study", ""],
        ],
        panels: [
          ["Direction", "Built from rarity, condition, and a stricter black palette.", "Each piece here is chosen for provenance, condition, and real wear value after re-entry."],
          ["Materials", "Leather, wool, matte jersey, and old-season designer construction.", "In luxury secondhand, image matters, but so do material, background, and longevity."],
        ],
      },
      product: {
        hero: ["Featured product", "Archive Leather Trench", "A luxury secondhand coat with a strong silhouette. The appeal is not that it is new, but that its structure, finish, and collectible value still hold."],
        metaLabels: ["Color", "Availability", "Shipping"],
        metaValues: ["Black", "In stock", "2-4 business days"],
        size: "Size",
        features: [
          "Structured shoulder line with lacquered finish",
          "Archive designer piece with visible garment structure",
          "Selected for silhouette, condition, and long-term wear value",
        ],
        actions: ["Add to bag", "Save for later"],
        links: ["Back to shop", "View collection"],
        details: [
          ["Condition", "A grade secondhand condition with light signs of storage and no obvious structural damage."],
          ["Source", "Curated from a private archive selection and reintroduced as a one-off store piece."],
        ],
      },
      about: {
        hero: ["About the studio", "Selected for a second life.", "all black is a showcase for luxury secondhand clothing focused on black palettes, archive designer pieces, and silhouettes worth revisiting."],
        panels: [
          ["Philosophy", "Curated secondhand, reduced palette, and pieces worth wearing again.", "The site avoids volume and uses selection, layout, and narrative to make secondhand feel closer to a curated archive."],
          ["Studio", "Online archive store for luxury secondhand clothing.", "The About page explains the selection logic so the homepage, collection page, and shop all speak the same language."],
        ],
      },
      archive: {
        hero: ["Archive", "Designer pieces selected by rarity, condition, and black-tone discipline.", "The Archive page carries the more editorial browsing mode. It is not only ‘more products’ but a clearer statement of what all black continues to select over time."],
        panels: [
          ["Designers", "Avant outerwear, directional tailoring, and black archive staples.", "This area can later branch into designers, eras, or tags and become a more curated entry than the Shop page."],
          ["Selection logic", "Every piece must still hold shape, mood, and long-term wear value.", "Archive helps explain why these secondhand garments deserve to be shown and bought again."],
        ],
      },
      runtime: { selected: "Selected size {size}.", added: "Archive Leather Trench in size {size} added to bag.", saved: "Item saved to your archive list.", unsaved: "Item removed from your archive list.", addedBtn: "Added", addBtn: "Add to bag", saveBtn: "Save for later", savedBtn: "Saved" },
    },
    zh: {
      titles: { home: "all black", shop: "all black - 商店", collection: "all black - 系列", product: "all black - 单品", about: "all black - 关于", archive: "all black - 档案" },
      nav: ["首页", "新到", "商店", "外套", "套装", "叠穿", "眼镜", "T恤", "鞋子", "现货可发", "系列", "档案", "关于"],
      tools: ["搜索", "收藏", "购物袋"],
      meta: { home: "精选档案", shop: "商店", collection: "档案编辑", product: "造型 01", about: "工作室", archive: "档案" },
      footer: "在线精品二手档案商店",
      home: {
        hero: {
          eyebrow: "精选精品二手",
          intro: "all black 是一个展示精品二手服装的网站，专注于黑色系轮廓、冷调剪裁和依然有分量感的 archive 单品。",
          actions: ["商店", "系列", "关于"],
          notes: ["精选档案 / 精品二手 / 黑色秩序", "品牌标语：selected for a second life"],
          stage: ["档案焦点", "稀有黑色单品，以更克制的方式被重新选择。", "更安静视角下的精品二手。"],
          stamp: ["档案注记", "黑色系导向的精品二手精选"],
          footer: ["精选大衣 / 档案剪裁 / 黑色选择 / 单件到达", "在线档案商店"],
          ticker: ["ALL BLACK", "精选精品二手", "奢侈品再流通", "档案外套", "单件单出", "第二次生命"],
        },
        featured: {
          kicker: "重点档案",
          title: "首页重点展示那些已经停产、但依然足够锋利的精品二手单品。",
          copy: "all black 不追求大量上新，而是用更克制的方式筛选 archive 外套、设计师黑色单品和更耐看的轮廓，再把用户送入系列页和商店页。",
          list: [
            "主打 archive 大衣、结构外套和黑色系设计师单品",
            "强调稀缺性、成色、出处和二手再流通价值",
            "系列页负责策展，商店页负责在售状态和价格",
          ],
          actions: ["查看系列", "进入商店"],
        },
        image: ["档案选择", "首页更像一本黑色系二手服装杂志，在进入商店前先建立气质。", "浏览档案"],
        products: {
          kicker: "主打单品",
          title: "主打单品把展示感转成浏览路径，同时保留 archive 商店的克制。",
          copy: "这些是当前最值得先打开的单品，既保留首页的氛围，也自然导向商品页和商店页。",
          cards: [
            ["外套", "Archive Leather Trench", "打开单品"],
            ["设计师大衣", "Structured Wool Coat", "进入商店"],
            ["稀有套装", "Black Studio Set", "查看全部"],
          ],
        },
        story: {
          kicker: "品牌标语",
          title: "Selected for a second life.",
          copy: "all black 关注的不只是“二手”，而是那些重新进入衣橱后依然成立的服装。版式保持安静，让网站更像精品 archive 空间，而不是普通转卖列表。",
          actions: ["了解品牌", "进入商店"],
          stats: [
            "首页负责建立精品二手 archive 的视觉氛围",
            "系列页负责展示策展逻辑和重点风格方向",
            "Shop 和 Product 页面负责承接浏览与购买",
          ],
        },
      },
      shop: {
        hero: ["商店", "当季值得先看的核心单品。", "商店页延续首页的冷调 archive 气质，但把信息组织得更清楚，重点放在出处、成色和稀缺性。"],
        panels: [
          ["新到", "最新档案单品，以单件补货的方式进入视野。", "这个入口强调“新到即稀缺”的 archive 浏览逻辑。"],
          ["收藏 / 购物袋", "先把感兴趣的单品留下，再决定是否进入购买。", "目前这两个入口先补全导航层级，后面可以继续做成真正的收藏和购物袋交互。"],
        ],
        filters: ["类别", "配送", "全部", "外套", "套装", "叠穿", "眼镜", "T恤", "鞋子", "全部", "现货可发", "订制预定"],
        cards: [
          ["外套", "Archive Leather Trench", "意大利档案 / A 级成色 / 现货可发", "查看详情"],
          ["外套", "Structured Wool Coat", "设计师二手 / A- 成色 / 单件在售", "查看详情"],
          ["套装", "Black Studio Set", "两件式档案套装 / B+ 成色 / 库存很少", "查看详情"],
          ["叠穿", "After Dark Shell Top", "叠穿单品 / A 级成色 / 单件出售", "查看详情"],
          ["眼镜", "Noir Frame 02", "档案墨镜 / A 级成色 / 现货可发", "查看详情"],
          ["T恤", "Studio Essential Tee", "设计师基础款 / A- 成色 / 单件出售", "查看详情"],
          ["鞋子", "Archive Square Heel", "皮质高跟鞋 / B+ 成色 / 可代寻订制", "查看详情"],
        ],
      },
      collection: {
        hero: ["档案选择", "黑色档案编辑", "这一页展示的是 all black 当前主推的精品二手黑色系单品。它更像一份经过筛选的 archive 编辑，而不是传统意义上的新品系列。"],
        looks: [
          ["造型 01", "肩部结构锋利的档案皮质风衣", "打开单品"],
          ["造型 02", "黑色系档案剪裁", ""],
          ["造型 03", "稀有黑色表面研究", ""],
        ],
        panels: [
          ["方向", "由稀缺性、成色和更严格的黑色谱系构成。", "这里的每一件单品都强调出处、状态和重新进入衣橱后的可穿性。"],
          ["材质", "皮革、羊毛、哑光针织和旧季设计师结构。", "精品二手的价值不仅来自视觉，也来自材质、背景和长期穿着价值。"],
        ],
      },
      product: {
        hero: ["主打单品", "Archive Leather Trench", "这是一件带有强烈轮廓感的精品二手外套，重点不在“新”，而在它依然成立的版型、质感和收藏价值。"],
        metaLabels: ["颜色", "库存", "配送"],
        metaValues: ["黑色", "现货", "2-4 个工作日"],
        size: "尺码",
        features: [
          "带有亮面处理的结构肩线",
          "可见服装结构的档案设计师单品",
          "以轮廓、成色和长期穿着价值为选择标准",
        ],
        actions: ["加入购物袋", "稍后保存"],
        links: ["返回商店", "查看系列"],
        details: [
          ["成色", "A 级二手状态，仅有轻微存放痕迹，没有明显结构性损伤。"],
          ["来源", "来自私人档案选择，并以单件商店单品的形式重新上架。"],
        ],
      },
      about: {
        hero: ["关于工作室", "Selected for a second life.", "all black 是一个展示精品二手服装的网站，专注于黑色系、设计师旧季单品和更耐看的 archive 轮廓。"],
        panels: [
          ["理念", "经过筛选的精品二手、克制的色谱，以及值得再次穿上的衣服。", "网站不追求堆货，而是通过筛选、排版和叙事，把二手服装做得更像精品 archive 展示。"],
          ["工作室", "一个展示精品二手服装的在线档案商店。", "About 页面负责说明 all black 的选品方向，让首页、系列页和商店页形成同一套语境。"],
        ],
      },
      archive: {
        hero: ["档案", "以稀缺性、成色和黑色秩序为标准选择设计师单品。", "Archive 页面用来承接更偏策展感的浏览逻辑。它不只是“更多商品”，而是把 all black 的长期选品标准单独讲清楚。"],
        panels: [
          ["设计师", "先锋外套、方向性剪裁和黑色 archive 基础单品。", "这里之后可以继续细分成设计师、年代或风格标签，成为比 Shop 更策展化的入口。"],
          ["选择逻辑", "每一件单品都必须保留形态、情绪和长期穿着价值。", "Archive 页面会帮助用户理解，为什么这些二手服装值得再次被展示和购买。"],
        ],
      },
      runtime: { selected: "已选择尺码 {size}。", added: "Archive Leather Trench 的 {size} 码已加入购物袋。", saved: "单品已加入你的收藏列表。", unsaved: "单品已从你的收藏列表移除。", addedBtn: "已加入", addBtn: "加入购物袋", saveBtn: "稍后保存", savedBtn: "已保存" },
    },
    de: null,
    it: null,
    fr: null,
    ja: null,
    es: null,
    ru: null,
    ko: null,
  };

  ["de", "it", "fr", "ja", "es", "ru", "ko"].forEach((lang) => {
    copy[lang] = {
      ...copy.en,
      titles: { ...copy.en.titles, home: "all black" },
      shop: copy.en.shop,
      collection: copy.en.collection,
      product: copy.en.product,
      about: copy.en.about,
      archive: copy.en.archive,
      runtime: copy.en.runtime,
    };
  });

  Object.assign(copy.de, {
    titles: { home: "all black", shop: "all black - Shop", collection: "all black - Kollektion", product: "all black - Produkt", about: "all black - Über", archive: "all black - Archiv" },
    nav: ["Start", "Neu", "Shop", "Outerwear", "Set", "Layering", "Brillen", "T-Shirts", "Schuhe", "Sofort versandbereit", "Kollektion", "Archiv", "Über"],
    tools: ["Suche", "Gespeichert", "Tasche"],
    meta: { home: "Kuratiertes Archiv", shop: "Shop", collection: "Archiv-Edit", product: "Look 01", about: "Studio", archive: "Archiv" },
    footer: "Online-Archiv für kuratierte Luxus-Secondhand-Mode",
    home: {
      hero: {
        eyebrow: "Kuratiertes Luxus-Secondhand",
        intro: "all black ist eine kuratierte Plattform für luxuriöse Secondhand-Mode mit Fokus auf monochrome Silhouetten, kühleres Tailoring und Archivstücke mit bleibender Präsenz.",
        actions: ["Shop", "Kollektion", "Über"],
        notes: ["Kuratiertes Archiv / Luxus-Secondhand / schwarze Ordnung", "Claim: selected for a second life"],
        stage: ["Archivfokus", "Seltene schwarze Stücke, bewusst und reduziert ausgewählt.", "Luxus-Secondhand aus einer ruhigeren Perspektive."],
        stamp: ["Archivnotiz", "Kuratiertes Luxus-Resale mit schwarzem Fokus"],
        footer: ["Kuratiere Mäntel / Archiv-Tailoring / monochrome Auswahl / einzelne Zugänge", "Online-Archivshop"],
        ticker: ["ALL BLACK", "KURATIERTES SECONDHAND", "LUXUS-RESALE", "ARCHIV-OUTERWEAR", "EINZELSTÜCKE", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "Archiv-Highlight",
        title: "Die Startseite stellt eingestellte Secondhand-Stücke in den Vordergrund, die noch immer präzise und relevant wirken.",
        copy: "all black jagt keinen Mengen. Es filtert Archiv-Outerwear, schwarze Designerstücke und stärkere Silhouetten in ein ruhigeres Edit, bevor Besucher in Kollektion oder Shop weitergehen.",
        list: [
          "Fokus auf Archivmäntel, strukturierte Outerwear und monochrome Designerstücke",
          "Seltenheit, Zustand, Herkunft und Resale-Wert stehen im Mittelpunkt",
          "Die Kollektion kuratiert, der Shop zeigt Verfügbarkeit und Preis",
        ],
        actions: ["Kollektion ansehen", "Edit shoppen"],
      },
      image: ["Archiv-Auswahl", "Die Startseite funktioniert zuerst wie ein monochromes Secondhand-Editorial und erst danach wie ein Store.", "Archiv entdecken"],
      products: {
        kicker: "Key pieces",
        title: "Hero-Produkte verwandeln die Stimmung in eine klare Browsing-Spur und behalten dennoch die Zurückhaltung eines Archiv-Stores.",
        copy: "Das sind die Stücke, die man zuerst öffnen sollte. Sie halten den Editorial-Ton und führen gleichzeitig natürlich zu Produkt- und Shop-Seite.",
        cards: [
          ["Outerwear", "Archive Leather Trench", "Produkt öffnen"],
          ["Designermantel", "Structured Wool Coat", "Shop öffnen"],
          ["Seltenes Set", "Black Studio Set", "Alle Stücke ansehen"],
        ],
      },
      story: {
        kicker: "Brand Claim",
        title: "Selected for a second life.",
        copy: "all black interessiert sich nicht für Secondhand als Etikett, sondern für Kleidungsstücke, die nach ihrer Rückkehr in den Kleiderschrank weiterhin bestehen. Das Layout bleibt ruhig, damit die Seite wie ein kuratierter Archivraum wirkt und nicht wie eine Resale-Liste.",
        actions: ["Über lesen", "Shop betreten"],
        stats: [
          "Die Startseite etabliert die visuelle Atmosphäre eines kuratierten Secondhand-Archivs",
          "Die Kollektionsseite erklärt Kurationslogik und Stilrichtungen",
          "Shop und Produkt tragen den Weg aus Browsing und Kauf",
        ],
      },
    },
    shop: {
      hero: ["Shop", "Kernstücke für die aktuelle Saison.", "Der Shop hält die kühlere Archivstimmung der Startseite, organisiert Informationen aber klarer um Herkunft, Zustand und Seltenheit."],
      panels: [
        ["Neu", "Neueste Archivzugänge als einzelne Ergänzungen.", "Dieser Einstieg betont Archivknappheit: Wenn ein Stück ankommt, kehrt es womöglich nicht zurück."],
        ["Gespeichert / Tasche", "Behalte relevante Stücke zuerst im Blick, bevor du dich für den Kauf entscheidest.", "Diese Bereiche vervollständigen vorerst die Navigation und können später zu echten Saved- und Bag-Interaktionen ausgebaut werden."],
      ],
      filters: ["Kategorie", "Versand", "Alle", "Outerwear", "Set", "Layering", "Alle", "Sofort versandbereit", "Made to order"],
      cards: [
        ["Outerwear", "Archive Leather Trench", "Italienisches Archiv / Zustand A / sofort versandbereit", "Details ansehen"],
        ["Outerwear", "Structured Wool Coat", "Designer-Secondhand / Zustand A- / nur ein Stück", "Details ansehen"],
        ["Set", "Black Studio Set", "Archiv-Zweiteiler / Zustand B+ / wenig Bestand", "Details ansehen"],
        ["Layering", "After Dark Shell Top", "Layering Piece / Zustand A / Einzelstück", "Details ansehen"],
      ],
    },
    collection: {
      hero: ["Archiv-Auswahl", "Schwarzes Archiv-Edit", "Diese Seite zeigt die monochromen Secondhand-Stücke, die all black aktuell hervorhebt. Sie verhält sich stärker wie ein Archiv-Edit als wie ein klassischer Drop."],
      looks: [
        ["Look 01", "Archiv-Ledertrench mit scharfer Schulterarchitektur", "Produkt öffnen"],
        ["Look 02", "Monochromes Archiv-Tailoring", ""],
        ["Look 03", "Seltene schwarze Oberflächenstudie", ""],
      ],
      panels: [
        ["Richtung", "Gebaut aus Seltenheit, Zustand und einer strengeren schwarzen Palette.", "Jedes Stück hier wurde nach Herkunft, Zustand und realem Tragewert nach der Rückkehr ausgewählt."],
        ["Materialien", "Leder, Wolle, matter Jersey und Konstruktionen aus älteren Designersaisons.", "Im Luxus-Secondhand zählt das Bild, aber ebenso Material, Hintergrund und Langlebigkeit."],
      ],
    },
    product: {
      hero: ["Featured product", "Archive Leather Trench", "Ein luxuriöser Secondhand-Mantel mit starker Silhouette. Seine Anziehung liegt nicht im Neu-Sein, sondern darin, dass Struktur, Finish und Sammlerwert weiterhin bestehen."],
      metaLabels: ["Farbe", "Verfügbarkeit", "Versand"],
      metaValues: ["Schwarz", "Auf Lager", "2-4 Werktage"],
      size: "Größe",
      features: [
        "Strukturierte Schulterlinie mit lackiertem Finish",
        "Archiv-Designer-Stück mit sichtbarer Kleidungsstruktur",
        "Ausgewählt nach Silhouette, Zustand und langfristigem Tragewert",
      ],
      actions: ["Zur Tasche", "Für später speichern"],
      links: ["Zurück zum Shop", "Kollektion ansehen"],
      details: [
        ["Zustand", "A-grade Secondhand-Zustand mit leichten Lagerspuren und ohne erkennbare strukturelle Schäden."],
        ["Quelle", "Kuratiert aus einer privaten Archiv-Auswahl und als Einzelstück erneut in den Store gebracht."],
      ],
    },
    about: {
      hero: ["Über das Studio", "Selected for a second life.", "all black ist eine Plattform für luxuriöse Secondhand-Kleidung mit Fokus auf schwarze Paletten, Archiv-Designer-Stücke und Silhouetten, die eine zweite Betrachtung verdienen."],
      panels: [
        ["Philosophie", "Kuratiertes Secondhand, reduzierte Palette und Stücke, die ein weiteres Tragen wert sind.", "Die Seite vermeidet Masse und nutzt Auswahl, Layout und Erzählung, damit Secondhand näher an einem kuratierten Archiv wirkt."],
        ["Studio", "Online-Archivstore für luxuriöse Secondhand-Mode.", "Die About-Seite erklärt die Auswahllogik, damit Startseite, Kollektion und Shop dieselbe Sprache sprechen."],
      ],
    },
    archive: {
      hero: ["Archiv", "Designerstücke ausgewählt nach Seltenheit, Zustand und schwarzer Disziplin.", "Die Archiv-Seite trägt den editorialeren Browsing-Modus. Sie ist nicht nur 'mehr Produkte', sondern eine klarere Aussage darüber, was all black langfristig auswählt."],
      panels: [
        ["Designer", "Avant-Outerwear, richtungsweisendes Tailoring und schwarze Archiv-Basics.", "Dieser Bereich kann später in Designer, Epochen oder Tags verzweigen und kuratierter werden als die Shop-Seite."],
        ["Auswahllogik", "Jedes Stück muss Form, Stimmung und langfristigen Tragewert bewahren.", "Das Archiv erklärt, warum diese Secondhand-Stücke es verdienen, erneut gezeigt und gekauft zu werden."],
      ],
    },
    runtime: { selected: "Gewählte Größe {size}.", added: "Archive Leather Trench in Größe {size} zur Tasche hinzugefügt.", saved: "Artikel zu deiner Archivliste hinzugefügt.", unsaved: "Artikel aus deiner Archivliste entfernt.", addedBtn: "Hinzugefügt", addBtn: "Zur Tasche", saveBtn: "Für später speichern", savedBtn: "Gespeichert" },
  });

  Object.assign(copy.it, {
    titles: { home: "all black", shop: "all black - Shop", collection: "all black - Collezione", product: "all black - Prodotto", about: "all black - About", archive: "all black - Archivio" },
    nav: ["Home", "Nuovi arrivi", "Shop", "Outerwear", "Set", "Layering", "Occhiali", "T-Shirt", "Scarpe", "Pronto da spedire", "Collezione", "Archivio", "About"],
    tools: ["Cerca", "Salvati", "Bag"],
    meta: { home: "Archivio curato", shop: "Shop", collection: "Archive edit", product: "Look 01", about: "Studio", archive: "Archivio" },
    footer: "Archivio online di secondhand di lusso curato",
    home: {
      hero: {
        eyebrow: "Selezione secondhand curata",
        intro: "all black e un sito curato di abbigliamento secondhand di lusso, concentrato su silhouette monocromatiche, tailoring piu freddo e pezzi archive che conservano ancora presenza.",
        actions: ["Shop", "Collezione", "About"],
        notes: ["Archivio curato / secondhand di lusso / ordine nero", "Claim: selected for a second life"],
        stage: ["Focus archive", "Pezzi neri rari, selezionati con maggiore misura.", "Secondhand di lusso da un punto di vista piu silenzioso."],
        stamp: ["Nota d'archivio", "Resale di lusso curato con selezione guidata dal nero"],
        footer: ["Cappotti curati / tailoring archive / selezione monocromatica / arrivi singoli", "Archivio online"],
        ticker: ["ALL BLACK", "SECONDHAND CURATO", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "PEZZI UNICI", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "Archivio in evidenza",
        title: "La homepage mette in primo piano pezzi secondhand fuori produzione che risultano ancora netti e attuali.",
        copy: "all black non rincorre il volume. Filtra outerwear archive, pezzi neri di designer e silhouette piu forti in un edit piu quieto, prima di accompagnare l'utente verso Collection o Shop.",
        list: [
          "Focus su cappotti archive, outerwear strutturato e pezzi designer monocromatici",
          "La rarita, la condizione, la provenienza e il valore di rivendita restano centrali",
          "La Collection cura la selezione, lo Shop mostra disponibilita e prezzi",
        ],
        actions: ["Vedi Collection", "Entra nello shop"],
      },
      image: ["Selezione archive", "La homepage si comporta come un editoriale secondhand monocromatico prima di diventare uno store.", "Esplora l'archivio"],
      products: {
        kicker: "Pezzi in evidenza",
        title: "I prodotti hero trasformano l'atmosfera in un percorso di browsing, mantenendo la misura di uno store archive.",
        copy: "Sono i pezzi da aprire per primi. Tengono il tono editoriale e puntano in modo naturale verso prodotto e shop.",
        cards: [
          ["Outerwear", "Archive Leather Trench", "Apri prodotto"],
          ["Cappotto designer", "Structured Wool Coat", "Apri shop"],
          ["Set raro", "Black Studio Set", "Vedi tutti gli articoli"],
        ],
      },
      story: {
        kicker: "Brand slogan",
        title: "Selected for a second life.",
        copy: "all black non guarda il secondhand come semplice categoria, ma come insieme di capi che restano validi anche dopo il rientro nel guardaroba. Il layout rimane calmo, cosi il sito assomiglia piu a un archivio curato che a una lista resale.",
        actions: ["Leggi About", "Entra nello shop"],
        stats: [
          "La homepage costruisce l'atmosfera visiva di un archivio secondhand curato",
          "La pagina Collection spiega la logica curatoriale e le direzioni chiave",
          "Shop e Product gestiscono il percorso di browsing e acquisto",
        ],
      },
    },
    shop: {
      hero: ["Shop", "Pezzi chiave per la stagione attuale.", "Lo shop conserva l'atmosfera archive della homepage, ma organizza le informazioni con maggiore chiarezza attorno a provenienza, condizione e rarita."],
      panels: [
        ["Nuovi arrivi", "Ultimi ingressi archive aggiornati come aggiunte singole.", "Questo accesso sottolinea la scarsita archive: quando arriva un pezzo, potrebbe non tornare."],
        ["Salvati / Bag", "Tieni vicini i pezzi che ti interessano prima di decidere se acquistare.", "Per ora completano il livello di navigazione. Poi potranno diventare vere interazioni di preferiti e bag."],
      ],
      filters: ["Categoria", "Spedizione", "Tutti", "Outerwear", "Set", "Layering", "Tutti", "Pronto da spedire", "Made to order"],
      cards: [
        ["Outerwear", "Archive Leather Trench", "Archivio italiano / condizione A / pronto da spedire", "Vedi dettagli"],
        ["Outerwear", "Structured Wool Coat", "Designer secondhand / condizione A- / un solo pezzo", "Vedi dettagli"],
        ["Set", "Black Studio Set", "Set archive due pezzi / condizione B+ / stock basso", "Vedi dettagli"],
        ["Layering", "After Dark Shell Top", "Pezzo layering / condizione A / pezzo unico", "Vedi dettagli"],
      ],
    },
    collection: {
      hero: ["Selezione archive", "Black archive edit", "Questa pagina presenta i pezzi secondhand monocromatici che all black sta mettendo in evidenza ora. Si comporta piu come un archive edit che come un drop tradizionale."],
      looks: [
        ["Look 01", "Trench in pelle archive con architettura della spalla molto netta", "Apri prodotto"],
        ["Look 02", "Tailoring archive monocromatico", ""],
        ["Look 03", "Raro studio di superficie nera", ""],
      ],
      panels: [
        ["Direzione", "Costruita su rarita, condizione e una palette nera piu rigorosa.", "Ogni pezzo qui e scelto per provenienza, stato e reale valore d'uso dopo il reingresso."],
        ["Materiali", "Pelle, lana, jersey opaco e costruzioni designer di stagioni precedenti.", "Nel secondhand di lusso conta l'immagine, ma contano anche materiale, contesto e durata."],
      ],
    },
    product: {
      hero: ["Pezzo in evidenza", "Archive Leather Trench", "Un cappotto secondhand di lusso con una silhouette forte. Il suo interesse non sta nell'essere nuovo, ma nel fatto che struttura, finitura e valore collezionabile restano intatti."],
      metaLabels: ["Colore", "Disponibilita", "Spedizione"],
      metaValues: ["Nero", "Disponibile", "2-4 giorni lavorativi"],
      size: "Taglia",
      features: [
        "Linea della spalla strutturata con finitura laccata",
        "Pezzo archive designer con struttura del capo visibile",
        "Selezionato per silhouette, condizione e valore di utilizzo nel tempo",
      ],
      actions: ["Aggiungi alla bag", "Salva per dopo"],
      links: ["Torna allo shop", "Vedi collection"],
      details: [
        ["Condizione", "Condizione secondhand di grado A con lievi segni di deposito e senza danni strutturali evidenti."],
        ["Origine", "Curato da una selezione d'archivio privata e reintrodotto come pezzo singolo nello store."],
      ],
    },
    about: {
      hero: ["About the studio", "Selected for a second life.", "all black e una vetrina di abbigliamento secondhand di lusso focalizzata su palette nere, pezzi archive di designer e silhouette che vale la pena rivedere."],
      panels: [
        ["Filosofia", "Secondhand curato, palette ridotta e capi che meritano di essere indossati ancora.", "Il sito evita il volume e usa selezione, impaginazione e narrazione per far sentire il secondhand piu vicino a un archivio curato."],
        ["Studio", "Archivio online per abbigliamento secondhand di lusso.", "La pagina About spiega la logica di selezione cosi che homepage, collection e shop parlino la stessa lingua."],
      ],
    },
    archive: {
      hero: ["Archivio", "Pezzi designer selezionati in base a rarita, condizione e disciplina del nero.", "La pagina Archivio porta avanti un modo di browsing piu editoriale. Non e solo 'piu prodotti', ma una dichiarazione piu chiara di cio che all black continua a selezionare nel tempo."],
      panels: [
        ["Designer", "Outerwear avant, tailoring direzionale e staple neri d'archivio.", "Questa area potra poi aprirsi per designer, epoche o tag e diventare un ingresso piu curato dello Shop."],
        ["Logica di selezione", "Ogni pezzo deve mantenere forma, atmosfera e valore d'uso nel lungo periodo.", "Archivio aiuta a spiegare perche questi capi secondhand meritano di essere mostrati e acquistati di nuovo."],
      ],
    },
    runtime: { selected: "Taglia selezionata {size}.", added: "Archive Leather Trench in taglia {size} aggiunto alla bag.", saved: "Articolo salvato nella tua lista archivio.", unsaved: "Articolo rimosso dalla tua lista archivio.", addedBtn: "Aggiunto", addBtn: "Aggiungi alla bag", saveBtn: "Salva per dopo", savedBtn: "Salvato" },
  });

  Object.assign(copy.fr, {
    titles: { home: "all black", shop: "all black - Shop", collection: "all black - Collection", product: "all black - Produit", about: "all black - A propos", archive: "all black - Archive" },
    nav: ["Accueil", "Nouveautés", "Shop", "Outerwear", "Set", "Layering", "Lunettes", "T-Shirts", "Chaussures", "Prêt à expédier", "Collection", "Archive", "À propos"],
    tools: ["Recherche", "Favoris", "Sac"],
    meta: { home: "Archive curatée", shop: "Shop", collection: "Archive edit", product: "Look 01", about: "Studio", archive: "Archive" },
    footer: "Archive en ligne de luxe seconde main curatée",
    home: {
      hero: {
        eyebrow: "Sélection seconde main curatée",
        intro: "all black est un site curaté de vêtements de luxe seconde main, centré sur des silhouettes monochromes, un tailoring plus froid et des pièces archive qui gardent du poids.",
        actions: ["Shop", "Collection", "À propos"],
        notes: ["Archive curatée / seconde main luxe / ordre noir", "Signature: selected for a second life"],
        stage: ["Focus archive", "Des pièces noires rares, choisies avec plus de retenue.", "Un luxe seconde main porté par un point de vue plus silencieux."],
        stamp: ["Note d'archive", "Resale de luxe curaté autour d'une sélection noire"],
        footer: ["Manteaux curatés / tailoring archive / sélection monochrome / arrivées à l'unité", "Archive store en ligne"],
        ticker: ["ALL BLACK", "SECONDE MAIN CURATÉE", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "PIÈCES UNIQUES", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "Archive en avant",
        title: "La page d'accueil met au premier plan des pièces seconde main arrêtées qui restent nettes et actuelles.",
        copy: "all black ne cherche pas le volume. Il filtre outerwear archive, pièces noires de créateurs et silhouettes plus fortes dans un edit plus calme, avant d'envoyer vers Collection ou Shop.",
        list: [
          "Accent sur les manteaux archive, l'outerwear structuré et les pièces de créateurs monochromes",
          "La rareté, l'état, la provenance et la valeur resale restent centrales",
          "Collection assure la curation, Shop gère disponibilité et prix",
        ],
        actions: ["Voir la collection", "Shopper l'edit"],
      },
      image: ["Sélection archive", "La page d'accueil fonctionne d'abord comme un éditorial seconde main monochrome avant de devenir une boutique.", "Explorer l'archive"],
      products: {
        kicker: "Pièces phares",
        title: "Les produits hero transforment l'ambiance en parcours de navigation tout en gardant la retenue d'un archive store.",
        copy: "Ce sont les pièces à ouvrir d'abord. Elles gardent la sensation éditoriale tout en menant naturellement vers les pages produit et shop.",
        cards: [
          ["Outerwear", "Archive Leather Trench", "Ouvrir le produit"],
          ["Manteau créateur", "Structured Wool Coat", "Ouvrir le shop"],
          ["Set rare", "Black Studio Set", "Voir tous les articles"],
        ],
      },
      story: {
        kicker: "Signature",
        title: "Selected for a second life.",
        copy: "all black ne s'intéresse pas à la seconde main comme simple catégorie, mais aux vêtements qui tiennent encore une fois revenus dans la garde-robe. La mise en page reste calme pour que le site ressemble plus à un espace archive curaté qu'à une liste de revente.",
        actions: ["Lire About", "Entrer dans le shop"],
        stats: [
          "La homepage installe l'atmosphère visuelle d'une archive seconde main curatée",
          "La page Collection explique la logique de curation et les directions clés",
          "Shop et Product portent le parcours de navigation et d'achat",
        ],
      },
    },
    shop: {
      hero: ["Shop", "Pièces essentielles de la saison actuelle.", "Le shop conserve l'ambiance archive plus froide de la homepage, mais organise les informations plus clairement autour de la provenance, de l'état et de la rareté."],
      panels: [
        ["Nouveautés", "Dernières arrivées archive ajoutées à l'unité.", "Cette entrée souligne la rareté archive : une fois arrivée, une pièce peut ne pas revenir."],
        ["Favoris / Sac", "Garde près de toi les pièces qui comptent avant de décider d'acheter.", "Pour l'instant, ces entrées complètent la couche de navigation. Ensuite, elles peuvent devenir de vraies interactions de favoris et de sac."],
      ],
      filters: ["Catégorie", "Livraison", "Tous", "Outerwear", "Set", "Layering", "Tous", "Prêt à expédier", "Made to order"],
      cards: [
        ["Outerwear", "Archive Leather Trench", "Archive italienne / état A / prêt à expédier", "Voir les détails"],
        ["Outerwear", "Structured Wool Coat", "Créateur seconde main / état A- / une seule pièce", "Voir les détails"],
        ["Set", "Black Studio Set", "Ensemble archive deux pièces / état B+ / stock faible", "Voir les détails"],
        ["Layering", "After Dark Shell Top", "Pièce de layering / état A / article unique", "Voir les détails"],
      ],
    },
    collection: {
      hero: ["Sélection archive", "Black archive edit", "Cette page présente les pièces seconde main monochromes que all black met actuellement en avant. Elle se comporte davantage comme un archive edit que comme un drop classique."],
      looks: [
        ["Look 01", "Trench en cuir archive à l'architecture d'épaule nette", "Ouvrir le produit"],
        ["Look 02", "Tailoring archive monochrome", ""],
        ["Look 03", "Étude rare de surface noire", ""],
      ],
      panels: [
        ["Direction", "Construite à partir de la rareté, de l'état et d'une palette noire plus stricte.", "Chaque pièce ici est choisie pour sa provenance, son état et sa vraie valeur de port après réintégration."],
        ["Matières", "Cuir, laine, jersey mat et constructions de créateurs d'anciennes saisons.", "Dans le luxe seconde main, l'image compte, mais la matière, le contexte et la durée comptent aussi."],
      ],
    },
    product: {
      hero: ["Produit phare", "Archive Leather Trench", "Un manteau de luxe seconde main avec une silhouette forte. Son intérêt ne tient pas au fait d'être neuf, mais à la tenue persistante de sa structure, de sa finition et de sa valeur de collection."],
      metaLabels: ["Couleur", "Disponibilité", "Livraison"],
      metaValues: ["Noir", "En stock", "2-4 jours ouvrés"],
      size: "Taille",
      features: [
        "Ligne d'épaule structurée avec finition laquée",
        "Pièce archive de créateur avec structure du vêtement visible",
        "Sélectionnée pour sa silhouette, son état et sa valeur de port à long terme",
      ],
      actions: ["Ajouter au sac", "Sauvegarder pour plus tard"],
      links: ["Retour au shop", "Voir la collection"],
      details: [
        ["État", "État seconde main grade A avec légères traces de stockage et aucun dommage structurel évident."],
        ["Source", "Curaté depuis une sélection d'archive privée et réintroduit comme pièce unique dans le store."],
      ],
    },
    about: {
      hero: ["À propos du studio", "Selected for a second life.", "all black est une vitrine de vêtements de luxe seconde main centrée sur les palettes noires, les pièces archive de créateurs et les silhouettes qui méritent d'être revues."],
      panels: [
        ["Philosophie", "Seconde main curatée, palette réduite et pièces qui valent la peine d'être portées à nouveau.", "Le site évite le volume et utilise sélection, mise en page et narration pour rapprocher la seconde main d'un archive curaté."],
        ["Studio", "Archive store en ligne pour vêtements de luxe seconde main.", "La page About explique la logique de sélection afin que homepage, collection et shop parlent le même langage."],
      ],
    },
    archive: {
      hero: ["Archive", "Pièces de créateurs sélectionnées par rareté, état et discipline du noir.", "La page Archive porte un mode de navigation plus éditorial. Elle n'est pas seulement 'plus de produits', mais une déclaration plus nette de ce que all black continue à sélectionner dans le temps."],
      panels: [
        ["Créateurs", "Outerwear avant, tailoring directionnel et essentiels archive en noir.", "Cette zone pourra plus tard se diviser par créateur, époque ou tag et devenir une entrée plus curatée que la page Shop."],
        ["Logique de sélection", "Chaque pièce doit garder sa forme, son humeur et sa valeur de port sur le long terme.", "Archive aide à expliquer pourquoi ces vêtements seconde main méritent d'être montrés et achetés à nouveau."],
      ],
    },
    runtime: { selected: "Taille sélectionnée {size}.", added: "Archive Leather Trench en taille {size} ajouté au sac.", saved: "Article ajouté à ta liste d'archive.", unsaved: "Article retiré de ta liste d'archive.", addedBtn: "Ajouté", addBtn: "Ajouter au sac", saveBtn: "Sauvegarder pour plus tard", savedBtn: "Sauvegardé" },
  });

  Object.assign(copy.ja, {
    titles: { home: "all black", shop: "all black - ショップ", collection: "all black - コレクション", product: "all black - 商品", about: "all black - About", archive: "all black - アーカイブ" },
    nav: ["ホーム", "新着", "ショップ", "アウター", "セット", "レイヤリング", "アイウェア", "Tシャツ", "シューズ", "即発送", "コレクション", "アーカイブ", "About"],
    tools: ["検索", "保存", "バッグ"],
    meta: { home: "キュレーテッドアーカイブ", shop: "ショップ", collection: "アーカイブエディット", product: "Look 01", about: "スタジオ", archive: "アーカイブ" },
    footer: "オンラインのキュレーテッド・ラグジュアリー中古アーカイブ",
    home: {
      hero: {
        eyebrow: "キュレートされたラグジュアリー中古",
        intro: "all black は、モノクロームのシルエット、より冷たいテーラリング、そして今も重さを保つ archive ピースに焦点を当てた、ラグジュアリー中古服のキュレーションサイトです。",
        actions: ["ショップ", "コレクション", "About"],
        notes: ["キュレーテッドアーカイブ / ラグジュアリー中古 / ブラックの秩序", "ブランドライン: selected for a second life"],
        stage: ["アーカイブフォーカス", "希少なブラックピースを、より抑制された視点で再選定。", "より静かな視点で見るラグジュアリー中古。"],
        stamp: ["アーカイブノート", "ブラック主導のキュレーテッド・ラグジュアリーリセール"],
        footer: ["キュレートされたコート / archive tailoring / モノクロセレクション / 一点到着", "オンラインアーカイブストア"],
        ticker: ["ALL BLACK", "キュレーテッド中古", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "一点もの", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "注目アーカイブ",
        title: "ホームでは、生産終了でもなお鋭さと現在性を保つ中古ピースを前景化します。",
        copy: "all black は量を追いません。archive のアウター、黒いデザイナーズピース、強いシルエットを静かな edit に絞り込み、その後に Collection や Shop へ導きます。",
        list: [
          "archive コート、構築的なアウター、モノクロのデザイナーズピースを重視",
          "希少性、状態、来歴、再流通価値を強調",
          "Collection がキュレーションを担い、Shop が在庫と価格を担う",
        ],
        actions: ["コレクションを見る", "この edit を見る"],
      },
      image: ["アーカイブセレクション", "ホームは、ストアになる前にまずモノクロ中古のエディトリアルとして機能します。", "アーカイブを見る"],
      products: {
        kicker: "主役アイテム",
        title: "主役となる商品はムードを閲覧導線へ変えながら、archive store の抑制を保ちます。",
        copy: "最初に開く価値のあるピースです。エディトリアルな感触を保ちながら、自然に Product と Shop へつなげます。",
        cards: [
          ["アウター", "Archive Leather Trench", "商品を開く"],
          ["デザイナーコート", "Structured Wool Coat", "ショップを開く"],
          ["希少セット", "Black Studio Set", "すべて見る"],
        ],
      },
      story: {
        kicker: "ブランドスローガン",
        title: "Selected for a second life.",
        copy: "all black が見ているのは、中古という事実そのものではなく、ワードローブに戻ったあとも成立する服です。レイアウトは静かに保たれ、このサイトが resale の一覧よりも curated archive space のように感じられるようにしています。",
        actions: ["About を読む", "ショップへ入る"],
        stats: [
          "ホームは curated secondhand archive の視覚的な空気を作る",
          "Collection ページはキュレーションの論理と主要な方向性を説明する",
          "Shop と Product が閲覧と購入の導線を担う",
        ],
      },
    },
    shop: {
      hero: ["ショップ", "今季まず見るべき核となるピース。", "ショップはホームの冷たい archive ムードを保ちながら、来歴、状態、希少性を軸に情報をより明確に整理します。"],
      panels: [
        ["新着", "一点ずつ追加される最新の archive arrivals。", "この入口は archive の希少性を強調します。入ってきたら、二度と戻らないかもしれません。"],
        ["保存 / バッグ", "購入を決める前に、気になるピースを手元に留めておけます。", "今はナビゲーション層を完成させる役割ですが、次に本格的な保存・バッグ機能へ発展できます。"],
      ],
      filters: ["カテゴリー", "配送", "すべて", "アウター", "セット", "レイヤリング", "すべて", "即発送", "受注対応"],
      cards: [
        ["アウター", "Archive Leather Trench", "イタリアンアーカイブ / 状態 A / 即発送", "詳細を見る"],
        ["アウター", "Structured Wool Coat", "デザイナー中古 / 状態 A- / 1点のみ", "詳細を見る"],
        ["セット", "Black Studio Set", "2ピース archive set / 状態 B+ / 在庫少", "詳細を見る"],
        ["レイヤリング", "After Dark Shell Top", "レイヤリングピース / 状態 A / 単品", "詳細を見る"],
      ],
    },
    collection: {
      hero: ["アーカイブセレクション", "Black archive edit", "このページは、all black が現在強調しているモノクロ中古ピースを紹介します。一般的な drop よりも archive edit に近い振る舞いです。"],
      looks: [
        ["Look 01", "鋭いショルダー構造を持つ archive レザートレンチ", "商品を開く"],
        ["Look 02", "モノクロ archive tailoring", ""],
        ["Look 03", "希少なブラックサーフェススタディ", ""],
      ],
      panels: [
        ["方向性", "希少性、状態、より厳密なブラックパレットから構成されます。", "ここにある各ピースは、来歴、状態、そして再流入後の実用的な着用価値によって選ばれています。"],
        ["素材", "レザー、ウール、マットジャージー、そして過去シーズンのデザイナー構造。", "ラグジュアリー中古では、イメージだけでなく、素材、背景、持続性も重要です。"],
      ],
    },
    product: {
      hero: ["注目商品", "Archive Leather Trench", "強いシルエットを持つラグジュアリー中古コート。新しいことではなく、構造、仕上げ、コレクタブルな価値が今も成立していることに魅力があります。"],
      metaLabels: ["カラー", "在庫", "配送"],
      metaValues: ["ブラック", "在庫あり", "2-4 営業日"],
      size: "サイズ",
      features: [
        "ラッカー仕上げを伴う構築的なショルダーライン",
        "衣服構造が見える archive designer piece",
        "シルエット、状態、長期的な着用価値で選定",
      ],
      actions: ["バッグに追加", "あとで保存"],
      links: ["ショップへ戻る", "コレクションを見る"],
      details: [
        ["状態", "軽い保管痕はあるものの、明確な構造ダメージのない A グレード中古コンディション。"],
        ["出所", "プライベート archive selection からキュレートされ、一点ものとして再導入されました。"],
      ],
    },
    about: {
      hero: ["スタジオについて", "Selected for a second life.", "all black は、ブラックパレット、archive designer pieces、そして再訪する価値のあるシルエットに焦点を当てたラグジュアリー中古服のショーケースです。"],
      panels: [
        ["思想", "キュレートされた中古、絞られた色域、そしてもう一度着る価値のある服。", "このサイトは量を避け、選定、レイアウト、語りによって、中古を curated archive に近いものとして感じさせます。"],
        ["スタジオ", "ラグジュアリー中古服のためのオンライン archive store。", "About ページは選定ロジックを説明し、ホーム、collection、shop が同じ言語を話すようにします。"],
      ],
    },
    archive: {
      hero: ["アーカイブ", "希少性、状態、ブラックトーンの規律によって選ばれたデザイナーズピース。", "Archive ページは、よりエディトリアルな閲覧モードを担います。単に『商品が増える』のではなく、all black が時間をかけて何を選び続けるのかをより明確に示します。"],
      panels: [
        ["デザイナー", "アヴァンギャルドなアウター、方向性のある tailoring、ブラックの archive staples。", "この領域は後にデザイナー、年代、タグへと展開でき、Shop よりもキュレーション性の高い入口になります。"],
        ["選定ロジック", "すべてのピースは形、ムード、長期的な着用価値を保っていなければなりません。", "Archive は、なぜこれらの中古服が再び見せられ、買われる価値があるのかを説明します。"],
      ],
    },
    runtime: { selected: "選択サイズは {size} です。", added: "Archive Leather Trench のサイズ {size} をバッグに追加しました。", saved: "アイテムをアーカイブリストに保存しました。", unsaved: "アイテムをアーカイブリストから削除しました。", addedBtn: "追加済み", addBtn: "バッグに追加", saveBtn: "あとで保存", savedBtn: "保存済み" },
  });

  Object.assign(copy.es, {
    titles: { home: "all black", shop: "all black - Shop", collection: "all black - Colección", product: "all black - Producto", about: "all black - About", archive: "all black - Archivo" },
    nav: ["Inicio", "Novedades", "Shop", "Outerwear", "Set", "Layering", "Gafas", "T-Shirts", "Zapatos", "Listo para enviar", "Colección", "Archivo", "About"],
    tools: ["Buscar", "Guardados", "Bolsa"],
    meta: { home: "Archivo curado", shop: "Shop", collection: "Archive edit", product: "Look 01", about: "Studio", archive: "Archivo" },
    footer: "Archivo online de lujo secondhand curado",
    home: {
      hero: {
        eyebrow: "Selección secondhand curada",
        intro: "all black es un sitio curado de ropa secondhand de lujo, centrado en siluetas monocromas, tailoring más frío y piezas archive que todavía conservan peso.",
        actions: ["Shop", "Colección", "About"],
        notes: ["Archivo curado / secondhand de lujo / orden negro", "Claim: selected for a second life"],
        stage: ["Enfoque archive", "Piezas negras raras, seleccionadas con mayor contención.", "Secondhand de lujo desde un punto de vista más silencioso."],
        stamp: ["Nota de archivo", "Resale de lujo curado con una selección guiada por el negro"],
        footer: ["Abrigos curados / archive tailoring / selección monocromática / llegadas únicas", "Archivo online"],
        ticker: ["ALL BLACK", "SECONDHAND CURADO", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "PIEZAS ÚNICAS", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "Archivo destacado",
        title: "La homepage pone en primer plano piezas secondhand descatalogadas que siguen viéndose precisas y actuales.",
        copy: "all black no persigue volumen. Filtra outerwear archive, piezas negras de diseñador y siluetas más fuertes en un edit más silencioso antes de llevar al visitante hacia Collection o Shop.",
        list: [
          "Enfoque en abrigos archive, outerwear estructurado y piezas de diseñador monocromáticas",
          "La rareza, el estado, la procedencia y el valor de reventa siguen siendo centrales",
          "Collection se encarga de la curaduría y Shop de la disponibilidad y el precio",
        ],
        actions: ["Ver colección", "Comprar el edit"],
      },
      image: ["Selección archive", "La homepage funciona primero como un editorial secondhand monocromático antes de convertirse en tienda.", "Explorar el archivo"],
      products: {
        kicker: "Productos destacados",
        title: "Los productos hero convierten la atmósfera en un recorrido de navegación sin perder la contención de una tienda archive.",
        copy: "Son las piezas que merece la pena abrir primero. Mantienen la sensación editorial y señalan de forma natural hacia las páginas de producto y shop.",
        cards: [
          ["Outerwear", "Archive Leather Trench", "Abrir producto"],
          ["Abrigo de diseñador", "Structured Wool Coat", "Abrir shop"],
          ["Set raro", "Black Studio Set", "Ver todos los artículos"],
        ],
      },
      story: {
        kicker: "Eslogan",
        title: "Selected for a second life.",
        copy: "all black no se interesa por lo secondhand como categoría en sí, sino por prendas que siguen funcionando al volver al armario. El layout se mantiene calmado para que el sitio se sienta como un archivo curado y no como una simple lista de reventa.",
        actions: ["Leer About", "Entrar en shop"],
        stats: [
          "La homepage construye la atmósfera visual de un archivo secondhand curado",
          "La página Collection explica la lógica curatorial y las direcciones principales",
          "Shop y Product sostienen el recorrido de exploración y compra",
        ],
      },
    },
    shop: {
      hero: ["Shop", "Piezas clave para la temporada actual.", "La tienda conserva el ánimo archive más frío de la homepage, pero organiza la información con mayor claridad alrededor de procedencia, estado y rareza."],
      panels: [
        ["Novedades", "Últimas llegadas archive actualizadas como incorporaciones únicas.", "Esta entrada subraya la escasez archive: una vez que llega, puede no volver."],
        ["Guardados / Bolsa", "Mantén cerca las piezas que te importan antes de decidir si comprar.", "Por ahora completan la capa de navegación. Después pueden convertirse en interacciones completas de guardados y bolsa."],
      ],
      filters: ["Categoría", "Envío", "Todos", "Outerwear", "Set", "Layering", "Todos", "Listo para enviar", "Hecho por encargo"],
      cards: [
        ["Outerwear", "Archive Leather Trench", "Archivo italiano / estado A / listo para enviar", "Ver detalles"],
        ["Outerwear", "Structured Wool Coat", "Diseñador secondhand / estado A- / una sola pieza", "Ver detalles"],
        ["Set", "Black Studio Set", "Set archive de dos piezas / estado B+ / stock bajo", "Ver detalles"],
        ["Layering", "After Dark Shell Top", "Pieza de layering / estado A / artículo único", "Ver detalles"],
      ],
    },
    collection: {
      hero: ["Selección archive", "Black archive edit", "Esta página presenta las piezas secondhand monocromáticas que all black está destacando ahora mismo. Se comporta más como un archive edit que como un drop tradicional."],
      looks: [
        ["Look 01", "Trench de cuero archive con arquitectura de hombro marcada", "Abrir producto"],
        ["Look 02", "Tailoring archive monocromático", ""],
        ["Look 03", "Estudio raro de superficie negra", ""],
      ],
      panels: [
        ["Dirección", "Construida a partir de rareza, estado y una paleta negra más estricta.", "Cada pieza aquí se elige por procedencia, condición y valor real de uso después de su reentrada."],
        ["Materiales", "Cuero, lana, jersey mate y construcciones de diseñador de temporadas anteriores.", "En el secondhand de lujo importa la imagen, pero también importan el material, el contexto y la longevidad."],
      ],
    },
    product: {
      hero: ["Producto destacado", "Archive Leather Trench", "Un abrigo secondhand de lujo con una silueta fuerte. Su atractivo no está en ser nuevo, sino en que su estructura, acabado y valor coleccionable siguen vigentes."],
      metaLabels: ["Color", "Disponibilidad", "Envío"],
      metaValues: ["Negro", "En stock", "2-4 días laborables"],
      size: "Talla",
      features: [
        "Línea de hombro estructurada con acabado lacado",
        "Pieza archive de diseñador con estructura visible de la prenda",
        "Seleccionada por silueta, estado y valor de uso a largo plazo",
      ],
      actions: ["Añadir a la bolsa", "Guardar para después"],
      links: ["Volver al shop", "Ver colección"],
      details: [
        ["Estado", "Condición secondhand grado A con ligeras marcas de almacenamiento y sin daños estructurales evidentes."],
        ["Origen", "Curada desde una selección de archivo privada y reintroducida como pieza única en la tienda."],
      ],
    },
    about: {
      hero: ["Sobre el estudio", "Selected for a second life.", "all black es una vitrina de ropa secondhand de lujo enfocada en paletas negras, piezas archive de diseñador y siluetas que merece la pena revisitar."],
      panels: [
        ["Filosofía", "Secondhand curado, paleta reducida y piezas que merece la pena volver a llevar.", "El sitio evita el volumen y utiliza selección, layout y narrativa para que lo secondhand se sienta más cerca de un archivo curado."],
        ["Estudio", "Archivo online para ropa secondhand de lujo.", "La página About explica la lógica de selección para que homepage, collection y shop hablen el mismo lenguaje."],
      ],
    },
    archive: {
      hero: ["Archivo", "Piezas de diseñador seleccionadas por rareza, estado y disciplina del negro.", "La página Archivo sostiene un modo de navegación más editorial. No es solo 'más productos', sino una declaración más clara de lo que all black sigue seleccionando con el tiempo."],
      panels: [
        ["Diseñadores", "Outerwear avant, tailoring direccional y básicos negros de archivo.", "Esta zona más adelante puede abrirse por diseñadores, épocas o etiquetas y convertirse en una entrada más curada que la página Shop."],
        ["Lógica de selección", "Cada pieza debe conservar forma, atmósfera y valor de uso a largo plazo.", "Archivo ayuda a explicar por qué estas prendas secondhand merecen volver a mostrarse y comprarse."],
      ],
    },
    runtime: { selected: "Talla seleccionada {size}.", added: "Archive Leather Trench en talla {size} añadido a la bolsa.", saved: "Artículo guardado en tu lista de archivo.", unsaved: "Artículo eliminado de tu lista de archivo.", addedBtn: "Añadido", addBtn: "Añadir a la bolsa", saveBtn: "Guardar para después", savedBtn: "Guardado" },
  });

  Object.assign(copy.ru, {
    titles: { home: "all black", shop: "all black - Магазин", collection: "all black - Коллекция", product: "all black - Товар", about: "all black - О проекте", archive: "all black - Архив" },
    nav: ["Главная", "Новое", "Магазин", "Верхняя одежда", "Комплект", "Слои", "Очки", "Футболки", "Обувь", "Готово к отправке", "Коллекция", "Архив", "О проекте"],
    tools: ["Поиск", "Сохранено", "Сумка"],
    meta: { home: "Кураторский архив", shop: "Магазин", collection: "Архивный эдит", product: "Look 01", about: "Студия", archive: "Архив" },
    footer: "Онлайн-архив кураторского luxury secondhand",
    home: {
      hero: {
        eyebrow: "Кураторский luxury secondhand",
        intro: "all black — это кураторский сайт о luxury secondhand одежде, сосредоточенный на монохромных силуэтах, более холодном тейлоринге и archive-вещах, которые до сих пор сохраняют вес.",
        actions: ["Магазин", "Коллекция", "О проекте"],
        notes: ["Кураторский архив / luxury secondhand / черная дисциплина", "Слоган: selected for a second life"],
        stage: ["Архивный фокус", "Редкие черные вещи, выбранные с большей сдержанностью.", "Luxury secondhand с более тихой точки зрения."],
        stamp: ["Архивная заметка", "Кураторский luxury resale с опорой на черную селекцию"],
        footer: ["Кураторские пальто / archive tailoring / монохромный выбор / единичные поступления", "Онлайн-архив"],
        ticker: ["ALL BLACK", "КУРАТОРСКИЙ SECONDHAND", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "ЕДИНИЧНЫЕ ВЕЩИ", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "Ключевой архив",
        title: "Главная страница выводит вперед снятые с производства secondhand-вещи, которые все еще выглядят остро и актуально.",
        copy: "all black не гонится за объемом. Он фильтрует archive outerwear, черные дизайнерские вещи и более сильные силуэты в более тихий edit, прежде чем направить пользователя в Collection или Shop.",
        list: [
          "Фокус на archive-пальто, структурированной верхней одежде и монохромных дизайнерских вещах",
          "Подчеркиваются редкость, состояние, происхождение и resale-ценность",
          "Collection отвечает за кураторскую логику, Shop — за наличие и цену",
        ],
        actions: ["Открыть коллекцию", "Перейти в shop"],
      },
      image: ["Архивная подборка", "Главная сначала работает как монохромный secondhand editorial, а уже потом как магазин.", "Изучить архив"],
      products: {
        kicker: "Главные вещи",
        title: "Главные продукты переводят настроение в понятный путь просмотра, сохраняя сдержанность archive store.",
        copy: "Это вещи, которые стоит открыть первыми. Они удерживают editorial-ощущение и естественно ведут к product и shop страницам.",
        cards: [
          ["Верхняя одежда", "Archive Leather Trench", "Открыть товар"],
          ["Дизайнерское пальто", "Structured Wool Coat", "Открыть shop"],
          ["Редкий комплект", "Black Studio Set", "Посмотреть все вещи"],
        ],
      },
      story: {
        kicker: "Слоган",
        title: "Selected for a second life.",
        copy: "all black интересует не secondhand сам по себе, а одежда, которая по-прежнему работает после возвращения в гардероб. Макет остается спокойным, чтобы сайт ощущался скорее как кураторское архивное пространство, чем как обычный список resale.",
        actions: ["Читать About", "Войти в shop"],
        stats: [
          "Главная создает визуальную атмосферу кураторского secondhand-архива",
          "Страница Collection объясняет кураторскую логику и ключевые направления",
          "Shop и Product несут путь просмотра и покупки",
        ],
      },
    },
    shop: {
      hero: ["Магазин", "Ключевые вещи текущего сезона.", "Shop сохраняет более холодное archive-настроение главной страницы, но яснее организует информацию вокруг происхождения, состояния и редкости."],
      panels: [
        ["Новое", "Последние archive-поступления как единичные добавления.", "Этот вход подчеркивает archive-дефицит: если вещь появилась, она может уже не вернуться."],
        ["Сохранено / Сумка", "Сначала оставь рядом вещи, которые тебе важны, а потом решай, покупать ли их.", "Пока эти разделы завершают навигационный слой. Позже они могут стать полноценными Saved и Bag."],
      ],
      filters: ["Категория", "Доставка", "Все", "Верхняя одежда", "Комплект", "Слои", "Все", "Готово к отправке", "Под заказ"],
      cards: [
        ["Верхняя одежда", "Archive Leather Trench", "Итальянский архив / состояние A / готово к отправке", "Смотреть детали"],
        ["Верхняя одежда", "Structured Wool Coat", "Дизайнерский secondhand / состояние A- / только один экземпляр", "Смотреть детали"],
        ["Комплект", "Black Studio Set", "Архивный комплект из двух вещей / состояние B+ / мало в наличии", "Смотреть детали"],
        ["Слои", "After Dark Shell Top", "Вещь для layering / состояние A / единичный экземпляр", "Смотреть детали"],
      ],
    },
    collection: {
      hero: ["Архивная подборка", "Black archive edit", "Эта страница показывает монохромные secondhand-вещи, которые all black выделяет сейчас. Она ведет себя скорее как archive edit, чем как традиционный drop."],
      looks: [
        ["Look 01", "Архивный кожаный тренч с резкой архитектурой плеча", "Открыть товар"],
        ["Look 02", "Монохромный archive tailoring", ""],
        ["Look 03", "Редкое исследование черной поверхности", ""],
      ],
      panels: [
        ["Направление", "Построено на редкости, состоянии и более строгой черной палитре.", "Каждая вещь здесь выбрана по происхождению, состоянию и реальной носибельности после возвращения."],
        ["Материалы", "Кожа, шерсть, матовый джерси и дизайнерские конструкции прошлых сезонов.", "В luxury secondhand важен не только образ, но и материал, контекст и долговечность."],
      ],
    },
    product: {
      hero: ["Главный товар", "Archive Leather Trench", "Luxury secondhand-пальто с сильным силуэтом. Привлекательность не в новизне, а в том, что его структура, отделка и коллекционная ценность по-прежнему держатся."],
      metaLabels: ["Цвет", "Наличие", "Доставка"],
      metaValues: ["Черный", "В наличии", "2-4 рабочих дня"],
      size: "Размер",
      features: [
        "Структурная линия плеча с лакированным финишем",
        "Архивная дизайнерская вещь с видимой конструкцией одежды",
        "Выбрана по силуэту, состоянию и долгосрочной ценности носки",
      ],
      actions: ["В сумку", "Сохранить на потом"],
      links: ["Назад в shop", "Смотреть collection"],
      details: [
        ["Состояние", "Secondhand-состояние уровня A с легкими следами хранения и без заметных структурных повреждений."],
        ["Источник", "Кураторски выбрано из частного архива и возвращено в магазин как единичная вещь."],
      ],
    },
    about: {
      hero: ["О студии", "Selected for a second life.", "all black — это витрина luxury secondhand одежды, сосредоточенная на черных палитрах, archive designer pieces и силуэтах, к которым стоит возвращаться."],
      panels: [
        ["Философия", "Кураторский secondhand, сокращенная палитра и вещи, которые стоит носить снова.", "Сайт избегает объема и использует отбор, верстку и нарратив, чтобы secondhand ощущался ближе к кураторскому архиву."],
        ["Студия", "Онлайн-архив для luxury secondhand одежды.", "Страница About объясняет логику отбора, чтобы homepage, collection и shop говорили на одном языке."],
      ],
    },
    archive: {
      hero: ["Архив", "Дизайнерские вещи, выбранные по редкости, состоянию и дисциплине черного тона.", "Страница Archive ведет более editorial-режим просмотра. Это не просто 'больше товаров', а более ясное высказывание о том, что all black продолжает выбирать со временем."],
      panels: [
        ["Дизайнеры", "Avant-outerwear, направленный tailoring и черные archive staples.", "Позже эта область может ветвиться по дизайнерам, эпохам или тегам и стать более кураторским входом, чем Shop."],
        ["Логика отбора", "Каждая вещь должна сохранять форму, настроение и долгосрочную ценность носки.", "Archive помогает объяснить, почему эти secondhand-вещи заслуживают того, чтобы их снова показывали и покупали."],
      ],
    },
    runtime: { selected: "Выбран размер {size}.", added: "Archive Leather Trench размера {size} добавлен в сумку.", saved: "Товар сохранен в твой архивный список.", unsaved: "Товар удален из архивного списка.", addedBtn: "Добавлено", addBtn: "В сумку", saveBtn: "Сохранить на потом", savedBtn: "Сохранено" },
  });

  Object.assign(copy.ko, {
    titles: { home: "all black", shop: "all black - 숍", collection: "all black - 컬렉션", product: "all black - 상품", about: "all black - 소개", archive: "all black - 아카이브" },
    nav: ["홈", "뉴 인", "숍", "아우터", "세트", "레이어링", "아이웨어", "티셔츠", "슈즈", "즉시 발송", "컬렉션", "아카이브", "소개"],
    tools: ["검색", "저장", "백"],
    meta: { home: "큐레이션 아카이브", shop: "숍", collection: "아카이브 에디트", product: "Look 01", about: "스튜디오", archive: "아카이브" },
    footer: "온라인 큐레이션 럭셔리 세컨핸드 아카이브",
    home: {
      hero: {
        eyebrow: "큐레이션 럭셔리 세컨핸드",
        intro: "all black은 모노크롬 실루엣, 더 차가운 테일러링, 그리고 여전히 존재감을 유지하는 archive 피스를 중심으로 한 럭셔리 세컨핸드 사이트입니다.",
        actions: ["숍", "컬렉션", "소개"],
        notes: ["큐레이션 아카이브 / 럭셔리 세컨핸드 / 블랙의 질서", "브랜드 슬로건: selected for a second life"],
        stage: ["아카이브 포커스", "희귀한 블랙 피스를 더 절제된 방식으로 다시 선택합니다.", "더 조용한 시선으로 본 럭셔리 세컨핸드."],
        stamp: ["아카이브 노트", "블랙 중심으로 큐레이션된 럭셔리 리세일"],
        footer: ["큐레이션 코트 / archive tailoring / 모노크롬 셀렉션 / 단독 입고", "온라인 아카이브 스토어"],
        ticker: ["ALL BLACK", "큐레이션 세컨핸드", "LUXURY RESALE", "ARCHIVE OUTERWEAR", "원오프 피스", "SELECTED FOR A SECOND LIFE"],
      },
      featured: {
        kicker: "주요 아카이브",
        title: "홈페이지는 단종되었지만 여전히 날카롭고 유효한 세컨핸드 피스를 전면에 둡니다.",
        copy: "all black은 물량을 쫓지 않습니다. archive 아우터, 블랙 디자이너 피스, 더 강한 실루엣을 조용한 edit로 걸러낸 뒤 Collection과 Shop으로 안내합니다.",
        list: [
          "archive 코트, 구조적인 아우터, 모노크롬 디자이너 피스에 집중",
          "희소성, 컨디션, 출처, 리세일 가치를 강조",
          "Collection은 큐레이션을, Shop은 재고와 가격을 담당",
        ],
        actions: ["컬렉션 보기", "에디트 쇼핑"],
      },
      image: ["아카이브 셀렉션", "홈페이지는 스토어가 되기 전에 먼저 모노크롬 세컨핸드 에디토리얼처럼 작동합니다.", "아카이브 탐색"],
      products: {
        kicker: "주요 상품",
        title: "히어로 제품은 분위기를 브라우징 경로로 바꾸면서도 archive store의 절제를 유지합니다.",
        copy: "가장 먼저 열어볼 가치가 있는 피스들입니다. 에디토리얼한 감각을 유지하면서 자연스럽게 product와 shop 페이지로 이어집니다.",
        cards: [
          ["아우터", "Archive Leather Trench", "상품 열기"],
          ["디자이너 코트", "Structured Wool Coat", "숍 열기"],
          ["희귀 세트", "Black Studio Set", "전체 보기"],
        ],
      },
      story: {
        kicker: "브랜드 슬로건",
        title: "Selected for a second life.",
        copy: "all black이 관심을 두는 것은 세컨핸드라는 사실 자체보다도, 옷장으로 다시 들어간 뒤에도 여전히 성립하는 의복입니다. 레이아웃은 차분하게 유지되어 사이트가 단순한 리세일 목록보다 curated archive 공간처럼 느껴지도록 합니다.",
        actions: ["소개 보기", "숍 입장"],
        stats: [
          "홈페이지는 curated secondhand archive의 시각적 분위기를 만든다",
          "컬렉션 페이지는 큐레이션 로직과 핵심 방향을 설명한다",
          "Shop과 Product가 탐색과 구매의 경로를 맡는다",
        ],
      },
    },
    shop: {
      hero: ["숍", "이번 시즌 먼저 볼 만한 핵심 피스.", "숍은 홈페이지의 차가운 archive 무드를 유지하면서도 출처, 컨디션, 희소성을 중심으로 정보를 더 명확하게 정리합니다."],
      panels: [
        ["뉴 인", "단독 입고 방식으로 업데이트되는 최신 archive arrivals.", "이 입구는 archive의 희소성을 강조합니다. 한 번 들어오면 다시 돌아오지 않을 수 있습니다."],
        ["저장 / 백", "구매를 결정하기 전에 중요한 피스를 먼저 가까이에 두세요.", "지금은 내비게이션 레이어를 완성하는 역할이지만, 다음에는 실제 저장 및 백 인터랙션으로 확장할 수 있습니다."],
      ],
      filters: ["카테고리", "배송", "전체", "아우터", "세트", "레이어링", "전체", "즉시 발송", "오더 제작"],
      cards: [
        ["아우터", "Archive Leather Trench", "이탈리아 archive / A 컨디션 / 즉시 발송", "상세 보기"],
        ["아우터", "Structured Wool Coat", "디자이너 세컨핸드 / A- 컨디션 / 단 한 점", "상세 보기"],
        ["세트", "Black Studio Set", "투피스 archive set / B+ 컨디션 / 재고 적음", "상세 보기"],
        ["레이어링", "After Dark Shell Top", "레이어링 피스 / A 컨디션 / 단품", "상세 보기"],
      ],
    },
    collection: {
      hero: ["아카이브 셀렉션", "Black archive edit", "이 페이지는 all black이 지금 강조하는 모노크롬 세컨핸드 피스를 보여줍니다. 전통적인 드롭보다 archive edit에 더 가깝게 작동합니다."],
      looks: [
        ["Look 01", "날카로운 어깨 구조를 가진 archive 레더 트렌치", "상품 열기"],
        ["Look 02", "모노크롬 archive tailoring", ""],
        ["Look 03", "희귀한 블랙 표면 연구", ""],
      ],
      panels: [
        ["방향", "희소성, 컨디션, 더 엄격한 블랙 팔레트로 구성됩니다.", "이곳의 각 피스는 출처, 상태, 다시 입혀졌을 때의 실제 착용 가치를 기준으로 선택됩니다."],
        ["소재", "가죽, 울, 매트 저지, 그리고 지난 시즌 디자이너 구조.", "럭셔리 세컨핸드에서는 이미지뿐 아니라 소재, 배경, 지속성도 중요합니다."],
      ],
    },
    product: {
      hero: ["대표 상품", "Archive Leather Trench", "강한 실루엣을 지닌 럭셔리 세컨핸드 코트입니다. 매력은 새것이라는 사실이 아니라, 구조와 마감, 그리고 수집 가치가 여전히 유지된다는 점에 있습니다."],
      metaLabels: ["컬러", "재고", "배송"],
      metaValues: ["블랙", "재고 있음", "2-4 영업일"],
      size: "사이즈",
      features: [
        "래커 마감이 더해진 구조적 숄더 라인",
        "의복 구조가 드러나는 archive 디자이너 피스",
        "실루엣, 컨디션, 장기적인 착용 가치를 기준으로 선별",
      ],
      actions: ["백에 추가", "나중에 저장"],
      links: ["숍으로 돌아가기", "컬렉션 보기"],
      details: [
        ["컨디션", "가벼운 보관 흔적은 있지만 뚜렷한 구조 손상은 없는 A등급 세컨핸드 컨디션."],
        ["출처", "개인 아카이브 셀렉션에서 큐레이션되어 원오프 스토어 피스로 다시 소개되었습니다."],
      ],
    },
    about: {
      hero: ["스튜디오 소개", "Selected for a second life.", "all black은 블랙 팔레트, archive 디자이너 피스, 그리고 다시 볼 가치가 있는 실루엣에 집중한 럭셔리 세컨핸드 의류 쇼케이스입니다."],
      panels: [
        ["철학", "큐레이션된 세컨핸드, 절제된 팔레트, 그리고 다시 입을 가치가 있는 옷.", "이 사이트는 물량을 피하고, 선택과 레이아웃, 내러티브를 통해 세컨핸드를 curated archive에 더 가깝게 느끼게 합니다."],
        ["스튜디오", "럭셔리 세컨핸드 의류를 위한 온라인 아카이브 스토어.", "About 페이지는 셀렉션 로직을 설명해 홈페이지, 컬렉션, 숍이 같은 언어를 사용하도록 만듭니다."],
      ],
    },
    archive: {
      hero: ["아카이브", "희소성, 컨디션, 블랙 톤의 규율을 기준으로 선택한 디자이너 피스.", "Archive 페이지는 더 에디토리얼한 브라우징 모드를 담당합니다. 단지 '더 많은 상품'이 아니라, all black이 시간에 따라 무엇을 계속 선택하는지 더 명확하게 보여줍니다."],
      panels: [
        ["디자이너", "아방가르드 아우터, 방향성 있는 tailoring, 블랙 archive 스테이플.", "이 영역은 나중에 디자이너, 시대, 태그로 확장되어 Shop보다 더 큐레이션된 진입점이 될 수 있습니다."],
        ["선정 로직", "모든 피스는 형태, 분위기, 장기적인 착용 가치를 유지해야 합니다.", "Archive는 왜 이 세컨핸드 의류들이 다시 보여지고 다시 구매될 가치가 있는지를 설명합니다."],
      ],
    },
    runtime: { selected: "선택한 사이즈는 {size} 입니다.", added: "Archive Leather Trench 의 {size} 사이즈가 백에 추가되었습니다.", saved: "아이템이 아카이브 리스트에 저장되었습니다.", unsaved: "아이템이 아카이브 리스트에서 제거되었습니다.", addedBtn: "추가됨", addBtn: "백에 추가", saveBtn: "나중에 저장", savedBtn: "저장됨" },
  });

  const renderGlobal = (pack, currentPage) => {
    document.title = pack.titles[currentPage] || pack.titles.home;
    setTexts(".nav > .nav-item > .nav-link", [pack.nav[0], pack.nav[1], pack.nav[2], pack.nav[10], pack.nav[11], pack.nav[12]]);
    setTexts(".nav > .nav-item.nav-dropdown > .nav-menu .nav-link", [pack.nav[3], pack.nav[4], pack.nav[5], pack.nav[6], pack.nav[7], pack.nav[8], pack.nav[9]]);
    setTexts(".header-tools a", pack.tools.slice(1));
    document.querySelectorAll("[data-search-trigger]").forEach((trigger) => {
      trigger.setAttribute("aria-label", pack.tools[0]);
      trigger.setAttribute("title", pack.tools[0]);
    });
    setText(".meta", pack.meta[currentPage] || pack.meta.home);
    setText(".footer span", pack.footer);
  };

  const renderHome = (pack) => {
    const p = pack.home;
    setText(".hero-copy .eyebrow", p.hero.eyebrow);
    setText(".hero-copy .intro", p.hero.intro);
    setTexts(".hero-copy .hero-actions a", p.hero.actions);
    setTexts(".hero-copy .hero-notes span", p.hero.notes);
    setTexts(".hero-stage-copy > *", p.hero.stage);
    setTexts(".hero-stamp > *", p.hero.stamp);
    setTexts(".hero-footer span", p.hero.footer);
    setTexts(".ticker-track span", twice(p.hero.ticker));
    setText(".large-card .section-kicker", p.featured.kicker);
    setText(".large-card .section-heading h2", p.featured.title);
    setText(".large-card .section-copy", p.featured.copy);
    setTexts(".large-card .feature-list li", p.featured.list);
    setTexts(".large-card .section-actions a", p.featured.actions);
    setTexts(".image-card-copy > *", p.image);
    setText(".lookbook .section-kicker", p.products.kicker);
    setText(".lookbook-copy h2", p.products.title);
    setText(".lookbook-copy p:last-child", p.products.copy);
    document.querySelectorAll(".lookbook .product-card").forEach((card, i) => {
      const item = p.products.cards[i];
      if (!item) return;
      setIn(card, ".product-card-copy p", item[0]);
      setIn(card, ".product-card-copy h3", item[1]);
      setIn(card, ".inline-link", item[2]);
    });
    setText(".story-copy .section-kicker", p.story.kicker);
    setText(".story-copy h2", p.story.title);
    setText(".story-copy p:last-of-type", p.story.copy);
    setTexts(".story-copy .section-actions a", p.story.actions);
    setTexts(".story-stats span", p.story.stats);
  };

  const renderShop = (pack) => {
    const p = pack.shop;
    setTexts(".page-hero > *", p.hero);
    setText('.info-grid article:nth-child(1) .section-kicker', p.panels[0][0]);
    setText('.info-grid article:nth-child(1) h2', p.panels[0][1]);
    setText('.info-grid article:nth-child(1) .section-copy', p.panels[0][2]);
    setText('.info-grid article:nth-child(2) .section-kicker', p.panels[1][0]);
    setText('.info-grid article:nth-child(2) h2', p.panels[1][1]);
    setText('.info-grid article:nth-child(2) .section-copy', p.panels[1][2]);
    setTexts(".shop-controls .filter-label", [p.filters[0], p.filters[1]]);
    setTexts(".shop-controls .filter-group:first-child .filter-chip", p.filters.slice(2, 9));
    setTexts(".shop-controls .filter-group:last-child .filter-chip", p.filters.slice(9, 12));
    document.querySelectorAll(".shop-grid .product-card").forEach((card, i) => {
      const item = p.cards[i];
      if (!item) return;
      setIn(card, ".product-card-copy p", item[0]);
      setIn(card, ".product-card-copy h3", item[1]);
      setIn(card, ".product-caption", item[2]);
      setIn(card, ".inline-link", item[3]);
    });
  };

  const renderCollection = (pack) => {
    const p = pack.collection;
    setTexts(".page-hero > *", p.hero);
    document.querySelectorAll(".collection-grid-page .collection-card").forEach((card, i) => {
      const item = p.looks[i];
      if (!item) return;
      setIn(card, ".collection-card-copy p", item[0]);
      setIn(card, ".collection-card-copy h2", item[1]);
      if (item[2]) setIn(card, ".inline-link", item[2]);
    });
    setText('.info-grid article:nth-child(1) .section-kicker', p.panels[0][0]);
    setText('.info-grid article:nth-child(1) h2', p.panels[0][1]);
    setText('.info-grid article:nth-child(1) .section-copy', p.panels[0][2]);
    setText('.info-grid article:nth-child(2) .section-kicker', p.panels[1][0]);
    setText('.info-grid article:nth-child(2) h2', p.panels[1][1]);
    setText('.info-grid article:nth-child(2) .section-copy', p.panels[1][2]);
  };

  const renderProduct = (pack) => {
    const p = pack.product;
    setText(".product-copy .section-kicker", p.hero[0]);
    setText(".product-copy h1", p.hero[1]);
    setText(".product-copy .section-copy", p.hero[2]);
    setTexts(".product-meta .meta-label", p.metaLabels);
    setTexts(".product-meta strong", p.metaValues);
    setText(".size-selector > .meta-label", p.size);
    setTexts(".product-copy .feature-list li", p.features);
    setTexts(".product-actions button", p.actions);
    setTexts(".product-copy .hero-actions a", p.links);
    setTexts(".product-details .meta-label", [p.details[0][0], p.details[1][0]]);
    setTexts(".product-details p", [p.details[0][1], p.details[1][1]]);
  };

  const renderAbout = (pack) => {
    const p = pack.about;
    setTexts(".page-hero > *", p.hero);
    setText('.info-grid article:nth-child(1) .section-kicker', p.panels[0][0]);
    setText('.info-grid article:nth-child(1) h2', p.panels[0][1]);
    setText('.info-grid article:nth-child(1) .section-copy', p.panels[0][2]);
    setText('.info-grid article:nth-child(2) .section-kicker', p.panels[1][0]);
    setText('.info-grid article:nth-child(2) h2', p.panels[1][1]);
    setText('.info-grid article:nth-child(2) .section-copy', p.panels[1][2]);
  };

  const renderArchive = (pack) => {
    const p = pack.archive;
    setTexts(".page-hero > *", p.hero);
    setText('.info-grid article:nth-child(1) .section-kicker', p.panels[0][0]);
    setText('.info-grid article:nth-child(1) h2', p.panels[0][1]);
    setText('.info-grid article:nth-child(1) .section-copy', p.panels[0][2]);
    setText('.info-grid article:nth-child(2) .section-kicker', p.panels[1][0]);
    setText('.info-grid article:nth-child(2) h2', p.panels[1][1]);
    setText('.info-grid article:nth-child(2) .section-copy', p.panels[1][2]);
  };

  window.siteTranslator = {
    render(languageCode) {
      const pack = copy[languageCode] || copy.zh;
      const current = pageKey();
      renderGlobal(pack, current);
      if (current === "home") renderHome(pack);
      if (current === "shop") renderShop(pack);
      if (current === "collection") renderCollection(pack);
      if (current === "product") renderProduct(pack);
      if (current === "about") renderAbout(pack);
      if (current === "archive") renderArchive(pack);
    },
    getRuntime(languageCode) {
      return (copy[languageCode] || copy.zh).runtime;
    },
  };
})();
