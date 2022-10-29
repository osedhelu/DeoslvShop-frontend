import { ProductSlideShow, ShopLayout, SlugDetails } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  product: iProduct;
}

const ProdcutSlug: NextPage<props> = ({ product }) => {
  console.log(product);
  return (
    <ShopLayout description={product.description} title={product.title}>
      <Grid container spacing={3} sx={{padding:"33px"}}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow imgs={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SlugDetails product={product} />
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
