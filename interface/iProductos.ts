export type iSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type iTypes = "shirts" | "pants" | "hoodies" | "hats";

export interface iProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: iSize[];
  slug: string;
  tags: string[];
  title: string;
  type: iTypes;
  gender: "men" | "women" | "kid" | "unisex";
}
export interface Image {
  img: string;
}

export interface niProduct {
  description: string;
  inStock: number;
  price: string;
  sizes: iSize[];
  slug: string;
  types: iTypes;
  tags: string[];
  title: string;
  gender: string;
  images: Image[];
}

export interface ApiResponse {
  count: number;
  next: string;
  previous?: any;
  results: niProduct[];
}
