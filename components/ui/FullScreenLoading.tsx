import { Box, Card, CardActionArea, Grid, Skeleton } from "@mui/material";
import { FC } from "react";

interface props {}

export const FullScreenLoading: FC<props> = ({}) => {
  return (
    <Grid container spacing={4}>
      {Array.from(new Array(9)).map((item, index) => (
        <Grid item xs={6} sm={4} key={index}>
          <Card>
            <CardActionArea>
              <Skeleton variant="rectangular" height={368} />
            </CardActionArea>
          </Card>
          <Box sx={{ mt: 1 }} className="fadeIn">
            <Skeleton />
            <Skeleton width="20%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
