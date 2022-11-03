import { ShopLayout } from "@/components";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { NextPage } from "next";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullName", headerName: "Nombre Completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra informacion si esta pagada la orden o no ",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row?.paid ? (
          <Chip color="success" label="Pagada" variant="outlined" />
        ) : (
          <Chip color="error" label="No Pagada" variant="outlined" />
        )}
      </>
    ),
  },
  {
    field: "",
    headerName: "Detalle",
    sortable: false,
    description: "Detalle de la orden",
    width: 200,
    renderCell: (params) => (
      <>
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver Orden</Link>
        </NextLink>
      </>
    ),
  },
];
const rows = [
  { id: 0, fullName: "Oscar Herrrera", paid: true },
  { id: 1, fullName: "Derlys Ricardo", paid: true },
  { id: 2, fullName: "Valentina Herrrera", paid: false },
  { id: 3, fullName: "Lucas Rodrigrez", paid: true },
  { id: 4, fullName: "Carmen Villadiego", paid: false },
  { id: 5, fullName: "Ana del Rosario", paid: true },
  { id: 6, fullName: "Catalina guele ope", paid: true },
];
interface props {}

const HistoryPage: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      description="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
