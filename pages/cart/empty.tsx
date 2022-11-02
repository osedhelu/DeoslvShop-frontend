import { ShopLayout } from "@/components";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import NextLink from "next/link";

interface props {}

const CardEmpty: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title="Carrito Vacio"
      description="No hay articulos en el carrito de compra"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography marginLeft="12px">Su carrito esta vacio</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="primary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default CardEmpty;
