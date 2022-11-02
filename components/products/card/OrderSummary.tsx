import { FormatNumber } from "@/utils";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface props {}

export const OrderSummary: FC<props> = ({}) => {
  return (
    <Grid container>
      {/* TODO: Item 1 */}
      <Grid item xs={6}>
        No. Productos
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        3 items
      </Grid>

      {/* TODO: Item 2 */}
      <Grid item xs={6}>
        SubTotal
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        {FormatNumber(155.36)}
      </Grid>
      {/* TODO: Item 3 */}
      <Grid item xs={6}>
        Inpuestos (15%)
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        {FormatNumber(35.34)}
      </Grid>
      {/* TODO: Item 4 */}
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total: </Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{FormatNumber(35.34)}</Typography>
      </Grid>
    </Grid>
  );
};
