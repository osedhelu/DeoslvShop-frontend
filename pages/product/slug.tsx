import { ShopLayout } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { FormatNumber } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  product: iProduct;
}

const ProdcutSlug: NextPage<props> = ({ product }) => {
  return (
    <ShopLayout description={product.description} title={product.title}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}></Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {FormatNumber(product.price)}
            </Typography>
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
