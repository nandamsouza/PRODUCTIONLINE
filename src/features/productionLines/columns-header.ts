import { GridColDef } from "@mui/x-data-grid";

export const columnsHeader: GridColDef[] = [
  {
    field: "name",
    headerName: "Nome",
    headerAlign:"center",
    align:"center",
    width:400
  },
  {
    field: "type",
    headerName: "Tipo",
    headerAlign:"center",
    align:"center",
    width:400
  },
];
