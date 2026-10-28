import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

export type ProductCategory = "Feed Additives" | "Nutrition Programs";

export type SampleProduct = {
  slug: string;
  name: string;
  species: string;
  form: "Powder" | "Liquid" | "Pellet";
  access: "Kemin range";
  image: ImageAsset;
};

// Product names are illustrative presentation entries; verify the approved Kemin range before publishing.
export const sampleProducts: Record<ProductCategory, SampleProduct[]> = {
  "Feed Additives": [
    {
      slug: "dailybalance-mineral-mix",
      name: "DailyBalance Mineral Mix",
      species: "Cattle & Buffalo",
      form: "Powder",
      access: "Kemin range",
      image: {
        src: "/solutions/dailyminralmix.jpeg",
        alt: "Animal feed mineral nutrition product",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
    {
      slug: "poultrystart-nutrient-blend",
      name: "PoultryStart Nutrient Blend",
      species: "Poultry",
      form: "Powder",
      access: "Kemin range",
      image: {
        src: "/solutions/poiltrystartnutrint.jpeg",
        alt: "Poultry feed nutrient blend",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
    {
      slug: "petvital-oral-supplement",
      name: "PetVital Nutrition Supplement",
      species: "Pet Care",
      form: "Liquid",
      access: "Kemin range",
      image: {
        src: "/solutions/petvitaloral.jpeg",
        alt: "Companion animal nutrition supplement",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
  ],
  "Nutrition Programs": [
    {
      slug: "aquaculture-nutrition-program",
      name: "Aqua Nutrition Program",
      species: "Aquaculture",
      form: "Pellet",
      access: "Kemin range",
      image: {
        src: "/solutions/aquaculture.jpeg",
        alt: "Aquaculture nutrition program",
        category: "products",
        fallbackIcon: "Fish",
      },
    },
    {
      slug: "equine-nutrition-program",
      name: "Equine Nutrition Program",
      species: "Equine",
      form: "Pellet",
      access: "Kemin range",
      image: {
        src: "/solutions/equine.jpeg",
        alt: "Equine nutrition program",
        category: "products",
        fallbackIcon: "Horse",
      },
    },
    {
      slug: "small-ruminant-nutrition-program",
      name: "Small-Ruminant Nutrition Program",
      species: "Goats & Sheep",
      form: "Powder",
      access: "Kemin range",
      image: images.species.goatSheep,
    },
  ],
};

export type SampleTestimonial = {
  quote: string;
  name: string;
  role: string;
  species: string;
};

// Sample testimonials are fictional and must be replaced with approved customer content.
export const sampleTestimonials: SampleTestimonial[] = [
  {
    quote:
      "Having product information and practical guidance together makes it easier to plan for the animals in our care.",
    name: "Amina R.",
    role: "Dairy farm manager",
    species: "Cattle",
  },
  {
    quote:
      "The consultation helped us organize the right questions before making a care plan with our local nutritionist.",
    name: "Dr. Hasan M.",
    role: "Nutrition practitioner",
    species: "Poultry",
  },
  {
    quote:
      "Clear information about handling and storage is valuable when coordinating care across a busy farm team.",
    name: "Farah K.",
    role: "Livestock producer",
    species: "Goats and sheep",
  },
];

export type ResourceArticle = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
};

// TODO: Replace these preview cards with approved, reviewed educational resources.
export const resourceArticles: ResourceArticle[] = [
  {
    category: "Animal nutrition",
    title: "Starting a practical animal nutrition conversation",
    description:
      "Gather context to discuss feeding needs with an animal-health professional.",
    readTime: "5 min read",
    href: "/library/nutrition-plan-conversation",
  },
  {
    category: "Preventive care",
    title: "Questions for a feed additive storage review",
    description:
      "Prepare to discuss handling and storage requirements with a care team.",
    readTime: "4 min read",
    href: "/library/feed additive-storage-discussion",
  },
  {
    category: "Pet Care",
    title: "Useful notes for a companion-animal appointment",
    description:
      "Organize everyday observations before speaking with your nutritionist.",
    readTime: "3 min read",
    href: "/library/companion-animal-appointment-notes",
  },
];

export type ContentFAQ = {
  question: string;
  answer: string;
};

export type DetailRecord = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  longDescription: [string, string, string];
  keyBenefits: [string, string, string, string];
  relatedSpecies: string[];
  relatedProducts: string[];
  image: ImageAsset;
  faqs: [ContentFAQ, ContentFAQ, ContentFAQ];
  gallery: ImageAsset[];
};

export type SpeciesRecord = DetailRecord;

// TODO: Replace this professionally written sample copy with verified Nutritech content.
const standardCareFAQs: [ContentFAQ, ContentFAQ, ContentFAQ] = [
  {
    question: "How do I choose the right care approach?",
    answer:
      "Discuss the animals, their environment and current concerns with a qualified local nutritionist before making care decisions.",
  },
  {
    question: "Can I get product guidance for my region?",
    answer:
      "Contact the team with your location and animal-health question. Product availability and requirements vary by region.",
  },
  {
    question: "Where can I find storage and handling information?",
    answer:
      "Follow the product label and locally approved guidance. Ask your nutritionist or supplier if anything is unclear.",
  },
];

// TODO: Replace species sample records with regionally reviewed Nutritech content.
export const speciesPages: SpeciesRecord[] = [
  {
    slug: "poultry",
    title: "Poultry",
    tagline: "Practical support for flock wellbeing",
    intro:
      "Flock health is built through attentive observation, appropriate preventive care and a clear understanding of each production setting.",
    longDescription: [
      "Poultry teams balance daily husbandry, nutrition, biosecurity and nutrition decisions. A consistent routine helps people notice changes early and communicate useful observations to their animal-health professionals.",
      "A considered care plan starts with the flock’s age, environment, management practices and local disease considerations. Product selection and preventive measures should always be reviewed with a qualified nutritionist and follow local requirements.",
      "Nutritech’s sample resources bring product information and practical care conversations together. They are intended to help farm teams prepare questions, compare support options and work constructively with their nutrition partners.",
    ],
    keyBenefits: [
      "Prompts for structured flock-health observations",
      "Preventive-care conversations tailored to the production context",
      "Product information for discussion with a nutritionist",
      "Nutrition and husbandry topics in one practical overview",
    ],
    relatedSpecies: ["cattle", "goat-sheep", "aquaculture"],
    relatedProducts: ["poultrystart-nutrient-blend"],
    image: images.species.poultry,
    faqs: standardCareFAQs,
    gallery: [
      images.species.poultryHen,
      images.species.poultryEggs,
      images.species.poultryFeed,
      images.species.poultryProduction,
    ],
  },
  {
    slug: "cattle",
    title: "Cattle",
    tagline: "Thoughtful care for cattle herds",
    intro:
      "Strong herd-care routines connect regular observation, sound nutrition and timely nutrition guidance.",
    longDescription: [
      "Cattle management spans a range of life stages and farm systems. Keeping clear records of changes in behaviour, feeding and general condition can make conversations with a nutritionist more focused.",
      "Herd plans are most useful when they reflect local conditions, the animals’ needs and the farm’s established practices. Nutrition Products and preventive products should be selected with nutrition oversight and according to approved local labels.",
      "Nutritech’s sample cattle resources are designed to support those conversations with accessible product-category information and practical prompts for care planning.",
    ],
    keyBenefits: [
      "Herd observation and record-keeping prompts",
      "Nutrition-led discussions about prevention and treatment",
      "Nutrition topics for different herd contexts",
      "Regional product information for informed enquiries",
    ],
    relatedSpecies: ["buffalo", "goat-sheep", "equine"],
    relatedProducts: ["dailybalance-mineral-mix"],
    image: images.species.cattle,
    faqs: standardCareFAQs,
    gallery: [images.farm.farm1, images.farm.farm3],
  },
  {
    slug: "buffalo",
    title: "Buffalo",
    tagline: "Care conversations for buffalo systems",
    intro:
      "Every buffalo operation has its own management context, making observation and locally informed nutrition planning essential.",
    longDescription: [
      "Buffalo care is influenced by climate, housing, feeding, work and production goals. A daily routine that records meaningful changes can help farm teams share a clearer picture with their nutritionist.",
      "Preventive and treatment decisions need to account for local disease patterns and individual animal needs. Product labels, regional regulations and nutrition advice should guide any nutrition product or feed additive use.",
      "Nutritech’s sample resources offer a starting point for questions about animal-health categories, nutrition and coordination with professional care providers.",
    ],
    keyBenefits: [
      "Care planning prompts that respect local farm systems",
      "Clearer discussions about animal observations",
      "Nutrition topics for nutritionist review",
      "Regional product enquiries and support information",
    ],
    relatedSpecies: ["cattle", "goat-sheep", "equine"],
    relatedProducts: ["dailybalance-mineral-mix"],
    image: images.species.buffalo,
    faqs: standardCareFAQs,
    gallery: [images.species.cattle, images.farm.farm1],
  },
  {
    slug: "goat-sheep",
    title: "Goats and Sheep",
    tagline: "Small-ruminant support grounded in good care",
    intro:
      "Attentive flock management and a trusted nutrition relationship help guide care for goats and sheep.",
    longDescription: [
      "Goats and sheep may be managed across varied landscapes and production systems. Understanding the group’s routine and noting changes in appetite, activity or condition can help focus professional advice.",
      "Care planning should be appropriate to species, life stage and local conditions. Nutrition professionals can advise on preventive care and product use in line with regional requirements.",
      "Nutritech’s sample content brings together animal-health and nutrition topics to help producers prepare for productive conversations with their care team.",
    ],
    keyBenefits: [
      "Observation prompts for small-ruminant groups",
      "Nutrition-led preventive-care discussions",
      "Nutrition considerations for professional review",
      "Product category information for regional enquiries",
    ],
    relatedSpecies: ["cattle", "buffalo", "equine"],
    relatedProducts: ["small-ruminant-nutrition-program"],
    image: images.species.goatSheep,
    faqs: standardCareFAQs,
    gallery: [images.species.goats, images.species.goatHerd],
  },
  {
    slug: "aquaculture",
    title: "Aquaculture",
    tagline: "Animal-health resources for aquatic systems",
    intro:
      "Aquatic animal care brings animal observation, water conditions and production practices into one connected picture.",
    longDescription: [
      "Aquaculture teams monitor animals alongside their water and system conditions. Consistent records of environmental changes and observed behaviour help provide context when seeking specialist advice.",
      "Care and product decisions should account for species, production system and applicable local rules. A qualified aquatic-animal health professional can help interpret observations and guide appropriate next steps.",
      "Nutritech’s sample aquaculture resources are designed to support informed questions about nutrition planning categories, preventive care and available product information.",
    ],
    keyBenefits: [
      "Prompts to record system conditions and observations",
      "Professional consultation topics for aquatic animal health",
      "Nutrition planning and product category information",
      "Regional guidance for responsible product enquiries",
    ],
    relatedSpecies: ["poultry", "cattle", "pet-care"],
    relatedProducts: ["aquaculture-nutrition-program"],
    image: images.species.aquaculture,
    faqs: standardCareFAQs,
    gallery: [
      images.species.aquacultureFarm,
      images.species.aquacultureWater,
      images.species.aquacultureMicro,
      {
        src: "/solutions/aquaculture.jpeg",
        alt: "Aquaculture fish close-up",
        category: "species",
        fallbackIcon: "Fish",
      },
    ],
  },
  {
    slug: "pet-care",
    title: "Pet Care",
    tagline: "Considered support for companion animals",
    intro:
      "Companion-animal wellbeing benefits from attentive daily care and advice from a trusted nutrition professional.",
    longDescription: [
      "Each companion animal has individual needs shaped by age, lifestyle and health history. Sharing a clear description of changes and routines can help a nutritionist make a more informed assessment.",
      "Nutrition Products and supplements are not one-size-fits-all. Product choices should be made with nutrition guidance and in line with approved labeling and regional rules.",
      "Nutritech’s sample pet-care materials help owners prepare for conversations about everyday wellbeing, product information and professional support.",
    ],
    keyBenefits: [
      "Prompts for useful nutrition appointment notes",
      "Product information to review with a care professional",
      "Everyday wellbeing and nutrition topics",
      "Clear reminders to follow individual nutrition guidance",
    ],
    relatedSpecies: ["equine", "poultry", "cattle"],
    relatedProducts: ["petvital-oral-supplement"],
    image: images.species.petCare,
    faqs: standardCareFAQs,
    gallery: [
      images.species.petCareExam,
      images.species.petClinic,
      images.species.petHome,
    ],
  },
  {
    slug: "equine",
    title: "Equine",
    tagline: "Support for horses and the people who care for them",
    intro:
      "Thoughtful equine care combines daily observation, suitable nutrition and a strong partnership with nutrition professionals.",
    longDescription: [
      "Horses rely on consistent routines and attentive handlers. Noting changes in comfort, appetite, activity and environment can help owners share useful context with their nutritionist.",
      "Care plans vary by horse, workload and setting. Nutrition Products and supplements should be considered with a qualified nutrition professional, following product labeling and local requirements.",
      "Nutritech’s sample equine resources provide a starting place for care questions and discussions about animal-health support options.",
    ],
    keyBenefits: [
      "Observation prompts for owners and stable teams",
      "Nutrition-led discussions about care planning",
      "Nutrition topics for individual review",
      "Product information to support informed enquiries",
    ],
    relatedSpecies: ["cattle", "buffalo", "goat-sheep"],
    relatedProducts: ["equine-nutrition-program"],
    image: images.species.equine,
    faqs: standardCareFAQs,
    gallery: [images.species.equineGrazing, images.species.equineRunning],
  },
];

export type ProductRecord = DetailRecord & {
  category: ProductCategory;
  species: string;
  form: SampleProduct["form"];
  access: SampleProduct["access"];
};

const categoryDescriptions: Record<ProductCategory, string> = {
  "Feed Additives":
    "Feed additive selection should complement a suitable feeding plan developed for the animals and management context.",
  "Nutrition Programs":
    "Nutrition programs should be tailored to species, life stage, environment and production goals with specialist review.",
};

export const productPages: ProductRecord[] = Object.entries(sampleProducts)
  .flatMap(([category, products]) =>
    products.map((product) => ({
      product,
      category: category as ProductCategory,
    })),
  )
  .map(({ category, product }) => {
    const relatedSpecies = product.species.toLowerCase().includes("poultry")
      ? ["poultry"]
      : product.species.toLowerCase().includes("aquaculture")
        ? ["aquaculture"]
        : product.species.toLowerCase().includes("pet")
          ? ["pet-care"]
          : product.species.toLowerCase().includes("equine")
            ? ["equine"]
            : product.species.toLowerCase().includes("goat")
              ? ["goat-sheep"]
              : ["cattle", "buffalo"];
    const image = product.image;
    const gallery = product.species.toLowerCase().includes("poultry")
      ? [
          images.species.poultryHen,
          images.species.poultryEggs,
          images.species.poultryFeed,
        ]
      : product.species.toLowerCase().includes("aquaculture")
        ? [
            images.species.aquacultureFarm,
            images.species.aquacultureWater,
            images.species.aquacultureMicro,
          ]
        : product.species.toLowerCase().includes("pet")
          ? [
              images.species.petCareExam,
              images.species.petClinic,
              images.species.petHome,
            ]
          : product.species.toLowerCase().includes("equine")
            ? [images.species.equineGrazing, images.species.equineRunning]
            : product.species.toLowerCase().includes("goat")
              ? [
                  images.species.goats,
                  images.species.goatHerd,
                  images.species.goatSheep,
                ]
              : [images.species.cattle, images.farm.farm1, images.farm.farm3];

    return {
      slug: product.slug,
      title: product.name,
      tagline: `Sample ${category.toLowerCase()} information for professional review`,
      intro: `${product.name} is an illustrative sample entry in the Nutritech ${category.toLowerCase()} catalog.`,
      longDescription: [
        `${product.name} is presented here as sample catalog content to demonstrate how product information can be organized. It is not a real product or a recommendation for treatment.`,
        `${categoryDescriptions[category]} This page contains no dosing instructions; refer to approved labeling and seek guidance from a qualified nutrition professional.`,
        `For an enquiry, share the animal species, location and context with the Nutritech team. Product range, availability and local suitability should be confirmed before use.`,
      ],
      keyBenefits: [
        `Category: ${category}`,
        `Intended species group: ${product.species}`,
        `Sample product form: ${product.form}`,
        `Access status shown for demonstration: ${product.access}`,
      ],
      relatedSpecies,
      relatedProducts: sampleProducts[category]
        .filter((item) => item.slug !== product.slug && item.species === product.species)
        .map((item) => item.slug)
        .slice(0, 3),
      image,
      faqs: [
        {
          question: "Is this a real product?",
          answer:
            "No. This entry is fictional sample content for the website design and must not be used as product guidance.",
        },
        {
          question: "How should I use this product?",
          answer:
            "No use or dosage guidance is provided here. Consult a qualified nutritionist and follow the approved product label in your region.",
        },
        {
          question: "Is this product available in my region?",
          answer:
            "Availability and regulatory status are not confirmed. Contact the team for verified local information before making a decision.",
        },
      ],
      gallery,
      category,
      species: product.species,
      form: product.form,
      access: product.access,
    };
  });

export type SampleGuide = {
  slug: string;
  title: string;
  category: "Poultry" | "Cattle" | "Aquaculture" | "Pet Care" | "Nutrition";
  readTime: string;
  description: string;
  image: ImageAsset;
  gallery: ImageAsset[];
  intro: string;
  longDescription: [string, string, string];
};

// TODO: Replace all sample guides with reviewed, region-appropriate educational content.
export const sampleGuides: SampleGuide[] = [
  {
    slug: "poultry-flock-observation",
    title: "A practical routine for observing a poultry flock",
    category: "Poultry",
    readTime: "5 min read",
    description: "Build a consistent routine for noticing and recording flock changes.",
    image: images.species.poultry,
    gallery: [
      images.species.poultryHen,
      images.species.poultryEggs,
      images.species.poultryFeed,
    ],
    intro: "A simple observation routine can help farm teams describe flock changes clearly.",
    longDescription: [
      "Choose a consistent time and route for observing birds. Take note of the flock’s general activity, access to feed and water, and any visible changes from its usual pattern.",
      "Record what changed and when it was first noticed. Notes are most useful when they describe observations without trying to diagnose a cause.",
      "Share relevant records promptly with a qualified nutritionist. This guide is general sample information and does not replace farm-specific professional advice.",
    ],
  },
  {
    slug: "cattle-nutrition-visit-preparation",
    title: "Preparing for a cattle health conversation",
    category: "Cattle",
    readTime: "4 min read",
    description: "Collect useful context before discussing herd nutrition with a nutrition specialist.",
    image: images.species.cattle,
    gallery: [images.farm.farm1, images.farm.farm3],
    intro: "A few clear notes can make a nutrition conversation more focused.",
    longDescription: [
      "Before a scheduled conversation, note which animals are affected, what changes you observed and when they began. Include recent changes to routine or environment when relevant.",
      "Keep existing herd records and product labels available for review. Do not begin, stop or change nutrition products without appropriate nutrition guidance.",
      "For urgent concerns, contact a local nutrition professional directly rather than relying on general online information.",
    ],
  },
  {
    slug: "aquaculture-water-observations",
    title: "Recording water and animal observations",
    category: "Aquaculture",
    readTime: "6 min read",
    description: "Keep system observations organized for a specialist discussion.",
    image: images.species.aquaculture,
    gallery: [
      images.species.aquacultureFarm,
      images.species.aquacultureWater,
      images.species.aquacultureMicro,
    ],
    intro: "A clear record can help specialists understand changes in an aquatic system.",
    longDescription: [
      "Use a consistent record format for routine system observations and the measurements your operation already monitors. Include dates, relevant equipment changes and unusual events.",
      "When animal behaviour changes, note the timing and the scope of the observation. Avoid drawing conclusions from one isolated reading or observation.",
      "Discuss records with an aquatic animal-health professional who understands the species and production system.",
    ],
  },
  {
    slug: "companion-animal-appointment-notes",
    title: "Useful notes for a companion-animal appointment",
    category: "Pet Care",
    readTime: "3 min read",
    description: "Organize everyday observations before speaking with your nutritionist.",
    image: images.species.petCare,
    gallery: [
      images.species.petCareExam,
      images.species.petClinic,
      images.species.petHome,
    ],
    intro: "Everyday details can help your nutritionist understand your pet’s situation.",
    longDescription: [
      "Write down what you noticed, when it started and whether anything has changed since. Include relevant routine, diet or environment changes.",
      "Bring current product packaging or a list of products already used. Do not give human nutrition products or change a pet’s treatment without nutrition direction.",
      "Contact your nutrition clinic directly if you are concerned about an urgent change in your pet’s condition.",
    ],
  },
  {
    slug: "feed additive-storage-discussion",
    title: "Questions for a feed additive storage review",
    category: "Nutrition",
    readTime: "4 min read",
    description: "Prepare to discuss handling and storage requirements with a care team.",
    image: images.products.feedAdditives,
    gallery: [
      images.species.cattle,
      images.species.goatSheep,
      images.products.nutrition,
    ],
    intro: "Product-specific storage instructions should always guide feed additive handling.",
    longDescription: [
      "Review the approved label and instructions for the specific product in your region. Requirements can differ, so general advice cannot replace product documentation.",
      "Prepare questions about monitoring, record-keeping and what to do if a storage concern arises. Ask a nutritionist or supplier to clarify uncertainties.",
      "This sample guide is an educational prompt only and does not certify any cold-chain process or product.",
    ],
  },
  {
    slug: "nutrition-plan-conversation",
    title: "Starting a practical animal nutrition conversation",
    category: "Cattle",
    readTime: "5 min read",
    description: "Gather context to discuss feeding needs with an animal-health professional.",
    image: images.products.nutrition,
    gallery: [images.species.cattle, images.farm.farm1, images.farm.farm3],
    intro: "Nutrition discussions benefit from a clear picture of animals and their routine.",
    longDescription: [
      "Describe the group, life stage, current feeding routine and management goals. Note changes in feed access, ingredients or environment that may be relevant.",
      "A qualified nutrition or nutrition professional can help assess whether a plan suits the animals and local context. Avoid making abrupt changes based only on general online content.",
      "Use this sample guide as a conversation starter, not as a formulated ration or individualized feeding recommendation.",
    ],
  },
];
