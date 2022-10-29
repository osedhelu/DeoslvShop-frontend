import { ShopLayout, ProductList } from "@/components";
import { initialData } from "@/database/products";
import { iProduct } from "@/interface";
import { Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  products: iProduct[];
}

const Home: NextPage<props> = ({ products }) => {
  return (
    <ShopLayout
      description="encuentra los mejores productos de Deoslv-shop"
      title="Deoslv-shop"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      <ProductList products={products} />
    </ShopLayout>
  );
};
export const getServerSideProps: GetServerSideProps<props> = async (ctx) => {
  return {
    props: {
      products: initialData.products,
    },
  };
};
export default Home;
