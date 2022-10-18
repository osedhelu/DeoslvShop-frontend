type iSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type iTypes = "shirts" | "pants" | "hoodies" | "hats";

export interface iProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: iSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: iTypes;
  gender: "men" | "women" | "kid" | "unisex";
}
