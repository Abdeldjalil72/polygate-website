export interface ProductGrade {
  code: string;
  name: string;
  hardnessOrDensity?: string;
  applications: string;
  features: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullOverview: string;
  iconName: string;
  keyBenefits: string[];
  sectors: string[];
  grades: ProductGrade[];
  specifications: {
    basePolymer: string;
    processingMethod: string;
    packagingOptions: string;
    certifications: string[];
  };
}

export interface SectorItem {
  id: string;
  name: string;
  sectorCategory: 'Packaging' | 'Construction and Building' | 'Consumer and Household' | 'Agriculture';
  description: string;
  recommendedPolymers: string[];
  icon: string;
}

export interface Brochure {
  id: string;
  title: string;
  category: string;
  size: string;
  date: string;
  description: string;
}

export const BRAND_PILLARS = [
  {
    title: 'GLOBAL VISION',
    tagline: 'Expanding Horizons Worldwide',
    description: 'Delivering world-class polymer engineering across international borders with dependable global supply chains.',
    icon: 'Globe',
  },
  {
    title: 'TRUST & RELIABILITY',
    tagline: 'Precision Compounding Integrity',
    description: 'Strict batch-to-batch consistency and backward integration ensuring zero compromise on technical specifications.',
    icon: 'Handshake',
  },
  {
    title: 'GROWTH & OPPORTUNITIES',
    tagline: 'Unlocking New Market Frontiers',
    description: 'Empowering clients to scale into demanding markets with tailor-made formulations and cost-efficient processing.',
    icon: 'TrendingUp',
  },
  {
    title: 'QUALITY & COMMITMENT',
    tagline: 'Certified Industrial Excellence',
    description: 'ISO-certified facilities adhering to RoHS, REACH, and rigorous electrical, mechanical, and safety standards.',
    icon: 'ShieldCheck',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'pvc-compounds',
    name: 'PVC Compounds',
    tagline: 'High-Integrity Rigid & Flexible Polymer Formulations',
    description:
      'Engineered PVC compounds optimized for superior dielectric strength, weatherability, mechanical toughness, and chemical resistance.',
    fullOverview:
      'The foundation of POLYGATE is built on decades of compounding leadership. From cable insulation and jacketing to structural profile extrusions, our PVC compounding lines utilize advanced twin-screw extruders and continuous gravimetric dosing to ensure unrivaled homogeneity and thermal stability.',
    iconName: 'Layers',
    keyBenefits: [
      'Outstanding flame retardancy and thermal stability',
      'Superior dielectric insulation properties for low to medium voltage',
      'UV resistance and weather-resilient outdoor longevity',
      'Tailored plasticizer formulations (including lead-free and non-phthalate)',
    ],
    sectors: ['Construction and Building', 'Packaging', 'Consumer and Household', 'Agriculture'],
    grades: [
      {
        code: 'PG-PVC-C70',
        name: 'Cable Insulation Grade (70°C & 90°C)',
        hardnessOrDensity: 'Shore A 82 - 88',
        applications: 'Building wires, power distribution cables, flexible appliance cords',
        features: 'High volume resistivity, smooth surface finish, fast extrusion speeds',
      },
      {
        code: 'PG-PVC-SH105',
        name: 'High-Temperature Sheathing (105°C)',
        hardnessOrDensity: 'Shore A 84 - 90',
        applications: 'Automotive harnesses, industrial control cables, outdoor jacketing',
        features: 'Oil resistant, thermal degradation resistance, anti-rodent options',
      },
      {
        code: 'PG-PVC-RPIPE',
        name: 'Rigid Pressure Pipe & Conduit',
        hardnessOrDensity: 'Specific Gravity 1.42',
        applications: 'Potable water pipes, electrical conduits, sewage fittings',
        features: 'High hydrostatic burst strength, high Vicat softening point',
      },
      {
        code: 'PG-PVC-MED',
        name: 'Transparent Flexible Medical/Tubing',
        hardnessOrDensity: 'Shore A 65 - 75',
        applications: 'Medical tubing, suction hoses, gaskets and footwear soles',
        features: 'High clarity, DEHP-free options, excellent kink resistance',
      },
    ],
    specifications: {
      basePolymer: 'Suspension Polyvinyl Chloride (S-PVC)',
      processingMethod: 'Extrusion, Injection Molding, Calendering',
      packagingOptions: '25kg moisture-barrier bags, 1000kg Octabins, 25MT Bulk Silo',
      certifications: ['ISO 9001:2015', 'RoHS 3 Compliant', 'REACH SVHC', 'IEC 60502-1'],
    },
  },
  {
    id: 'masterbatch',
    name: 'Masterbatch Solutions',
    tagline: 'High-Concentration White, Black, Color & Additive Pellets',
    description:
      'State-of-the-art masterbatch formulations engineered for maximum dispersion, color intensity, and process performance across all polyolefins.',
    fullOverview:
      'At POLYGATE, our masterbatch facility operates ultra-clean specialized lines to deliver pure whites, deep carbon blacks, custom color-matches, and specialized additive blends. Each batch is verified using spectrophotometric delta-E controls to guarantee color exactness.',
    iconName: 'Palette',
    keyBenefits: [
      'High pigment loading (up to 75% TiO2 in white, 50% furnace black in black)',
      'Superior dispersibility preventing pinholes and die build-up',
      'Food-grade compliant formulations (FDA and European regulations)',
      'Broad carrier compatibility: PE, PP, PS, EVA, PET',
    ],
    sectors: ['Packaging', 'Agriculture', 'Consumer and Household', 'Construction and Building'],
    grades: [
      {
        code: 'PG-MB-W70',
        name: 'High-Opacity Premium White Masterbatch',
        hardnessOrDensity: '70% Rutile TiO2 in PE carrier',
        applications: 'Multi-layer barrier film, milk pouches, blow-molded bottles',
        features: 'Ultra-high whiteness index, optical opacity, non-yellowing',
      },
      {
        code: 'PG-MB-B50',
        name: 'Agricultural & Pipe UV Black Masterbatch',
        hardnessOrDensity: '45-50% Furnace Carbon Black',
        applications: 'Drip irrigation pipes, geomembranes, mulch films, cable jackets',
        features: 'Particle size < 20nm, outstanding weathering and UV absorption',
      },
      {
        code: 'PG-MB-CLR',
        name: 'Custom Tailored Color Masterbatches',
        hardnessOrDensity: 'Custom formulation (RAL / Pantone matching)',
        applications: 'Caps and closures, crates, household goods, toys, appliances',
        features: 'High heat stability (>280°C), zero migration, heavy-metal free',
      },
      {
        code: 'PG-MB-ADD',
        name: 'Functional Additive Masterbatches',
        hardnessOrDensity: 'Custom active ingredient loading',
        applications: 'Film extrusion, raffia, injection molded structural parts',
        features: 'Anti-UV, Slip & Anti-block, Anti-static, Anti-oxidant, Clarifying',
      },
    ],
    specifications: {
      basePolymer: 'LLDPE, LDPE, HDPE, PP, Universal Carriers',
      processingMethod: 'Blown Film, Cast Film, Blow Molding, Injection Molding, Extrusion',
      packagingOptions: '25kg moisture-proof poly-lined bags, 1250kg Pallets',
      certifications: ['FDA 21 CFR 177.1520', 'EU 10/2011', 'RoHS & REACH'],
    },
  },
  {
    id: 'special-compounds',
    name: 'Special Compounds',
    tagline: 'Halogen-Free Flame Retardant (HFFR), XLPE & Technical TPE',
    description:
      'Advanced engineered polymer compounds engineered for severe environments demanding zero smoke toxicity, cross-linking, or rubbery flexibility.',
    fullOverview:
      'As modern infrastructure standards demand unprecedented safety and durability, POLYGATE leads the field with zero-halogen flame retardant (HFFR / LSZH) compounds and silane-crosslinkable polyethylene (XLPE). Engineered to minimize toxic gas emissions during fire while offering superior mechanical and electrical parameters.',
    iconName: 'Flame',
    keyBenefits: [
      'Low Smoke Zero Halogen (LSZH / HFFR) compliance with minimal corrosive gas release',
      'High Limiting Oxygen Index (LOI up to 45%)',
      'Silane-crosslinkable XLPE for low/medium voltage cable endurance up to 90°C continuous',
      'TPE / TPR flexibility with high tear strength and recyclable thermoplastic traits',
    ],
    sectors: ['Construction and Building', 'Consumer and Household'],
    grades: [
      {
        code: 'PG-HFFR-601',
        name: 'Thermoplastic HFFR / LSZH Sheathing',
        hardnessOrDensity: 'Density 1.48 g/cm³',
        applications: 'Subway cables, high-rise buildings, data centers, offshore rigs',
        features: 'LOI > 36%, zero halogen emission, passes CPR Class B2ca/Cca tests',
      },
      {
        code: 'PG-HFFR-INS',
        name: 'HFFR Insulation Grade (90°C)',
        hardnessOrDensity: 'Tensile Strength > 12.5 MPa',
        applications: 'Instrumentation, telecommunications, solar PV cables',
        features: 'High insulation resistance, smooth processing, crack resistance',
      },
      {
        code: 'PG-XLPE-LV',
        name: 'Silane-Grafted Crosslinkable Polyethylene (XLPE)',
        hardnessOrDensity: 'Density 0.925 g/cm³',
        applications: 'Low voltage power cables (0.6/1kV) continuous 90°C service',
        features: 'Two-component system (Graft + Catalyst masterbatch), rapid hot cure',
      },
      {
        code: 'PG-TPE-75',
        name: 'Thermoplastic Elastomer (TPE / TPR)',
        hardnessOrDensity: 'Shore A 55 - 85',
        applications: 'Seals, architectural window gaskets, automotive bellows, tool grips',
        features: 'Rubber-like recovery, excellent flex fatigue, fully recyclable',
      },
    ],
    specifications: {
      basePolymer: 'EVA / Polyolefin Alloys, Silane grafted PE, SEBS block copolymers',
      processingMethod: 'Specialized Extrusion, Co-extrusion, Injection Molding',
      packagingOptions: '25kg Aluminum-foil vacuum-sealed bags',
      certifications: ['IEC 60332-1/3', 'IEC 60754-1/2', 'IEC 61034-2', 'EN 50363'],
    },
  },
  {
    id: 'pp-fibers',
    name: 'Polypropylene (PP) Fibers',
    tagline: 'High-Tenacity Synthetic Micro & Macro Reinforcement Fibers',
    description:
      'High-performance 100% virgin polypropylene fibers engineered to control plastic shrinkage cracking and dramatically improve structural toughness.',
    fullOverview:
      'In demanding civil engineering and competitive industrial markets, POLYGATE PP Fibers offer the ultimate reinforcement solution. Distributed homogeneously throughout the concrete or mortar matrix, our fibers reduce micro-cracking, boost impact energy absorption, and prevent explosive fire spalling.',
    iconName: 'Sparkles',
    keyBenefits: [
      '100% virgin polypropylene polymer with high alkali and acid resistance',
      'Significantly decreases plastic shrinkage and drying shrinkage cracks by up to 85%',
      'Enhances concrete freeze-thaw durability, impact strength, and abrasion resistance',
      'Passive fire protection reducing explosive spalling in high-strength concrete',
    ],
    sectors: ['Construction and Building', 'Agriculture'],
    grades: [
      {
        code: 'PG-PPF-MICRO-12',
        name: 'Monofilament Micro PP Fibers (6mm / 12mm / 18mm)',
        hardnessOrDensity: 'Density 0.91 g/cm³, Tensile > 380 MPa',
        applications: 'Floor screeds, precast panels, plaster, shotcrete, tunnel lining',
        features: 'Millions of fibers per kilogram, disperses effortlessly without balling',
      },
      {
        code: 'PG-PPF-MACRO-54',
        name: 'Structural Macro Synthetic Fibers (40mm - 54mm)',
        hardnessOrDensity: 'Tensile Strength > 550 MPa, High Modulus',
        applications: 'Industrial slab-on-grade, marine retaining walls, heavy-duty paving',
        features: 'Steel mesh replacement, non-corrosive, reduces labor and rebar weight',
      },
      {
        code: 'PG-PPF-GEO',
        name: 'Fibrillated High-Tenacity PP Technical Fibers',
        hardnessOrDensity: 'Elongation < 25%',
        applications: 'Erosion control, agricultural geotextiles, artificial turf backing',
        features: 'High tensile tenacity, UV stabilized, long-term soil stability',
      },
    ],
    specifications: {
      basePolymer: '100% Virgin Isotactic Polypropylene',
      processingMethod: 'Direct dispersion into concrete mixing batch (dry or wet mix)',
      packagingOptions: '0.6kg & 0.9kg water-soluble degradable paper bags, 10kg cartons',
      certifications: ['EN 14889-2:2006 (Class 1a Micro & Class II Macro)', 'ASTM C1116'],
    },
  },
];

