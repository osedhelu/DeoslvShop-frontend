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
