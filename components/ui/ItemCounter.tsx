import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";

interface props {}

export const ItemCounter: FC<props> = ({}) => {
  let [value, setValue] = useState(1);
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => (value >= 2 ? setValue(value - 1) : 1)}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}> {value}</Typography>
      <IconButton
        onClick={() => (value >= 10 ? 10 : setValue(value + 1))}
    >
      <AddCircleOutline/>
    </IconButton>
    </Box>
  );
};