export const SECTORS: SectorItem[] = [
  // Agriculture
  {
    id: 'sec-irrig-pipes',
    name: 'Irrigation Pipes',
    sectorCategory: 'Agriculture',
    description: 'Durable HDPE and flexible PVC formulations designed for UV resistance and high bursting pressures in agricultural networks.',
    recommendedPolymers: ['PVC Compounds', 'Black Masterbatch UV'],
    icon: 'Pipette',
  },
  {
    id: 'sec-irrig-hoses',
    name: 'Irrigation Hoses & Systems',
    sectorCategory: 'Agriculture',
    description: 'Flexible, anti-kink compound solutions for drip lines, micro-sprinklers, and main transfer hoses.',
    recommendedPolymers: ['Flexible PVC', 'UV Additive Masterbatch'],
    icon: 'Droplets',
  },
  {
    id: 'sec-mulch-film',
    name: 'Mulch Film',
    sectorCategory: 'Agriculture',
    description: 'High-opacity black and silver-black masterbatches engineered for weed control, moisture retention, and extended outdoor lifespan.',
    recommendedPolymers: ['Black Masterbatch', 'UV Stabilizer Masterbatch'],
    icon: 'Layers',
  },
  {
    id: 'sec-plastic-net',
    name: 'Plastic Netting & Agro-Textiles',
    sectorCategory: 'Agriculture',
    description: 'High-tenacity UV-resilient additives and colorants for crop protection, shade netting, and hail shielding.',
    recommendedPolymers: ['PP Fibers', 'UV Masterbatch'],
    icon: 'Grid',
  },
  {
    id: 'sec-silage-bags',
    name: 'Silage Bags & Agricultural Film',
    sectorCategory: 'Agriculture',
    description: 'High puncture-resistance white/black multi-layer compounds protecting animal feed from fermentation and UV degradation.',
    recommendedPolymers: ['White Masterbatch', 'Black Masterbatch'],
    icon: 'Package',
  },
  {
    id: 'sec-greenhouses',
    name: 'Greenhouses Film & Profiles',
    sectorCategory: 'Agriculture',
    description: 'Specialty thermal barrier and anti-dripping masterbatches that optimize photosynthetically active radiation (PAR).',
    recommendedPolymers: ['Additive Masterbatch (Anti-Fog, IR, UV)', 'PVC Rigid Profiles'],
    icon: 'Sun',
  },

  // Packaging
  {
    id: 'sec-food-pkg',
    name: 'Food Packaging',
    sectorCategory: 'Packaging',
    description: 'FDA-approved, low-odor, and zero-migration white and color masterbatches for protective food wrappers, trays, and barrier pouches.',
    recommendedPolymers: ['Food-Grade White MB', 'Additive Masterbatch'],
    icon: 'Utensils',
  },
  {
    id: 'sec-gen-pkg',
    name: 'General Industrial Packaging',
    sectorCategory: 'Packaging',
    description: 'Economical high-strength polymers for shrink wrap, stretch hood, strapping tapes, and heavy-duty shipping sacks.',
    recommendedPolymers: ['Color Masterbatch', 'Slip & Anti-block Additives'],
    icon: 'Box',
  },
  {
    id: 'sec-beverages',
    name: 'Beverage Bottles & Closures',
    sectorCategory: 'Packaging',
    description: 'High-speed injection molding colorants and organoleptically neutral masterbatches for bottle caps and preforms.',
    recommendedPolymers: ['Color Masterbatch', 'Slip Masterbatch'],
    icon: 'Coffee',
  },
  {
    id: 'sec-cosmetics',
    name: 'Cosmetics & Personal Care',
    sectorCategory: 'Packaging',
    description: 'Brilliant pearlescent, metallic, and pastel cosmetic grades providing luxurious sheen for tubes, jars, and pumps.',
    recommendedPolymers: ['Specialty Color MB', 'High-Gloss White MB'],
    icon: 'Sparkles',
  },
  {
    id: 'sec-chemicals-det',
    name: 'Detergents & Chemical Drums',
    sectorCategory: 'Packaging',
    description: 'Environmental Stress Crack Resistance (ESCR) optimized masterbatches resilient to surfactant-induced embrittlement.',
    recommendedPolymers: ['HDPE Masterbatch', 'Special Compounds'],
    icon: 'FlaskConical',
  },

  // Construction & Building
  {
    id: 'sec-cables',
    name: 'Power & Telecommunication Cables',
    sectorCategory: 'Construction and Building',
    description: 'Primary insulation, filler, and protective jacketing compounds complying with IEC 60502, CPR, and LSZH safety criteria.',
    recommendedPolymers: ['PVC Cable Compounds', 'HFFR / LSZH', 'XLPE'],
    icon: 'Zap',
  },
  {
    id: 'sec-pipes-fittings',
    name: 'Pressure Pipes & Pipe Fittings',
    sectorCategory: 'Construction and Building',
    description: 'High-modulus rigid PVC compounds delivering high impact strength and long-term hydrostatic endurance.',
    recommendedPolymers: ['Rigid PVC Compounds', 'Black UV Masterbatch'],
    icon: 'Columns3',
  },
  {
    id: 'sec-water-stop',
    name: 'Water Stop Profiles',
    sectorCategory: 'Construction and Building',
    description: 'Flexible PVC waterstop compounds engineered for expansion and construction joints in concrete water containment structures.',
    recommendedPolymers: ['Flexible PVC Compounds'],
    icon: 'Waves',
  },
  {
    id: 'sec-window-gaskets',
    name: 'Window Seals & Weather Gaskets',
    sectorCategory: 'Construction and Building',
    description: 'High weatherability TPE and co-extruded flexible PVC gaskets with low compression set and superior thermal insulation.',
    recommendedPolymers: ['Special TPE Compounds', 'Flexible PVC'],
    icon: 'LayoutGrid',
  },
  {
    id: 'sec-profiles-ceiling',
    name: 'Architectural Profiles & Ceilings',
    sectorCategory: 'Construction and Building',
    description: 'Exterior and interior siding, window sills, and suspended ceiling profiles requiring UV resistance and high Vicat point.',
    recommendedPolymers: ['Rigid PVC Compounds', 'TiO2 White Masterbatch'],
    icon: 'Building2',
  },
  {
    id: 'sec-tanks',
    name: 'Water & Chemical Storage Tanks',
    sectorCategory: 'Construction and Building',
    description: 'Rotomolding and blow-molding black and composite compounds formulated for thick-walled water tanks.',
    recommendedPolymers: ['Black Masterbatch UV', 'Special Compounds'],
    icon: 'Container',
  },
  {
    id: 'sec-concrete-reinf',
    name: 'Concrete Structural Reinforcement',
    sectorCategory: 'Construction and Building',
    description: 'Macro and micro polypropylene fibers for industrial flooring, bridge decks, and shotcrete tunnels.',
    recommendedPolymers: ['PP Fibers (Micro & Macro)'],
    icon: 'Shield',
  },

  // Consumer & Household
  {
    id: 'sec-appliances',
    name: 'Home Appliances Housing',
    sectorCategory: 'Consumer and Household',
    description: 'Flame retardant, scratch-resistant, and high-gloss compounds engineered for washing machines, fridges, and small electronics.',
    recommendedPolymers: ['Special Compounds', 'Custom Color MB'],
    icon: 'Tv',
  },
  {
    id: 'sec-plastic-furniture',
    name: 'Outdoor & Plastic Furniture',
    sectorCategory: 'Consumer and Household',
    description: 'Weather-stable, high-impact polypropylene compounds with UV protection against color fading and brittleness.',
    recommendedPolymers: ['Color Masterbatch', 'UV Additive Masterbatch'],
    icon: 'Armchair',
  },
  {
    id: 'sec-cleaning-dining',
    name: 'Household, Cleaning & Dining Items',
    sectorCategory: 'Consumer and Household',
    description: 'Vibrant, food-contact approved color concentrates for kitchenware, buckets, storage bins, and cleaning caddies.',
    recommendedPolymers: ['Food-Safe Color MB', 'Clarifying Masterbatch'],
    icon: 'Sparkle',
  },
  {
    id: 'sec-toys-sports',
    name: 'Toys & Sports Equipment',
    sectorCategory: 'Consumer and Household',
    description: 'Non-toxic, heavy-metal-free, and phthalate-free polymers tested to international child safety regulations (EN 71).',
    recommendedPolymers: ['Safe Color Masterbatch', 'TPE Compounds'],
    icon: 'Gamepad2',
  },
  {
    id: 'sec-footwear',
    name: 'Footwear & Compact Soles',
    sectorCategory: 'Consumer and Household',
    description: 'Flexible expanded and compact PVC/TPR compounds for lightweight shoe outsoles, safety boots, and sandals.',
    recommendedPolymers: ['Flexible PVC Compounds', 'TPR Compounds'],
    icon: 'Footprints',
  },
  {
    id: 'sec-paint-buckets',
    name: 'Industrial Paint Buckets & Pails',
    sectorCategory: 'Consumer and Household',
    description: 'High drop-impact polypropylene and masterbatch formulations for heavy paint and chemical pails.',
    recommendedPolymers: ['White Masterbatch', 'Color Masterbatch'],
    icon: 'PaintBucket',
  },
];

