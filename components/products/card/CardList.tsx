import { ItemCounter } from "@/components/ui";
import { iProduct } from "@/interface";
import { FormatNumber } from "@/utils";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography
} from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";

interface props {
  products: iProduct[];
  editable?: boolean;
}

export const CardList: FC<props> = ({ products, editable }) => {
  return (
    <>
      {products.map((items) => (
        <Grid container spacing={2} key={items.slug} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href={"/product/slug"}>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${items.images[0]}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box>
              <Typography variant="body1"> {items.title}</Typography>
              <Typography variant="body2">
                Talla: <strong>M</strong>
              </Typography>
              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="h5">3 items</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">
              {FormatNumber(items.price)}
            </Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
