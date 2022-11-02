import { ShopLayout, CardList, CardDetails } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Typography, Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  products: iProduct[];
}

const SummaryPage: NextPage<props> = ({ products }) => {
  return (
    <ShopLayout
      description="Resumen de la orden"
      title="Resumen de la orden | shop"
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList products={products} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <CardDetails title="Resumen (3 productos)" />
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

export default SummaryPage;
