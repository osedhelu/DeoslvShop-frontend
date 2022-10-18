import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  LoginOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";

import { FC } from "react";
import { MenuJSX } from "./ListMenu";

interface props {}

export const SideMenu: FC<props> = ({}) => {
  return (
    <Drawer
      open={false}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Perfil"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={"Mis Ordenes"} />
          </ListItem>

          {MenuJSX.map(
            (e, index) =>
              !e.isAdmin && (
                <ListItem
                  key={index}
                  button
                  sx={{ display: { xs: "", sm: "none" } }}
                >
                  <ListItemIcon>
                    <e.icon />
                  </ListItemIcon>
                  <ListItemText primary={e.title} />
                </ListItem>
              )
          )}

          <ListItem button>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={"Ingresar"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={"Salir"} />
          </ListItem>

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          {MenuJSX.map(
            (resp, index) =>
              resp.isAdmin && (
                <ListItem key={index} button>
                  <ListItemIcon>
                    <resp.icon />
                  </ListItemIcon>
                  <ListItemText primary={resp.title} />
                </ListItem>
              )
          )}
        </List>
      </Box>
    </Drawer>
  );
};
