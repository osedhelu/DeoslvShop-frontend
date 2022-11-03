import { ShopLayout, CardList, CardDetails } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";
import { Typography, Grid, Chip } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  products: iProduct[];
  typeOrden?: boolean;
}

const OrderPayPages: NextPage<props> = ({
  products = [],
  typeOrden = true,
}) => {
  return (
    <ShopLayout
      description="Resumen de la orden"
      title="Resumen de la orden | shop"
    >
      <Typography variant="h1" component="h1">
        Orden: ABC123
      </Typography>
      {typeOrden ? (
        <Chip
          sx={{ my: 2 }}
          label="Orden ya fue pagada"
          variant="outlined"
          color="success"
          icon={<CreditScoreOutlined />}
        />
      ) : (
        <Chip
          sx={{ my: 2 }}
          label="Pendiente de pago"
          variant="outlined"
          color="error"
          icon={<CreditCardOffOutlined />}
        />
      )}

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
              <>
                <Typography sx={{ my: "33px" }} component="h1" variant="h1">
                  Pagar
                </Typography>
                {typeOrden ? (
                  <Chip
                    sx={{ my: 2 }}
                    label="Orden ya fue pagada"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                  />
                ) : (
                  <Chip
                    sx={{ my: 2 }}
                    label="Pendiente de pago"
                    variant="outlined"
                    color="error"
                    icon={<CreditCardOffOutlined />}
                  />
                )}
              </>
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
      typeOrden: true,
    },
  };
};

export default OrderPayPages;
