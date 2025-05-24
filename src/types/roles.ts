export interface Price {
  monthly: string;
  annually: string;
}

export interface Frequency {
  value: string;
  label: string;
}

export interface Tier {
  name: string;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: Price;
  mainFeatures: string[];
}

export interface Feature {
  name: string;
  tiers: {
    [key: string]: boolean | string;
  };
}

export interface Section {
  name: string;
  features: Feature[];
}

export interface PricingData {
  frequencies: Frequency[];
  tiers: Tier[];
  sections: Section[];
}