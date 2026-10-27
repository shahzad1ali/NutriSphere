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
  | "Vaccine";

export type ImageAsset = {
  src: `/images/${string}.jpeg` | `/solutions/${string}.jpeg`;
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
    aquaculture: ImageAsset;
    petCare: ImageAsset;
    petCareExam: ImageAsset;
    petClinic: ImageAsset;
    equine: ImageAsset;
  };
  products: {
    vaccines: ImageAsset;
    medicines: ImageAsset;
    nutrition: ImageAsset;
    diagnostics: ImageAsset;
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
    src: "/images/farm/veterinary-cattle-consultation.jpeg",
    alt: "Veterinarian examining an animal",
    category: "hero",
    fallbackIcon: "Stethoscope",
  },
  species: {
    poultry: {
      src: "/images/farm/poultry-health-check.jpeg",
      alt: "Healthy chickens in a poultry farm",
      category: "species",
      fallbackIcon: "Chicken",
    },
    cattle: {
      src: "/images/farm/dairy-cow-care.jpeg",
      alt: "Cattle grazing on a farm",
      category: "species",
      fallbackIcon: "Cow",
    },
    buffalo: {
      src: "/images/farm/dairy-cow-care.jpeg",
      alt: "Water buffalo in a farm setting",
      category: "species",
      fallbackIcon: "Cow",
    },
    goatSheep: {
      src: "/images/farm/goat-veterinary-care.jpeg",
      alt: "Goats and sheep on a farm",
      category: "species",
      fallbackIcon: "Sheep",
    },
    aquaculture: {
      src: "/solutions/aquaculture.jpeg",
      alt: "Fish in an aquaculture system",
      category: "species",
      fallbackIcon: "Fish",
    },
    petCare: {
      src: "/images/species/pet-care-consultation.jpeg",
      alt: "Veterinarian caring for a dog",
      category: "species",
      fallbackIcon: "Dog",
    },
    petCareExam: {
      src: "/images/species/pet-care-exam.jpeg",
      alt: "Veterinarian caring for a dog",
      category: "species",
      fallbackIcon: "Dog",
    },
    petClinic: {
      src: "/images/species/pet-clinic.jpeg",
      alt: "Veterinarian caring for a dog",
      category: "species",
      fallbackIcon: "Dog",
    },
    equine: {
      src: "/solutions/equine.jpeg",
      alt: "Horse in a stable and farm setting",
      category: "species",
      fallbackIcon: "Horse",
    },
  },
  products: {
    vaccines: {
      src: "/solutions/flock%20guardvecine.jpeg",
      alt: "Veterinary vaccine equipment",
      category: "products",
      fallbackIcon: "Vaccine",
    },
    medicines: {
      src: "/solutions/vetrelief-oral-solution.jpeg",
      alt: "Veterinary medicine products",
      category: "products",
      fallbackIcon: "Pill",
    },
    nutrition: {
      src: "/solutions/dailyminralmix.jpeg",
      alt: "Animal feed and nutrition",
      category: "products",
      fallbackIcon: "Leaf",
    },
    diagnostics: {
      src: "/solutions/hertcheckkit.jpeg",
      alt: "Veterinary diagnostic test kit",
      category: "products",
      fallbackIcon: "Microscope",
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
      alt: "Veterinary laboratory equipment",
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
      src: "/images/farm/cattle-blood-sampling.jpeg",
      alt: "Cattle in a pasture",
      category: "farm",
      fallbackIcon: "Cow",
    },
    farm3: {
      src: "/images/farm/veterinary-cattle-consultation.jpeg",
      alt: "Farmer working with livestock",
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
