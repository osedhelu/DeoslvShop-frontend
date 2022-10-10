import { initialData } from "@/database/products";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";

interface props {}

export const Navbar: FC<props> = ({}) => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6"> Deoslv |</Typography>
            <Typography sx={{ ml: 0.5 }}> Shop</Typography>
          </Link>
        </NextLink>
        {/* TASK: flex */}
        <Box flex={1} />

        <Box>
          {initialData.menu.map((resp, index) => (
            <NextLink key={index} href={resp.path} passHref>
              <Link>
                <Button>{resp.title}</Button>
              </Link>
            </NextLink>
          ))}
        </Box>

        <Box flex={1} />

        {/* TASK: flex */}
      </Toolbar>
    </AppBar>
  );
};
