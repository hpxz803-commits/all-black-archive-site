window.catalogData = {
  version: "2026-09-17",
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

// Keep each new product's editorial copy together, then expose the catalog's locale maps.
(() => {
  const copy = {
    en: {
      category: "Everyday objects", name: "Portable Metal Ashtray", color: "Silver tone",
      caption: "Hand-customized in Japan / cigarette rest / 25 g",
      intro: "A compact metal ashtray with a cigarette rest, hand-customized in Japan. Made for a place at home or to carry outside, with Lucky Strike and Seven Stars transfer-label designs.",
      features: ["6.5 cm diameter, 2.5 cm height; weighs 25 g", "Matte iron and stainless steel, easy to clean with a metallic sheen", "Cigarette rest and ashtray for extinguishing cigarettes"],
      price: "Price on request", availability: "Availability to be confirmed", shipping: "Contact us for delivery timing",
      variant: "Design", selected: "Selected design: {size}.", added: "Portable Metal Ashtray, {size}, added to bag.",
      conditionLabel: "Before ordering", sourceLabel: "Care",
      condition: "Labels are transferred by hand, so minor variations are unavoidable. Small scratches may occur during packing or transport. Please order only if these imperfections are acceptable.",
      care: "The transfer label is waterproof, but not scratch-proof. Do not scrape or pick at it with sharp objects or fingernails; this can damage the label.",
      labels: ["Diameter", "Height", "Weight", "Material", "Use", "Designs", "Photo note"],
      material: "Matte iron + stainless steel", use: "At home or on the go",
      photo: "This listing is for the ashtray. Cigarettes, packaging and lighters shown are photo props.", origin: "Japan / hand-customized",
    },
    zh: {
      category: "生活器物", name: "手工定制便携烟灰缸", color: "银色",
      caption: "日本手工定制 / 带烟托 / 25 g",
      intro: "日本手工定制金属烟灰缸，带烟托，兼顾居家摆放与外出携带。提供 Lucky Strike 与 Seven Stars 两款转印贴标图案。",
      features: ["直径 6.5 cm，高度 2.5 cm，重量 25 g", "磨砂铁与不锈钢材质，易清洁，带金属光泽", "带烟托，可收纳烟灰并用于灭烟"],
      price: "价格咨询", availability: "库存待确认", shipping: "请联系客服确认发货时间",
      variant: "图案款式", selected: "已选择 {size} 款式。", added: "手工定制便携烟灰缸 {size} 款已加入购物袋。",
      conditionLabel: "购买须知", sourceLabel: "养护说明",
      condition: "烟标图案为手工转印贴标，可能存在细微误差；装箱、运输途中也可能产生轻微刮擦。若对外观完整度要求较高，请确认可接受后再购买。",
      care: "转印贴标防水，但不耐尖锐刮擦。请勿用尖锐物体或指甲刮擦、抠动表面，以免损坏贴标。",
      labels: ["直径", "高度", "重量", "材质", "使用场景", "图案", "图片说明"],
      material: "磨砂铁＋不锈钢", use: "居家摆放 / 外出携带",
      photo: "本商品为烟灰缸；图片中的香烟、烟盒与打火机为拍摄道具。", origin: "日本 / 手工定制",
    },
    de: {
      category: "Alltagsobjekte", name: "Tragbarer Metall-Aschenbecher", color: "Silberfarben",
      caption: "In Japan von Hand gestaltet / Zigarettenablage / 25 g",
      intro: "Kompakter Metall-Aschenbecher mit Zigarettenablage, in Japan von Hand gestaltet. Für zu Hause und unterwegs, mit Transfermotiven von Lucky Strike oder Seven Stars.",
      features: ["Durchmesser 6,5 cm, Höhe 2,5 cm; Gewicht 25 g", "Mattes Eisen und Edelstahl, leicht zu reinigen, mit metallischem Glanz", "Mit Zigarettenablage; zum Auffangen von Asche und Ausdrücken von Zigaretten"],
      price: "Preis auf Anfrage", availability: "Verfügbarkeit auf Anfrage", shipping: "Lieferzeit bitte erfragen",
      variant: "Motiv", selected: "Motiv {size} ausgewählt.", added: "Metall-Aschenbecher, {size}, zur Tasche hinzugefügt.",
      conditionLabel: "Vor der Bestellung", sourceLabel: "Pflege",
      condition: "Die Motive werden von Hand übertragen; kleine Abweichungen sind unvermeidbar. Beim Verpacken oder Transport können leichte Kratzer entstehen. Bitte nur bestellen, wenn diese Unregelmäßigkeiten akzeptabel sind.",
      care: "Das Transfermotiv ist wasserfest, aber nicht kratzfest. Nicht mit scharfen Gegenständen oder Fingernägeln daran kratzen oder zupfen, da dies das Motiv beschädigen kann.",
      labels: ["Durchmesser", "Höhe", "Gewicht", "Material", "Verwendung", "Motive", "Bildhinweis"],
      material: "Mattes Eisen + Edelstahl", use: "Zu Hause oder unterwegs",
      photo: "Angeboten wird der Aschenbecher. Abgebildete Zigaretten, Verpackungen und Feuerzeuge sind Fotorequisiten.", origin: "Japan / von Hand gestaltet",
    },
    it: {
      category: "Oggetti quotidiani", name: "Posacenere portatile in metallo", color: "Color argento",
      caption: "Personalizzato a mano in Giappone / poggiasigaretta / 25 g",
      intro: "Un posacenere compatto in metallo con poggiasigaretta, personalizzato a mano in Giappone. Per la casa e da portare con sé, con grafiche Lucky Strike o Seven Stars applicate a trasferimento.",
      features: ["Diametro 6,5 cm, altezza 2,5 cm; peso 25 g", "Ferro opaco e acciaio inox, facili da pulire, con riflessi metallici", "Con poggiasigaretta, per raccogliere la cenere e spegnere le sigarette"],
      price: "Prezzo su richiesta", availability: "Disponibilità da confermare", shipping: "Contattaci per i tempi di spedizione",
      variant: "Grafica", selected: "Grafica selezionata: {size}.", added: "Posacenere portatile, {size}, aggiunto alla borsa.",
      conditionLabel: "Prima di acquistare", sourceLabel: "Cura",
      condition: "Le grafiche vengono trasferite a mano: piccole variazioni sono inevitabili. Durante l'imballaggio o il trasporto possono verificarsi lievi graffi. Acquista solo se queste imperfezioni sono accettabili.",
      care: "La grafica trasferita è impermeabile, ma non antigraffio. Non raschiare o sollevare la superficie con oggetti appuntiti o unghie, per evitare di danneggiarla.",
      labels: ["Diametro", "Altezza", "Peso", "Materiale", "Utilizzo", "Grafiche", "Nota sulle foto"],
      material: "Ferro opaco + acciaio inox", use: "A casa o fuori casa",
      photo: "L'articolo in vendita è il posacenere. Sigarette, confezioni e accendini nelle foto sono oggetti di scena.", origin: "Giappone / personalizzato a mano",
    },
    fr: {
      category: "Objets du quotidien", name: "Cendrier de poche en métal", color: "Ton argenté",
      caption: "Personnalisé à la main au Japon / repose-cigarette / 25 g",
      intro: "Un cendrier compact en métal avec repose-cigarette, personnalisé à la main au Japon. À poser chez soi ou à emporter, avec motifs Lucky Strike ou Seven Stars appliqués par transfert.",
      features: ["Diamètre 6,5 cm, hauteur 2,5 cm ; poids 25 g", "Fer mat et acier inoxydable, faciles à nettoyer, avec un éclat métallique", "Avec repose-cigarette, pour recueillir les cendres et éteindre les cigarettes"],
      price: "Prix sur demande", availability: "Disponibilité à confirmer", shipping: "Nous contacter pour le délai d'expédition",
      variant: "Motif", selected: "Motif sélectionné : {size}.", added: "Cendrier de poche, {size}, ajouté au sac.",
      conditionLabel: "Avant de commander", sourceLabel: "Entretien",
      condition: "Les motifs sont transférés à la main : de légères variations sont inévitables. De petites rayures peuvent apparaître lors de l'emballage ou du transport. Merci de commander uniquement si ces imperfections vous conviennent.",
      care: "Le motif transféré résiste à l'eau, mais pas aux rayures. Ne pas gratter ni décoller sa surface avec un objet pointu ou les ongles, au risque de l'abîmer.",
      labels: ["Diamètre", "Hauteur", "Poids", "Matière", "Usage", "Motifs", "À propos des photos"],
      material: "Fer mat + acier inoxydable", use: "À la maison ou en déplacement",
      photo: "Cet article est un cendrier. Les cigarettes, emballages et briquets photographiés sont des accessoires de mise en scène.", origin: "Japon / personnalisé à la main",
    },
    ja: {
      category: "暮らしの道具", name: "ハンドカスタム携帯灰皿", color: "シルバー",
      caption: "日本でハンドカスタム / タバコ受け付き / 25 g",
      intro: "日本でハンドカスタムした、タバコ受け付きのコンパクトな金属製灰皿。自宅でも持ち歩きにも使えます。Lucky StrikeとSeven Starsの転写ラベル柄をご用意。",
      features: ["直径6.5 cm、高さ2.5 cm、重さ25 g", "マット仕上げの鉄とステンレス。お手入れしやすく、金属の光沢があります", "タバコ受け付き。灰を受け、消火にも使えます"],
      price: "価格はお問い合わせください", availability: "在庫は要確認", shipping: "発送時期はお問い合わせください",
      variant: "柄", selected: "{size}の柄を選択しました。", added: "携帯灰皿（{size}）をバッグに追加しました。",
      conditionLabel: "ご購入前に", sourceLabel: "お手入れ",
      condition: "ラベルは手作業で転写するため、わずかなずれや個体差があります。梱包・輸送時に細かな擦り傷が生じる場合もあります。外観の完全さをお求めの方は、ご了承のうえご検討ください。",
      care: "転写ラベルは防水ですが、傷には弱いため、鋭利な物や爪で表面をこすったり、はがしたりしないでください。ラベルが傷む原因になります。",
      labels: ["直径", "高さ", "重さ", "素材", "使用シーン", "柄", "写真について"],
      material: "マット仕上げの鉄＋ステンレス", use: "自宅用・携帯用",
      photo: "販売商品は灰皿です。写真のタバコ、箱、ライターは撮影用小物です。", origin: "日本 / ハンドカスタム",
    },
    es: {
      category: "Objetos cotidianos", name: "Cenicero portátil de metal", color: "Tono plateado",
      caption: "Personalizado a mano en Japón / soporte para cigarrillo / 25 g",
      intro: "Un cenicero compacto de metal con soporte para cigarrillo, personalizado a mano en Japón. Para casa o para llevar, con diseños Lucky Strike o Seven Stars aplicados por transferencia.",
      features: ["Diámetro de 6,5 cm, altura de 2,5 cm; peso de 25 g", "Hierro mate y acero inoxidable, fáciles de limpiar, con brillo metálico", "Con soporte para cigarrillo, para recoger ceniza y apagar cigarrillos"],
      price: "Precio bajo consulta", availability: "Disponibilidad por confirmar", shipping: "Consulta el plazo de envío",
      variant: "Diseño", selected: "Diseño seleccionado: {size}.", added: "Cenicero portátil, {size}, añadido a la bolsa.",
      conditionLabel: "Antes de comprar", sourceLabel: "Cuidados",
      condition: "Los diseños se transfieren a mano, por lo que las pequeñas variaciones son inevitables. Pueden producirse leves arañazos al embalar o transportar. Compra solo si aceptas estas imperfecciones.",
      care: "La etiqueta transferida es resistente al agua, pero no a los arañazos. No rasques ni levantes la superficie con objetos afilados o con las uñas, ya que podrías dañarla.",
      labels: ["Diámetro", "Altura", "Peso", "Material", "Uso", "Diseños", "Nota sobre las fotos"],
      material: "Hierro mate + acero inoxidable", use: "En casa o fuera de ella",
      photo: "El artículo a la venta es el cenicero. Los cigarrillos, envases y encendedores de las fotos son elementos de atrezo.", origin: "Japón / personalizado a mano",
    },
    ru: {
      category: "Предметы быта", name: "Карманная металлическая пепельница", color: "Серебристый",
      caption: "Ручное оформление в Японии / держатель для сигареты / 25 г",
      intro: "Компактная металлическая пепельница с держателем для сигареты, оформленная вручную в Японии. Для дома и поездок, с переводными изображениями Lucky Strike или Seven Stars.",
      features: ["Диаметр 6,5 см, высота 2,5 см; вес 25 г", "Матовое железо и нержавеющая сталь: легко очищаются, с металлическим блеском", "С держателем для сигареты; для сбора пепла и тушения сигарет"],
      price: "Цена по запросу", availability: "Наличие уточняется", shipping: "Уточните срок отправки",
      variant: "Рисунок", selected: "Выбран рисунок: {size}.", added: "Карманная пепельница, {size}, добавлена в сумку.",
      conditionLabel: "Перед заказом", sourceLabel: "Уход",
      condition: "Рисунки переносятся вручную, поэтому небольшие отклонения неизбежны. При упаковке и перевозке возможны мелкие царапины. Пожалуйста, оформляйте заказ, только если такие особенности для вас приемлемы.",
      care: "Переводное изображение водостойкое, но не устойчиво к царапинам. Не царапайте и не поддевайте его острыми предметами или ногтями: это может повредить рисунок.",
      labels: ["Диаметр", "Высота", "Вес", "Материал", "Применение", "Рисунки", "О фотографиях"],
      material: "Матовое железо + нержавеющая сталь", use: "Дома и в поездках",
      photo: "Продаётся пепельница. Сигареты, упаковки и зажигалки на фото — реквизит для съёмки.", origin: "Япония / ручное оформление",
    },
    ko: {
      category: "생활 오브제", name: "핸드 커스텀 휴대용 재떨이", color: "실버",
      caption: "일본 수작업 커스텀 / 담배 받침 / 25 g",
      intro: "일본에서 수작업으로 커스텀한 담배 받침이 있는 소형 금속 재떨이입니다. 집에서 사용하거나 외출 시 휴대할 수 있으며, Lucky Strike와 Seven Stars 전사 라벨 디자인을 제공합니다.",
      features: ["지름 6.5 cm, 높이 2.5 cm, 무게 25 g", "무광 철과 스테인리스 소재로 세척이 쉽고 금속 광택이 있습니다", "담배 받침이 있으며 재를 모으거나 담배를 끌 때 사용할 수 있습니다"],
      price: "가격 문의", availability: "재고 확인 필요", shipping: "발송 일정은 문의해 주세요",
      variant: "디자인", selected: "{size} 디자인을 선택했습니다.", added: "휴대용 재떨이 {size} 디자인을 장바구니에 담았습니다.",
      conditionLabel: "구매 전 안내", sourceLabel: "관리 안내",
      condition: "라벨은 수작업으로 전사하므로 미세한 오차가 발생할 수 있습니다. 포장 및 운송 과정에서도 가벼운 흠집이 생길 수 있으니, 이러한 특성을 수용할 수 있는 경우 구매해 주세요.",
      care: "전사 라벨은 방수 처리되어 있지만 긁힘에는 약합니다. 날카로운 물건이나 손톱으로 표면을 긁거나 뜯으면 라벨이 손상될 수 있습니다.",
      labels: ["지름", "높이", "무게", "소재", "사용 환경", "디자인", "사진 안내"],
      material: "무광 철 + 스테인리스", use: "가정용 / 외출 시 휴대",
      photo: "판매 상품은 재떨이입니다. 사진 속 담배, 담뱃갑, 라이터는 촬영 소품입니다.", origin: "일본 / 수작업 커스텀",
    },
  };
  const localized = (key) => Object.fromEntries(Object.entries(copy).map(([lang, value]) => [lang, value[key]]));
  const spec = (index, value) => ({
    label: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.labels[index]])),
    value,
  });
  window.catalogData.products.push({
    id: "P-009", slug: "hand-customized-pocket-ashtray", category: "objects",
    media: {
      cover: "assets/pocket-ashtray-04.jpg",
      gallery: [4, 1, 2, 3, 5, 6, 7, 8, 9].map((index) => `assets/pocket-ashtray-${String(index).padStart(2, "0")}.jpg`),
    },
    pricing: { currency: "EUR", label: localized("price") },
    fulfillment: { type: "inquiry", leadTime: localized("shipping") },
    inventory: { status: "paused", quantityLabel: localized("availability"), oneOfAKind: false },
    sizing: {
      options: ["Lucky Strike", "Seven Stars"], default: "Lucky Strike", label: localized("variant"),
      messages: { selected: localized("selected"), added: localized("added") },
    },
    attributes: { color: localized("color"), origin: localized("origin") },
    copy: {
      name: localized("name"), categoryLabel: localized("category"), cardCaption: localized("caption"),
      intro: localized("intro"), features: localized("features"),
    },
    notes: {
      condition: localized("condition"), source: localized("care"),
      conditionLabel: localized("conditionLabel"), sourceLabel: localized("sourceLabel"),
    },
    specifications: [
      spec(0, "6.5 cm"), spec(1, "2.5 cm"), spec(2, "25 g"), spec(3, localized("material")),
      spec(4, localized("use")), spec(5, "Lucky Strike / Seven Stars"), spec(6, localized("photo")),
    ],
    searchTokens: ["ashtray", "pocket ashtray", "cigarette rest", "lucky strike", "seven stars", "七星", "烟灰缸", "灭烟器", "生活器物", "Aschenbecher", "posacenere", "cendrier", "携帯灰皿", "cenicero", "пепельница", "재떨이"],
  });
})();

