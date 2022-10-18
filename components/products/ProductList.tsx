import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Grid } from "@mui/material";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface props {
  products: iProduct[];
}

export const ProductList: FC<props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {initialData.products.map((resp) => (
        <ProductCard key={resp.slug} product={resp} />
      ))}
    </Grid>
  );
};