export const BROCHURES: Brochure[] = [
  {
    id: 'brochure-corporate',
    title: 'POLYGATE Corporate Profile & Capabilities 2026',
    category: 'Corporate Overview',
    size: '4.8 MB',
    date: 'August 2026',
    description: 'Complete overview of our manufacturing facilities, backward-integration strategy, R&D labs, and worldwide export markets.',
  },
  {
    id: 'brochure-pvc',
    title: 'PVC Compounds Technical Catalog & Selector',
    category: 'PVC Compounds',
    size: '3.2 MB',
    date: 'August 2026',
    description: 'Full technical data sheets, processing parameters, and comparative charts for cable, pipe, and flexible PVC grades.',
  },
  {
    id: 'brochure-masterbatch',
    title: 'Masterbatch Color & Additive Solutions Handbook',
    category: 'Masterbatch',
    size: '5.1 MB',
    date: 'August 2026',
    description: 'Comprehensive guide to White, Black, Color, and functional additive masterbatches with regulatory compliance documentation.',
  },
  {
    id: 'brochure-specialty',
    title: 'Specialty Compounds: HFFR, XLPE & TPE Manual',
    category: 'Special Compounds',
    size: '3.9 MB',
    date: 'August 2026',
    description: 'Low-smoke zero-halogen formulations, CPR flammability certifications, and silane-crosslinkable technical guidelines.',
  },
  {
    id: 'brochure-ppfibers',
    title: 'PP Fibers Concrete Reinforcement Technical Guide',
    category: 'PP Fibers',
    size: '2.6 MB',
    date: 'August 2026',
    description: 'Structural engineering specifications, dosage charts, ASTM/EN compliance test results, and crack prevention data.',
  },
];

export const COMPANY_STATS = [
  { label: 'Annual Compounding Capacity', value: '180,000+', unit: 'Metric Tons / Year' },
  { label: 'Global Export Markets', value: '45+', unit: 'Countries Worldwide' },
  { label: 'Proprietary Formulations', value: '350+', unit: 'Tailored Polymer Grades' },
  { label: 'Quality & Safety Standards', value: '100%', unit: 'ISO & RoHS Certified' },
];