(() => {
  const copy = {
    en: {
      category: "Everyday objects", name: "Slim Mirror Cigarette Case", colors: ["Mirror silver", "Mirror black"],
      caption: "Stainless steel / mirror finish / 1 cm profile",
      intro: "A slim stainless-steel cigarette case with an internal retaining clip. Korean-inspired minimal styling meets a vintage rectangular form, finished in high-gloss mirror silver or black for indoor and outdoor use.",
      features: ["10 cm long × 7.6 cm wide × 1 cm thick", "Stainless steel with a high-gloss mirror finish", "Internal clip keeps the contents in place"],
      price: "Price on request", availability: "Availability to be confirmed", shipping: "Contact us for delivery timing", variant: "Finish",
      selected: "Selected finish: {size}.", added: "Slim Mirror Cigarette Case, {size}, added to bag.",
      conditionLabel: "Before ordering", sourceLabel: "Care",
      condition: "Both silver and black mirror-finish metal surfaces readily show fingerprints and scratches. Please order only if these surface characteristics are acceptable to you.",
      care: "Gently wipe with a clean, soft cloth. Avoid abrasive cleaning and contact with sharp objects to reduce surface marks.",
      labels: ["Length", "Width", "Thickness", "Material", "Finish", "Use", "Photo note"],
      material: "Stainless steel", finish: "High-gloss mirror polish", use: "Indoors / outdoors", photo: "Case only. Cigarettes shown in the photos are not included.",
    },
    zh: {
      category: "生活器物", name: "镜面超薄复古烟盒", colors: ["镜面银色", "镜面黑色"],
      caption: "不锈钢 / 高亮镜光 / 1 cm 薄型",
      intro: "以韩系极简风格结合复古长方形轮廓，不锈钢盒身搭配内置固定夹。高亮镜光表面提供银色与黑色两款，适合室内使用与户外携带。",
      features: ["长 10 cm × 宽 7.6 cm × 厚 1 cm", "不锈钢材质，高亮镜光工艺", "内置固定夹，便于收纳固定"],
      price: "价格咨询", availability: "库存待确认", shipping: "请联系客服确认发货时间", variant: "颜色款式",
      selected: "已选择 {size}。", added: "镜面超薄复古烟盒（{size}）已加入购物袋。",
      conditionLabel: "购买须知", sourceLabel: "养护建议",
      condition: "银色与黑色款均为高亮镜光金属表面，容易留下指纹与划痕。若介意镜面使用痕迹，请确认可接受后再购买。",
      care: "建议使用干净柔软的布轻拭表面，避免研磨性清洁或与尖锐物体接触，以减少表面痕迹。",
      labels: ["长度", "宽度", "厚度", "材质", "表面工艺", "使用场景", "图片说明"],
      material: "不锈钢", finish: "高亮镜光", use: "室内 / 户外", photo: "本商品仅为烟盒，不包含图片中展示的香烟。",
    },
    de: {
      category: "Alltagsobjekte", name: "Flaches Spiegel-Zigarettenetui", colors: ["Spiegelsilber", "Spiegelschwarz"],
      caption: "Edelstahl / Spiegelpolitur / 1 cm flach",
      intro: "Flaches Zigarettenetui aus Edelstahl mit innenliegendem Halteclip. Koreanisch inspirierter Minimalismus trifft auf eine rechteckige Vintage-Form, mit hochglänzender Spiegeloberfläche in Silber oder Schwarz für drinnen und draußen.",
      features: ["10 cm lang × 7,6 cm breit × 1 cm dick", "Edelstahl mit hochglänzender Spiegelpolitur", "Innenliegender Clip hält den Inhalt an seinem Platz"],
      price: "Preis auf Anfrage", availability: "Verfügbarkeit auf Anfrage", shipping: "Lieferzeit bitte erfragen", variant: "Ausführung",
      selected: "Ausführung {size} ausgewählt.", added: "Spiegel-Zigarettenetui, {size}, zur Tasche hinzugefügt.",
      conditionLabel: "Vor der Bestellung", sourceLabel: "Pflegehinweise",
      condition: "Auf den hochglänzenden Metalloberflächen in Silber und Schwarz sind Fingerabdrücke und Kratzer leicht sichtbar. Bitte nur bestellen, wenn diese Materialeigenschaften für Sie akzeptabel sind.",
      care: "Vorsichtig mit einem sauberen, weichen Tuch abwischen. Scheuernde Reinigungsmittel und Kontakt mit scharfen Gegenständen vermeiden, um Oberflächenspuren zu reduzieren.",
      labels: ["Länge", "Breite", "Dicke", "Material", "Oberfläche", "Verwendung", "Bildhinweis"],
      material: "Edelstahl", finish: "Hochglänzende Spiegelpolitur", use: "Drinnen / draußen", photo: "Nur das Etui. Abgebildete Zigaretten sind nicht enthalten.",
    },
    it: {
      category: "Oggetti quotidiani", name: "Portasigarette sottile a specchio", colors: ["Argento a specchio", "Nero a specchio"],
      caption: "Acciaio inox / finitura a specchio / spessore 1 cm",
      intro: "Un portasigarette sottile in acciaio inox con clip interna. Il minimalismo d'ispirazione coreana incontra una forma rettangolare rétro, con finitura lucida a specchio argento o nera, per l'uso in casa e all'aperto.",
      features: ["Lunghezza 10 cm × larghezza 7,6 cm × spessore 1 cm", "Acciaio inox con finitura lucida a specchio", "Clip interna per mantenere fermo il contenuto"],
      price: "Prezzo su richiesta", availability: "Disponibilità da confermare", shipping: "Contattaci per i tempi di spedizione", variant: "Finitura",
      selected: "Finitura selezionata: {size}.", added: "Portasigarette a specchio, {size}, aggiunto alla borsa.",
      conditionLabel: "Prima di acquistare", sourceLabel: "Consigli per la cura",
      condition: "Le superfici metalliche a specchio, sia argento sia nere, mostrano facilmente impronte e graffi. Acquista solo se queste caratteristiche della superficie sono accettabili.",
      care: "Passa delicatamente un panno morbido e pulito. Evita detergenti abrasivi e il contatto con oggetti appuntiti per limitare i segni sulla superficie.",
      labels: ["Lunghezza", "Larghezza", "Spessore", "Materiale", "Finitura", "Utilizzo", "Nota sulle foto"],
      material: "Acciaio inox", finish: "Lucidatura a specchio", use: "Interni / esterni", photo: "Solo il portasigarette. Le sigarette nelle foto non sono incluse.",
    },
    fr: {
      category: "Objets du quotidien", name: "Étui à cigarettes miroir fin", colors: ["Argent miroir", "Noir miroir"],
      caption: "Acier inoxydable / finition miroir / épaisseur 1 cm",
      intro: "Un étui fin en acier inoxydable avec pince de maintien intérieure. Le minimalisme d'inspiration coréenne s'associe à une forme rectangulaire rétro, avec une finition miroir argentée ou noire, pour l'intérieur et l'extérieur.",
      features: ["Longueur 10 cm × largeur 7,6 cm × épaisseur 1 cm", "Acier inoxydable avec finition miroir brillante", "Pince intérieure pour maintenir le contenu en place"],
      price: "Prix sur demande", availability: "Disponibilité à confirmer", shipping: "Nous contacter pour le délai d'expédition", variant: "Finition",
      selected: "Finition sélectionnée : {size}.", added: "Étui à cigarettes miroir, {size}, ajouté au sac.",
      conditionLabel: "Avant de commander", sourceLabel: "Conseils d'entretien",
      condition: "Les surfaces métalliques miroir, argentées comme noires, marquent facilement les empreintes et les rayures. Merci de commander uniquement si ces caractéristiques vous conviennent.",
      care: "Essuyer délicatement avec un chiffon doux et propre. Éviter les produits abrasifs et le contact avec des objets pointus pour limiter les marques.",
      labels: ["Longueur", "Largeur", "Épaisseur", "Matière", "Finition", "Usage", "À propos des photos"],
      material: "Acier inoxydable", finish: "Polissage miroir brillant", use: "Intérieur / extérieur", photo: "Étui uniquement. Les cigarettes photographiées ne sont pas incluses.",
    },
    ja: {
      category: "暮らしの道具", name: "薄型ミラーシガレットケース", colors: ["ミラーシルバー", "ミラーブラック"],
      caption: "ステンレス / ミラー仕上げ / 厚さ1 cm",
      intro: "韓国風のミニマルな雰囲気とレトロな長方形フォルムを合わせた、ステンレス製の薄型ケース。内側に固定クリップを備え、光沢のあるミラーシルバーとブラックの2色展開。屋内でも屋外でも使えます。",
      features: ["長さ10 cm × 幅7.6 cm × 厚さ1 cm", "ステンレス製、高光沢ミラー仕上げ", "中身を固定できる内蔵クリップ付き"],
      price: "価格はお問い合わせください", availability: "在庫は要確認", shipping: "発送時期はお問い合わせください", variant: "カラー",
      selected: "{size}を選択しました。", added: "ミラーシガレットケース（{size}）をバッグに追加しました。",
      conditionLabel: "ご購入前に", sourceLabel: "お手入れのヒント",
      condition: "シルバー・ブラックともに光沢の強い鏡面金属のため、指紋や傷が目立ちやすい仕上げです。表面の使用感が気になる方は、ご了承のうえご検討ください。",
      care: "清潔で柔らかい布で優しく拭いてください。表面の傷を抑えるため、研磨剤や鋭利な物との接触を避けてください。",
      labels: ["長さ", "幅", "厚さ", "素材", "仕上げ", "使用シーン", "写真について"],
      material: "ステンレス", finish: "高光沢ミラー仕上げ", use: "屋内 / 屋外", photo: "販売商品はケースのみです。写真のタバコは付属しません。",
    },
    es: {
      category: "Objetos cotidianos", name: "Pitillera fina de acabado espejo", colors: ["Plata espejo", "Negro espejo"],
      caption: "Acero inoxidable / acabado espejo / grosor 1 cm",
      intro: "Una pitillera fina de acero inoxidable con clip interior. El minimalismo de inspiración coreana se combina con una forma rectangular retro y un acabado espejo brillante en plata o negro, para interiores y exteriores.",
      features: ["Largo 10 cm × ancho 7,6 cm × grosor 1 cm", "Acero inoxidable con acabado espejo brillante", "Clip interior para mantener el contenido en su sitio"],
      price: "Precio bajo consulta", availability: "Disponibilidad por confirmar", shipping: "Consulta el plazo de envío", variant: "Acabado",
      selected: "Acabado seleccionado: {size}.", added: "Pitillera de acabado espejo, {size}, añadida a la bolsa.",
      conditionLabel: "Antes de comprar", sourceLabel: "Consejos de cuidado",
      condition: "Las superficies metálicas de acabado espejo, tanto plateadas como negras, muestran fácilmente huellas y arañazos. Compra solo si aceptas estas características de la superficie.",
      care: "Limpia suavemente con un paño limpio y suave. Evita productos abrasivos y el contacto con objetos afilados para reducir las marcas.",
      labels: ["Largo", "Ancho", "Grosor", "Material", "Acabado", "Uso", "Nota sobre las fotos"],
      material: "Acero inoxidable", finish: "Pulido espejo brillante", use: "Interiores / exteriores", photo: "Solo la pitillera. Los cigarrillos de las fotos no están incluidos.",
    },
    ru: {
      category: "Предметы быта", name: "Тонкий зеркальный портсигар", colors: ["Зеркальное серебро", "Зеркальный чёрный"],
      caption: "Нержавеющая сталь / зеркальная отделка / толщина 1 см",
      intro: "Тонкий портсигар из нержавеющей стали с внутренним зажимом. Минимализм в корейском стиле сочетается с прямоугольной формой ретро. Глянцевая зеркальная отделка в серебристом или чёрном цвете, для использования дома и на улице.",
      features: ["Длина 10 см × ширина 7,6 см × толщина 1 см", "Нержавеющая сталь с глянцевой зеркальной полировкой", "Внутренний зажим удерживает содержимое на месте"],
      price: "Цена по запросу", availability: "Наличие уточняется", shipping: "Уточните срок отправки", variant: "Отделка",
      selected: "Выбрана отделка: {size}.", added: "Зеркальный портсигар, {size}, добавлен в сумку.",
      conditionLabel: "Перед заказом", sourceLabel: "Рекомендации по уходу",
      condition: "На зеркальной металлической поверхности обоих цветов легко остаются отпечатки пальцев и царапины. Пожалуйста, заказывайте только в том случае, если такие особенности поверхности для вас приемлемы.",
      care: "Аккуратно протирайте чистой мягкой тканью. Избегайте абразивных средств и контакта с острыми предметами, чтобы уменьшить следы на поверхности.",
      labels: ["Длина", "Ширина", "Толщина", "Материал", "Отделка", "Применение", "О фотографиях"],
      material: "Нержавеющая сталь", finish: "Глянцевая зеркальная полировка", use: "В помещении / на улице", photo: "Продаётся только портсигар. Сигареты на фотографиях не входят в комплект.",
    },
    ko: {
      category: "생활 오브제", name: "슬림 미러 담배 케이스", colors: ["미러 실버", "미러 블랙"],
      caption: "스테인리스 / 미러 마감 / 두께 1 cm",
      intro: "한국적인 미니멀 감성과 레트로 직사각형 실루엣을 담은 얇은 스테인리스 케이스입니다. 내부 고정 클립을 갖추고 있으며, 고광택 미러 실버와 블랙 두 가지 색상으로 실내외에서 사용할 수 있습니다.",
      features: ["길이 10 cm × 너비 7.6 cm × 두께 1 cm", "스테인리스 소재와 고광택 미러 마감", "내용물을 고정하는 내부 클립"],
      price: "가격 문의", availability: "재고 확인 필요", shipping: "발송 일정은 문의해 주세요", variant: "색상",
      selected: "{size} 색상을 선택했습니다.", added: "미러 담배 케이스({size})를 장바구니에 담았습니다.",
      conditionLabel: "구매 전 안내", sourceLabel: "관리 팁",
      condition: "실버와 블랙 모두 고광택 미러 금속 표면으로 지문과 흠집이 쉽게 남거나 눈에 띌 수 있습니다. 이러한 표면 특성을 수용할 수 있는 경우 구매해 주세요.",
      care: "깨끗하고 부드러운 천으로 가볍게 닦아 주세요. 표면 자국을 줄이려면 연마성 세정제와 날카로운 물건의 접촉을 피하는 것이 좋습니다.",
      labels: ["길이", "너비", "두께", "소재", "마감", "사용 환경", "사진 안내"],
      material: "스테인리스", finish: "고광택 미러 마감", use: "실내 / 실외", photo: "케이스만 판매하며 사진 속 담배는 포함되지 않습니다.",
    },
  };
  const localized = key => Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry[key]]));
  const optionLabels = Object.fromEntries(["silver", "black"].map((id, index) => [id,
    Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.colors[index]])),
  ]));
  const spec = (index, value) => ({
    label: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.labels[index]])), value,
  });
  window.catalogData.products.push({
    id: "P-010", slug: "slim-mirror-cigarette-case", category: "objects",
    media: {
      cover: "assets/mirror-case-08.jpg",
      gallery: [8, 9, 7, 6, 1, 2, 3, 4, 5].map(index => `assets/mirror-case-${String(index).padStart(2, "0")}.jpg`),
    },
    pricing: { currency: "EUR", label: localized("price") },
    fulfillment: { type: "inquiry", leadTime: localized("shipping") },
    inventory: { status: "paused", quantityLabel: localized("availability"), oneOfAKind: false },
    sizing: {
      options: ["silver", "black"], default: "silver", label: localized("variant"), optionLabels,
      messages: { selected: localized("selected"), added: localized("added") },
    },
    attributes: { color: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.colors.join(" / ")])) },
    copy: {
      name: localized("name"), categoryLabel: localized("category"), cardCaption: localized("caption"),
      intro: localized("intro"), features: localized("features"),
    },
    notes: {
      condition: localized("condition"), source: localized("care"),
      conditionLabel: localized("conditionLabel"), sourceLabel: localized("sourceLabel"),
    },
    specifications: [
      spec(0, "10 cm"), spec(1, "7.6 cm"), spec(2, "1 cm"), spec(3, localized("material")),
      spec(4, localized("finish")), spec(5, localized("use")), spec(6, localized("photo")),
    ],
    searchTokens: ["cigarette case", "mirror case", "slim case", "烟盒", "烟夹", "镜面", "复古烟盒", "Zigarettenetui", "portasigarette", "étui à cigarettes", "シガレットケース", "pitillera", "портсигар", "담배 케이스"],
  });
})();

