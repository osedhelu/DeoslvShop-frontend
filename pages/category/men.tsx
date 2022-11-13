import { ProductList, ShopLayout } from "@/components";
import { useProduct } from "@/hooks";
import { Box, Pagination, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

interface props {}

const MenPage: NextPage<props> = ({}) => {
  const [page, setPage] = useState(1);
  const [pathSearch, setpathSearch] = useState(`?gender=men&limit=9&offset=0`);
  const { isError, isLoading, resp } = useProduct(`/product/${pathSearch}`);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    let page = (value - 1) * 9;
    setpathSearch(`?gender=men&limit=9&offset=${page}`);
    setPage(value);
  };
  if (!isLoading) {
    console.log(isError);
  }

  return (
    <ShopLayout title="Gender" description="Gender">
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para El
      </Typography>
      <ProductList loading={isLoading} products={resp.results} />
      <Box
        display="flex"
        sx={{ paddingTop: "44px" }}
        justifyContent="center"
        alignContent="center"
      >
        <Pagination
          count={Math.round(resp.count / 9) + 1}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </ShopLayout>
  );
};

export default MenPage;
