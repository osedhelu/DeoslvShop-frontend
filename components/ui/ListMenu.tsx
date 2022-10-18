import {
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  ChildFriendly,
  MaleOutlined,
  Wc,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface iMenux {
  title: string;
  path: string;
  isAdmin: boolean;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export const MenuJSX: iMenux[] = [
  {
    isAdmin: false,
    icon: MaleOutlined,
    title: "men",
    path: "/category/men",
  },
  {
    isAdmin: false,
    icon: FemaleOutlined,
    title: "woman",
    path: "/category/woman",
  },
  {
    isAdmin: false,
    icon: ChildFriendly,
    title: "kiss",
    path: "/category/kiss",
  },
  {
    isAdmin: false,
    icon: Wc,
    title: "unisex",
    path: "/category/unisex",
  },
  {
    isAdmin: true,
    icon: CategoryOutlined,
    title: "Productos",
    path: "/products",
  },
  {
    isAdmin: true,
    icon: ConfirmationNumberOutlined,
    title: "Ordenes",
    path: "/orders",
  },
  {
    isAdmin: true,
    icon: AdminPanelSettings,
    title: "Usuarios",
    path: "/user",
  },
];
