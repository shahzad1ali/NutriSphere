export type ImageCategory = "hero" | "species" | "products" | "lab" | "farm";
export type ImageFallbackIcon =
  | "Chicken"
  | "Cow"
  | "Dog"
  | "Fish"
  | "Flask"
  | "Horse"
  | "Leaf"
  | "Microscope"
  | "Pill"
  | "Sheep"
  | "Stethoscope"
  | "FeedAdditive";

export type ImageAsset = {
  src:
    | `/images/${string}.jpeg`
    | `/solutions/${string}.jpeg`
    | `/nutrition/${string}.jpg`;
  alt: string;
  category: ImageCategory;
  fallbackIcon: ImageFallbackIcon;
};

type ImageMap = {
  hero: ImageAsset;
  species: {
    poultry: ImageAsset;
    cattle: ImageAsset;
    buffalo: ImageAsset;
    goatSheep: ImageAsset;
    goats: ImageAsset;
    goatHerd: ImageAsset;
    aquaculture: ImageAsset;
    aquacultureFarm: ImageAsset;
    aquacultureWater: ImageAsset;
    aquacultureMicro: ImageAsset;
    poultryHen: ImageAsset;
    poultryEggs: ImageAsset;
    poultryFeed: ImageAsset;
    poultryProduction: ImageAsset;
    petCare: ImageAsset;
    petCareExam: ImageAsset;
    petClinic: ImageAsset;
    petHome: ImageAsset;
    equine: ImageAsset;
    equineGrazing: ImageAsset;
    equineRunning: ImageAsset;
  };
  products: {
    feedAdditives: ImageAsset;
    nutrition: ImageAsset;
    nutritionPlanning: ImageAsset;
  };
  lab: {
    lab1: ImageAsset;
    lab2: ImageAsset;
    lab3: ImageAsset;
  };
  farm: {
    farm1: ImageAsset;
    farm2: ImageAsset;
    farm3: ImageAsset;
    farm4: ImageAsset;
    poultryHealthCheck: ImageAsset;
  };
};

