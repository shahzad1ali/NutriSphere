import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

export type ProductCategory =
  | "Medicines"
  | "Vaccines"
  | "Nutrition and Supplements"
  | "Diagnostics";

export type SampleProduct = {
  slug: string;
  name: string;
  species: string;
  form: "Injectable" | "Oral" | "Powder";
  access: "Prescription required" | "OTC";
  image: ImageAsset;
};

// All product names and catalog entries below are fictional sample data, not real product claims.
// TODO: Replace sample product names and descriptions with verified regional catalog information.
export const sampleProducts: Record<ProductCategory, SampleProduct[]> = {
  Medicines: [
    {
      slug: "vetrelief-oral-solution",
      name: "VetRelief Oral Solution",
      species: "Cattle",
      form: "Oral",
      access: "Prescription required",
      image: {
        src: "/solutions/vetrelief-oral-solution.jpeg",
        alt: "VetRelief oral solution product",
        category: "products",
        fallbackIcon: "Pill",
      },
    },
    {
      slug: "poultricare-injectable",
      name: "PoultriCare Injectable",
      species: "Poultry",
      form: "Injectable",
      access: "Prescription required",
      image: {
        src: "/solutions/PoultriCare%20Injectable.jpeg",
        alt: "PoultriCare injectable product",
        category: "products",
        fallbackIcon: "Pill",
      },
    },
    {
      slug: "companioncalm-powder",
      name: "CompanionCalm Powder",
      species: "Pets",
      form: "Powder",
      access: "OTC",
      image: {
        src: "/solutions/companioncalm-powder.jpeg",
        alt: "CompanionCalm powder product",
        category: "products",
        fallbackIcon: "Pill",
      },
    },
  ],
  Vaccines: [
    {
      slug: "flockguard-vaccine",
      name: "FlockGuard Vaccine",
      species: "Poultry",
      form: "Injectable",
      access: "Prescription required",
      image: {
        src: "/solutions/flock%20guardvecine.jpeg",
        alt: "FlockGuard vaccine product",
        category: "products",
        fallbackIcon: "Vaccine",
      },
    },
    {
      slug: "herdshield-vaccine",
      name: "HerdShield Vaccine",
      species: "Cattle",
      form: "Injectable",
      access: "Prescription required",
      image: {
        src: "/solutions/herdshidveccine.jpeg",
        alt: "HerdShield vaccine product",
        category: "products",
        fallbackIcon: "Vaccine",
      },
    },
    {
      slug: "aquaprotect-vaccine",
      name: "AquaProtect Vaccine",
      species: "Aquaculture",
      form: "Oral",
      access: "Prescription required",
      image: {
        src: "/solutions/aquaprotectveccine.jpeg",
        alt: "AquaProtect vaccine product",
        category: "products",
        fallbackIcon: "Vaccine",
      },
    },
  ],
  "Nutrition and Supplements": [
    {
      slug: "dailybalance-mineral-mix",
      name: "DailyBalance Mineral Mix",
      species: "Cattle & buffalo",
      form: "Powder",
      access: "OTC",
      image: {
        src: "/solutions/dailyminralmix.jpeg",
        alt: "DailyBalance mineral mix product",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
    {
      slug: "poultrystart-nutrient-blend",
      name: "PoultryStart Nutrient Blend",
      species: "Poultry",
      form: "Powder",
      access: "OTC",
      image: {
        src: "/solutions/poiltrystartnutrint.jpeg",
        alt: "PoultryStart nutrient blend product",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
    {
      slug: "petvital-oral-supplement",
      name: "PetVital Oral Supplement",
      species: "Pets",
      form: "Oral",
      access: "OTC",
      image: {
        src: "/solutions/petvitaloral.jpeg",
        alt: "PetVital oral supplement product",
        category: "products",
        fallbackIcon: "Leaf",
      },
    },
  ],
  Diagnostics: [
    {
      slug: "herdcheck-test-kit",
      name: "HerdCheck Test Kit",
      species: "Cattle",
      form: "Powder",
      access: "OTC",
      image: {
        src: "/solutions/hertcheckkit.jpeg",
        alt: "HerdCheck test kit",
        category: "products",
        fallbackIcon: "Microscope",
      },
    },
    {
      slug: "flockscreen-sample-kit",
      name: "FlockScreen Sample Kit",
      species: "Poultry",
      form: "Oral",
      access: "OTC",
      image: {
        src: "/solutions/flockscreen.jpeg",
        alt: "FlockScreen sample kit",
        category: "products",
        fallbackIcon: "Microscope",
      },
    },
    {
      slug: "aquasure-water-panel",
      name: "AquaSure Water Panel",
      species: "Aquaculture",
      form: "Powder",
      access: "OTC",
      image: {
        src: "/solutions/aquawater%20panel.jpeg",
        alt: "AquaSure water panel",
        category: "products",
        fallbackIcon: "Microscope",
      },
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
      "The consultation helped us organize the right questions before making a care plan with our local veterinarian.",
    name: "Dr. Hasan M.",
    role: "Veterinary practitioner",
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
    title: "Questions for a vaccine storage review",
    description:
      "Prepare to discuss handling and storage requirements with a care team.",
    readTime: "4 min read",
    href: "/library/vaccine-storage-discussion",
  },
  {
    category: "Pet Care",
    title: "Useful notes for a companion-animal appointment",
    description:
      "Organize everyday observations before speaking with your veterinarian.",
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

// TODO: Replace this professionally written sample copy with verified NutriSphere content.
const standardCareFAQs: [ContentFAQ, ContentFAQ, ContentFAQ] = [
  {
    question: "How do I choose the right care approach?",
    answer:
      "Discuss the animals, their environment and current concerns with a qualified local veterinarian before making care decisions.",
  },
  {
    question: "Can I get product guidance for my region?",
    answer:
      "Contact the team with your location and animal-health question. Product availability and requirements vary by region.",
  },
  {
    question: "Where can I find storage and handling information?",
    answer:
      "Follow the product label and locally approved guidance. Ask your veterinarian or supplier if anything is unclear.",
  },
];

// TODO: Replace species sample records with regionally reviewed NutriSphere content.
export const speciesPages: SpeciesRecord[] = [
  {
    slug: "poultry",
    title: "Poultry",
    tagline: "Practical support for flock wellbeing",
    intro:
      "Flock health is built through attentive observation, appropriate preventive care and a clear understanding of each production setting.",
    longDescription: [
      "Poultry teams balance daily husbandry, nutrition, biosecurity and veterinary decisions. A consistent routine helps people notice changes early and communicate useful observations to their animal-health professionals.",
      "A considered care plan starts with the flock’s age, environment, management practices and local disease considerations. Product selection and preventive measures should always be reviewed with a qualified veterinarian and follow local requirements.",
      "NutriSphere’s sample resources bring product information and practical care conversations together. They are intended to help farm teams prepare questions, compare support options and work constructively with their veterinary partners.",
    ],
    keyBenefits: [
      "Prompts for structured flock-health observations",
      "Preventive-care conversations tailored to the production context",
      "Product information for discussion with a veterinarian",
      "Nutrition and husbandry topics in one practical overview",
    ],
    relatedSpecies: ["cattle", "goat-sheep", "aquaculture"],
    relatedProducts: ["flockguard-vaccine", "poultricare-injectable", "poultrystart-nutrient-blend"],
    image: images.species.poultry,
    faqs: standardCareFAQs,
    gallery: [images.species.poultry, images.farm.farm1, images.farm.farm2],
  },
  {
    slug: "cattle",
    title: "Cattle",
    tagline: "Thoughtful care for cattle herds",
    intro:
      "Strong herd-care routines connect regular observation, sound nutrition and timely veterinary guidance.",
    longDescription: [
      "Cattle management spans a range of life stages and farm systems. Keeping clear records of changes in behaviour, feeding and general condition can make conversations with a veterinarian more focused.",
      "Herd plans are most useful when they reflect local conditions, the animals’ needs and the farm’s established practices. Medicines and preventive products should be selected with veterinary oversight and according to approved local labels.",
      "NutriSphere’s sample cattle resources are designed to support those conversations with accessible product-category information and practical prompts for care planning.",
    ],
    keyBenefits: [
      "Herd observation and record-keeping prompts",
      "Veterinary-led discussions about prevention and treatment",
      "Nutrition topics for different herd contexts",
      "Regional product information for informed enquiries",
    ],
    relatedSpecies: ["buffalo", "goat-sheep", "equine"],
    relatedProducts: ["herdshield-vaccine", "vetrelief-oral-solution", "dailybalance-mineral-mix"],
    image: images.species.cattle,
    faqs: standardCareFAQs,
    gallery: [images.species.cattle, images.farm.farm3, images.farm.farm4],
  },
  {
    slug: "buffalo",
    title: "Buffalo",
    tagline: "Care conversations for buffalo systems",
    intro:
      "Every buffalo operation has its own management context, making observation and locally informed veterinary planning essential.",
    longDescription: [
      "Buffalo care is influenced by climate, housing, feeding, work and production goals. A daily routine that records meaningful changes can help farm teams share a clearer picture with their veterinarian.",
      "Preventive and treatment decisions need to account for local disease patterns and individual animal needs. Product labels, regional regulations and veterinary advice should guide any medicine or vaccine use.",
      "NutriSphere’s sample resources offer a starting point for questions about animal-health categories, nutrition and coordination with professional care providers.",
    ],
    keyBenefits: [
      "Care planning prompts that respect local farm systems",
      "Clearer discussions about animal observations",
      "Nutrition topics for veterinarian review",
      "Regional product enquiries and support information",
    ],
    relatedSpecies: ["cattle", "goat-sheep", "equine"],
    relatedProducts: ["dailybalance-mineral-mix", "herdshield-vaccine", "vetrelief-oral-solution"],
    image: images.species.buffalo,
    faqs: standardCareFAQs,
    gallery: [images.species.buffalo, images.farm.farm1, images.farm.farm4],
  },
  {
    slug: "goat-sheep",
    title: "Goats and Sheep",
    tagline: "Small-ruminant support grounded in good care",
    intro:
      "Attentive flock management and a trusted veterinary relationship help guide care for goats and sheep.",
    longDescription: [
      "Goats and sheep may be managed across varied landscapes and production systems. Understanding the group’s routine and noting changes in appetite, activity or condition can help focus professional advice.",
      "Care planning should be appropriate to species, life stage and local conditions. Veterinary professionals can advise on preventive care and product use in line with regional requirements.",
      "NutriSphere’s sample content brings together animal-health and nutrition topics to help producers prepare for productive conversations with their care team.",
    ],
    keyBenefits: [
      "Observation prompts for small-ruminant groups",
      "Veterinary-led preventive-care discussions",
      "Nutrition considerations for professional review",
      "Product category information for regional enquiries",
    ],
    relatedSpecies: ["cattle", "buffalo", "equine"],
    relatedProducts: ["dailybalance-mineral-mix", "vetrelief-oral-solution", "herdshield-vaccine"],
    image: images.species.goatSheep,
    faqs: standardCareFAQs,
    gallery: [images.species.goatSheep, images.farm.farm1, images.farm.farm3],
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
      "NutriSphere’s sample aquaculture resources are designed to support informed questions about diagnostic categories, preventive care and available product information.",
    ],
    keyBenefits: [
      "Prompts to record system conditions and observations",
      "Professional consultation topics for aquatic animal health",
      "Diagnostic and product category information",
      "Regional guidance for responsible product enquiries",
    ],
    relatedSpecies: ["poultry", "cattle", "pet-care"],
    relatedProducts: ["aquaprotect-vaccine", "aquasure-water-panel", "herdcheck-test-kit"],
    image: images.species.aquaculture,
    faqs: standardCareFAQs,
    gallery: [images.species.aquaculture, images.lab.lab1, images.lab.lab3],
  },
  {
    slug: "pet-care",
    title: "Pet Care",
    tagline: "Considered support for companion animals",
    intro:
      "Companion-animal wellbeing benefits from attentive daily care and advice from a trusted veterinary professional.",
    longDescription: [
      "Each companion animal has individual needs shaped by age, lifestyle and health history. Sharing a clear description of changes and routines can help a veterinarian make a more informed assessment.",
      "Medicines and supplements are not one-size-fits-all. Product choices should be made with veterinary guidance and in line with approved labeling and regional rules.",
      "NutriSphere’s sample pet-care materials help owners prepare for conversations about everyday wellbeing, product information and professional support.",
    ],
    keyBenefits: [
      "Prompts for useful veterinary appointment notes",
      "Product information to review with a care professional",
      "Everyday wellbeing and nutrition topics",
      "Clear reminders to follow individual veterinary guidance",
    ],
    relatedSpecies: ["equine", "poultry", "cattle"],
    relatedProducts: ["companioncalm-powder", "petvital-oral-supplement", "flockscreen-sample-kit"],
    image: images.species.petCare,
    faqs: standardCareFAQs,
    gallery: [
      images.species.petCare,
      images.species.petCareExam,
      images.species.petClinic,
    ],
  },
  {
    slug: "equine",
    title: "Equine",
    tagline: "Support for horses and the people who care for them",
    intro:
      "Thoughtful equine care combines daily observation, suitable nutrition and a strong partnership with veterinary professionals.",
    longDescription: [
      "Horses rely on consistent routines and attentive handlers. Noting changes in comfort, appetite, activity and environment can help owners share useful context with their veterinarian.",
      "Care plans vary by horse, workload and setting. Medicines and supplements should be considered with a qualified veterinary professional, following product labeling and local requirements.",
      "NutriSphere’s sample equine resources provide a starting place for care questions and discussions about animal-health support options.",
    ],
    keyBenefits: [
      "Observation prompts for owners and stable teams",
      "Veterinary-led discussions about care planning",
      "Nutrition topics for individual review",
      "Product information to support informed enquiries",
    ],
    relatedSpecies: ["cattle", "buffalo", "goat-sheep"],
    relatedProducts: ["dailybalance-mineral-mix", "vetrelief-oral-solution", "petvital-oral-supplement"],
    image: images.species.equine,
    faqs: standardCareFAQs,
    gallery: [images.species.equine, images.farm.farm2, images.farm.farm3],
  },
];

export type ProductRecord = DetailRecord & {
  category: ProductCategory;
  species: string;
  form: SampleProduct["form"];
  access: SampleProduct["access"];
};

const categoryDescriptions: Record<ProductCategory, string> = {
  Medicines:
    "Medicine choices require an individual assessment and veterinary oversight. Product information and approved use vary by region.",
  Vaccines:
    "Vaccine planning depends on local guidance, animal health and product-specific requirements. Consult a qualified veterinarian.",
  "Nutrition and Supplements":
    "Nutrition support should complement a suitable feeding plan developed for the animals and management context.",
  Diagnostics:
    "Diagnostic tools and sample handling should be discussed with an appropriate veterinary or laboratory professional.",
};

export const productPages: ProductRecord[] = Object.entries(sampleProducts)
  .flatMap(([category, products]) =>
    products.map((product) => ({
      product,
      category: category as ProductCategory,
    })),
  )
  .map(({ category, product }, index) => {
    const relatedSpecies = product.species.toLowerCase().includes("poultry")
      ? ["poultry"]
      : product.species.toLowerCase().includes("aquaculture")
        ? ["aquaculture"]
        : product.species.toLowerCase().includes("pet")
          ? ["pet-care"]
          : ["cattle", "buffalo"];
    const image = product.image;

    return {
      slug: product.slug,
      title: product.name,
      tagline: `Sample ${category.toLowerCase()} information for professional review`,
      intro: `${product.name} is an illustrative sample entry in the NutriSphere ${category.toLowerCase()} catalog.`,
      longDescription: [
        `${product.name} is presented here as sample catalog content to demonstrate how product information can be organized. It is not a real product or a recommendation for treatment.`,
        `${categoryDescriptions[category]} This page contains no dosing instructions; refer to approved labeling and seek guidance from a qualified veterinary professional.`,
        `For an enquiry, share the animal species, location and context with the NutriSphere team. Product access, prescription requirements and availability must be verified for the relevant region.`,
      ],
      keyBenefits: [
        `Category: ${category}`,
        `Intended species group: ${product.species}`,
        `Sample product form: ${product.form}`,
        `Access status shown for demonstration: ${product.access}`,
      ],
      relatedSpecies,
      relatedProducts: sampleProducts[category].filter((item) => item.slug !== product.slug).map((item) => item.slug).slice(0, 3),
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
            "No use or dosage guidance is provided here. Consult a qualified veterinarian and follow the approved product label in your region.",
        },
        {
          question: "Is this product available in my region?",
          answer:
            "Availability and regulatory status are not confirmed. Contact the team for verified local information before making a decision.",
        },
      ],
      gallery: [
        image,
        images.lab.lab1,
        index % 2 === 0 ? images.farm.farm1 : images.farm.farm2,
      ],
      category,
      species: product.species,
      form: product.form,
      access: product.access,
    };
  });

export type SampleGuide = {
  slug: string;
  title: string;
  category: "Poultry" | "Cattle" | "Aquaculture" | "Pet Care" | "Vaccines";
  readTime: string;
  description: string;
  image: ImageAsset;
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
    intro: "A simple observation routine can help farm teams describe flock changes clearly.",
    longDescription: [
      "Choose a consistent time and route for observing birds. Take note of the flock’s general activity, access to feed and water, and any visible changes from its usual pattern.",
      "Record what changed and when it was first noticed. Notes are most useful when they describe observations without trying to diagnose a cause.",
      "Share relevant records promptly with a qualified veterinarian. This guide is general sample information and does not replace farm-specific professional advice.",
    ],
  },
  {
    slug: "cattle-vet-visit-preparation",
    title: "Preparing for a cattle health conversation",
    category: "Cattle",
    readTime: "4 min read",
    description: "Collect useful context before discussing a herd concern with a vet.",
    image: images.species.cattle,
    intro: "A few clear notes can make a veterinary conversation more focused.",
    longDescription: [
      "Before a scheduled conversation, note which animals are affected, what changes you observed and when they began. Include recent changes to routine or environment when relevant.",
      "Keep existing herd records and product labels available for review. Do not begin, stop or change medicines without appropriate veterinary guidance.",
      "For urgent concerns, contact a local veterinary professional directly rather than relying on general online information.",
    ],
  },
  {
    slug: "aquaculture-water-observations",
    title: "Recording water and animal observations",
    category: "Aquaculture",
    readTime: "6 min read",
    description: "Keep system observations organized for a specialist discussion.",
    image: images.species.aquaculture,
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
    description: "Organize everyday observations before speaking with your veterinarian.",
    image: images.species.petCare,
    intro: "Everyday details can help your veterinarian understand your pet’s situation.",
    longDescription: [
      "Write down what you noticed, when it started and whether anything has changed since. Include relevant routine, diet or environment changes.",
      "Bring current product packaging or a list of products already used. Do not give human medicines or change a pet’s treatment without veterinary direction.",
      "Contact your veterinary clinic directly if you are concerned about an urgent change in your pet’s condition.",
    ],
  },
  {
    slug: "vaccine-storage-discussion",
    title: "Questions for a vaccine storage review",
    category: "Vaccines",
    readTime: "4 min read",
    description: "Prepare to discuss handling and storage requirements with a care team.",
    image: images.products.vaccines,
    intro: "Product-specific storage instructions should always guide vaccine handling.",
    longDescription: [
      "Review the approved label and instructions for the specific product in your region. Requirements can differ, so general advice cannot replace product documentation.",
      "Prepare questions about monitoring, record-keeping and what to do if a storage concern arises. Ask a veterinarian or supplier to clarify uncertainties.",
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
    intro: "Nutrition discussions benefit from a clear picture of animals and their routine.",
    longDescription: [
      "Describe the group, life stage, current feeding routine and management goals. Note changes in feed access, ingredients or environment that may be relevant.",
      "A qualified nutrition or veterinary professional can help assess whether a plan suits the animals and local context. Avoid making abrupt changes based only on general online content.",
      "Use this sample guide as a conversation starter, not as a formulated ration or individualized feeding recommendation.",
    ],
  },
];