(() => {
  const common = window.catalogData.products.find(product => product.slug === "slim-mirror-cigarette-case");
  const copy = {
    zh: {
      name: "户外密封弹盖收纳烟盒", colors: ["透明白", "透明黑"],
      caption: "透明机能外壳 / 弹盖收纳 / 约 30 g",
      intro: "轻巧的 ABS 透明外壳，搭配弹盖结构、密封圈与便携挂绳。透明白清透直观，透明黑呈烟灰色质感，适合外出时集中收纳，也可作为随身挂饰。",
      features: ["107 × 59 × 23 mm，约 30 g，轻巧便携", "弹盖开合与密封防水设计；使用前请确认盒盖扣合", "不放打火机时，可容纳粗烟 10 支、中支烟 13 支或细支烟 20 支"],
      selected: "已选择：{size}，图片已切换为对应款式。", added: "{size}收纳烟盒已加入购物袋。",
      conditionLabel: "使用须知", sourceLabel: "收纳与养护",
      condition: "防水等级及浸水测试数据尚未提供，请勿将密封设计视为可长时间浸泡或用于潜水的保证。户外、登山、越野与滑雪使用时，请检查密封圈与盒盖是否完好、扣合。",
      care: "本品为 ABS 收纳盒，并非烟灰缸；请勿放入点燃的香烟、烟灰或未冷却的烟蒂。清洁后擦干再收纳，远离明火和高温。透明表面请避免与尖锐物品摩擦。",
      labels: ["尺寸（高 × 宽 × 厚）", "重量", "材质", "颜色", "容量", "适用场景", "结构", "图片说明"],
      weight: "约 30 g", capacity: "粗烟 10 支 / 中支烟 13 支 / 细支烟 20 支（不放打火机时）",
      use: "户外 / 登山 / 越野 / 滑雪", structure: "弹盖、密封圈、便携挂绳",
      photo: "销售商品为收纳烟盒，图片中的香烟与打火机不包含在内。双款合照仅用于颜色对比。",
    },
    en: {
      name: "Sealed Outdoor Pocket Case", colors: ["Clear white", "Transparent black"],
      caption: "Transparent shell / pop-open lid / approx. 30 g",
      intro: "A lightweight ABS storage case with a pop-open lid, sealing ring and carry strap. Choose clear white for a colourless finish or transparent black for a smoky tint. A compact organiser to carry or hang from your gear.",
      features: ["107 × 59 × 23 mm; approximately 30 g", "Pop-open lid and water-resistant sealed design; check the closure before use", "Holds 10 regular, 13 medium or 20 slim cigarettes when no lighter is stored"],
      selected: "Selected: {size}. Images now show this colour.", added: "Pocket case, {size}, added to bag.",
      conditionLabel: "Before use", sourceLabel: "Storage & care",
      condition: "No waterproof rating or immersion test data has been supplied. The seal is not a guarantee for prolonged immersion or diving. For outdoor activities, hiking, off-road trips and skiing, check that the seal and lid are intact and fully closed.",
      care: "This ABS case is for storage, not an ashtray. Do not place lit cigarettes, ash or hot cigarette ends inside. Wipe dry after cleaning, keep away from flames and heat, and avoid scratching the transparent surface with sharp objects.",
      labels: ["Size (H × W × D)", "Weight", "Material", "Colours", "Capacity", "Use", "Construction", "Photo note"],
      weight: "Approx. 30 g", capacity: "10 regular / 13 medium / 20 slim cigarettes (without a lighter inside)",
      use: "Outdoors / hiking / off-road trips / skiing", structure: "Pop-open lid, sealing ring and carry strap",
      photo: "Case only. Cigarettes and lighters shown are not included. The two-colour photo is for comparison.",
    },
    de: {
      name: "Outdoor-Etui mit Dichtung", colors: ["Transparent weiß", "Transparent schwarz"],
      caption: "Transparente Hülle / aufspringender Deckel / ca. 30 g",
      intro: "Leichtes ABS-Etui mit aufspringendem Deckel, Dichtungsring und Trageschlaufe. Transparentes Weiß ist farblos klar, transparentes Schwarz rauchfarben getönt. Kompakte Aufbewahrung für unterwegs, auch zum Anhängen.",
      features: ["107 × 59 × 23 mm; Gewicht ca. 30 g", "Aufspringender Deckel und wasserabweisende Dichtung; Verschluss vor Gebrauch prüfen", "Ohne Feuerzeug: Platz für 10 normale, 13 mittlere oder 20 schlanke Zigaretten"],
      selected: "Ausgewählt: {size}. Die Bilder zeigen diese Farbe.", added: "Etui in {size} zur Tasche hinzugefügt.",
      conditionLabel: "Vor dem Gebrauch", sourceLabel: "Aufbewahrung & Pflege",
      condition: "Eine Wasserschutzklasse oder Ergebnisse von Tauchtests liegen nicht vor. Die Dichtung garantiert keinen Schutz bei längerem Untertauchen oder Tauchen. Vor Outdoor-Aktivitäten, Wandern, Geländetouren und Skifahren Dichtungsring und Deckel auf Schäden und festen Verschluss prüfen.",
      care: "Dieses ABS-Etui dient zur Aufbewahrung, nicht als Aschenbecher. Keine brennenden Zigaretten, Asche oder heißen Stummel hineinlegen. Nach dem Reinigen trockenwischen, von Flammen und Hitze fernhalten und die transparente Oberfläche vor scharfen Gegenständen schützen.",
      labels: ["Maße (H × B × T)", "Gewicht", "Material", "Farben", "Kapazität", "Einsatz", "Aufbau", "Fotohinweis"],
      weight: "Ca. 30 g", capacity: "10 normale / 13 mittlere / 20 schlanke Zigaretten (ohne Feuerzeug im Etui)",
      use: "Outdoor / Wandern / Geländetouren / Skifahren", structure: "Aufspringender Deckel, Dichtungsring, Trageschlaufe",
      photo: "Nur das Etui. Abgebildete Zigaretten und Feuerzeuge sind nicht enthalten. Das Foto beider Farben dient dem Vergleich.",
    },
    it: {
      name: "Astuccio Outdoor con Guarnizione", colors: ["Bianco trasparente", "Nero trasparente"],
      caption: "Scocca trasparente / coperchio a scatto / circa 30 g",
      intro: "Un leggero astuccio in ABS con coperchio a scatto, guarnizione e laccetto. Il bianco trasparente è incolore, il nero trasparente ha una tonalità fumé. Una custodia compatta da portare con sé o appendere all'attrezzatura.",
      features: ["107 × 59 × 23 mm; peso circa 30 g", "Coperchio a scatto e chiusura con protezione dall'acqua; verificare la chiusura prima dell'uso", "Senza accendino: fino a 10 sigarette standard, 13 medie o 20 sottili"],
      selected: "Selezionato: {size}. Le immagini mostrano questo colore.", added: "Astuccio {size} aggiunto alla borsa.",
      conditionLabel: "Prima dell'uso", sourceLabel: "Conservazione e cura",
      condition: "Non sono disponibili una classe di impermeabilità o dati di prove di immersione. La guarnizione non garantisce protezione per immersioni prolungate o subacquee. Per attività outdoor, escursioni, percorsi fuoristrada e sci, controllare che guarnizione e coperchio siano integri e ben chiusi.",
      care: "Questa custodia in ABS non è un posacenere. Non inserire sigarette accese, cenere o mozziconi caldi. Asciugare dopo la pulizia, tenere lontano da fiamme e calore ed evitare il contatto con oggetti appuntiti.",
      labels: ["Misure (A × L × P)", "Peso", "Materiale", "Colori", "Capacità", "Utilizzo", "Struttura", "Nota sulle foto"],
      weight: "Circa 30 g", capacity: "10 standard / 13 medie / 20 sottili (senza accendino all'interno)",
      use: "Outdoor / escursionismo / fuoristrada / sci", structure: "Coperchio a scatto, guarnizione, laccetto",
      photo: "Solo custodia. Sigarette e accendini nelle foto non sono inclusi. La foto dei due colori serve al confronto.",
    },
    fr: {
      name: "Étui Outdoor avec Joint", colors: ["Blanc transparent", "Noir transparent"],
      caption: "Coque transparente / couvercle à ouverture rapide / env. 30 g",
      intro: "Un étui léger en ABS avec couvercle à ouverture rapide, joint et dragonne. Le blanc transparent est incolore, le noir transparent présente une teinte fumée. Un rangement compact à emporter ou à suspendre à son équipement.",
      features: ["107 × 59 × 23 mm ; poids d'environ 30 g", "Couvercle à ouverture rapide et fermeture résistante à l'eau ; vérifier avant utilisation", "Sans briquet : 10 cigarettes standard, 13 moyennes ou 20 fines"],
      selected: "Couleur sélectionnée : {size}. Les photos correspondent à ce choix.", added: "Étui {size} ajouté au sac.",
      conditionLabel: "Avant utilisation", sourceLabel: "Rangement et entretien",
      condition: "Aucun indice d'étanchéité ni résultat d'essai d'immersion n'a été fourni. Le joint ne garantit pas une protection en immersion prolongée ou en plongée. Pour les activités de plein air, la randonnée, le tout-terrain et le ski, vérifier l'état du joint et la fermeture du couvercle.",
      care: "Cet étui en ABS est un rangement, pas un cendrier. Ne pas y déposer de cigarettes allumées, de cendres ou de mégots chauds. Essuyer après nettoyage, éloigner des flammes et de la chaleur et éviter les objets pointus sur la surface transparente.",
      labels: ["Dimensions (H × L × P)", "Poids", "Matière", "Couleurs", "Capacité", "Usage", "Structure", "À propos des photos"],
      weight: "Environ 30 g", capacity: "10 standard / 13 moyennes / 20 fines (sans briquet à l'intérieur)",
      use: "Plein air / randonnée / tout-terrain / ski", structure: "Couvercle à ouverture rapide, joint et dragonne",
      photo: "Étui seul. Cigarettes et briquets photographiés non inclus. La photo des deux couleurs sert de comparaison.",
    },
    ja: {
      name: "アウトドア密閉ポップアップケース", colors: ["クリアホワイト", "クリアブラック"],
      caption: "透明ボディ / ワンタッチ開閉 / 約30 g",
      intro: "軽量なABS製ボディに、ポップアップ式のふた、シールリング、携帯ストラップを備えた収納ケース。無色透明のホワイトと、スモーク調のブラックから選べます。持ち歩きにも、装備に取り付ける小物としても。",
      features: ["107 × 59 × 23 mm、重さ約30 g", "ポップアップ式のふたと防水を考慮した密閉構造。使用前に閉まりを確認してください", "ライターを入れない場合、レギュラー10本・中細13本・スリム20本を収納可能"],
      selected: "{size}を選択しました。対応する写真を表示しています。", added: "{size}のケースをバッグに追加しました。",
      conditionLabel: "使用前のご案内", sourceLabel: "収納とお手入れ",
      condition: "防水等級や浸水試験のデータは提供されていません。長時間の水没や潜水時の防水を保証するものではありません。アウトドア、登山、オフロード、スキーで使用する際は、シールリングとふたに損傷がなく、しっかり閉じていることを確認してください。",
      care: "本品はABS製の収納ケースで、灰皿ではありません。火のついたタバコ、灰、冷めていない吸い殻を入れないでください。清掃後は水分を拭き取り、火気・高温を避け、鋭利な物で透明表面を傷つけないようにしてください。",
      labels: ["サイズ（高さ × 幅 × 厚さ）", "重さ", "素材", "カラー", "収納量", "使用シーン", "構造", "写真について"],
      weight: "約30 g", capacity: "レギュラー10本 / 中細13本 / スリム20本（ライターを入れない場合）",
      use: "アウトドア / 登山 / オフロード / スキー", structure: "ポップアップ式ふた、シールリング、ストラップ",
      photo: "販売商品はケースのみです。写真のタバコとライターは含まれません。2色の写真は色比較用です。",
    },
    es: {
      name: "Estuche Outdoor con Junta", colors: ["Blanco transparente", "Negro transparente"],
      caption: "Carcasa transparente / tapa de apertura rápida / aprox. 30 g",
      intro: "Un estuche ligero de ABS con tapa de apertura rápida, junta y correa. El blanco transparente es incoloro y el negro transparente tiene un tono ahumado. Un organizador compacto para llevar o colgar del equipo.",
      features: ["107 × 59 × 23 mm; aproximadamente 30 g", "Tapa de apertura rápida y cierre resistente al agua; comprobar antes de usar", "Sin encendedor: 10 cigarrillos normales, 13 medianos o 20 finos"],
      selected: "Seleccionado: {size}. Las fotos muestran este color.", added: "Estuche {size} añadido a la bolsa.",
      conditionLabel: "Antes de usar", sourceLabel: "Almacenamiento y cuidado",
      condition: "No se ha facilitado un grado de impermeabilidad ni datos de pruebas de inmersión. La junta no garantiza protección en inmersiones prolongadas o buceo. Para actividades al aire libre, senderismo, rutas todoterreno y esquí, comprobar que junta y tapa estén intactas y bien cerradas.",
      care: "Este estuche de ABS es para guardar objetos, no es un cenicero. No introducir cigarrillos encendidos, ceniza o colillas calientes. Secar después de limpiar, mantener alejado del fuego y del calor y evitar arañar la superficie con objetos afilados.",
      labels: ["Medidas (alto × ancho × fondo)", "Peso", "Material", "Colores", "Capacidad", "Uso", "Estructura", "Nota sobre las fotos"],
      weight: "Aprox. 30 g", capacity: "10 normales / 13 medianos / 20 finos (sin encendedor dentro)",
      use: "Aire libre / senderismo / todoterreno / esquí", structure: "Tapa de apertura rápida, junta y correa",
      photo: "Solo estuche. Los cigarrillos y encendedores de las fotos no están incluidos. La foto de ambos colores es comparativa.",
    },
    ru: {
      name: "Походный футляр с уплотнением", colors: ["Прозрачный белый", "Прозрачный чёрный"],
      caption: "Прозрачный корпус / откидная крышка / около 30 г",
      intro: "Лёгкий футляр из ABS с откидной крышкой, уплотнительным кольцом и ремешком. Белый вариант бесцветно-прозрачный, чёрный имеет дымчатый оттенок. Компактное хранение в дороге, с возможностью подвесить к снаряжению.",
      features: ["107 × 59 × 23 мм; вес около 30 г", "Быстро открывающаяся крышка и уплотнение для защиты от воды; проверяйте закрытие перед использованием", "Без зажигалки: 10 обычных, 13 средних или 20 тонких сигарет"],
      selected: "Выбран цвет: {size}. Показаны соответствующие фотографии.", added: "Футляр, {size}, добавлен в сумку.",
      conditionLabel: "Перед использованием", sourceLabel: "Хранение и уход",
      condition: "Класс водозащиты и результаты испытаний погружением не предоставлены. Уплотнение не гарантирует защиту при длительном погружении или нырянии. Перед прогулками, горными походами, поездками по бездорожью и катанием на лыжах проверяйте целостность уплотнения и плотность закрытия крышки.",
      care: "Этот футляр из ABS предназначен для хранения, а не для пепла. Не кладите внутрь горящие сигареты, пепел или горячие окурки. После очистки вытирайте насухо, берегите от огня и нагрева, не царапайте прозрачную поверхность острыми предметами.",
      labels: ["Размеры (В × Ш × Т)", "Вес", "Материал", "Цвета", "Вместимость", "Применение", "Конструкция", "О фотографиях"],
      weight: "Около 30 г", capacity: "10 обычных / 13 средних / 20 тонких сигарет (без зажигалки внутри)",
      use: "На природе / горные походы / бездорожье / лыжи", structure: "Откидная крышка, уплотнительное кольцо, ремешок",
      photo: "Только футляр. Сигареты и зажигалки на фото не входят в комплект. Фото двух цветов служит для сравнения.",
    },
    ko: {
      name: "아웃도어 밀폐 팝업 수납 케이스", colors: ["투명 화이트", "투명 블랙"],
      caption: "투명 바디 / 팝업 뚜껑 / 약 30 g",
      intro: "가벼운 ABS 바디에 팝업 뚜껑, 밀폐 링, 휴대용 스트랩을 갖춘 수납 케이스입니다. 무색투명한 화이트와 스모크 톤의 블랙 중 선택할 수 있으며, 휴대하거나 장비에 걸어 사용할 수 있습니다.",
      features: ["107 × 59 × 23 mm, 무게 약 30 g", "팝업 뚜껑과 방수를 고려한 밀폐 구조. 사용 전 닫힘 상태를 확인해 주세요", "라이터를 넣지 않을 때 일반형 10개비, 중간 굵기 13개비 또는 슬림형 20개비 수납"],
      selected: "{size} 선택 완료. 해당 색상의 사진을 표시합니다.", added: "{size} 케이스를 장바구니에 담았습니다.",
      conditionLabel: "사용 전 안내", sourceLabel: "수납 및 관리",
      condition: "방수 등급이나 침수 시험 데이터는 제공되지 않았습니다. 장시간 물에 담그거나 잠수할 때의 방수 성능을 보장하지 않습니다. 야외 활동, 등산, 오프로드, 스키에 사용하기 전 밀폐 링과 뚜껑의 손상 여부 및 닫힘 상태를 확인해 주세요.",
      care: "본 제품은 ABS 수납 케이스이며 재떨이가 아닙니다. 불이 붙은 담배, 재, 식지 않은 꽁초를 넣지 마세요. 세척 후 물기를 닦고 화기와 고온을 피하며, 날카로운 물건으로 투명 표면이 긁히지 않도록 주의해 주세요.",
      labels: ["크기 (높이 × 너비 × 두께)", "무게", "소재", "색상", "수납량", "사용 환경", "구조", "사진 안내"],
      weight: "약 30 g", capacity: "일반형 10개비 / 중간 굵기 13개비 / 슬림형 20개비 (라이터 미수납 시)",
      use: "야외 / 등산 / 오프로드 / 스키", structure: "팝업 뚜껑, 밀폐 링, 휴대용 스트랩",
      photo: "케이스만 판매하며 사진 속 담배와 라이터는 포함되지 않습니다. 두 색상이 함께 나온 사진은 비교용입니다.",
    },
  };
  const localized = key => Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry[key]]));
  const optionLabels = Object.fromEntries(["clear-white", "clear-black"].map((id, index) => [id,
    Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.colors[index]])),
  ]));
  const spec = (index, value) => ({
    label: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.labels[index]])), value,
  });
  const white = ["assets/sealed-case-white-01.jpg", "assets/sealed-case-white-02.jpg", "assets/sealed-case-white-03.jpg"];
  const black = [
    "assets/sealed-case-black-01.jpg", "assets/sealed-case-black-02.jpg", "assets/sealed-case-black-03.jpg",
    ...[1, 2, 3, 4, 5].map(index => `assets/sealed-case-black-lifestyle-${String(index).padStart(2, "0")}.png`),
  ];
  const comparison = "assets/sealed-case-both.jpg";
  const colors = Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.colors.join(" / ")]));
  window.catalogData.products.push({
    id: "P-011", slug: "sealed-outdoor-storage-case", category: "objects",
    media: {
      cover: white[0], gallery: [...white, ...black, comparison],
      variants: {
        "clear-white": { cover: white[0], gallery: [...white, comparison] },
        "clear-black": { cover: black[0], gallery: [...black, comparison] },
      },
    },
    pricing: { currency: "EUR", label: common.pricing.label },
    fulfillment: { type: "inquiry", leadTime: common.fulfillment.leadTime },
    inventory: { status: "paused", quantityLabel: common.inventory.quantityLabel, oneOfAKind: false },
    sizing: {
      options: ["clear-white", "clear-black"], default: "clear-white", label: common.sizing.label, optionLabels,
      messages: { selected: localized("selected"), added: localized("added") },
    },
    attributes: { color: colors },
    copy: {
      name: localized("name"), categoryLabel: common.copy.categoryLabel, cardCaption: localized("caption"),
      intro: localized("intro"), features: localized("features"),
    },
    notes: {
      condition: localized("condition"), source: localized("care"),
      conditionLabel: localized("conditionLabel"), sourceLabel: localized("sourceLabel"),
    },
    specifications: [
      spec(0, "107 × 59 × 23 mm"), spec(1, localized("weight")), spec(2, "ABS"), spec(3, colors),
      spec(4, localized("capacity")), spec(5, localized("use")), spec(6, localized("structure")), spec(7, localized("photo")),
    ],
    searchTokens: ["sealed outdoor case", "waterproof case", "cigarette case", "密封烟盒", "防水烟盒", "弹射烟盒", "弹盖", "透明白", "透明黑", "收纳盒", "户外", "Zigarettenetui", "portasigarette", "étui", "携帯ケース", "estuche", "футляр", "담배 케이스"],
  });
})();

