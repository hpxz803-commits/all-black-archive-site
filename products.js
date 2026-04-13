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
  ],
};
