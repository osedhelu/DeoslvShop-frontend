import { iProduct } from "@/interface";
import NextLink from "next/link";
import { FormatNumber } from "@/utils";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";

interface props {
  product: iProduct;
}

export const ProductCard: FC<props> = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {}, [isHover]);
  const url = useMemo(
    () => `products/${product.images[isHover ? 1 : 0]}`,
    [isHover]
  );
  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      <Card>
        <NextLink href="product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia image={url} alt={product.title} component="img" />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{FormatNumber(product.price)}</Typography>
      </Box>
    </Grid>
  );
};
