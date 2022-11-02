import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Button,
  Link,
} from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import { OrderSummary } from "./OrderSummary";

interface props {
  title?: string;
}

export const CardDetails: FC<props> = ({ title = "Orden" }) => {
  return (
    <Card className="summary-card">
      <CardContent>
        <Typography>{title}</Typography>
        <Divider sx={{ my: 1 }} />
        <Box>
          <NextLink href="/checkout/address">
            <Link underline="always">Editar</Link>
          </NextLink>
        </Box>
        <OrderSummary />
        <Box sx={{ mt: 3 }}>
          <Button color="secondary" className="circular-btn" fullWidth>
            Checkout
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