export const images = {
  hero: {
    src: "/nutrition/cow.jpg",
    alt: "Cattle grazing on a green pasture",
    category: "hero",
    fallbackIcon: "Stethoscope",
  },
  species: {
    poultry: {
      src: "/nutrition/poultry.jpg",
      alt: "Healthy chickens in a poultry farm",
      category: "species",
      fallbackIcon: "Chicken",
    },
    cattle: {
      src: "/nutrition/cow.jpg",
      alt: "Cattle grazing on a farm",
      category: "species",
      fallbackIcon: "Cow",
    },
    buffalo: {
      src: "/images/farm/veterinary-cattle-consultation.jpeg",
      alt: "A cattle nutrition consultation on a farm",
      category: "species",
      fallbackIcon: "Cow",
    },
    goatSheep: {
      src: "/nutrition/goatssheep.jpg",
      alt: "Goats and sheep on a farm",
      category: "species",
      fallbackIcon: "Sheep",
    },
    goats: {
      src: "/nutrition/goats.jpg",
      alt: "Goat in a green pasture",
      category: "species",
      fallbackIcon: "Sheep",
    },
    goatHerd: {
      src: "/nutrition/gouts.jpg",
      alt: "A small-ruminant group in a pasture",
      category: "species",
      fallbackIcon: "Sheep",
    },
    aquaculture: {
      src: "/nutrition/aquacul.jpg",
      alt: "Fish in an aquaculture system",
      category: "species",
      fallbackIcon: "Fish",
    },
    aquacultureFarm: {
      src: "/nutrition/aquaculture.jpg",
      alt: "Aquaculture production facility",
      category: "species",
      fallbackIcon: "Fish",
    },
    aquacultureWater: {
      src: "/nutrition/aqua.jpg",
      alt: "Aquatic plants in a natural water system",
      category: "species",
      fallbackIcon: "Fish",
    },
    aquacultureMicro: {
      src: "/nutrition/aquafo.jpg",
      alt: "Microscopic aquatic organisms",
      category: "species",
      fallbackIcon: "Fish",
    },
    poultryHen: {
      src: "/nutrition/poultryhen.jpg",
      alt: "Hens in a poultry flock",
      category: "species",
      fallbackIcon: "Chicken",
    },
    poultryEggs: {
      src: "/nutrition/poultryegg.jpg",
      alt: "Fresh eggs from a poultry flock",
      category: "species",
      fallbackIcon: "Chicken",
    },
    poultryFeed: {
      src: "/nutrition/poultrynutrti.jpg",
      alt: "Poultry gathered around a feed container",
      category: "species",
      fallbackIcon: "Chicken",
    },
    poultryProduction: {
      src: "/nutrition/bernd-dittrich-AApLN_qCcBM-unsplash.jpg",
      alt: "Poultry production facility",
      category: "species",
      fallbackIcon: "Chicken",
    },
    petCare: {
      src: "/nutrition/petca.jpg",
      alt: "A person caring for a companion cat",
      category: "species",
      fallbackIcon: "Dog",
    },
    petCareExam: {
      src: "/nutrition/petcare.jpg",
      alt: "A pet receiving a health check",
      category: "species",
      fallbackIcon: "Dog",
    },
    petClinic: {
      src: "/nutrition/pet.jpg",
      alt: "A companion dog relaxing at home",
      category: "species",
      fallbackIcon: "Dog",
    },
    petHome: {
      src: "/nutrition/petcareho.jpg",
      alt: "A companion animal receiving care at home",
      category: "species",
      fallbackIcon: "Dog",
    },
    equine: {
      src: "/nutrition/Equine.jpg",
      alt: "Horse standing in an outdoor paddock",
      category: "species",
      fallbackIcon: "Horse",
    },
    equineGrazing: {
      src: "/nutrition/Equineform.jpg",
      alt: "Horses grazing together in a field",
      category: "species",
      fallbackIcon: "Horse",
    },
    equineRunning: {
      src: "/nutrition/Equinefoemoning.jpg",
      alt: "Horse moving through an outdoor paddock",
      category: "species",
      fallbackIcon: "Horse",
    },
  },
  products: {
    feedAdditives: {
      src: "/solutions/dailyminralmix.jpeg",
      alt: "Animal feed additive and nutrition equipment",
      category: "products",
      fallbackIcon: "FeedAdditive",
    },
    nutrition: {
      src: "/nutrition/poultrynutrti.jpg",
      alt: "Poultry gathered around animal feed",
      category: "products",
      fallbackIcon: "Leaf",
    },
    nutritionPlanning: {
      src: "/nutrition/cow.jpg",
      alt: "Animal nutrition product information",
      category: "products",
      fallbackIcon: "FeedAdditive",
    },
  },
  lab: {
    lab1: {
      src: "/images/lab/laboratory-team.jpeg",
      alt: "Scientist working in a laboratory",
      category: "lab",
      fallbackIcon: "Microscope",
    },
    lab2: {
      src: "/images/lab/microscope-technician.jpeg",
      alt: "Laboratory test tubes",
      category: "lab",
      fallbackIcon: "Flask",
    },
    lab3: {
      src: "/images/lab/laboratory-team.jpeg",
      alt: "Nutrition laboratory equipment",
      category: "lab",
      fallbackIcon: "Flask",
    },
  },
  farm: {
    farm1: {
      src: "/images/farm/dairy-cow-care.jpeg",
      alt: "Farm landscape at sunrise",
      category: "farm",
      fallbackIcon: "Leaf",
    },
    farm2: {
      src: "/images/farm/feed-lab-visit.jpeg",
      alt: "A farm team reviewing poultry feed",
      category: "farm",
      fallbackIcon: "Chicken",
    },
    farm3: {
      src: "/images/farm/veterinary-cattle-consultation.jpeg",
      alt: "A nutrition professional consulting with a cattle farmer",
      category: "farm",
      fallbackIcon: "Sheep",
    },
    farm4: {
      src: "/images/farm/poultry-house.jpeg",
      alt: "Poultry house on a farm",
      category: "farm",
      fallbackIcon: "Chicken",
    },
    poultryHealthCheck: {
      src: "/images/farm/poultry-health-check.jpeg",
      alt: "Poultry house on a farm",
      category: "farm",
      fallbackIcon: "Chicken",
    },
  },
} as const satisfies ImageMap;

export type ImageKey =
  | "hero"
  | `species.${keyof typeof images.species & string}`
  | `products.${keyof typeof images.products & string}`
  | `lab.${keyof typeof images.lab & string}`
  | `farm.${keyof typeof images.farm & string}`;

export const allImages: ImageAsset[] = [
  images.hero,
  ...Object.values(images.species),
  ...Object.values(images.products),
  ...Object.values(images.lab),
  ...Object.values(images.farm),
];
