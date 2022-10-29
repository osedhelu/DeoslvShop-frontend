import { ShopLayout } from "@/components/layout";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";

interface props {}

const Custon404: NextPage<props> = ({}) => {
  return (
    <ShopLayout title={"Page 404"} description={"Tenemos un error"}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna pagina aqui
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custon404;