(() => {
  const common = window.catalogData.products.find(product => product.slug === "slim-mirror-cigarette-case");
  const copy = {
    zh: {
      name: "复古十字纹钢制烟灰缸", color: "复古银色", caption: "十字纹装饰 / 直径 120 mm / 礼盒款",
      intro: "圆形钢制托盘，以中央十字与边缘立体纹样呈现复古金属质感。直径 120 mm，带三处烟托凹槽，可水洗，配礼盒包装，适合室内桌面摆放。",
      features: ["直径 120 mm（12 cm），重量 45 g", "钢制缸体，中央十字与边缘立体装饰，三处烟托凹槽", "可水洗，清洁后擦干；礼盒包装适合自用或赠礼"],
      variant: "规格", option: "120 mm / 礼盒款", selected: "已选择：{size}。", added: "十字纹烟灰缸（{size}）已加入购物袋。",
      conditionLabel: "购买须知", sourceLabel: "清洁与使用",
      condition: "材质按提供资料标注为钢，未提供具体钢种。实拍图中的边缘十字及星形纹样有细节差异，下单前可联系客服确认当前实物。礼盒合照为展示，并非三件套。",
      care: "请待烟蒂完全熄灭、缸体冷却后再清洁。可用清水和软布清洗，洗后擦干，避免硬物刮擦装饰。车内仅建议停车时稳固放置使用，不代表适配所有车型或杯架；请勿在驾驶时操作。",
      labels: ["直径", "重量", "材质", "颜色", "包装", "适用场景", "结构", "图片说明"],
      material: "钢（具体钢种未提供）", packaging: "单件烟灰缸 / 礼盒包装", use: "室内桌面 / 车内稳固放置（停车时）", structure: "圆形缸体 / 三处烟托凹槽 / 立体十字纹装饰",
      photo: "七张实拍图展示外观与礼盒。香烟等拍摄道具不包含在内；合照不代表套装数量。",
    },
    en: {
      name: "Cross-Motif Steel Ashtray", color: "Antique silver tone", caption: "Raised cross motifs / 120 mm diameter / gift box",
      intro: "A round steel ashtray with a central cross and raised rim motifs for a vintage metal look. Measuring 120 mm across, it has three cigarette rests, can be washed with water and comes in a gift box for indoor tabletop use.",
      features: ["120 mm (12 cm) diameter; weight 45 g", "Steel body with raised decorative motifs and three cigarette rests", "Washable with water; dry after cleaning. Gift-box presentation"],
      variant: "Option", option: "120 mm / gift box", selected: "Selected: {size}.", added: "Cross-motif ashtray ({size}) added to bag.",
      conditionLabel: "Before ordering", sourceLabel: "Cleaning & use",
      condition: "Material is listed as steel; the specific steel grade has not been supplied. Rim decorations vary between cross and star details in the photos; contact us to confirm the current item. The group photo does not indicate a set of three.",
      care: "Wait until all cigarette ends are extinguished and the tray has cooled before cleaning. Wash with water and a soft cloth, then dry; avoid scratching the decorations. In a car, use only while parked on a stable surface. Universal vehicle or cup-holder fit is not claimed. Do not handle while driving.",
      labels: ["Diameter", "Weight", "Material", "Colour", "Packaging", "Use", "Construction", "Photo note"],
      material: "Steel (grade unspecified)", packaging: "One ashtray / gift box", use: "Indoor tabletop / stable placement in a parked car", structure: "Round body / three cigarette rests / raised cross motifs",
      photo: "Seven photographs show the item and its gift box. Cigarettes and other props are not included. Group photos do not indicate set quantity.",
    },
    de: {
      name: "Stahl-Aschenbecher mit Kreuzmotiven", color: "Antiker Silberton", caption: "Erhabene Kreuzmotive / Durchmesser 120 mm / Geschenkbox",
      intro: "Runder Stahl-Aschenbecher mit zentralem Kreuz und erhabenen Randmotiven im Vintage-Metalllook. Mit 120 mm Durchmesser, drei Zigarettenablagen und Geschenkbox. Mit Wasser abwaschbar und für den Tisch im Innenbereich geeignet.",
      features: ["Durchmesser 120 mm (12 cm); Gewicht 45 g", "Stahlkörper mit erhabenen Dekormotiven und drei Zigarettenablagen", "Mit Wasser abwaschbar; anschließend trocknen. Mit Geschenkbox"],
      variant: "Ausführung", option: "120 mm / Geschenkbox", selected: "Ausgewählt: {size}.", added: "Aschenbecher mit Kreuzmotiven ({size}) zur Tasche hinzugefügt.",
      conditionLabel: "Vor der Bestellung", sourceLabel: "Reinigung & Gebrauch",
      condition: "Als Material ist Stahl angegeben; eine genaue Stahlsorte liegt nicht vor. Die Randmotive zeigen auf den Fotos Unterschiede bei Kreuz- und Sterndetails. Bitte das aktuelle Exemplar vor der Bestellung bestätigen lassen. Das Gruppenfoto zeigt kein Dreierset.",
      care: "Erst reinigen, wenn alle Stummel erloschen sind und der Aschenbecher abgekühlt ist. Mit Wasser und weichem Tuch reinigen, dann trocknen; Dekor nicht zerkratzen. Im Auto nur im Stand und sicher aufgestellt verwenden. Keine universelle Passform für Fahrzeuge oder Getränkehalter zugesichert. Nicht während der Fahrt bedienen.",
      labels: ["Durchmesser", "Gewicht", "Material", "Farbe", "Verpackung", "Einsatz", "Aufbau", "Fotohinweis"],
      material: "Stahl (Sorte nicht angegeben)", packaging: "Ein Aschenbecher / Geschenkbox", use: "Tisch im Innenbereich / sicher im geparkten Auto", structure: "Runder Körper / drei Ablagen / erhabene Kreuzmotive",
      photo: "Sieben Fotos zeigen Artikel und Geschenkbox. Zigaretten und weitere Requisiten sind nicht enthalten. Gruppenfotos geben keine Setmenge an.",
    },
    it: {
      name: "Posacenere in Acciaio con Croci", color: "Tono argento anticato", caption: "Croci in rilievo / diametro 120 mm / confezione regalo",
      intro: "Un posacenere rotondo in acciaio con croce centrale e motivi in rilievo sul bordo, dall'aspetto vintage. Diametro di 120 mm, tre appoggi per sigarette, lavabile con acqua e fornito in confezione regalo per il tavolo di casa.",
      features: ["Diametro 120 mm (12 cm); peso 45 g", "Corpo in acciaio con decorazioni in rilievo e tre appoggi per sigarette", "Lavabile con acqua; asciugare dopo la pulizia. Confezione regalo"],
      variant: "Versione", option: "120 mm / confezione regalo", selected: "Selezionato: {size}.", added: "Posacenere con croci ({size}) aggiunto alla borsa.",
      conditionLabel: "Prima di acquistare", sourceLabel: "Pulizia e utilizzo",
      condition: "Il materiale indicato è acciaio; la lega specifica non è stata fornita. Le foto mostrano differenze nei dettagli a croce e a stella sul bordo: contattaci per confermare l'esemplare attuale. La foto di gruppo non indica un set da tre.",
      care: "Pulire solo dopo aver spento tutti i mozziconi e lasciato raffreddare il posacenere. Usare acqua e un panno morbido, poi asciugare; non graffiare le decorazioni. In auto usarlo solo a veicolo parcheggiato e ben appoggiato. Non è garantita la compatibilità con ogni veicolo o portabicchieri. Non maneggiarlo durante la guida.",
      labels: ["Diametro", "Peso", "Materiale", "Colore", "Confezione", "Utilizzo", "Struttura", "Nota sulle foto"],
      material: "Acciaio (lega non specificata)", packaging: "Un posacenere / confezione regalo", use: "Tavolo da interno / appoggio stabile in auto parcheggiata", structure: "Corpo rotondo / tre appoggi / croci in rilievo",
      photo: "Sette foto mostrano articolo e confezione regalo. Sigarette e altri oggetti di scena non sono inclusi. Le foto di gruppo non indicano la quantità del set.",
    },
    fr: {
      name: "Cendrier en Acier à Motifs Croix", color: "Ton argent vieilli", caption: "Croix en relief / diamètre 120 mm / coffret cadeau",
      intro: "Un cendrier rond en acier, orné d'une croix centrale et de motifs en relief sur le bord, pour un aspect métal vintage. Diamètre de 120 mm, trois repose-cigarettes, lavable à l'eau et présenté en coffret cadeau pour une table à l'intérieur.",
      features: ["Diamètre 120 mm (12 cm) ; poids 45 g", "Corps en acier, décors en relief et trois repose-cigarettes", "Lavable à l'eau ; sécher après nettoyage. Coffret cadeau"],
      variant: "Version", option: "120 mm / coffret cadeau", selected: "Version sélectionnée : {size}.", added: "Cendrier à motifs croix ({size}) ajouté au sac.",
      conditionLabel: "Avant de commander", sourceLabel: "Nettoyage et utilisation",
      condition: "Le matériau indiqué est l'acier ; sa nuance précise n'a pas été fournie. Les photos présentent des différences entre les motifs de croix et d'étoiles du bord. Contactez-nous pour confirmer l'article actuel. La photo de groupe ne représente pas un lot de trois.",
      care: "Attendre que tous les mégots soient éteints et que le cendrier soit froid avant de le nettoyer. Laver à l'eau avec un chiffon doux, puis sécher ; éviter de rayer les décors. En voiture, utiliser uniquement à l'arrêt, sur un support stable. Compatibilité universelle avec les véhicules ou porte-gobelets non garantie. Ne pas manipuler en conduisant.",
      labels: ["Diamètre", "Poids", "Matière", "Couleur", "Emballage", "Usage", "Structure", "À propos des photos"],
      material: "Acier (nuance non précisée)", packaging: "Un cendrier / coffret cadeau", use: "Table intérieure / support stable dans une voiture à l'arrêt", structure: "Corps rond / trois repose-cigarettes / croix en relief",
      photo: "Sept photos montrent l'article et son coffret. Cigarettes et autres accessoires de mise en scène non inclus. Les photos de groupe n'indiquent pas la quantité vendue.",
    },
    ja: {
      name: "クロスモチーフのスチール灰皿", color: "アンティークシルバー調", caption: "立体クロス装飾 / 直径120 mm / ギフトボックス",
      intro: "中央のクロスと縁の立体モチーフが、ヴィンテージ調の金属の表情を引き立てる丸型灰皿。直径120 mm、3か所のタバコ受け付き。水洗いができ、室内の卓上用としてギフトボックスに収めてお届けします。",
      features: ["直径120 mm（12 cm）、重さ45 g", "スチール製ボディ、立体装飾、3か所のタバコ受け", "水洗い可能。洗浄後は水分を拭き取ってください。ギフトボックス付き"],
      variant: "仕様", option: "120 mm / ギフトボックス", selected: "{size}を選択しました。", added: "クロスモチーフ灰皿（{size}）をバッグに追加しました。",
      conditionLabel: "ご購入前に", sourceLabel: "お手入れと使用",
      condition: "素材は提供情報に基づきスチールと記載しています。鋼種は未確認です。写真では縁のクロスや星形の装飾に違いがあるため、ご注文前に現在の実物をご確認ください。複数写っている写真は3点セットを意味しません。",
      care: "吸い殻が完全に消火され、本体が冷めてから清掃してください。水と柔らかい布で洗い、乾かして保管し、装飾を傷つけないようにしてください。車内では駐車中に安定した場所でのみ使用し、運転中は操作しないでください。すべての車種やカップホルダーへの適合を保証するものではありません。",
      labels: ["直径", "重さ", "素材", "カラー", "包装", "使用シーン", "構造", "写真について"],
      material: "スチール（鋼種未確認）", packaging: "灰皿1点 / ギフトボックス", use: "室内の卓上 / 駐車中の車内で安定した場所", structure: "丸型 / タバコ受け3か所 / 立体クロス装飾",
      photo: "7枚の実物写真で本体とギフトボックスをご紹介。タバコなどの撮影小物は含まれません。集合写真はセット数量を示すものではありません。",
    },
    es: {
      name: "Cenicero de Acero con Cruces", color: "Tono plata envejecida", caption: "Cruces en relieve / diámetro 120 mm / caja de regalo",
      intro: "Un cenicero redondo de acero con una cruz central y motivos en relieve en el borde, de aspecto vintage. Con 120 mm de diámetro, tres apoyos para cigarrillos y caja de regalo. Lavable con agua, para mesas de interior.",
      features: ["Diámetro 120 mm (12 cm); peso 45 g", "Cuerpo de acero con relieves y tres apoyos para cigarrillos", "Lavable con agua; secar después de limpiar. Caja de regalo"],
      variant: "Versión", option: "120 mm / caja de regalo", selected: "Seleccionado: {size}.", added: "Cenicero con cruces ({size}) añadido a la bolsa.",
      conditionLabel: "Antes de comprar", sourceLabel: "Limpieza y uso",
      condition: "El material indicado es acero; no se ha facilitado el tipo concreto. Las fotos muestran diferencias en los detalles de cruces y estrellas del borde. Contacta para confirmar la pieza actual antes de comprar. La foto de grupo no representa un juego de tres.",
      care: "Limpiar cuando las colillas estén apagadas y el cenicero se haya enfriado. Usar agua y un paño suave, secar y evitar arañar los adornos. En el coche, utilizar solo estando aparcado y sobre una superficie estable. No se garantiza compatibilidad universal con vehículos o portavasos. No manipular al conducir.",
      labels: ["Diámetro", "Peso", "Material", "Color", "Presentación", "Uso", "Estructura", "Nota sobre las fotos"],
      material: "Acero (tipo no especificado)", packaging: "Un cenicero / caja de regalo", use: "Mesa de interior / superficie estable en coche aparcado", structure: "Cuerpo redondo / tres apoyos / cruces en relieve",
      photo: "Siete fotos muestran el artículo y su caja. Cigarrillos y otros accesorios de atrezo no incluidos. Las fotos de grupo no indican la cantidad vendida.",
    },
    ru: {
      name: "Стальная пепельница с крестами", color: "Состаренный серебристый тон", caption: "Объёмные кресты / диаметр 120 мм / подарочная коробка",
      intro: "Круглая стальная пепельница с центральным крестом и объёмными мотивами по краю, с винтажным металлическим обликом. Диаметр 120 мм, три выемки для сигарет. Можно мыть водой; поставляется в подарочной коробке для настольного использования в помещении.",
      features: ["Диаметр 120 мм (12 см); вес 45 г", "Стальной корпус, объёмный декор и три выемки для сигарет", "Можно мыть водой; после мытья вытереть насухо. Подарочная коробка"],
      variant: "Исполнение", option: "120 мм / подарочная коробка", selected: "Выбрано: {size}.", added: "Пепельница с крестами ({size}) добавлена в сумку.",
      conditionLabel: "Перед заказом", sourceLabel: "Очистка и использование",
      condition: "Материал указан как сталь; конкретная марка не предоставлена. На фото есть различия в деталях крестов и звёзд по краю. Перед заказом уточните вид текущего экземпляра. Групповое фото не означает комплект из трёх штук.",
      care: "Перед очисткой полностью погасите окурки и дайте корпусу остыть. Мойте водой с мягкой тканью, затем вытирайте насухо; не царапайте декор. В автомобиле используйте только на стоянке, устойчиво разместив пепельницу. Универсальная совместимость с автомобилями и подстаканниками не заявлена. Не пользуйтесь во время управления автомобилем.",
      labels: ["Диаметр", "Вес", "Материал", "Цвет", "Упаковка", "Применение", "Конструкция", "О фотографиях"],
      material: "Сталь (марка не указана)", packaging: "Одна пепельница / подарочная коробка", use: "На столе в помещении / устойчиво в припаркованной машине", structure: "Круглый корпус / три выемки / объёмные кресты",
      photo: "Семь фотографий показывают изделие и подарочную коробку. Сигареты и другой реквизит не входят в комплект. Групповые фото не указывают количество в наборе.",
    },
    ko: {
      name: "크로스 모티프 스틸 재떨이", color: "앤티크 실버 톤", caption: "입체 십자가 장식 / 지름 120 mm / 선물 상자",
      intro: "중앙 십자가와 테두리의 입체 모티프로 빈티지한 금속 질감을 표현한 원형 스틸 재떨이입니다. 지름 120 mm, 담배 받침 홈 3개를 갖추었으며 물세척이 가능합니다. 실내 테이블용으로 선물 상자와 함께 제공됩니다.",
      features: ["지름 120 mm (12 cm), 무게 45 g", "스틸 바디, 입체 장식, 담배 받침 홈 3개", "물세척 가능. 세척 후 물기를 닦아 주세요. 선물 상자 포함"],
      variant: "구성", option: "120 mm / 선물 상자", selected: "{size} 구성을 선택했습니다.", added: "크로스 재떨이 ({size})를 장바구니에 담았습니다.",
      conditionLabel: "구매 전 안내", sourceLabel: "세척 및 사용",
      condition: "제공된 정보에 따라 소재를 스틸로 표기하며 구체적인 강종은 확인되지 않았습니다. 사진의 테두리 십자가와 별 모티프에 차이가 있으니 주문 전 현재 실물을 확인해 주세요. 여러 개가 함께 나온 사진은 3개 세트를 의미하지 않습니다.",
      care: "꽁초를 완전히 끄고 본체가 식은 후 세척해 주세요. 물과 부드러운 천으로 닦고 물기를 제거하며 장식에 흠집이 나지 않도록 주의하세요. 차량에서는 주차 중 안정적으로 놓고 사용하며 운전 중에는 조작하지 마세요. 모든 차종이나 컵홀더에 맞는 제품은 아닙니다.",
      labels: ["지름", "무게", "소재", "색상", "포장", "사용 환경", "구조", "사진 안내"],
      material: "스틸 (강종 미확인)", packaging: "재떨이 1개 / 선물 상자", use: "실내 테이블 / 주차된 차량의 안정적인 위치", structure: "원형 바디 / 받침 홈 3개 / 입체 십자가 장식",
      photo: "실물 사진 7장으로 본체와 선물 상자를 보여드립니다. 담배 등 촬영 소품은 포함되지 않으며 단체 사진은 세트 수량을 의미하지 않습니다.",
    },
  };
  const localized = key => Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry[key]]));
  const spec = (index, value) => ({
    label: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.labels[index]])), value,
  });
  window.catalogData.products.push({
    id: "P-012", slug: "cross-motif-steel-ashtray", category: "objects",
    media: {
      cover: "assets/cross-ashtray-07.jpg", layout: "filmstrip",
      gallery: [7, 6, 1, 2, 3, 5, 4].map(index => `assets/cross-ashtray-${String(index).padStart(2, "0")}.jpg`),
    },
    pricing: { currency: "EUR", label: common.pricing.label },
    fulfillment: { type: "inquiry", leadTime: common.fulfillment.leadTime },
    inventory: { status: "paused", quantityLabel: common.inventory.quantityLabel, oneOfAKind: false },
    sizing: {
      options: ["gift-box"], default: "gift-box", label: localized("variant"),
      optionLabels: { "gift-box": localized("option") },
      messages: { selected: localized("selected"), added: localized("added") },
    },
    attributes: { color: localized("color") },
    copy: {
      name: localized("name"), categoryLabel: common.copy.categoryLabel, cardCaption: localized("caption"),
      intro: localized("intro"), features: localized("features"),
    },
    notes: {
      condition: localized("condition"), source: localized("care"),
      conditionLabel: localized("conditionLabel"), sourceLabel: localized("sourceLabel"),
    },
    specifications: [
      spec(0, "120 mm / 12 cm"), spec(1, "45 g"), spec(2, localized("material")), spec(3, localized("color")),
      spec(4, localized("packaging")), spec(5, localized("use")), spec(6, localized("structure")), spec(7, localized("photo")),
    ],
    searchTokens: ["cross ashtray", "steel ashtray", "gift box", "十字烟灰缸", "复古烟灰缸", "十字纹", "礼盒", "钢制", "可水洗", "Aschenbecher", "posacenere", "cendrier", "灰皿", "cenicero", "пепельница", "재떨이"],
  });
})();

