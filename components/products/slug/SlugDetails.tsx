import { ItemCounter } from "@/components/ui";
import { iProduct } from "@/interface";
import product from "@/pages/product";
import { FormatNumber } from "@/utils";
import { Box, Typography, Button, Chip } from "@mui/material";
import { FC } from "react";

interface props {
  product: iProduct;
}

export const SlugDetails: FC<props> = ({ product }) => {
  return (
    <Box display="flex" flexDirection="column">
      {/* Title product */}
      <Typography variant="h1" component="h1">
        {product.title}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {FormatNumber(product.price)}
      </Typography>
      {/* Cantidad de elementors */}
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle2">Cantidad</Typography>
        <ItemCounter />
      </Box>
      {/* Aregar al carrito */}
      <Button color="secondary" className="circula-btn">
        Agregar al carrito
      </Button>
      {/* alert no Disponible */}
      {false && (
        <Chip label="No tienes disponible" color="error" variant="outlined" />
      )}

      {/* Description */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle2">Description</Typography>
        <Typography variant="body2">{product.description}</Typography>
      </Box>
    </Box>
  );
};
