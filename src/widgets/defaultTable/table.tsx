import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface propsTable {
  rows: any;
  columns: GridColDef[];
  actionsTable?: {
    nameAction: string;
    icon: any;
    handleData: (row: any) => void;
  }[];
}

export function DefaultTable(props: propsTable) {
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Ações",
    width: 400,
    headerAlign:"center",
    align:"center",
    renderCell: (params) =>
      props.actionsTable &&
      props.actionsTable.map(
        (item,idx) => (
          (
            <Tooltip title={item.nameAction} key={idx} placement="top">
              <IconButton onClick={() => item.handleData(params.row)} key={idx}>
                {item.icon}
              </IconButton>
            </Tooltip>
          )
        )
      ),
  };

  const columnsWithActions = [...props.columns, actionColumn];

  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.actionsTable ? columnsWithActions : props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