(() => {
  const common = window.catalogData.products.find(product => product.slug === "slim-mirror-cigarette-case");
  const copy = {
    zh: {
      name: "Cigarknight 金条造型雪茄托盘套装", color: "复古金色", caption: "锌合金茄托 / 不锈钢托盘 / 礼盒装",
      intro: "金条造型茄托搭配长方形金色托盘，呈现复古金属质感。茄托与托盘为独立部件，可用于雪茄承托与烟灰收纳，适合商务待客、办公室及客厅桌面。套装采用礼盒包装。",
      features: ["托盘长 20 × 宽 8.5 × 高 1 cm；重量 220 g", "茄托为锌合金，托盘为不锈钢；金色外观并非纯金材质", "独立茄托与托盘组合，礼盒包装；不含展示用雪茄"],
      variant: "规格", option: "金色 / 礼盒套装", selected: "已选择：{size}。", added: "雪茄托盘套装（{size}）已加入购物袋。",
      conditionLabel: "材质与购买须知", sourceLabel: "使用与保养",
      condition: "GOLD、999.9、FINE GOLD 为金条造型的装饰刻字，不代表黄金材质或贵金属纯度。茄托为锌合金，托盘为不锈钢。茄托尺寸按所附资料图标注；图中的 1.7 cm 指承托凹槽跨度，并非高度。价格及供货情况请咨询确认。",
      care: "请在平稳、耐热的桌面上使用。清理前确认余火完全熄灭并等待部件冷却，以柔软布料轻拭，避免磨料、硬刷及刮擦。请勿将装饰托盘作为食品餐具。",
      labels: ["品牌", "托盘尺寸（长 × 宽 × 高）", "茄托尺寸（长 × 宽 × 厚，参考图）", "重量", "茄托材质", "托盘材质", "颜色", "套装与包装", "使用场景", "图片说明"],
      rest: "锌合金", tray: "不锈钢", packaging: "茄托 + 托盘 / 礼盒装", use: "商务待客 / 办公室 / 客厅",
      photo: "八张图片展示套装、承托方式、独立托盘及尺寸资料。雪茄为拍摄道具，不包含在套装内；末张为原始意大利语资料图。",
    },
    en: {
      name: "Cigarknight Gold-Bar Cigar Rest & Tray Set", color: "Antique gold tone", caption: "Zinc-alloy rest / stainless-steel tray / gift box",
      intro: "A gold-bar-shaped cigar rest paired with a rectangular gold-tone tray, with a vintage metal finish. The separate rest and tray support a cigar and collect ash for a reception setting, office or living-room tabletop. Presented in a gift box.",
      features: ["Tray: 20 × 8.5 × 1 cm (L × W × H); weight 220 g", "Zinc-alloy rest and stainless-steel tray; gold tone, not solid gold", "Separate rest and tray in a gift box; display cigars not included"],
      variant: "Option", option: "Gold tone / gift-box set", selected: "Selected: {size}.", added: "Cigar tray set ({size}) added to bag.",
      conditionLabel: "Materials & ordering", sourceLabel: "Use & care",
      condition: "GOLD, 999.9 and FINE GOLD are decorative gold-bar-style engravings, not claims of gold content or precious-metal purity. The rest is zinc alloy; the tray is stainless steel. Rest dimensions follow the supplied reference image; its 1.7 cm label is the groove span, not the height. Please confirm price and availability by inquiry.",
      care: "Use on a stable, heat-resistant tabletop. Fully extinguish embers and let the parts cool before cleaning. Wipe gently with a soft cloth; avoid abrasives, hard brushes and scratches. Do not use the decorative tray as food tableware.",
      labels: ["Brand", "Tray dimensions (L × W × H)", "Rest dimensions (L × W × thickness, reference)", "Weight", "Rest material", "Tray material", "Colour", "Set & packaging", "Use", "Photo note"],
      rest: "Zinc alloy", tray: "Stainless steel", packaging: "Cigar rest + tray / gift box", use: "Business hospitality / office / living room",
      photo: "Eight images show the set, cigar support, separate tray and dimensions. Display cigars are not included. The final image is the original Italian information graphic.",
    },
    de: {
      name: "Cigarknight Zigarrenablage im Goldbarren-Look mit Tablett", color: "Antiker Goldton", caption: "Zinklegierung / Edelstahl-Tablett / Geschenkbox",
      intro: "Eine Zigarrenablage in Goldbarrenform mit rechteckigem, goldfarbenem Tablett im Vintage-Metalllook. Die separaten Teile dienen als Zigarrenauflage und Ascheablage für Empfang, Büro oder Wohnzimmer. Mit Geschenkbox.",
      features: ["Tablett: 20 × 8,5 × 1 cm (L × B × H); Gewicht 220 g", "Ablage aus Zinklegierung, Tablett aus Edelstahl; goldfarben, kein Massivgold", "Separate Ablage und Tablett in Geschenkbox; abgebildete Zigarren nicht enthalten"],
      variant: "Ausführung", option: "Goldton / Geschenkset", selected: "Ausgewählt: {size}.", added: "Zigarrenablage-Set ({size}) zur Tasche hinzugefügt.",
      conditionLabel: "Material & Bestellung", sourceLabel: "Gebrauch & Pflege",
      condition: "GOLD, 999.9 und FINE GOLD sind dekorative Gravuren im Goldbarrenstil und keine Angaben zu Goldgehalt oder Edelmetallreinheit. Ablage: Zinklegierung; Tablett: Edelstahl. Die Ablagemaße stammen aus der Referenzabbildung; 1,7 cm bezeichnet die Spannweite der Mulde, nicht die Höhe. Preis und Verfügbarkeit bitte anfragen.",
      care: "Auf einer stabilen, hitzebeständigen Tischfläche verwenden. Glut vollständig löschen und Teile vor der Reinigung abkühlen lassen. Mit weichem Tuch vorsichtig abwischen; keine Scheuermittel oder harten Bürsten verwenden. Das Dekotablett nicht als Lebensmittelgeschirr nutzen.",
      labels: ["Marke", "Tablettmaße (L × B × H)", "Ablagemaße (L × B × Dicke, Referenz)", "Gewicht", "Material der Ablage", "Material des Tabletts", "Farbe", "Set & Verpackung", "Einsatz", "Fotohinweis"],
      rest: "Zinklegierung", tray: "Edelstahl", packaging: "Zigarrenablage + Tablett / Geschenkbox", use: "Geschäftlicher Empfang / Büro / Wohnzimmer",
      photo: "Acht Bilder zeigen Set, Zigarrenauflage, separates Tablett und Maße. Zigarren sind nicht enthalten. Das letzte Bild ist die originale italienische Informationsgrafik.",
    },
    it: {
      name: "Cigarknight Set Poggiasigari Lingotto e Vassoio", color: "Tono oro anticato", caption: "Poggiasigari in lega di zinco / vassoio in acciaio inox / confezione regalo",
      intro: "Un poggiasigari a forma di lingotto abbinato a un vassoio rettangolare color oro, dall'aspetto metallico vintage. I due elementi separati sostengono il sigaro e raccolgono la cenere, per accogliere ospiti, in ufficio o in salotto. Confezione regalo inclusa.",
      features: ["Vassoio: 20 × 8,5 × 1 cm (L × P × H); peso 220 g", "Poggiasigari in lega di zinco, vassoio in acciaio inox; color oro, non oro massiccio", "Poggiasigari e vassoio separati in confezione regalo; sigari non inclusi"],
      variant: "Versione", option: "Color oro / set regalo", selected: "Selezionato: {size}.", added: "Set poggiasigari ({size}) aggiunto alla borsa.",
      conditionLabel: "Materiali e acquisto", sourceLabel: "Utilizzo e cura",
      condition: "GOLD, 999.9 e FINE GOLD sono incisioni decorative ispirate a un lingotto, non indicazioni di contenuto d'oro o purezza. Poggiasigari in lega di zinco, vassoio in acciaio inox. Le misure del supporto seguono l'immagine fornita; 1,7 cm indica l'ampiezza dell'incavo, non l'altezza. Prezzo e disponibilità da confermare.",
      care: "Usare su un piano stabile e resistente al calore. Spegnere ogni brace e lasciare raffreddare prima di pulire. Passare delicatamente un panno morbido, evitando abrasivi, spazzole dure e graffi. Non usare il vassoio decorativo per servire alimenti.",
      labels: ["Marca", "Misure vassoio (L × P × H)", "Misure poggiasigari (L × P × spessore, riferimento)", "Peso", "Materiale poggiasigari", "Materiale vassoio", "Colore", "Set e confezione", "Utilizzo", "Nota sulle foto"],
      rest: "Lega di zinco", tray: "Acciaio inossidabile", packaging: "Poggiasigari + vassoio / confezione regalo", use: "Ospitalità professionale / ufficio / salotto",
      photo: "Otto immagini mostrano il set, l'appoggio, il vassoio separato e le misure. Sigari non inclusi. L'ultima immagine è la scheda originale in italiano.",
    },
    fr: {
      name: "Cigarknight Coffret Repose-Cigare Lingot et Plateau", color: "Ton or vieilli", caption: "Repose-cigare en alliage de zinc / plateau inox / coffret cadeau",
      intro: "Un repose-cigare en forme de lingot associé à un plateau rectangulaire doré, à l'aspect métal vintage. Les deux éléments séparés servent à poser un cigare et recueillir les cendres, pour recevoir, au bureau ou dans le salon. Présentés en coffret cadeau.",
      features: ["Plateau : 20 × 8,5 × 1 cm (L × l × H) ; poids 220 g", "Repose-cigare en alliage de zinc, plateau en acier inoxydable ; teinte dorée, pas d'or massif", "Deux éléments séparés en coffret cadeau ; cigares de présentation non inclus"],
      variant: "Version", option: "Doré / coffret cadeau", selected: "Version sélectionnée : {size}.", added: "Coffret repose-cigare ({size}) ajouté au sac.",
      conditionLabel: "Matières et commande", sourceLabel: "Utilisation et entretien",
      condition: "GOLD, 999.9 et FINE GOLD sont des gravures décoratives de style lingot, et non des indications de teneur en or ou de pureté. Support en alliage de zinc, plateau en inox. Les dimensions du support proviennent du visuel fourni ; 1,7 cm désigne la portée du creux, pas la hauteur. Prix et disponibilité à confirmer.",
      care: "Utiliser sur une surface stable et résistante à la chaleur. Éteindre les braises et laisser refroidir avant nettoyage. Essuyer délicatement avec un chiffon doux, sans abrasifs ni brosses dures. Ne pas utiliser le plateau décoratif comme vaisselle alimentaire.",
      labels: ["Marque", "Dimensions du plateau (L × l × H)", "Dimensions du support (L × l × épaisseur, référence)", "Poids", "Matière du support", "Matière du plateau", "Couleur", "Coffret et contenu", "Usage", "À propos des photos"],
      rest: "Alliage de zinc", tray: "Acier inoxydable", packaging: "Repose-cigare + plateau / coffret cadeau", use: "Accueil professionnel / bureau / salon",
      photo: "Huit images présentent le coffret, l'appui, le plateau séparé et les dimensions. Cigares non inclus. Le dernier visuel est la fiche originale en italien.",
    },
    ja: {
      name: "Cigarknight 金塊モチーフ シガーレスト＆トレーセット", color: "アンティークゴールド調", caption: "亜鉛合金レスト / ステンレストレー / ギフトボックス",
      intro: "金塊をかたどったシガーレストと、ヴィンテージ調の金色の長方形トレーを組み合わせたセット。別々のパーツで葉巻を支え、灰を受けます。来客対応やオフィス、リビングの卓上に。ギフトボックス付きです。",
      features: ["トレー：長さ20 × 幅8.5 × 高さ1 cm、重さ220 g", "レストは亜鉛合金、トレーはステンレス。金色の外観で純金ではありません", "独立したレストとトレーのギフトセット。撮影用の葉巻は含みません"],
      variant: "仕様", option: "ゴールド調 / ギフトセット", selected: "{size}を選択しました。", added: "シガートレーセット（{size}）をバッグに追加しました。",
      conditionLabel: "素材と購入前のご案内", sourceLabel: "使用とお手入れ",
      condition: "GOLD・999.9・FINE GOLDは金塊風の装飾刻印で、金の含有量や貴金属の純度を示すものではありません。レストは亜鉛合金、トレーはステンレスです。レスト寸法は付属資料画像に基づき、1.7 cmは受け溝の幅で高さではありません。価格と在庫はお問い合わせください。",
      care: "安定した耐熱性のある卓上で使用してください。残り火を完全に消し、冷めてから柔らかい布で優しく拭いてください。研磨剤や硬いブラシ、傷をつける扱いを避け、食品用食器として使用しないでください。",
      labels: ["ブランド", "トレー寸法（長さ × 幅 × 高さ）", "レスト寸法（長さ × 幅 × 厚さ、参考図）", "重さ", "レスト素材", "トレー素材", "カラー", "セット内容・包装", "使用シーン", "写真について"],
      rest: "亜鉛合金", tray: "ステンレス", packaging: "シガーレスト＋トレー / ギフトボックス", use: "ビジネスの来客対応 / オフィス / リビング",
      photo: "8枚の画像でセット、使い方、単体トレー、寸法をご紹介。葉巻は含まれません。最後の画像はイタリア語の原資料です。",
    },
    es: {
      name: "Cigarknight Set Reposapuros Lingote y Bandeja", color: "Tono oro envejecido", caption: "Soporte de aleación de zinc / bandeja de acero inoxidable / caja de regalo",
      intro: "Un reposapuros en forma de lingote con una bandeja rectangular dorada de aspecto metálico vintage. Las piezas separadas permiten apoyar el puro y recoger la ceniza, para recibir visitas, la oficina o el salón. Presentado en caja de regalo.",
      features: ["Bandeja: 20 × 8,5 × 1 cm (largo × ancho × alto); peso 220 g", "Soporte de aleación de zinc y bandeja de acero inoxidable; tono dorado, no oro macizo", "Soporte y bandeja independientes en caja de regalo; puros no incluidos"],
      variant: "Versión", option: "Dorado / set de regalo", selected: "Seleccionado: {size}.", added: "Set reposapuros ({size}) añadido a la bolsa.",
      conditionLabel: "Materiales y compra", sourceLabel: "Uso y cuidado",
      condition: "GOLD, 999.9 y FINE GOLD son grabados decorativos de estilo lingote, no indican contenido de oro ni pureza. Soporte de aleación de zinc y bandeja de acero inoxidable. Las medidas del soporte proceden de la imagen facilitada; 1,7 cm es la amplitud de la ranura, no la altura. Consulta precio y disponibilidad.",
      care: "Usar sobre una mesa estable y resistente al calor. Apagar las brasas y dejar enfriar antes de limpiar suavemente con un paño blando. Evitar abrasivos, cepillos duros y arañazos. No utilizar la bandeja decorativa como vajilla para alimentos.",
      labels: ["Marca", "Medidas de bandeja (largo × ancho × alto)", "Medidas del soporte (largo × ancho × grosor, referencia)", "Peso", "Material del soporte", "Material de bandeja", "Color", "Set y presentación", "Uso", "Nota sobre las fotos"],
      rest: "Aleación de zinc", tray: "Acero inoxidable", packaging: "Reposapuros + bandeja / caja de regalo", use: "Recepción profesional / oficina / salón",
      photo: "Ocho imágenes muestran el set, el apoyo, la bandeja separada y sus medidas. Puros no incluidos. La última imagen es la ficha original en italiano.",
    },
    ru: {
      name: "Cigarknight Подставка-слиток для сигары с подносом", color: "Состаренный золотистый тон", caption: "Цинковый сплав / поднос из нержавеющей стали / подарочная коробка",
      intro: "Подставка для сигары в форме слитка и прямоугольный золотистый поднос с винтажным металлическим обликом. Отдельные элементы служат опорой для сигары и собирают пепел. Для делового приёма, офиса или гостиной. В подарочной коробке.",
      features: ["Поднос: 20 × 8,5 × 1 см (Д × Ш × В); вес 220 г", "Подставка из цинкового сплава, поднос из нержавеющей стали; золотистый цвет, не золото", "Отдельные подставка и поднос в подарочной коробке; сигары не входят в комплект"],
      variant: "Исполнение", option: "Золотистый / подарочный набор", selected: "Выбрано: {size}.", added: "Набор для сигары ({size}) добавлен в сумку.",
      conditionLabel: "Материалы и заказ", sourceLabel: "Использование и уход",
      condition: "GOLD, 999.9 и FINE GOLD — декоративные надписи в стиле слитка, а не указание на содержание или пробу золота. Подставка: цинковый сплав; поднос: нержавеющая сталь. Размеры подставки взяты из предоставленной схемы; 1,7 см обозначает ширину выемки, не высоту. Уточняйте цену и наличие.",
      care: "Используйте на устойчивой жаростойкой поверхности. Полностью погасите угли и дайте деталям остыть перед очисткой. Бережно протирайте мягкой тканью без абразивов и жёстких щёток. Декоративный поднос не предназначен для подачи еды.",
      labels: ["Бренд", "Размеры подноса (Д × Ш × В)", "Размеры подставки (Д × Ш × толщина, схема)", "Вес", "Материал подставки", "Материал подноса", "Цвет", "Комплект и упаковка", "Применение", "О фотографиях"],
      rest: "Цинковый сплав", tray: "Нержавеющая сталь", packaging: "Подставка для сигары + поднос / подарочная коробка", use: "Деловой приём / офис / гостиная",
      photo: "Восемь изображений показывают набор, размещение сигары, отдельный поднос и размеры. Сигары не включены. Последнее изображение — оригинальная схема на итальянском языке.",
    },
    ko: {
      name: "Cigarknight 골드바 모티프 시가 받침·트레이 세트", color: "앤티크 골드 톤", caption: "아연 합금 받침 / 스테인리스 트레이 / 선물 상자",
      intro: "골드바 모양의 시가 받침과 빈티지한 금속 질감의 직사각형 골드 톤 트레이를 조합했습니다. 분리된 받침과 트레이로 시가를 지지하고 재를 받으며, 비즈니스 접객·사무실·거실 테이블에 어울립니다. 선물 상자 구성입니다.",
      features: ["트레이: 길이20 × 너비8.5 × 높이1 cm, 무게220 g", "받침은 아연 합금, 트레이는 스테인리스. 금색 외관이며 순금이 아닙니다", "독립형 받침과 트레이의 선물 세트. 촬영용 시가는 포함되지 않습니다"],
      variant: "구성", option: "골드 톤 / 선물 세트", selected: "{size} 구성을 선택했습니다.", added: "시가 트레이 세트 ({size})를 장바구니에 담았습니다.",
      conditionLabel: "소재 및 구매 안내", sourceLabel: "사용 및 관리",
      condition: "GOLD, 999.9, FINE GOLD는 골드바 모티프의 장식 각인이며 금 함량이나 귀금속 순도를 뜻하지 않습니다. 받침은 아연 합금, 트레이는 스테인리스입니다. 받침 치수는 제공된 자료 이미지를 기준으로 하며, 1.7 cm는 홈의 폭이지 높이가 아닙니다. 가격과 재고는 문의해 주세요.",
      care: "안정적이고 내열성이 있는 테이블에서 사용하세요. 잔불을 완전히 끄고 식힌 뒤 부드러운 천으로 닦아 주세요. 연마제나 단단한 솔, 긁힘을 피하고 장식용 트레이를 식기로 사용하지 마세요.",
      labels: ["브랜드", "트레이 크기 (길이 × 너비 × 높이)", "받침 크기 (길이 × 너비 × 두께, 참고 자료)", "무게", "받침 소재", "트레이 소재", "색상", "세트 및 포장", "사용 환경", "사진 안내"],
      rest: "아연 합금", tray: "스테인리스", packaging: "시가 받침 + 트레이 / 선물 상자", use: "비즈니스 접객 / 사무실 / 거실",
      photo: "이미지 8장으로 세트, 받침 사용, 단독 트레이 및 치수를 보여드립니다. 시가는 포함되지 않으며 마지막 이미지는 이탈리아어 원본 자료입니다.",
    },
  };
  const localized = key => Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry[key]]));
  const spec = (index, value) => ({
    label: Object.fromEntries(Object.entries(copy).map(([lang, entry]) => [lang, entry.labels[index]])), value,
  });
  window.catalogData.products.push({
    id: "P-013", slug: "cigarknight-gold-bar-cigar-set", category: "objects",
    media: {
      cover: "assets/cigar-tray-02.jpg", layout: "filmstrip",
      gallery: [2, 4, 3, 1, 5, 6, 7, 8].map(index => `assets/cigar-tray-${String(index).padStart(2, "0")}.jpg`),
    },
    pricing: { currency: "EUR", label: common.pricing.label },
    fulfillment: { type: "inquiry", leadTime: common.fulfillment.leadTime },
    inventory: { status: "paused", quantityLabel: common.inventory.quantityLabel, oneOfAKind: false },
    sizing: {
      options: ["gold-set"], default: "gold-set", label: localized("variant"),
      optionLabels: { "gold-set": localized("option") },
      messages: { selected: localized("selected"), added: localized("added") },
    },
    attributes: { color: localized("color") },
    copy: {
      name: localized("name"), categoryLabel: common.copy.categoryLabel, cardCaption: localized("caption"),
      intro: localized("intro"), features: localized("features"),
    },
    notes: {
      condition: localized("condition"), source: localized("care"),
      conditionLabel: localized("conditionLabel"), sourceLabel: localized("sourceLabel"),
    },
    specifications: [
      spec(0, "Cigarknight"), spec(1, "20 × 8.5 × 1 cm"), spec(2, "6.9 × 3.3 × 1 cm"), spec(3, "220 g"),
      spec(4, localized("rest")), spec(5, localized("tray")), spec(6, localized("color")),
      spec(7, localized("packaging")), spec(8, localized("use")), spec(9, localized("photo")),
    ],
    searchTokens: ["Cigarknight", "gold bar cigar rest", "cigar tray", "雪茄架", "雪茄托盘", "雪茄托架", "金条", "黄金风格", "烟灰缸", "礼盒", "Zigarrenablage", "poggiasigari", "repose-cigare", "シガーレスト", "reposapuros", "подставка для сигары", "시가 받침"],
  });
})();

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
