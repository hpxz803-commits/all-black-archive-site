window.catalogData = {
  version: "2026-04",
  currency: "EUR",
  locale: "it-IT",
  products: [
    {
      id: "P-001",
      slug: "archive-leather-trench",
      category: "outerwear",
      media: {
        cover: "assets/editorial-model.jpg",
        gallery: [
          "assets/editorial-model.jpg",
          "assets/poster-reference.jpg",
          "assets/motion-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 680,
      },
      fulfillment: {
        type: "ready",
        leadTime: { en: "2-4 business days", zh: "2-4 个工作日" },
      },
      inventory: {
        status: "in_stock",
        quantityLabel: { en: "In stock", zh: "现货" },
        oneOfAKind: true,
      },
      sizing: {
        options: ["XS", "S", "M", "L"],
        default: "S",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "A",
        designer: { en: "Archive selection", zh: "档案精选" },
        origin: { en: "Italy", zh: "意大利" },
        era: { en: "Early 2010s", zh: "2010 年代早期" },
      },
      copy: {
        name: { en: "Archive Leather Trench", zh: "Archive Leather Trench" },
        categoryLabel: { en: "Outerwear", zh: "外套" },
        cardCaption: {
          en: "Italian archive / condition A / ready to ship",
          zh: "意大利档案 / A 级成色 / 现货可发",
        },
        intro: {
          en: "A luxury secondhand coat with a strong silhouette. The appeal is not that it is new, but that its structure, finish, and collectible value still hold.",
          zh: "一件带有强烈轮廓感的精品二手外套，重点不在“新”，而在它依然成立的版型、质感和收藏价值。",
        },
        features: {
          en: [
            "Structured shoulder line with lacquered finish",
            "Archive designer piece with visible garment structure",
            "Selected for silhouette, condition, and long-term wear value",
          ],
          zh: [
            "带有亮面处理的结构肩线",
            "可见服装结构的档案设计师单品",
            "以轮廓、成色和长期穿着价值为选择标准",
          ],
        },
      },
      notes: {
        condition: {
          en: "A grade secondhand condition with light signs of storage and no obvious structural damage.",
          zh: "A 级二手状态，仅有轻微存放痕迹，没有明显结构性损伤。",
        },
        source: {
          en: "Curated from a private archive selection and reintroduced as a one-off store piece.",
          zh: "来自私人档案选择，并以单件商店单品的形式重新上架。",
        },
      },
      searchTokens: ["archive leather trench", "leather trench", "trench", "outerwear", "风衣", "皮风衣", "外套"],
    },
    {
      id: "P-002",
      slug: "structured-wool-coat",
      category: "outerwear",
      media: {
        cover: "assets/poster-reference.jpg",
        gallery: [
          "assets/poster-reference.jpg",
          "assets/editorial-model.jpg",
          "assets/hero-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 520,
      },
      fulfillment: {
        type: "ready",
        leadTime: { en: "2-4 business days", zh: "2-4 个工作日" },
      },
      inventory: {
        status: "in_stock",
        quantityLabel: { en: "In stock", zh: "现货" },
        oneOfAKind: true,
      },
      sizing: {
        options: ["S", "M", "L"],
        default: "M",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "A-",
        designer: { en: "Designer archive", zh: "设计师档案" },
        origin: { en: "Private resale edit", zh: "私人转售编辑" },
        era: { en: "Late 2000s", zh: "2000 年代末" },
      },
      copy: {
        name: { en: "Structured Wool Coat", zh: "Structured Wool Coat" },
        categoryLabel: { en: "Outerwear", zh: "外套" },
        cardCaption: {
          en: "Designer secondhand / condition A- / one piece only",
          zh: "设计师二手 / A- 成色 / 单件在售",
        },
        intro: {
          en: "A directional wool coat chosen for its line, material weight, and quiet archive presence.",
          zh: "这件羊毛大衣以线条、材质重量和更安静的 archive 气质被选中。",
        },
        features: {
          en: [
            "Sharper shoulder proportion with clean wool surface",
            "Designer secondhand piece with one-piece availability",
            "Chosen for long-term wear value and archive relevance",
          ],
          zh: [
            "更锋利的肩部比例与干净的羊毛表面",
            "设计师二手单品，当前仅有一件",
            "以长期穿着价值和 archive 相关性为选择标准",
          ],
        },
      },
      notes: {
        condition: {
          en: "A- condition with light wear and well-kept structure.",
          zh: "A- 级成色，存在轻微使用痕迹，但结构保存良好。",
        },
        source: {
          en: "Selected from a private resale edit focused on monochrome outerwear.",
          zh: "来自聚焦黑色外套的私人转售档案编辑。",
        },
      },
      searchTokens: ["structured wool coat", "wool coat", "coat", "designer coat", "羊毛大衣", "大衣", "外套"],
    },
    {
      id: "P-003",
      slug: "black-studio-set",
      category: "set",
      media: {
        cover: "assets/hero-reference.jpg",
        gallery: [
          "assets/hero-reference.jpg",
          "assets/motion-reference.jpg",
          "assets/poster-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 430,
      },
      fulfillment: {
        type: "ready",
        leadTime: { en: "2-4 business days", zh: "2-4 个工作日" },
      },
      inventory: {
        status: "low_stock",
        quantityLabel: { en: "Low stock", zh: "库存很少" },
        oneOfAKind: true,
      },
      sizing: {
        options: ["S", "M"],
        default: "S",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "B+",
        designer: { en: "Archive set", zh: "档案套装" },
        origin: { en: "Private archive wardrobe", zh: "私人档案衣橱" },
        era: { en: "2010s", zh: "2010 年代" },
      },
      copy: {
        name: { en: "Black Studio Set", zh: "Black Studio Set" },
        categoryLabel: { en: "Set", zh: "套装" },
        cardCaption: {
          en: "Two-piece archive set / condition B+ / low stock",
          zh: "两件式档案套装 / B+ 成色 / 库存很少",
        },
        intro: {
          en: "A two-piece archive set that keeps the editorial tone while remaining easy to style back into daily rotation.",
          zh: "一套保留编辑感、同时又能重新进入日常穿搭的 archive 两件式套装。",
        },
        features: {
          en: [
            "Two-piece set with coordinated proportion",
            "Archive selection with quieter styling flexibility",
            "Low-stock secondhand piece with collectible appeal",
          ],
          zh: [
            "两件式组合，比例协调统一",
            "兼具 archive 气质与更安静的搭配灵活度",
            "库存较少的二手单品，具备收藏吸引力",
          ],
        },
      },
      notes: {
        condition: {
          en: "B+ condition with visible but controlled signs of previous wear.",
          zh: "B+ 级成色，存在可见但可接受的使用痕迹。",
        },
        source: {
          en: "Reintroduced from a private archive wardrobe known for directional black tailoring.",
          zh: "来自以黑色方向性剪裁著称的私人档案衣橱。",
        },
      },
      searchTokens: ["black studio set", "studio set", "set", "two-piece", "套装", "两件式"],
    },
    {
      id: "P-004",
      slug: "after-dark-shell-top",
      category: "layering",
      media: {
        cover: "assets/motion-reference.jpg",
        gallery: [
          "assets/motion-reference.jpg",
          "assets/hero-reference.jpg",
          "assets/editorial-model.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 210,
      },
      fulfillment: {
        type: "made",
        leadTime: { en: "5-8 business days", zh: "5-8 个工作日" },
      },
      inventory: {
        status: "sourcing",
        quantityLabel: { en: "Available to source", zh: "可代寻" },
        oneOfAKind: false,
      },
      sizing: {
        options: ["S", "M", "L"],
        default: "M",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "A",
        designer: { en: "Layering archive", zh: "叠穿档案" },
        origin: { en: "Low-volume resale network", zh: "低流量转售渠道" },
        era: { en: "2010s", zh: "2010 年代" },
      },
      copy: {
        name: { en: "After Dark Shell Top", zh: "After Dark Shell Top" },
        categoryLabel: { en: "Layering", zh: "叠穿" },
        cardCaption: {
          en: "Layering piece / condition A / single item",
          zh: "叠穿单品 / A 级成色 / 单件出售",
        },
        intro: {
          en: "A lean layering piece chosen for surface restraint and an easier way of extending a monochrome wardrobe.",
          zh: "一件以表面克制感和黑色衣橱延展性被选中的叠穿单品。",
        },
        features: {
          en: [
            "Slim layering proportion for under-coat styling",
            "Archive mood without heavy visual noise",
            "Ideal for building colder monochrome looks",
          ],
          zh: [
            "更适合大衣内搭的修长叠穿比例",
            "保留 archive 气质，但不过度喧闹",
            "适合构建更冷调的黑色层次穿搭",
          ],
        },
      },
      notes: {
        condition: {
          en: "A condition with minimal wear and clean surface finish.",
          zh: "A 级成色，使用痕迹极少，表面状态干净。",
        },
        source: {
          en: "Sourced through a low-volume archive resale network.",
          zh: "通过更低流量的 archive 转售渠道进行代寻。",
        },
      },
      searchTokens: ["after dark shell top", "shell top", "layering", "top", "叠穿", "上衣"],
    },
    {
      id: "P-005",
      slug: "noir-frame-02",
      category: "eyewear",
      media: {
        cover: "assets/poster-reference.jpg",
        gallery: [
          "assets/poster-reference.jpg",
          "assets/motion-reference.jpg",
          "assets/hero-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 260,
      },
      fulfillment: {
        type: "ready",
        leadTime: { en: "2-4 business days", zh: "2-4 个工作日" },
      },
      inventory: {
        status: "in_stock",
        quantityLabel: { en: "In stock", zh: "现货" },
        oneOfAKind: true,
      },
      sizing: {
        options: ["One size"],
        default: "One size",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "A",
        designer: { en: "Archive eyewear", zh: "档案眼镜" },
        origin: { en: "Designer accessories archive", zh: "设计师配饰档案" },
        era: { en: "Late 2000s", zh: "2000 年代末" },
      },
      copy: {
        name: { en: "Noir Frame 02", zh: "Noir Frame 02" },
        categoryLabel: { en: "Eyewear", zh: "眼镜" },
        cardCaption: {
          en: "Archive sunglasses / condition A / ready to ship",
          zh: "档案墨镜 / A 级成色 / 现货可发",
        },
        intro: {
          en: "An archive sunglasses frame selected for harder geometry and a cleaner black finish.",
          zh: "一副以更锋利几何感和更干净黑色表面被选中的 archive 墨镜。",
        },
        features: {
          en: [
            "Sharper frame line with dark glossy surface",
            "Archive eyewear piece in wearable condition",
            "One-size accessory for colder monochrome styling",
          ],
          zh: [
            "更锋利的镜框线条与深色亮面表面",
            "可日常佩戴的 archive 眼镜单品",
            "适合冷调黑色穿搭的一体化配饰",
          ],
        },
      },
      notes: {
        condition: {
          en: "A condition with minor handling marks and clear lenses.",
          zh: "A 级成色，存在轻微拿取痕迹，镜片状态清晰。",
        },
        source: {
          en: "Pulled from a designer accessories archive and listed as a one-off piece.",
          zh: "来自设计师配饰档案，并以单件形式重新上架。",
        },
      },
      searchTokens: ["noir frame 02", "sunglasses", "eyewear", "glasses", "墨镜", "眼镜"],
    },
    {
      id: "P-006",
      slug: "studio-essential-tee",
      category: "tshirt",
      media: {
        cover: "assets/hero-reference.jpg",
        gallery: [
          "assets/hero-reference.jpg",
          "assets/editorial-model.jpg",
          "assets/poster-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 120,
      },
      fulfillment: {
        type: "ready",
        leadTime: { en: "2-4 business days", zh: "2-4 个工作日" },
      },
      inventory: {
        status: "in_stock",
        quantityLabel: { en: "In stock", zh: "现货" },
        oneOfAKind: true,
      },
      sizing: {
        options: ["S", "M", "L", "XL"],
        default: "M",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "A-",
        designer: { en: "Designer basic", zh: "设计师基础款" },
        origin: { en: "Monochrome basics archive", zh: "黑色基础款档案" },
        era: { en: "2010s", zh: "2010 年代" },
      },
      copy: {
        name: { en: "Studio Essential Tee", zh: "Studio Essential Tee" },
        categoryLabel: { en: "T-Shirt", zh: "T恤" },
        cardCaption: {
          en: "Designer basic / condition A- / single item",
          zh: "设计师基础款 / A- 成色 / 单件出售",
        },
        intro: {
          en: "A black designer tee chosen for proportion and fabric hand rather than branding.",
          zh: "一件更看重版型和手感、而不是明显品牌标识的黑色设计师 T 恤。",
        },
        features: {
          en: [
            "Soft weight jersey with balanced neckline",
            "Designer basic with quieter archive appeal",
            "Easy entry piece for daily monochrome wear",
          ],
          zh: [
            "有柔软分量感的针织面料与平衡领口",
            "更安静但耐看的设计师基础款",
            "适合作为日常黑色穿搭的入门 archive 单品",
          ],
        },
      },
      notes: {
        condition: {
          en: "A- condition with slight wear softening and no major flaws.",
          zh: "A- 级成色，存在轻微穿着软化感，但无明显瑕疵。",
        },
        source: {
          en: "Selected from a monochrome-focused designer basics archive.",
          zh: "来自以黑色设计师基础款为主的私人档案。",
        },
      },
      searchTokens: ["studio essential tee", "t-shirt", "tee", "shirt", "T恤", "短袖"],
    },
    {
      id: "P-007",
      slug: "archive-square-heel",
      category: "shoes",
      media: {
        cover: "assets/editorial-model.jpg",
        gallery: [
          "assets/editorial-model.jpg",
          "assets/motion-reference.jpg",
          "assets/poster-reference.jpg",
        ],
      },
      pricing: {
        currency: "EUR",
        amount: 340,
      },
      fulfillment: {
        type: "made",
        leadTime: { en: "5-8 business days", zh: "5-8 个工作日" },
      },
      inventory: {
        status: "sourcing",
        quantityLabel: { en: "Available to source", zh: "可代寻" },
        oneOfAKind: false,
      },
      sizing: {
        options: ["36", "37", "38", "39"],
        default: "37",
      },
      attributes: {
        color: { en: "Black", zh: "黑色" },
        conditionGrade: "B+",
        designer: { en: "Archive footwear", zh: "档案鞋履" },
        origin: { en: "Specialist footwear source", zh: "专业鞋履渠道" },
        era: { en: "2010s", zh: "2010 年代" },
      },
      copy: {
        name: { en: "Archive Square Heel", zh: "Archive Square Heel" },
        categoryLabel: { en: "Shoes", zh: "鞋子" },
        cardCaption: {
          en: "Leather heel / condition B+ / made to order sourcing",
          zh: "皮质高跟鞋 / B+ 成色 / 可代寻订制",
        },
        intro: {
          en: "A leather square heel selected for a cleaner profile and stronger archive attitude.",
          zh: "一双以更干净轮廓和更强 archive 气质被选中的皮质方头高跟鞋。",
        },
        features: {
          en: [
            "Square front profile with stable heel proportion",
            "Archive footwear option for sharper black styling",
            "Sourced through made-to-order archive channels",
          ],
          zh: [
            "方头前脸与更稳定的鞋跟比例",
            "适合更锋利黑色造型的 archive 鞋履",
            "通过可代寻的 archive 渠道获取",
          ],
        },
      },
      notes: {
        condition: {
          en: "B+ condition with light sole wear and intact upper structure.",
          zh: "B+ 级成色，鞋底有轻微磨损，但鞋面结构完整。",
        },
        source: {
          en: "Requested through a specialist archive footwear source.",
          zh: "通过专门的 archive 鞋履渠道进行代寻。",
        },
      },
      searchTokens: ["archive square heel", "heel", "shoes", "shoe", "高跟鞋", "鞋子"],
    },
    {
      id: "P-008",
      slug: "shengshi-sculpted-ring",
      category: "jewelry",
      media: {
        cover: "assets/shengshi-ring-01.jpg",
        gallery: [
          "assets/shengshi-ring-01.jpg",
          "assets/shengshi-ring-02.jpg",
          "assets/shengshi-ring-03.jpg",
          "assets/shengshi-ring-04.jpg",
        ],
      },
      pricing: {
        label: {
          en: "Price on request", zh: "价格咨询", de: "Preis auf Anfrage", it: "Prezzo su richiesta", fr: "Prix sur demande",
          ja: "価格はお問い合わせください", es: "Precio bajo consulta", ru: "Цена по запросу", ko: "가격 문의",
        },
      },
      fulfillment: {
        type: "ready",
        leadTime: {
          en: "2-4 business days", zh: "2-4 个工作日", de: "2-4 Werktage", it: "2-4 giorni lavorativi", fr: "2 à 4 jours ouvrés",
          ja: "2〜4営業日", es: "2-4 días laborables", ru: "2-4 рабочих дня", ko: "영업일 기준 2-4일",
        },
      },
      inventory: {
        status: "in_stock",
        quantityLabel: {
          en: "In stock", zh: "现货", de: "Auf Lager", it: "Disponibile", fr: "En stock",
          ja: "在庫あり", es: "En stock", ru: "В наличии", ko: "재고 있음",
        },
        oneOfAKind: false,
      },
      sizing: {
        options: ["SSJZ-570", "SSJZ-571", "SSJZ-508", "SSJZ-507"],
        default: "SSJZ-570",
        label: {
          en: "Model", zh: "型号", de: "Modell", it: "Modello", fr: "Modèle",
          ja: "モデル", es: "Modelo", ru: "Модель", ko: "모델",
        },
        messages: {
          selected: {
            en: "Selected model {size}.", zh: "已选择型号 {size}。", de: "Modell {size} ausgewählt.", it: "Modello {size} selezionato.", fr: "Modèle {size} sélectionné.",
            ja: "モデル {size} を選択しました。", es: "Modelo {size} seleccionado.", ru: "Выбрана модель {size}.", ko: "{size} 모델을 선택했습니다.",
          },
          added: {
            en: "Shengshi Sculpted Ring, model {size}, added to bag.", zh: "Shengshi 雕塑感戒指型号 {size} 已加入购物袋。", de: "Shengshi Sculpted Ring, Modell {size}, wurde zur Tasche hinzugefügt.", it: "Shengshi Sculpted Ring, modello {size}, aggiunto alla bag.", fr: "Shengshi Sculpted Ring, modèle {size}, ajouté au sac.",
            ja: "Shengshi スカルプチャーリング、モデル {size} をバッグに追加しました。", es: "Shengshi Sculpted Ring, modelo {size}, añadido a la bolsa.", ru: "Кольцо Shengshi, модель {size}, добавлено в сумку.", ko: "Shengshi 스컬프처 링 {size} 모델을 백에 추가했습니다.",
          },
        },
      },
      attributes: {
        color: {
          en: "Silver tone", zh: "银色", de: "Silberfarben", it: "Color argento", fr: "Ton argenté",
          ja: "シルバートーン", es: "Tono plateado", ru: "Серебристый", ko: "실버 톤",
        },
        conditionGrade: "A",
        designer: {
          en: "Shengshi", zh: "盛世设计", de: "Shengshi", it: "Shengshi", fr: "Shengshi",
          ja: "SHENGSHI", es: "Shengshi", ru: "Shengshi", ko: "SHENGSHI",
        },
        origin: {
          en: "Shengshi design archive", zh: "盛世设计档案", de: "Shengshi-Designarchiv", it: "Archivio design Shengshi", fr: "Archive design Shengshi",
          ja: "SHENGSHIデザインアーカイブ", es: "Archivo de diseño Shengshi", ru: "Дизайн-архив Shengshi", ko: "SHENGSHI 디자인 아카이브",
        },
        era: { en: "2024", zh: "2024 年", de: "2024", it: "2024", fr: "2024", ja: "2024年", es: "2024", ru: "2024", ko: "2024년" },
      },
      copy: {
        name: {
          en: "Shengshi Sculpted Ring", zh: "Shengshi 雕塑感戒指", de: "Shengshi Sculpted Ring", it: "Shengshi Sculpted Ring", fr: "Shengshi Sculpted Ring",
          ja: "Shengshi スカルプチャーリング", es: "Shengshi Sculpted Ring", ru: "Скульптурное кольцо Shengshi", ko: "Shengshi 스컬프처 링",
        },
        categoryLabel: {
          en: "Jewelry", zh: "首饰", de: "Schmuck", it: "Gioielli", fr: "Bijoux",
          ja: "ジュエリー", es: "Joyería", ru: "Украшения", ko: "주얼리",
        },
        cardCaption: {
          en: "Sculpted open ring / electroplated finish / adjustable", zh: "雕塑感活口戒指 / 电镀工艺 / 开口可调", de: "Skulpturaler offener Ring / galvanisiert / verstellbar", it: "Anello aperto scultoreo / finitura galvanica / regolabile", fr: "Bague ouverte sculpturale / finition électroplaquée / réglable",
          ja: "彫刻的なオープンリング / 電気メッキ / 調整可能", es: "Anillo abierto escultórico / acabado galvanizado / ajustable", ru: "Скульптурное разомкнутое кольцо / гальваническое покрытие / регулируемое", ko: "조형적인 오픈 링 / 전기 도금 / 조절 가능",
        },
        intro: {
          en: "An adjustable silver-tone ring shaped around fluid, organic lines. Its open construction keeps the sculptural form easy to wear across four Shengshi models.",
          zh: "一组以流动自然线条塑造的银色活口戒指。开放式结构兼顾雕塑感与可调节佩戴体验，共包含四个 Shengshi 型号。",
          de: "Ein verstellbarer, silberfarbener Ring aus fließenden organischen Linien. Die offene Konstruktion verbindet skulpturale Präsenz mit tragbarer Flexibilität in vier Shengshi-Modellen.",
          it: "Un anello regolabile color argento costruito su linee fluide e organiche. La struttura aperta unisce presenza scultorea e vestibilità flessibile in quattro modelli Shengshi.",
          fr: "Une bague réglable au ton argenté dessinée par des lignes fluides et organiques. Sa construction ouverte associe présence sculpturale et confort modulable en quatre modèles Shengshi.",
          ja: "流れるような有機的ラインで形づくられた、調整可能なシルバートーンのリング。オープン構造により、4つのSHENGSHIモデルで彫刻的な存在感と着けやすさを両立します。",
          es: "Un anillo ajustable en tono plateado definido por líneas fluidas y orgánicas. Su estructura abierta combina presencia escultórica y comodidad flexible en cuatro modelos Shengshi.",
          ru: "Регулируемое кольцо серебристого тона, построенное на плавных органических линиях. Разомкнутая конструкция сочетает скульптурную форму и удобную посадку в четырех моделях Shengshi.",
          ko: "유기적으로 흐르는 라인으로 완성한 조절형 실버 톤 링입니다. 오픈 구조로 조형적인 존재감과 편안한 착용감을 네 가지 SHENGSHI 모델에 담았습니다.",
        },
        features: {
          en: ["Adjustable open-ring construction", "Electroplated silver-tone sculptural surface", "Four model codes with the same 2.2 × 0.5 cm profile"],
          zh: ["开口可调节戒圈结构", "银色电镀雕塑感表面", "四个型号均采用 2.2 × 0.5 cm 规格"],
          de: ["Verstellbare offene Ringkonstruktion", "Galvanisierte, silberfarbene skulpturale Oberfläche", "Vier Modellcodes im gleichen Format von 2,2 × 0,5 cm"],
          it: ["Struttura ad anello aperto regolabile", "Superficie scultorea color argento con finitura galvanica", "Quattro codici modello nello stesso formato 2,2 × 0,5 cm"],
          fr: ["Construction ouverte et réglable", "Surface sculpturale argentée avec finition électroplaquée", "Quatre références au même format de 2,2 × 0,5 cm"],
          ja: ["調整可能なオープンリング構造", "電気メッキによるシルバートーンの彫刻的な表面", "4モデル共通の2.2 × 0.5 cm仕様"],
          es: ["Construcción de anillo abierto ajustable", "Superficie escultórica plateada con acabado galvanizado", "Cuatro códigos de modelo con el mismo formato de 2,2 × 0,5 cm"],
          ru: ["Регулируемая разомкнутая конструкция", "Скульптурная серебристая поверхность с гальваническим покрытием", "Четыре модели одного формата 2,2 × 0,5 см"],
          ko: ["조절 가능한 오픈 링 구조", "전기 도금 실버 톤의 조형적 표면", "네 가지 모델 모두 2.2 × 0.5 cm 규격"],
        },
      },
      notes: {
        condition: {
          en: "Condition A with a clean electroplated surface and intact adjustable opening.", zh: "A 级状态，电镀表面干净，活口调节结构完整。", de: "Zustand A mit sauberer galvanisierter Oberfläche und intakter verstellbarer Öffnung.", it: "Condizione A, con superficie galvanica pulita e apertura regolabile integra.", fr: "État A, avec une surface électroplaquée propre et une ouverture réglable intacte.",
          ja: "電気メッキ表面がきれいで、調整部分も良好なコンディションAです。", es: "Estado A, con superficie galvanizada limpia y apertura ajustable intacta.", ru: "Состояние A: чистая гальваническая поверхность и исправная регулируемая конструкция.", ko: "전기 도금 표면이 깨끗하고 조절 구조가 온전한 컨디션 A입니다.",
        },
        source: {
          en: "Selected from the Shengshi design archive and presented as a four-model jewelry edit.", zh: "选自盛世设计档案，并以四型号首饰编辑形式呈现。", de: "Aus dem Shengshi-Designarchiv ausgewählt und als Schmuck-Edit mit vier Modellen präsentiert.", it: "Selezionato dall'archivio design Shengshi e presentato come edit di gioielli in quattro modelli.", fr: "Sélectionnée dans l'archive design Shengshi et présentée comme une édition bijoux en quatre modèles.",
          ja: "SHENGSHIデザインアーカイブから選定し、4モデルのジュエリーエディットとして紹介します。", es: "Seleccionado del archivo de diseño Shengshi y presentado como una edición de joyería de cuatro modelos.", ru: "Выбрано из дизайн-архива Shengshi и представлено как ювелирная подборка из четырех моделей.", ko: "SHENGSHI 디자인 아카이브에서 선별해 네 가지 모델의 주얼리 에디트로 소개합니다.",
        },
      },
      specifications: [
        { label: { en: "Ring type", zh: "种类", de: "Ringtyp", it: "Tipo", fr: "Type", ja: "種類", es: "Tipo", ru: "Тип кольца", ko: "링 타입" }, value: { en: "Open, adjustable", zh: "活口可调", de: "Offen, verstellbar", it: "Aperto, regolabile", fr: "Ouverte, réglable", ja: "オープン・調整可能", es: "Abierto y ajustable", ru: "Разомкнутое, регулируемое", ko: "오픈형, 조절 가능" } },
        { label: { en: "Finish", zh: "处理工艺", de: "Verarbeitung", it: "Finitura", fr: "Finition", ja: "加工", es: "Acabado", ru: "Обработка", ko: "가공" }, value: { en: "Electroplated", zh: "电镀", de: "Galvanisiert", it: "Galvanica", fr: "Électroplaquée", ja: "電気メッキ", es: "Galvanizado", ru: "Гальваническое покрытие", ko: "전기 도금" } },
        { label: { en: "Form", zh: "造型", de: "Form", it: "Forma", fr: "Forme", ja: "フォルム", es: "Forma", ru: "Форма", ko: "형태" }, value: { en: "Geometric", zh: "几何形", de: "Geometrisch", it: "Geometrica", fr: "Géométrique", ja: "幾何学的", es: "Geométrica", ru: "Геометрическая", ko: "기하학적" } },
        { label: { en: "Style", zh: "风格", de: "Stil", it: "Stile", fr: "Style", ja: "スタイル", es: "Estilo", ru: "Стиль", ko: "스타일" }, value: { en: "Cool minimal", zh: "冷淡风", de: "Kühl-minimalistisch", it: "Minimalismo freddo", fr: "Minimalisme froid", ja: "クールミニマル", es: "Minimalismo frío", ru: "Холодный минимализм", ko: "쿨 미니멀" } },
        { label: { en: "Designed for", zh: "适用人群", de: "Zielgruppe", it: "Destinazione", fr: "Public", ja: "対象", es: "Dirigido a", ru: "Для кого", ko: "대상" }, value: { en: "Women", zh: "女士", de: "Damen", it: "Donna", fr: "Femme", ja: "レディース", es: "Mujer", ru: "Женщины", ko: "여성" } },
        { label: { en: "Motif", zh: "流行元素", de: "Motiv", it: "Motivo", fr: "Motif", ja: "モチーフ", es: "Motivo", ru: "Мотив", ko: "모티프" }, value: { en: "Sun", zh: "太阳", de: "Sonne", it: "Sole", fr: "Soleil", ja: "太陽", es: "Sol", ru: "Солнце", ko: "태양" } },
        { label: { en: "Design element", zh: "元素分类", de: "Designelement", it: "Elemento", fr: "Élément", ja: "デザイン要素", es: "Elemento", ru: "Элемент", ko: "디자인 요소" }, value: { en: "Organic", zh: "自然", de: "Organisch", it: "Organico", fr: "Organique", ja: "オーガニック", es: "Orgánico", ru: "Органический", ko: "오가닉" } },
        { label: { en: "Dimensions", zh: "尺寸", de: "Maße", it: "Dimensioni", fr: "Dimensions", ja: "寸法", es: "Dimensiones", ru: "Размеры", ko: "크기" }, value: { en: "2.2 × 0.5 cm", zh: "长 2.2 × 宽 0.5 cm", de: "2,2 × 0,5 cm", it: "2,2 × 0,5 cm", fr: "2,2 × 0,5 cm", ja: "2.2 × 0.5 cm", es: "2,2 × 0,5 cm", ru: "2,2 × 0,5 см", ko: "2.2 × 0.5 cm" } },
      ],
      searchTokens: ["shengshi sculpted ring", "shengshi ring", "ring", "jewelry", "open ring", "首饰", "戒指", "活口戒指", "schmuck", "gioielli", "bijoux", "ジュエリー", "joyería", "украшения", "주얼리"],
    },
  ],
};

// Product names stay as catalog identifiers; all descriptive commerce copy is localized.
const catalogLocalePacks = {
  de: {
    common: {
      leadTime: { ready: "2-4 Werktage", made: "5-8 Werktage" },
      availability: { in_stock: "Auf Lager", low_stock: "Nur noch wenige verfügbar", sourcing: "Auf Anfrage beschaffbar" },
      color: "Schwarz",
      categories: { outerwear: "Outerwear", set: "Set", layering: "Layering", eyewear: "Brillen", tshirt: "T-Shirt", shoes: "Schuhe" },
      eras: { "Early 2010s": "Frühe 2010er", "Late 2000s": "Späte 2000er", "2010s": "2010er" },
    },
    products: {
      "archive-leather-trench": {
        designer: "Archiv-Auswahl", origin: "Italien", caption: "Italienisches Archiv / Zustand A / sofort versandbereit",
        intro: "Ein luxuriöser Secondhand-Mantel mit markanter Silhouette. Sein Reiz liegt nicht darin, neu zu sein, sondern in seiner weiterhin überzeugenden Struktur, Oberfläche und Sammlerqualität.",
        features: ["Strukturierte Schulterlinie mit lackierter Oberfläche", "Archiv-Designer-Piece mit sichtbarer Konstruktion", "Ausgewählt nach Silhouette, Zustand und langfristigem Tragewert"],
        condition: "Secondhand-Zustand A mit leichten Lagerspuren und ohne erkennbare strukturelle Schäden.",
        source: "Aus einer privaten Archiv-Auswahl kuratiert und als Einzelstück neu vorgestellt.",
      },
      "structured-wool-coat": {
        designer: "Designerarchiv", origin: "Private Resale-Auswahl", caption: "Designer-Secondhand / Zustand A- / Einzelstück",
        intro: "Ein richtungsweisender Wollmantel, ausgewählt für seine Linie, sein Materialgewicht und seine ruhige Archiv-Präsenz.",
        features: ["Präzise Schulterproportion und klare Wolloberfläche", "Designer-Secondhand als verfügbares Einzelstück", "Ausgewählt für langfristigen Tragewert und Archiv-Relevanz"],
        condition: "Zustand A- mit leichten Gebrauchsspuren und gut erhaltener Struktur.",
        source: "Aus einer privaten Resale-Auswahl mit Fokus auf monochrome Outerwear.",
      },
      "black-studio-set": {
        designer: "Archiv-Set", origin: "Private Archivgarderobe", caption: "Zweiteiliges Archiv-Set / Zustand B+ / geringer Bestand",
        intro: "Ein zweiteiliges Archiv-Set, das seinen editoriellen Charakter bewahrt und sich zugleich mühelos in den Alltag integrieren lässt.",
        features: ["Zweiteiliges Set mit abgestimmten Proportionen", "Archiv-Auswahl mit vielseitigem, zurückhaltendem Styling", "Seltenes Secondhand-Piece mit Sammlerqualität"],
        condition: "Zustand B+ mit sichtbaren, aber kontrollierten Gebrauchsspuren.",
        source: "Aus einer privaten Archivgarderobe mit richtungsweisendem schwarzem Tailoring.",
      },
      "after-dark-shell-top": {
        designer: "Layering-Archiv", origin: "Kuratiertes Resale-Netzwerk", caption: "Layering-Piece / Zustand A / Einzelstück",
        intro: "Ein schlankes Layering-Piece, ausgewählt für seine reduzierte Oberfläche und die mühelose Erweiterung einer monochromen Garderobe.",
        features: ["Schlanke Proportion für Layering unter Mänteln", "Archiv-Stimmung ohne visuelle Unruhe", "Ideal für kühlere monochrome Looks"],
        condition: "Zustand A mit minimalen Gebrauchsspuren und sauberer Oberfläche.",
        source: "Über ein kleines, kuratiertes Archiv-Resale-Netzwerk beschafft.",
      },
      "noir-frame-02": {
        designer: "Brillenarchiv", origin: "Designer-Accessoire-Archiv", caption: "Archiv-Sonnenbrille / Zustand A / sofort versandbereit",
        intro: "Eine Archiv-Sonnenbrille, ausgewählt für ihre markante Geometrie und die klare schwarze Oberfläche.",
        features: ["Präzise Rahmenlinie mit dunkler Hochglanzoberfläche", "Tragbares Archiv-Brillenstück", "Unisex-Accessoire für kühlere monochrome Stylings"],
        condition: "Zustand A mit leichten Handhabungsspuren und klaren Gläsern.",
        source: "Aus einem Designer-Accessoire-Archiv und als Einzelstück angeboten.",
      },
      "studio-essential-tee": {
        designer: "Designer-Basic", origin: "Monochromes Basics-Archiv", caption: "Designer-Basic / Zustand A- / Einzelstück",
        intro: "Ein schwarzes Designer-T-Shirt, ausgewählt wegen seiner Proportion und Stoffqualität statt wegen sichtbarer Logos.",
        features: ["Weicher Jersey mit Gewicht und ausgewogenem Ausschnitt", "Zurückhaltendes Designer-Basic mit Archiv-Charakter", "Ein vielseitiger Einstieg in monochrome Alltagslooks"],
        condition: "Zustand A- mit leichter, tragebedingter Weichheit und ohne größere Mängel.",
        source: "Aus einem Archiv für monochrome Designer-Basics ausgewählt.",
      },
      "archive-square-heel": {
        designer: "Schuharchiv", origin: "Spezialisierte Schuhquelle", caption: "Lederabsatz / Zustand B+ / Beschaffung auf Anfrage",
        intro: "Ein eckiger Lederabsatz, ausgewählt für sein klares Profil und seine stärkere Archiv-Haltung.",
        features: ["Eckige Front mit ausgewogener Absatzproportion", "Archiv-Schuh für präzise schwarze Stylings", "Über spezialisierte Archiv-Kanäle auf Anfrage beschafft"],
        condition: "Zustand B+ mit leichten Laufsohlenspuren und intakter Oberstruktur.",
        source: "Auf Anfrage über eine spezialisierte Quelle für Archiv-Schuhe beschafft.",
      },
    },
  },
  it: {
    common: {
      leadTime: { ready: "2-4 giorni lavorativi", made: "5-8 giorni lavorativi" },
      availability: { in_stock: "Disponibile", low_stock: "Pochi pezzi", sourcing: "Disponibile su richiesta" },
      color: "Nero",
      categories: { outerwear: "Capispalla", set: "Completo", layering: "Layering", eyewear: "Occhiali", tshirt: "T-shirt", shoes: "Scarpe" },
      eras: { "Early 2010s": "Primi anni 2010", "Late 2000s": "Fine anni 2000", "2010s": "Anni 2010" },
    },
    products: {
      "archive-leather-trench": {
        designer: "Selezione d'archivio", origin: "Italia", caption: "Archivio italiano / condizione A / pronta consegna",
        intro: "Un cappotto luxury secondhand dalla silhouette decisa. Il suo valore non sta nell'essere nuovo, ma nella struttura, nella finitura e nel carattere da collezione ancora intatti.",
        features: ["Spalla strutturata con finitura laccata", "Capo designer d'archivio dalla costruzione visibile", "Selezionato per silhouette, condizione e valore d'uso nel tempo"],
        condition: "Condizione secondhand A, con lievi segni di conservazione e nessun danno strutturale evidente.",
        source: "Selezionato da un archivio privato e riproposto come pezzo unico.",
      },
      "structured-wool-coat": {
        designer: "Archivio designer", origin: "Selezione resale privata", caption: "Designer secondhand / condizione A- / pezzo unico",
        intro: "Un cappotto in lana direzionale, scelto per la linea, il peso del materiale e la sua presenza d'archivio discreta.",
        features: ["Proporzione della spalla più netta e superficie in lana pulita", "Capo designer secondhand disponibile in un solo esemplare", "Scelto per durata e rilevanza d'archivio"],
        condition: "Condizione A- con lievi segni d'uso e struttura ben conservata.",
        source: "Selezionato da un edit resale privato dedicato ai capispalla monocromatici.",
      },
      "black-studio-set": {
        designer: "Completo d'archivio", origin: "Guardaroba d'archivio privato", caption: "Completo d'archivio due pezzi / condizione B+ / pochi pezzi",
        intro: "Un completo d'archivio in due pezzi che mantiene il tono editoriale e resta facile da reinserire nel guardaroba quotidiano.",
        features: ["Completo due pezzi dalle proporzioni coordinate", "Selezione d'archivio versatile e discreta", "Capo secondhand raro dal fascino collezionistico"],
        condition: "Condizione B+ con segni d'uso visibili ma contenuti.",
        source: "Riproposto da un guardaroba d'archivio privato noto per il tailoring nero direzionale.",
      },
      "after-dark-shell-top": {
        designer: "Archivio layering", origin: "Rete resale selezionata", caption: "Capo layering / condizione A / pezzo unico",
        intro: "Un capo layering essenziale, scelto per la superficie misurata e la capacità di ampliare con facilità un guardaroba monocromatico.",
        features: ["Proporzione affusolata per il layering sotto il cappotto", "Atmosfera d'archivio senza rumore visivo", "Ideale per look monocromatici dai toni freddi"],
        condition: "Condizione A con usura minima e superficie pulita.",
        source: "Reperito attraverso una rete resale d'archivio a basso volume.",
      },
      "noir-frame-02": {
        designer: "Archivio eyewear", origin: "Archivio accessori designer", caption: "Occhiali da sole d'archivio / condizione A / pronta consegna",
        intro: "Una montatura da sole d'archivio scelta per la geometria più decisa e la finitura nera pulita.",
        features: ["Linea netta con superficie scura lucida", "Occhiale d'archivio in condizione indossabile", "Accessorio taglia unica per styling monocromatici più freddi"],
        condition: "Condizione A con lievi segni di manipolazione e lenti nitide.",
        source: "Proveniente da un archivio di accessori designer e proposto come pezzo unico.",
      },
      "studio-essential-tee": {
        designer: "Basic designer", origin: "Archivio basic monocromatici", caption: "Basic designer / condizione A- / pezzo unico",
        intro: "Una T-shirt nera designer scelta per le proporzioni e la mano del tessuto, non per il logo.",
        features: ["Jersey morbido e consistente con scollo equilibrato", "Basic designer discreto dal fascino d'archivio", "Ingresso versatile nel guardaroba monocromatico quotidiano"],
        condition: "Condizione A- con lieve morbidezza da utilizzo e nessun difetto importante.",
        source: "Selezionata da un archivio di basic designer monocromatici.",
      },
      "archive-square-heel": {
        designer: "Archivio calzature", origin: "Fonte specializzata in calzature", caption: "Tacco in pelle / condizione B+ / reperibile su richiesta",
        intro: "Una scarpa in pelle con tacco squadrato, scelta per il profilo pulito e l'attitudine d'archivio più forte.",
        features: ["Punta squadrata e proporzione stabile del tacco", "Calzatura d'archivio per styling neri più netti", "Reperita su richiesta tramite canali d'archivio specializzati"],
        condition: "Condizione B+ con lieve usura della suola e tomaia integra.",
        source: "Reperita su richiesta tramite una fonte specializzata in calzature d'archivio.",
      },
    },
  },
  fr: {
    common: {
      leadTime: { ready: "2 à 4 jours ouvrés", made: "5 à 8 jours ouvrés" },
      availability: { in_stock: "En stock", low_stock: "Stock limité", sourcing: "Disponible sur demande" },
      color: "Noir",
      categories: { outerwear: "Manteaux", set: "Ensemble", layering: "Superposition", eyewear: "Lunettes", tshirt: "T-shirt", shoes: "Chaussures" },
      eras: { "Early 2010s": "Début des années 2010", "Late 2000s": "Fin des années 2000", "2010s": "Années 2010" },
    },
    products: {
      "archive-leather-trench": {
        designer: "Sélection d'archives", origin: "Italie", caption: "Archive italienne / état A / expédition immédiate",
        intro: "Un manteau luxury secondhand à la silhouette affirmée. Son intérêt ne vient pas de sa nouveauté, mais de sa structure, de sa finition et de sa valeur de collection toujours intactes.",
        features: ["Ligne d'épaule structurée à finition laquée", "Pièce designer d'archive à la construction visible", "Sélectionnée pour sa silhouette, son état et sa valeur d'usage durable"],
        condition: "État secondhand A, avec de légères traces de stockage et aucun dommage structurel visible.",
        source: "Sélectionnée dans une archive privée et réintroduite comme pièce unique.",
      },
      "structured-wool-coat": {
        designer: "Archive de créateur", origin: "Sélection resale privée", caption: "Designer secondhand / état A- / pièce unique",
        intro: "Un manteau en laine directionnel, choisi pour sa ligne, le poids de sa matière et sa présence d'archive discrète.",
        features: ["Épaule plus nette et surface de laine épurée", "Pièce designer secondhand disponible en un seul exemplaire", "Choisie pour sa durabilité et sa pertinence d'archive"],
        condition: "État A- avec de légères traces d'usage et une structure bien conservée.",
        source: "Issu d'une sélection resale privée centrée sur les manteaux monochromes.",
      },
      "black-studio-set": {
        designer: "Ensemble d'archive", origin: "Garde-robe d'archive privée", caption: "Ensemble deux pièces d'archive / état B+ / stock limité",
        intro: "Un ensemble d'archive deux pièces qui conserve son ton éditorial tout en restant facile à réintégrer au quotidien.",
        features: ["Ensemble deux pièces aux proportions coordonnées", "Sélection d'archive discrète et polyvalente", "Pièce secondhand rare à l'intérêt collectionnable"],
        condition: "État B+ avec des traces d'usage visibles mais maîtrisées.",
        source: "Réintroduit depuis une garde-robe d'archive privée reconnue pour son tailoring noir directionnel.",
      },
      "after-dark-shell-top": {
        designer: "Archive de superposition", origin: "Réseau resale sélectionné", caption: "Pièce de superposition / état A / pièce unique",
        intro: "Une pièce de superposition épurée, choisie pour sa surface retenue et sa capacité à prolonger naturellement une garde-robe monochrome.",
        features: ["Proportion fine pour la superposition sous un manteau", "Esprit d'archive sans surcharge visuelle", "Idéale pour composer des silhouettes monochromes froides"],
        condition: "État A avec une usure minimale et une surface propre.",
        source: "Trouvée via un réseau resale d'archive à faible volume.",
      },
      "noir-frame-02": {
        designer: "Archive de lunettes", origin: "Archive d'accessoires de créateurs", caption: "Lunettes de soleil d'archive / état A / expédition immédiate",
        intro: "Une monture solaire d'archive choisie pour sa géométrie affirmée et sa finition noire épurée.",
        features: ["Ligne de monture précise à la surface sombre brillante", "Pièce de lunetterie d'archive prête à porter", "Accessoire taille unique pour des styles monochromes froids"],
        condition: "État A avec de légères marques de manipulation et des verres nets.",
        source: "Issue d'une archive d'accessoires de créateurs et proposée comme pièce unique.",
      },
      "studio-essential-tee": {
        designer: "Basique de créateur", origin: "Archive de basiques monochromes", caption: "Basique de créateur / état A- / pièce unique",
        intro: "Un T-shirt noir de créateur choisi pour ses proportions et le toucher de son tissu plutôt que pour son logo.",
        features: ["Jersey doux et dense avec une encolure équilibrée", "Basique de créateur discret à l'allure d'archive", "Une entrée polyvalente dans le vestiaire monochrome quotidien"],
        condition: "État A- avec un léger assouplissement dû au porté et aucun défaut majeur.",
        source: "Sélectionné dans une archive de basiques de créateurs monochromes.",
      },
      "archive-square-heel": {
        designer: "Archive de chaussures", origin: "Source spécialisée en chaussures", caption: "Talon en cuir / état B+ / sourcing sur demande",
        intro: "Un talon carré en cuir choisi pour son profil épuré et son attitude d'archive affirmée.",
        features: ["Bout carré et proportion de talon stable", "Chaussure d'archive pour des silhouettes noires plus nettes", "Sourcée sur demande via des circuits d'archive spécialisés"],
        condition: "État B+ avec une légère usure de la semelle et une tige intacte.",
        source: "Sourcée sur demande auprès d'une source spécialisée en chaussures d'archive.",
      },
    },
  },
  ja: {
    common: {
      leadTime: { ready: "2〜4営業日", made: "5〜8営業日" },
      availability: { in_stock: "在庫あり", low_stock: "残りわずか", sourcing: "お取り寄せ可能" },
      color: "ブラック",
      categories: { outerwear: "アウター", set: "セット", layering: "レイヤリング", eyewear: "アイウェア", tshirt: "Tシャツ", shoes: "シューズ" },
      eras: { "Early 2010s": "2010年代初頭", "Late 2000s": "2000年代後半", "2010s": "2010年代" },
    },
    products: {
      "archive-leather-trench": {
        designer: "アーカイブセレクション", origin: "イタリア", caption: "イタリアンアーカイブ / コンディションA / 即発送",
        intro: "強いシルエットを持つラグジュアリーセカンドハンドコート。魅力は新品であることではなく、構造、仕上げ、収集価値が今も保たれている点にあります。",
        features: ["ラッカー仕上げの構築的なショルダーライン", "服の構造が見えるデザイナーアーカイブピース", "シルエット、状態、長期的な着用価値を基準に選定"],
        condition: "軽い保管跡はありますが、明らかな構造的損傷のないコンディションAです。",
        source: "プライベートアーカイブから選定し、一点物として再紹介しています。",
      },
      "structured-wool-coat": {
        designer: "デザイナーアーカイブ", origin: "プライベートリセールセレクション", caption: "デザイナーセカンドハンド / コンディションA- / 一点物",
        intro: "ライン、素材の重み、静かなアーカイブ感を基準に選んだ、方向性のあるウールコートです。",
        features: ["シャープな肩の比率とクリーンなウール表面", "一点のみ入荷したデザイナーセカンドハンド", "長期的な着用価値とアーカイブ性を基準に選定"],
        condition: "軽い使用感はありますが、構造が良好に保たれたコンディションA-です。",
        source: "モノクロームアウターに焦点を当てたプライベートリセールから選定しました。",
      },
      "black-studio-set": {
        designer: "アーカイブセット", origin: "プライベートアーカイブワードローブ", caption: "2ピースアーカイブセット / コンディションB+ / 残りわずか",
        intro: "エディトリアルな空気を保ちながら、日常のスタイリングにも戻しやすい2ピースのアーカイブセットです。",
        features: ["バランスの取れた比率の2ピースセット", "静かな汎用性を備えたアーカイブセレクション", "収集価値を持つ希少なセカンドハンドピース"],
        condition: "目に見えるものの抑えられた着用跡があるコンディションB+です。",
        source: "方向性のあるブラックテーラリングで知られるプライベートアーカイブから再紹介しています。",
      },
      "after-dark-shell-top": {
        designer: "レイヤリングアーカイブ", origin: "少量流通のリセールネットワーク", caption: "レイヤリングピース / コンディションA / 一点物",
        intro: "抑制された表面と、モノクロームのワードローブを自然に広げる使いやすさで選んだレイヤリングピースです。",
        features: ["コートの内側に適した細身のレイヤリング比率", "視覚的なノイズを抑えたアーカイブムード", "冷たいモノクロームルックの構築に最適"],
        condition: "使用感がごく少なく、表面がきれいなコンディションAです。",
        source: "少量流通のアーカイブリセールネットワークを通じて調達しました。",
      },
      "noir-frame-02": {
        designer: "アイウェアアーカイブ", origin: "デザイナーアクセサリーアーカイブ", caption: "アーカイブサングラス / コンディションA / 即発送",
        intro: "強い幾何学性とクリーンなブラック仕上げを基準に選んだアーカイブサングラスです。",
        features: ["ダークな光沢表面を持つシャープなフレームライン", "日常着用できる状態のアーカイブアイウェア", "冷たいモノクロームスタイルのためのワンサイズアクセサリー"],
        condition: "わずかな取り扱い跡はありますが、レンズがクリアなコンディションAです。",
        source: "デザイナーアクセサリーアーカイブから一点物として紹介しています。",
      },
      "studio-essential-tee": {
        designer: "デザイナーベーシック", origin: "モノクロームベーシックアーカイブ", caption: "デザイナーベーシック / コンディションA- / 一点物",
        intro: "ロゴではなく、プロポーションと生地の手触りで選んだブラックのデザイナーTシャツです。",
        features: ["程よい重みのソフトジャージーと整ったネックライン", "静かなアーカイブ感を持つデザイナーベーシック", "日常のモノクロームスタイルへの取り入れやすい一着"],
        condition: "着用によるわずかな柔らかさはありますが、大きな欠点のないコンディションA-です。",
        source: "モノクロームのデザイナーベーシックアーカイブから選定しました。",
      },
      "archive-square-heel": {
        designer: "フットウェアアーカイブ", origin: "専門フットウェアソース", caption: "レザーヒール / コンディションB+ / お取り寄せ",
        intro: "クリーンな輪郭と強いアーカイブ感を基準に選んだ、スクエアトゥのレザーヒールです。",
        features: ["安定したヒール比率を持つスクエアなフロント", "シャープなブラックスタイルのためのアーカイブシューズ", "専門アーカイブチャネルを通じてお取り寄せ"],
        condition: "ソールに軽い摩耗はありますが、アッパー構造が保たれたコンディションB+です。",
        source: "専門のアーカイブフットウェアソースを通じてお取り寄せします。",
      },
    },
  },
  es: {
    common: {
      leadTime: { ready: "2-4 días laborables", made: "5-8 días laborables" },
      availability: { in_stock: "En stock", low_stock: "Últimas unidades", sourcing: "Disponible bajo pedido" },
      color: "Negro",
      categories: { outerwear: "Abrigos", set: "Conjunto", layering: "Capas", eyewear: "Gafas", tshirt: "Camiseta", shoes: "Calzado" },
      eras: { "Early 2010s": "Principios de 2010", "Late 2000s": "Finales de los 2000", "2010s": "Década de 2010" },
    },
    products: {
      "archive-leather-trench": {
        designer: "Selección de archivo", origin: "Italia", caption: "Archivo italiano / estado A / envío inmediato",
        intro: "Un abrigo luxury secondhand de silueta contundente. Su atractivo no está en ser nuevo, sino en que su estructura, acabado y valor de colección siguen intactos.",
        features: ["Línea de hombros estructurada con acabado lacado", "Pieza de diseñador de archivo con construcción visible", "Seleccionada por su silueta, estado y valor de uso a largo plazo"],
        condition: "Estado secondhand A, con leves marcas de almacenamiento y sin daños estructurales visibles.",
        source: "Seleccionada de un archivo privado y presentada de nuevo como pieza única.",
      },
      "structured-wool-coat": {
        designer: "Archivo de diseñador", origin: "Selección resale privada", caption: "Diseñador secondhand / estado A- / pieza única",
        intro: "Un abrigo de lana direccional elegido por su línea, el peso del material y su presencia de archivo silenciosa.",
        features: ["Proporción de hombros definida y superficie de lana limpia", "Pieza de diseñador secondhand disponible en una sola unidad", "Elegida por su durabilidad y relevancia de archivo"],
        condition: "Estado A- con leves señales de uso y estructura bien conservada.",
        source: "Seleccionada de una edición resale privada centrada en abrigos monocromos.",
      },
      "black-studio-set": {
        designer: "Conjunto de archivo", origin: "Armario de archivo privado", caption: "Conjunto de archivo de dos piezas / estado B+ / últimas unidades",
        intro: "Un conjunto de archivo de dos piezas que conserva su tono editorial y sigue siendo fácil de incorporar al uso diario.",
        features: ["Conjunto de dos piezas con proporciones coordinadas", "Selección de archivo versátil y contenida", "Pieza secondhand escasa con atractivo de colección"],
        condition: "Estado B+ con señales de uso visibles pero controladas.",
        source: "Recuperada de un armario de archivo privado reconocido por su sastrería negra direccional.",
      },
      "after-dark-shell-top": {
        designer: "Archivo de capas", origin: "Red resale seleccionada", caption: "Pieza para capas / estado A / pieza única",
        intro: "Una pieza ligera para capas, elegida por su superficie contenida y por ampliar con facilidad un armario monocromo.",
        features: ["Proporción estilizada para llevar bajo abrigos", "Actitud de archivo sin ruido visual", "Ideal para construir looks monocromos de tonos fríos"],
        condition: "Estado A con un uso mínimo y acabado de superficie limpio.",
        source: "Conseguida a través de una red resale de archivo de bajo volumen.",
      },
      "noir-frame-02": {
        designer: "Archivo de gafas", origin: "Archivo de accesorios de diseñador", caption: "Gafas de sol de archivo / estado A / envío inmediato",
        intro: "Una montura de sol de archivo elegida por su geometría contundente y su acabado negro limpio.",
        features: ["Línea de montura definida con superficie oscura brillante", "Pieza de gafas de archivo en estado de uso", "Accesorio de talla única para estilismos monocromos fríos"],
        condition: "Estado A con leves marcas de manipulación y lentes nítidas.",
        source: "Extraída de un archivo de accesorios de diseñador y ofrecida como pieza única.",
      },
      "studio-essential-tee": {
        designer: "Básico de diseñador", origin: "Archivo de básicos monocromos", caption: "Básico de diseñador / estado A- / pieza única",
        intro: "Una camiseta negra de diseñador elegida por su proporción y el tacto del tejido, no por la marca.",
        features: ["Jersey suave con peso y cuello equilibrado", "Básico de diseñador discreto con atractivo de archivo", "Una entrada versátil al vestuario monocromo diario"],
        condition: "Estado A- con un ligero suavizado por el uso y sin defectos importantes.",
        source: "Seleccionada de un archivo de básicos de diseñador monocromos.",
      },
      "archive-square-heel": {
        designer: "Archivo de calzado", origin: "Fuente especializada en calzado", caption: "Tacón de piel / estado B+ / sourcing bajo pedido",
        intro: "Un tacón cuadrado de piel elegido por su perfil limpio y una actitud de archivo más contundente.",
        features: ["Frente cuadrado con proporción estable del tacón", "Calzado de archivo para estilismos negros más definidos", "Conseguido bajo pedido mediante canales de archivo especializados"],
        condition: "Estado B+ con ligero desgaste de la suela y estructura superior intacta.",
        source: "Solicitado a través de una fuente especializada en calzado de archivo.",
      },
    },
  },
  ru: {
    common: {
      leadTime: { ready: "2-4 рабочих дня", made: "5-8 рабочих дней" },
      availability: { in_stock: "В наличии", low_stock: "Осталось мало", sourcing: "Доступно под заказ" },
      color: "Черный",
      categories: { outerwear: "Верхняя одежда", set: "Комплект", layering: "Многослойность", eyewear: "Очки", tshirt: "Футболка", shoes: "Обувь" },
      eras: { "Early 2010s": "Начало 2010-х", "Late 2000s": "Конец 2000-х", "2010s": "2010-е" },
    },
    products: {
      "archive-leather-trench": {
        designer: "Архивная подборка", origin: "Италия", caption: "Итальянский архив / состояние A / готово к отправке",
        intro: "Люксовое secondhand-пальто с выразительным силуэтом. Его ценность не в новизне, а в сохранившихся конструкции, отделке и коллекционном качестве.",
        features: ["Структурированная линия плеч с лаковым покрытием", "Архивная дизайнерская вещь с видимой конструкцией", "Отобрано по силуэту, состоянию и долгосрочной ценности носки"],
        condition: "Secondhand-состояние A: легкие следы хранения без заметных структурных повреждений.",
        source: "Отобрано из частной архивной коллекции и представлено как уникальный экземпляр.",
      },
      "structured-wool-coat": {
        designer: "Дизайнерский архив", origin: "Частная resale-подборка", caption: "Дизайнерский secondhand / состояние A- / один экземпляр",
        intro: "Выразительное шерстяное пальто, выбранное за линию, вес материала и сдержанное архивное присутствие.",
        features: ["Четкая пропорция плеч и чистая шерстяная поверхность", "Дизайнерская secondhand-вещь в единственном экземпляре", "Отобрано за долговечность и архивную актуальность"],
        condition: "Состояние A- с легкими следами носки и хорошо сохраненной конструкцией.",
        source: "Из частной resale-подборки, посвященной монохромной верхней одежде.",
      },
      "black-studio-set": {
        designer: "Архивный комплект", origin: "Частный архивный гардероб", caption: "Архивный комплект из двух вещей / состояние B+ / осталось мало",
        intro: "Архивный комплект из двух вещей, который сохраняет редакционный характер и легко возвращается в повседневный гардероб.",
        features: ["Комплект из двух вещей с согласованными пропорциями", "Сдержанная и универсальная архивная подборка", "Редкая secondhand-вещь с коллекционной ценностью"],
        condition: "Состояние B+ с заметными, но аккуратными следами предыдущей носки.",
        source: "Возвращено из частного архивного гардероба, известного выразительным черным тейлорингом.",
      },
      "after-dark-shell-top": {
        designer: "Архив многослойности", origin: "Кураторская resale-сеть", caption: "Вещь для многослойности / состояние A / один экземпляр",
        intro: "Лаконичный слой, выбранный за сдержанную поверхность и способность естественно расширить монохромный гардероб.",
        features: ["Узкая пропорция для стилизации под пальто", "Архивное настроение без визуального шума", "Подходит для холодных монохромных образов"],
        condition: "Состояние A с минимальными следами носки и чистой поверхностью.",
        source: "Найдено через небольшую кураторскую сеть архивного ресейла.",
      },
      "noir-frame-02": {
        designer: "Архив оптики", origin: "Архив дизайнерских аксессуаров", caption: "Архивные солнцезащитные очки / состояние A / готово к отправке",
        intro: "Архивная оправа, выбранная за жесткую геометрию и чистую черную отделку.",
        features: ["Четкая линия оправы с темной глянцевой поверхностью", "Архивные очки в пригодном для носки состоянии", "Универсальный аксессуар для холодных монохромных образов"],
        condition: "Состояние A с легкими следами использования и чистыми линзами.",
        source: "Из архива дизайнерских аксессуаров, представлено в единственном экземпляре.",
      },
      "studio-essential-tee": {
        designer: "Дизайнерская база", origin: "Архив монохромной базы", caption: "Дизайнерская база / состояние A- / один экземпляр",
        intro: "Черная дизайнерская футболка, выбранная за пропорцию и тактильность ткани, а не за заметный брендинг.",
        features: ["Мягкий плотный трикотаж и сбалансированный вырез", "Сдержанная дизайнерская база с архивным характером", "Универсальная основа для ежедневного монохромного гардероба"],
        condition: "Состояние A- с легким смягчением от носки и без серьезных дефектов.",
        source: "Выбрано из архива монохромных дизайнерских базовых вещей.",
      },
      "archive-square-heel": {
        designer: "Архив обуви", origin: "Специализированный источник обуви", caption: "Кожаный каблук / состояние B+ / поиск под заказ",
        intro: "Кожаная обувь с квадратным мысом, выбранная за чистый профиль и более сильный архивный характер.",
        features: ["Квадратный мыс и устойчивая пропорция каблука", "Архивная обувь для более четких черных образов", "Поиск под заказ через специализированные архивные каналы"],
        condition: "Состояние B+ с легким износом подошвы и целой конструкцией верха.",
        source: "Запрашивается через специализированный источник архивной обуви.",
      },
    },
  },
  ko: {
    common: {
      leadTime: { ready: "영업일 기준 2-4일", made: "영업일 기준 5-8일" },
      availability: { in_stock: "재고 있음", low_stock: "재고 소량", sourcing: "요청 시 소싱 가능" },
      color: "블랙",
      categories: { outerwear: "아우터", set: "세트", layering: "레이어링", eyewear: "아이웨어", tshirt: "티셔츠", shoes: "슈즈" },
      eras: { "Early 2010s": "2010년대 초반", "Late 2000s": "2000년대 후반", "2010s": "2010년대" },
    },
    products: {
      "archive-leather-trench": {
        designer: "아카이브 셀렉션", origin: "이탈리아", caption: "이탈리아 아카이브 / 컨디션 A / 즉시 배송",
        intro: "강한 실루엣을 지닌 럭셔리 세컨핸드 코트입니다. 새것이라는 점보다 구조와 마감, 컬렉션 가치가 여전히 유지된다는 점이 중요합니다.",
        features: ["래커 마감의 구조적인 숄더 라인", "의복 구조가 드러나는 디자이너 아카이브 피스", "실루엣, 컨디션, 장기적인 착용 가치를 기준으로 선별"],
        condition: "가벼운 보관 흔적은 있지만 뚜렷한 구조 손상이 없는 컨디션 A입니다.",
        source: "프라이빗 아카이브에서 큐레이션해 단 하나의 스토어 피스로 다시 소개합니다.",
      },
      "structured-wool-coat": {
        designer: "디자이너 아카이브", origin: "프라이빗 리세일 셀렉션", caption: "디자이너 세컨핸드 / 컨디션 A- / 단 한 점",
        intro: "선과 소재의 무게, 조용한 아카이브 존재감을 기준으로 고른 방향성 있는 울 코트입니다.",
        features: ["선명한 숄더 비율과 깨끗한 울 표면", "한 점만 입고된 디자이너 세컨핸드 피스", "장기적인 착용 가치와 아카이브 관련성을 기준으로 선별"],
        condition: "가벼운 사용감은 있지만 구조가 잘 유지된 컨디션 A-입니다.",
        source: "모노크롬 아우터에 집중한 프라이빗 리세일 에디트에서 선별했습니다.",
      },
      "black-studio-set": {
        designer: "아카이브 세트", origin: "프라이빗 아카이브 워드로브", caption: "투피스 아카이브 세트 / 컨디션 B+ / 재고 소량",
        intro: "에디토리얼한 분위기를 유지하면서도 일상 스타일링에 자연스럽게 다시 넣을 수 있는 투피스 아카이브 세트입니다.",
        features: ["균형 잡힌 비율의 투피스 세트", "차분하고 유연한 스타일링이 가능한 아카이브 셀렉션", "컬렉션 가치가 있는 희소한 세컨핸드 피스"],
        condition: "보이지만 과하지 않은 착용 흔적이 있는 컨디션 B+입니다.",
        source: "방향성 있는 블랙 테일러링으로 알려진 프라이빗 아카이브 워드로브에서 다시 소개합니다.",
      },
      "after-dark-shell-top": {
        designer: "레이어링 아카이브", origin: "소규모 리세일 네트워크", caption: "레이어링 피스 / 컨디션 A / 단 한 점",
        intro: "절제된 표면과 모노크롬 워드로브를 자연스럽게 확장하는 활용성을 기준으로 고른 슬림한 레이어링 피스입니다.",
        features: ["코트 안에 입기 좋은 슬림한 레이어링 비율", "시각적 소음을 줄인 아카이브 무드", "차가운 모노크롬 룩을 구성하기에 적합"],
        condition: "사용감이 거의 없고 표면이 깨끗한 컨디션 A입니다.",
        source: "소규모 아카이브 리세일 네트워크를 통해 소싱했습니다.",
      },
      "noir-frame-02": {
        designer: "아이웨어 아카이브", origin: "디자이너 액세서리 아카이브", caption: "아카이브 선글라스 / 컨디션 A / 즉시 배송",
        intro: "강한 기하학과 깨끗한 블랙 마감을 기준으로 고른 아카이브 선글라스 프레임입니다.",
        features: ["어두운 유광 표면의 선명한 프레임 라인", "착용 가능한 상태의 아카이브 아이웨어", "차가운 모노크롬 스타일을 위한 원사이즈 액세서리"],
        condition: "가벼운 취급 흔적은 있지만 렌즈가 깨끗한 컨디션 A입니다.",
        source: "디자이너 액세서리 아카이브에서 가져와 단 한 점으로 소개합니다.",
      },
      "studio-essential-tee": {
        designer: "디자이너 베이식", origin: "모노크롬 베이식 아카이브", caption: "디자이너 베이식 / 컨디션 A- / 단 한 점",
        intro: "브랜드 로고보다 비율과 원단의 촉감을 기준으로 고른 블랙 디자이너 티셔츠입니다.",
        features: ["부드러운 중량감의 저지와 균형 잡힌 네크라인", "조용한 아카이브 매력의 디자이너 베이식", "일상 모노크롬 스타일에 쉽게 더할 수 있는 한 점"],
        condition: "착용으로 인한 가벼운 부드러움은 있지만 큰 결함이 없는 컨디션 A-입니다.",
        source: "모노크롬 디자이너 베이식 아카이브에서 선별했습니다.",
      },
      "archive-square-heel": {
        designer: "풋웨어 아카이브", origin: "전문 풋웨어 소스", caption: "레더 힐 / 컨디션 B+ / 요청 시 소싱",
        intro: "깨끗한 프로필과 강한 아카이브 태도를 기준으로 고른 스퀘어 토 레더 힐입니다.",
        features: ["안정적인 힐 비율의 스퀘어 프런트", "선명한 블랙 스타일을 위한 아카이브 슈즈", "전문 아카이브 채널을 통한 요청형 소싱"],
        condition: "밑창에 가벼운 마모가 있지만 갑피 구조가 온전한 컨디션 B+입니다.",
        source: "전문 아카이브 풋웨어 소스를 통해 요청형으로 소싱합니다.",
      },
    },
  },
};

Object.entries(catalogLocalePacks).forEach(([language, pack]) => {
  window.catalogData.products.forEach((product) => {
    const localized = pack.products[product.slug];
    if (!localized) return;

    product.fulfillment.leadTime[language] = pack.common.leadTime[product.fulfillment.type];
    product.inventory.quantityLabel[language] = pack.common.availability[product.inventory.status];
    product.attributes.color[language] = pack.common.color;
    product.attributes.designer[language] = localized.designer;
    product.attributes.origin[language] = localized.origin;
    product.attributes.era[language] = pack.common.eras[product.attributes.era.en];
    product.copy.name[language] = product.copy.name.en;
    product.copy.categoryLabel[language] = pack.common.categories[product.category];
    product.copy.cardCaption[language] = localized.caption;
    product.copy.intro[language] = localized.intro;
    product.copy.features[language] = localized.features;
    product.notes.condition[language] = localized.condition;
    product.notes.source[language] = localized.source;
  });
});
