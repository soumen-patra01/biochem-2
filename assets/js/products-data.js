/* BIOCHEM TECHNOLOGIES — product catalogue data */
var BIOCHEM_PRODUCTS = [

  /* ── PRE-TREATMENT: ZETAPLEX ── */
  {
    code: "ZETAPLEX-DM", name: "Zetaplex DM", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Acidic demineralizing agent for pre-bleach heavy metal removal and peroxide protection.",
    apps: ["Demineralizing", "Bleaching"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Pre-bleach demineralisation", "Prevents catalytic fibre damage", "Superior heavy metal chelation", "Enhanced bleaching performance"]
  },
  {
    code: "ZETAPLEX-SQT", name: "Zetaplex SQT Conc", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "High-temperature stable sequestering agent for bleaching, scouring, and dyeing processes.",
    apps: ["Scouring", "Bleaching", "Demineralizing"], industries: ["Knits", "Woven", "Denim", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Superior iron chelation", "Excellent demineralising action", "Water quality independence", "Enhanced whiteness in bleaching"]
  },

  /* ── PRE-TREATMENT: ZETASTAB ── */
  {
    code: "ZETASTAB-BR", name: "Zetastab BR", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Silicone-free peroxide stabilizer and oxidative bleach regulator for controlled, uniform bleaching.",
    apps: ["Bleaching"], industries: ["Knits", "Woven", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Controlled bleaching", "Silicone-free formula", "Scaling prevention", "Fabric protection"]
  },
  {
    code: "ZETASTAB-BRH", name: "Zetastab BR H/C", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "High-concentration peroxide stabilizer variant for full-white and heavy bleaching processes.",
    apps: ["Bleaching"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["High concentration formula", "Controlled peroxide decomposition", "Suitable for full-white fabrics"]
  },

  /* ── PRE-TREATMENT: ZETAZYME ── */
  {
    code: "ZETAZYME-CEL", name: "Zetazyme CEL", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Cellulase enzyme for bio-polishing and surface cleaning of cellulosic fabrics.",
    apps: ["Bio-polishing", "Enzyme Wash"], industries: ["Knits", "Denim", "Garment Processing"],
    form: "Liquid", tech: ["enzyme"], flag: "",
    benefits: ["Clean fabric surface", "Anti-pilling effect", "Controlled action"]
  },
  {
    code: "ZETAZYME-COMBI", name: "Zetazyme COMBI", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Liquid cellulase enzyme for bio-polishing & abrasion across a wide pH range (4.0–7.0).",
    apps: ["Bio-polishing", "Enzyme Wash", "Peroxide Killing"], industries: ["Knits", "Denim", "Garment Processing"],
    form: "Liquid", tech: ["enzyme"], flag: "featured",
    benefits: ["Wide pH range operation", "Combined peroxide killing & bio-polishing", "Optimal at 52°C–55°C"]
  },
  {
    code: "ZETAZYME-LM", name: "Zetazyme LM", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Low-microbial cellulase enzyme for controlled bio-polishing with minimal strength loss.",
    apps: ["Bio-polishing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["enzyme"], flag: "",
    benefits: ["Minimal strength loss", "Controlled bio-polishing", "Suitable for delicate fabrics"]
  },
  {
    code: "ZETAZYME-PK", name: "Zetazyme PK Conc", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Concentrated peroxide-killing enzyme for efficient neutralization of residual hydrogen peroxide.",
    apps: ["Peroxide Killing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["enzyme"], flag: "",
    benefits: ["Efficient peroxide removal", "Concentrated formula", "Process time reduction"]
  },
  {
    code: "ZETAZYME-CLARO", name: "Zetazyme CLARO", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Clarity enzyme for fabric surface refinement and improved fabric appearance.",
    apps: ["Bio-polishing", "Surface Refinement"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["enzyme"], flag: "",
    benefits: ["Improved fabric appearance", "Surface refinement", "Enhanced clarity"]
  },
  {
    code: "ZETAZYME-NIL", name: "Zetazyme NIL", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Neutral cellulase enzyme for bio-polishing at neutral pH conditions.",
    apps: ["Bio-polishing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["enzyme"], flag: "",
    benefits: ["Neutral pH operation", "Safe on sensitive fibres", "Consistent performance"]
  },

  /* ── PRE-TREATMENT: ZETABRIGHT ── */
  {
    code: "ZETABRIGHT-BMBI", name: "Zetabright BMBI", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Optical brightening agent for brilliant white results on cellulosic fibres.",
    apps: ["Brightening", "Bleaching"], industries: ["Knits", "Woven", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Brilliant whiteness", "Excellent light fastness", "Compatible with bleach baths"]
  },
  {
    code: "ZETABRIGHT-COL", name: "Zetabright COL", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Optical brightening agent suitable for cotton and polyester/cotton blends.",
    apps: ["Brightening"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Suitable for blends", "High whiteness level", "Wash fast"]
  },
  {
    code: "ZETABRIGHT-HA", name: "Zetabright HA", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "High-affinity optical brightening agent for exhaust and continuous processing.",
    apps: ["Brightening"], industries: ["Knits", "Woven", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["High affinity to cotton", "Excellent exhaustion", "Long-lasting brightness"]
  },
  {
    code: "ZETABRIGHT-HCF", name: "Zetabright HCF", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Halogen and chlorine-free optical brightening agent for eco-friendly full-white processing.",
    apps: ["Brightening"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Halogen & chlorine-free", "Eco-friendly formula", "High whiteness performance"]
  },

  /* ── PRE-TREATMENT: ZETACLEN ── */
  {
    code: "ZETACLEN-HPN", name: "Zetaclen HPN", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Heavy-duty scouring agent for effective removal of natural waxes, oils and impurities.",
    apps: ["Scouring", "Desizing"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Removes waxes & oils", "Thorough scouring", "Compatible with bleaching"]
  },
  {
    code: "ZETACLEN-SR", name: "Zetaclen SR", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Soil-release scouring agent providing excellent cleaning with re-deposition prevention.",
    apps: ["Scouring"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Soil release properties", "Prevents re-deposition", "Gentle on fibres"]
  },

  /* ── PRE-TREATMENT: ZETAKILL ── */
  {
    code: "ZETAKILL-PK", name: "Zetakill PK", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Antimicrobial and biocide agent for textile wet processing to prevent microbial growth.",
    apps: ["Antimicrobial Treatment"], industries: ["Knits", "Woven", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Prevents microbial growth", "Safe for textiles", "Effective broad-spectrum action"]
  },
  {
    code: "ZETAKILL-PN", name: "Zetakill PN", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Cost-effective peroxide neutralizer for residual hydrogen peroxide elimination after bleaching.",
    apps: ["Peroxide Killing", "Bleaching"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "featured",
    benefits: ["Reduces process time", "Safe & overdose tolerant", "Effective above 70°C", "Alkali compatible"]
  },

  /* ── PRE-TREATMENT: ZETAWET ── */
  {
    code: "ZETAWET-200", name: "Zetawet 200", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Standard wetting agent for uniform fabric wetting in pre-treatment processes.",
    apps: ["Scouring", "Bleaching"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Uniform wetting", "Low foam", "Broad compatibility"]
  },
  {
    code: "ZETAWET-EL", name: "Zetawet EL", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "High-performance anionic wetting & scouring agent for textile wet processing.",
    apps: ["Scouring", "Bleaching", "Desizing"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Effective cleaning & degreasing", "Low-foaming", "Ideal for automatic dispensing"]
  },
  {
    code: "ZETAWET-LF", name: "Zetawet LF", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Low-foam wetting agent for high turbulence machines and jet dyeing processes.",
    apps: ["Scouring", "Bleaching"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Very low foam", "High turbulence compatible", "Fast wetting"]
  },
  {
    code: "ZETAWET-XL", name: "Zetawet XL", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Extra-strength wetting agent for heavily sized or coated woven fabrics.",
    apps: ["Desizing", "Scouring"], industries: ["Woven", "Denim"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Extra strength penetration", "Fast absorbency", "Suitable for heavy sizes"]
  },
  {
    code: "ZETAWET-XLNEW", name: "Zetawet XL New", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Improved formula extra-strength wetting agent with enhanced eco profile.",
    apps: ["Desizing", "Scouring"], industries: ["Woven", "Denim"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Improved eco profile", "Extra strength wetting", "APEO-free"]
  },
  {
    code: "ZETAWET-SWLF", name: "Zetawet SWLF Conc", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "High-concentration sulfosuccinate-free low-foam wetting & re-wetting agent for all fibre types.",
    apps: ["Scouring", "Bleaching", "Desizing", "Heat Setting"], industries: ["Knits", "Woven", "Denim", "Yarn & Fibre"],
    form: "Liquid", tech: ["eco"], flag: "featured",
    benefits: ["Enhanced hydrophilicity", "Powerful emulsification", "Enzyme compatible", "APEO-free"]
  },
  {
    code: "ZETAWET-SWLFNEW", name: "Zetawet SWLF New", cat: "pretreatment", catLabel: "Pre-treatment",
    summary: "Improved next-generation SWLF wetting agent with superior bio-elimination properties.",
    apps: ["Scouring", "Bleaching"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Superior bio-elimination", "Next-generation formula", "Low environmental impact"]
  },

  /* ── DYEING: TRU ── */
  {
    code: "TRU-ALKALI", name: "Tru Alkali", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Alkali donor for reactive dyeing providing controlled pH rise for level dyeing.",
    apps: ["Reactive Dyeing"], industries: ["Knits", "Woven", "Yarn & Fibre"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Controlled pH rise", "Level dyeing", "Improved reproducibility"]
  },

  /* ── DYEING: ZETACID ── */
  {
    code: "ZETACID-CAN", name: "Zetacid CAN", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "pH control and acid buffer agent for precise dyebath pH management.",
    apps: ["Reactive Dyeing", "Disperse Dyeing", "Enzyme Bath"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Precise pH control", "Stable buffering", "Prevents pH overshoot"]
  },

  /* ── DYEING: ZETADFOAM ── */
  {
    code: "ZETADFOAM-TC", name: "Zetadfoam TC", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Antifoam agent for dye baths to eliminate foam and ensure process consistency.",
    apps: ["Reactive Dyeing", "Disperse Dyeing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Effective foam elimination", "Prevents shade variation", "Suitable for all machines"]
  },

  /* ── DYEING: ZETAFIX ── */
  {
    code: "ZETAFIX-FF", name: "Zetafix FF", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Formaldehyde & zinc-free reactive dye colour fixative for exhaust and padding applications.",
    apps: ["Fixing", "After-treatment"], industries: ["Knits", "Woven", "Denim", "Garment Processing"],
    form: "Liquid", tech: ["eco"], flag: "featured",
    benefits: ["Superior fastness", "Heat stable", "Dye migration prevention", "Natural handle"]
  },
  {
    code: "ZETAFIX-FFNEW", name: "Zetafix FF New", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Next-generation formaldehyde-free dye fixative with improved fastness performance.",
    apps: ["Fixing", "After-treatment"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Improved fastness vs standard", "Formaldehyde-free", "Enhanced wash fastness"]
  },

  /* ── DYEING: ZETALEV ── */
  {
    code: "ZETALEV-AB55", name: "Zetalev AB-55", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Acid buffer for reproducible reactive dyeing on cellulose and polyester/cellulose blends.",
    apps: ["Reactive Dyeing", "Exhaust Dyeing"], industries: ["Knits", "Woven", "Yarn & Fibre"],
    form: "Liquid", tech: [], flag: "featured",
    benefits: ["Reproducibility assurance", "pH stability maintenance", "Bicarbonate & carbonate arrest", "Dispersing & complexing properties"]
  },
  {
    code: "ZETALEV-CDL", name: "Zetalev CDL", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Carrier and dispersant levelling agent for polyester dyeing.",
    apps: ["Disperse Dyeing"], industries: ["Woven", "Knits"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Carrier action", "Improved levelling", "Prevents unlevel dyeing"]
  },
  {
    code: "ZETALEV-CLD", name: "Zetalev CLD", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Combined levelling and dispersing agent for cellulosic and blend fabrics.",
    apps: ["Reactive Dyeing", "Exhaust Dyeing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Combined action", "Level dyeing", "Shade reproducibility"]
  },
  {
    code: "ZETALEV-LDR", name: "Zetalev LDR", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Levelling, dispersing and retarding agent for reactive and direct dyes.",
    apps: ["Reactive Dyeing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Retarding action", "Improved migration", "Level exhaustion"]
  },
  {
    code: "ZETALEV-ENN", name: "Zetalev ENN", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Anionic levelling agent for exhaust dyeing on cellulose with electrolyte tolerance.",
    apps: ["Reactive Dyeing", "Exhaust Dyeing"], industries: ["Knits", "Woven", "Yarn & Fibre"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Electrolyte tolerant", "Excellent levelling", "Shade reproducibility"]
  },
  {
    code: "ZETALEV-XCL", name: "Zetalev XCL", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Extra-levelling agent for critical shades requiring maximum batch-to-batch reproducibility.",
    apps: ["Reactive Dyeing", "Exhaust Dyeing"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Maximum reproducibility", "Critical shade control", "Level dyeing guarantee"]
  },

  /* ── DYEING: ZETALUB ── */
  {
    code: "ZETALUB-EAC", name: "Zetalub EAC", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Effective lubricating agent to prevent creasing, wrinkling, and chafe marks in textile wet processing.",
    apps: ["Scouring", "Bleaching", "Dyeing", "Heat Setting"], industries: ["Knits", "Woven", "Denim"],
    form: "Liquid", tech: [], flag: "featured",
    benefits: ["Smooth gliding & soft handle", "Friction reduction", "Shade & fastness preservation", "Broad bath compatibility"]
  },
  {
    code: "ZETALUB-NEUVO", name: "Zetalub NEUVO", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Premium lubricating and anti-creasing agent for heavy GSM fabrics and high-temperature wet processing.",
    apps: ["Dyeing", "Bleaching", "Scouring"], industries: ["Knits", "Woven", "Denim", "Terry Towels"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Smooth gliding & soft handle", "Superior friction reduction", "High GSM fabric performance", "Eliminates specking & staining"]
  },

  /* ── DYEING: ZETAWASH ── */
  {
    code: "ZETAWASH-ES", name: "Zetawash ES", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Enzyme-stable soaping agent for reactive-dyed fabrics with excellent unfixed dye removal.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Enzyme stable", "Effective unfixed dye removal", "Low foam"]
  },
  {
    code: "ZETAWASH-HPS", name: "Zetawash HPS", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Acrylate-based low-foaming soaping agent for reactive-dyed & printed cellulosic textiles.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven", "Garment Processing"],
    form: "Liquid", tech: [], flag: "featured",
    benefits: ["Low foaming", "Best efficiency at 95°C", "Improved wash fastness"]
  },
  {
    code: "ZETAWASH-LTS", name: "Zetawash LTS", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Low-temperature soaping agent for reactive dyes saving energy and water.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Low temperature action", "Energy saving", "Water saving"]
  },
  {
    code: "ZETAWASH-HPSCONC", name: "Zetawash HPS Conc", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Concentrated HPS soaping agent for reduced dosage and lower logistics cost.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["High concentration", "Reduced dosage", "Economical"]
  },
  {
    code: "ZETAWASH-HPSCONCI", name: "Zetawash HPS Conc-I", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "Improved concentrated HPS soaping agent with enhanced performance at lower temperatures.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Improved performance", "Effective at lower temperature", "High concentration"]
  },
  {
    code: "ZETAWASH-HPSNEW", name: "Zetawash HPS New", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "High-performance, low-foaming soaping agent for reactive-dyed & printed cellulosic fabrics.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven", "Garment Processing"],
    form: "Liquid", tech: ["eco"], flag: "",
    benefits: ["Biodegradable formula", "Low foam", "Effective for all shade depths"]
  },
  {
    code: "ZETAWASH-CONC", name: "Zetawash Conc", cat: "dyeing", catLabel: "Dyeing Auxiliaries",
    summary: "General-purpose concentrated soaping agent for reactive and direct dyed fabrics.",
    apps: ["Soaping", "Washing-off"], industries: ["Knits", "Woven"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Concentrated formula", "General purpose", "Cost effective"]
  },

  /* ── PRINTING ── */
  {
    code: "ZETAPRINT-PDT", name: "Zetaprint PDT", cat: "printing", catLabel: "Printing Chemicals",
    summary: "Printing paste thickener for reactive and pigment printing with sharp definition.",
    apps: ["Reactive Printing", "Pigment Printing"], industries: ["Woven", "Knits"],
    form: "Paste", tech: [], flag: "",
    benefits: ["Sharp print definition", "High colour yield", "Stable viscosity"]
  },
  {
    code: "ZETAPRINT-KHADI", name: "Zetaprint KHADI CKHD", cat: "printing", catLabel: "Printing Chemicals",
    summary: "Specialised thickener for Khadi fabric printing with natural-look definition.",
    apps: ["Khadi Printing", "Natural Fabric Printing"], industries: ["Woven"],
    form: "Paste", tech: [], flag: "",
    benefits: ["Suitable for Khadi fabric", "Natural look finish", "Good print penetration"]
  },

  /* ── FINISHING: ZETASOFT ── */
  {
    code: "ZETASOFT-AR6", name: "Zetasoft AR6", cat: "finishing", catLabel: "Finishing Agents",
    summary: "Amino-silicone softener for premium soft handle and smoothness on all fibre types.",
    apps: ["Finishing", "Exhaust & Padding"], industries: ["Knits", "Woven", "Garment Processing"],
    form: "Emulsion", tech: ["silicone"], flag: "featured",
    benefits: ["Premium soft handle", "Smooth surface", "Suitable for all fibres"]
  },
  {
    code: "ZETASOFT-M4", name: "Zetasoft M4", cat: "finishing", catLabel: "Finishing Agents",
    summary: "Macro-silicone softener for full, smooth handle particularly suited for woven fabrics.",
    apps: ["Finishing"], industries: ["Woven", "Denim"],
    form: "Emulsion", tech: ["silicone"], flag: "",
    benefits: ["Full smooth handle", "Shear stable", "Improved sewability"]
  },
  {
    code: "ZETASOFT-MX200", name: "Zetasoft MX200", cat: "finishing", catLabel: "Finishing Agents",
    summary: "Mixed silicone softener system for balanced soft and smooth handle on blended fabrics.",
    apps: ["Finishing"], industries: ["Knits", "Woven"],
    form: "Emulsion", tech: ["silicone"], flag: "",
    benefits: ["Balanced soft & smooth handle", "Suitable for blended fabrics", "Stable emulsion"]
  },
  {
    code: "ZETASOFT-OC", name: "Zetasoft OC", cat: "finishing", catLabel: "Finishing Agents",
    summary: "Organically-modified silicone softener providing outstanding soft touch and elasticity.",
    apps: ["Finishing", "Exhaust & Padding"], industries: ["Knits", "Woven", "Terry Towels"],
    form: "Emulsion", tech: ["silicone"], flag: "",
    benefits: ["Outstanding soft touch", "Enhanced elasticity", "Low yellowing"]
  },

  /* ── FINISHING: ZETASTIFF ── */
  {
    code: "ZETASTIFF-H", name: "Zetastiff H", cat: "finishing", catLabel: "Finishing Agents",
    summary: "Stiffening agent for fabrics requiring body, crispness, and dimensional stability.",
    apps: ["Stiffening", "Finishing"], industries: ["Woven", "Home Textile"],
    form: "Liquid", tech: [], flag: "",
    benefits: ["Body and crispness", "Dimensional stability", "Washable stiffness"]
  }
];
