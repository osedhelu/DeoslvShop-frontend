import { ShopLayout } from "@/components/layout";
import { NextPage } from "next";

interface props {}

const Cart: NextPage<props> = ({}) => {
  return (
    <ShopLayout description="Pagina de carrito de compras" title="Card | shop">
      <h1>Hola mundo</h1>
    </ShopLayout>
  );
};

export default Cart;
