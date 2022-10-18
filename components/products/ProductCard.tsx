import { iProduct } from "@/interface";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { FC } from "react";

interface props {
  product: iProduct;
}

export const ProductCard: FC<props> = ({ product }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={`products/${product.images[0]}`}
            alt={product.title}
            component="img"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
