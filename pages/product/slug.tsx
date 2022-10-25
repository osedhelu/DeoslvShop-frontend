import { ItemCounter, ProductSlideShow, ShopLayout } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { FormatNumber } from "@/utils";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import "react-slideshow-image/dist/styles.css";

interface props {
  product: iProduct;
}

const ProdcutSlug: NextPage<props> = ({ product }) => {
  return (
    <ShopLayout description={product.description} title={product.title}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow imgs={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
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
              <Chip
                label="No tienes disponible"
                color="error"
                variant="outlined"
              />
            )}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps<props> = async (ctx) => {
  return {
    props: { product: initialData.products[0] },
  };
};

export default ProdcutSlug;
