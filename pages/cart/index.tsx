import { CardDetails, CardList } from "@/components";
import { ShopLayout } from "@/components/layout";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  products: iProduct[];
}

const CartScreen: NextPage<props> = ({ products }) => {
  return (
    <ShopLayout
      description="Carrito de compra de la tienda"
      title="Card | shop"
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList products={products} editable />
        </Grid>

        <Grid item xs={12} sm={5}>
          <CardDetails />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps<props> = async (
  context
) => {
  return {
    props: {
      products: initialData.products.splice(1, 3),
    },
  };
};

export default CartScreen;
