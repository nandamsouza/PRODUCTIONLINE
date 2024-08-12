import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';


interface actionsProps {
    handleEdit:(row:any)=>void
    handleDelete: (row:any)=>void
}

export const ActionsLineTable = (props: actionsProps) => {
  return [
    {
      nameAction: "Editar",
      icon: <EditIcon />,
      handleData: props.handleEdit,
    },
    {
        nameAction: "Remover",
        icon: <DeleteIcon />,
        handleData: props.handleDelete,
      },
  ];
};
