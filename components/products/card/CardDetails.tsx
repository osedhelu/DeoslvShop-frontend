import { iCheckoutAddress } from "@/interface";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";
import { OrderSummary } from "./OrderSummary";

interface props {
  title?: string;
  jsxAction?: JSX.Element;
  checkoutAddress?: iCheckoutAddress;
}

export const CardDetails: FC<props> = ({
  title = "Orden",
  checkoutAddress,
  jsxAction,
}) => {
  return (
    <Card className="summary-card">
      <CardContent>
        <Typography>{title}</Typography>
        <Divider sx={{ my: 1 }} />
        {checkoutAddress && (
          <>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Direccion de entrega</Typography>
              <NextLink href="/checkout/address">
                <Link underline="always">Editar</Link>
              </NextLink>
            </Box>
            <Typography>{checkoutAddress.name}</Typography>
            <Typography>{checkoutAddress.direccion}</Typography>
            <Typography>{checkoutAddress.city}</Typography>
            <Typography>{checkoutAddress.country}</Typography>
            <Typography>{checkoutAddress.phone}</Typography>
            <Divider />
            <Box display="flex" justifyContent="end">
              <NextLink href="/cart" passHref>
                <Link underline="always">Editar</Link>
              </NextLink>
            </Box>
          </>
        )}
        <OrderSummary />
        {jsxAction}
      </CardContent>
    </Card>
  );
};
