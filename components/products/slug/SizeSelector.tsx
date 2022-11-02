import { iSize } from "@/interface";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface props {
  selectedSize?: iSize;
  sizes: iSize[];
}

export const SizeSelector: FC<props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "secondary" : "primary"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
