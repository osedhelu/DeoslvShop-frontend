import { niProduct } from "@/interface";
import { FormatNumber } from "@/utils";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FC, useMemo, useState } from "react";

interface props {
  product: niProduct;
  loading: boolean;
}

export const ProductCard: FC<props> = ({
  product = { images: [], title: "" },
  loading,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isImageLoading, setImageLoading] = useState(false);
  const url = useMemo(() => `${ValidateImg(product.images, isHover)}`, [
    isHover,
    product.images,
  ]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      <Card>
        {(loading || !isImageLoading) && (
          <CardActionArea>
            <Skeleton variant="rectangular" width="100%">
              <div style={{ paddingTop: "100%" }} />
            </Skeleton>
          </CardActionArea>
        )}
        {!loading && (
          <NextLink href="/product/slug" passHref prefetch={false}>
            <Link>
              <CardActionArea>
                <CardMedia
                  image={url}
                  alt={product.title}
                  component="img"
                  onLoad={() => setImageLoading(true)}
                />
              </CardActionArea>
            </Link>
          </NextLink>
        )}
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        {loading || !isImageLoading ? (
          <>
            <Skeleton
              sx={{
                fontWeight: 700,
              }}
            />
            <Skeleton width="20%" />
          </>
        ) : (
          <>
            <Typography fontWeight={700}>{product.title}</Typography>
            <Typography fontWeight={500}>
              {FormatNumber(Number(product.price))}
            </Typography>
          </>
        )}
      </Box>
    </Grid>
  );
};

let ValidateImg = (str: any[], isHover: boolean) => {
  try {
    return str[isHover ? 1 : 0].img;
  } catch (e) {
    return "";
  }
};
