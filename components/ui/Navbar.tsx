import {
  MenuOpen,
  MenuOutlined,
  SearchOutlined,
  ShoppingBagOutlined
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography
} from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";
import { MenuJSX } from "./ListMenu";

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
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {MenuJSX.map(
            (resp, index) =>
              !resp.isAdmin && (
                <NextLink key={index} href={resp.path} passHref>
                  <Link>
                    <Button>{resp.title}</Button>
                  </Link>
                </NextLink>
              )
          )}
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href={"/cart"} passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={3} color="secondary">
                <ShoppingBagOutlined color="action" />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <IconButton>{false ? <MenuOpen /> : <MenuOutlined />}</IconButton>
      </Toolbar>
    </AppBar>
  );
};
