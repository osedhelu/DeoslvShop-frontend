import { CardDetails, CardList, ShopLayout } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Box, Button, Grid, Typography } from "@mui/material";
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
          <CardDetails
            checkoutAddress={{
              city: "Stittsville, HYA 23S",
              country: "Canadá",
              direccion: "323 Algun Lugar",
              name: "Oscar Herrera",
              phone: "+1 234738434",
            }}
            title="Resumen (3 productos)"
            jsxAction={
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            }
          />
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
