import { niProduct } from "@/interface";
import { Grid } from "@mui/material";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface props {
  products: niProduct[];
  loading: boolean;
}

export const ProductList: FC<props> = ({ products, loading }) => {
  return (
    <Grid container spacing={4}>
      {(loading ? Array.from(new Array(9)) : products).map((resp, index) => (
        <ProductCard loading={loading} key={index} product={resp} />
      ))}
    </Grid>
  );
};
