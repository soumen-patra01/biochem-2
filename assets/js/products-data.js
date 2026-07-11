/* BIOCHEM TECHNOLOGIES — product catalogue data */
var BIOCHEM_PRODUCTS = [
  {
    code: "BC-WET 240", name: "Biowet Ultra", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Low-foam wetting & scouring agent with rapid absorbency for continuous and exhaust processes.",
    apps: ["Scouring", "Bleaching", "Desizing"], industries: ["Knits", "Woven", "Home Textile"],
    form: "Liquid", tech: ["eco", "zdhc"], flag: "featured",
    benefits: ["High wetting efficiency", "Low foaming", "Hard-water stable"]
  },
  {
    code: "BC-STB 118", name: "Biostab OX", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Organic peroxide stabilizer for controlled bleaching with minimal fibre damage.",
    apps: ["Bleaching"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"],
    benefits: ["Uniform whiteness", "Low fibre damage", "Silicate-free"]
  },
  {
    code: "BC-DMN 132", name: "Biodem Plus", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Demineralizing agent that removes metal ions and improves bleach bath stability.",
    apps: ["Demineralizing", "Bleaching"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [],
    benefits: ["Sequesters iron & copper", "Prevents pinholes", "Acid replacement"]
  },
  {
    code: "BC-LEV 315", name: "Biolevel RD", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "High-performance leveling agent for reactive dyeing with excellent migration and shade reproducibility.",
    apps: ["Reactive Dyeing", "Exhaust Dyeing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["zdhc"], flag: "new",
    benefits: ["Level dyeing", "Shade reproducibility", "Salt tolerant"]
  },
  {
    code: "BC-DSP 328", name: "Biodisperse PE", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "High-temperature dispersant and leveling agent for polyester disperse dyeing.",
    apps: ["Disperse Dyeing", "HTHP Dyeing"], industries: ["Woven", "Technical Textile"],
    form: "Liquid", tech: [],
    benefits: ["HT stability", "Prevents agglomeration", "Oligomer control"]
  },
  {
    code: "BC-SOP 342", name: "Biosoap ECO", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Low-temperature soaping agent that removes unfixed reactive dye in fewer wash baths.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven", "Garments"],
    form: "Liquid", tech: ["eco", "zdhc"], flag: "featured",
    benefits: ["Saves water & steam", "Improved fastness", "Low-temperature action"]
  },
  {
    code: "BC-FIX 355", name: "Biofix FF", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Formaldehyde-free dye fixing agent improving wet fastness of reactive and direct dyeings.",
    apps: ["Fixing", "After-treatment"], industries: ["Knits", "Denim", "Garments"],
    form: "Liquid", tech: ["eco", "zdhc"],
    benefits: ["Formaldehyde-free", "Improved wash fastness", "Minimal shade change"]
  },
  {
    code: "BC-THK 410", name: "Biothick SYN", cat: "printing", catLabel: "Printing Chemicals",
    summary: "Synthetic thickener for pigment printing with sharp outlines and high colour yield.",
    apps: ["Pigment Printing", "Rotary Printing"], industries: ["Woven", "Home Textile"],
    form: "Paste", tech: [],
    benefits: ["Sharp print outlines", "High colour yield", "Electrolyte tolerant"]
  },
  {
    code: "BC-BND 425", name: "Biobind SF", cat: "printing", catLabel: "Printing Chemicals",
    summary: "Soft-hand acrylic binder for pigment printing with excellent rubbing fastness.",
    apps: ["Pigment Printing"], industries: ["Knits", "Woven", "Garments"],
    form: "Emulsion", tech: ["zdhc"],
    benefits: ["Soft handle", "Rub fastness", "No screen clogging"]
  },
  {
    code: "BC-SIL 580", name: "Biosoft Silk", cat: "silicone", catLabel: "Silicone Softeners",
    summary: "Hydrophilic micro-silicone softener delivering premium hand-feel without yellowing on whites.",
    apps: ["Finishing", "Exhaust & Padding"], industries: ["Knits", "Home Textile", "Garments"],
    form: "Emulsion", tech: ["silicone"], flag: "featured",
    benefits: ["Premium hand-feel", "Non-yellowing", "Hydrophilic"]
  },
  {
    code: "BC-SIL 565", name: "Biosoft Macro", cat: "silicone", catLabel: "Silicone Softeners",
    summary: "Macro-emulsion silicone softener for surface smoothness and superior sewability.",
    apps: ["Finishing", "Garment Wash"], industries: ["Denim", "Garments"],
    form: "Emulsion", tech: ["silicone"],
    benefits: ["Surface smoothness", "Improved sewability", "Shear stable"]
  },
  {
    code: "BC-SFT 520", name: "Biosoft CAT", cat: "finishing", catLabel: "Finishing Chemicals",
    summary: "Cationic softener flakes for an economical, full and fluffy handle on cellulosics.",
    apps: ["Finishing"], industries: ["Knits", "Woven", "Home Textile"],
    form: "Flakes", tech: [],
    benefits: ["Full fluffy handle", "Easy dispersibility", "Economical"]
  },
  {
    code: "BC-AMS 540", name: "Biodry WICK", cat: "finishing", catLabel: "Finishing Chemicals",
    summary: "Moisture-management finish giving durable wicking performance on activewear fabrics.",
    apps: ["Finishing", "Functional Finish"], industries: ["Knits", "Technical Textile"],
    form: "Liquid", tech: ["zdhc"], flag: "new",
    benefits: ["Durable wicking", "Quick dry", "Breathable finish"]
  },
  {
    code: "BC-ENZ 610", name: "Biozyme POL", cat: "enzymes", catLabel: "Enzymes",
    summary: "Acid cellulase enzyme for bio-polishing with controlled strength loss and clean surface.",
    apps: ["Bio-polishing", "Enzyme Wash"], industries: ["Knits", "Denim", "Garments"],
    form: "Liquid", tech: ["eco", "enzyme"], flag: "featured",
    benefits: ["Clean fabric surface", "Anti-pilling", "Controlled action"]
  },
  {
    code: "BC-ENZ 625", name: "Biozyme DSZ", cat: "enzymes", catLabel: "Enzymes",
    summary: "Wide-temperature alpha-amylase desizing enzyme for efficient starch removal.",
    apps: ["Desizing"], industries: ["Woven", "Denim"],
    form: "Liquid", tech: ["eco", "enzyme"],
    benefits: ["Complete starch removal", "Wide temperature range", "Fabric safe"]
  },
  {
    code: "BC-SPC 705", name: "Biocool LTB", cat: "specialty", catLabel: "Specialty Chemicals",
    summary: "Low-temperature bleaching activator system cutting steam consumption in pretreatment.",
    apps: ["Bleaching", "Low-Temp Processing"], industries: ["Knits", "Woven"],
    form: "Powder", tech: ["eco", "zdhc"], flag: "new",
    benefits: ["Bleach at 65°C", "Energy saving", "Fibre protection"]
  }
];
