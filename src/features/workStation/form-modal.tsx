import { Box, Typography } from "@mui/material";
import { DefaultModal } from "../../widgets";
import { FormComponent } from "./form-component";
import { styledLine } from "../productionLines/styles";
import { workstations } from "../../entities/workstation-entity";

interface formProps {
  open: boolean;
  handleCloseModal: () => void;
  handleupdateList: () => void;
  handleEditData: workstations | null
}

export function FormCreateWorkStation(props: formProps) {
  return (
    <DefaultModal
      open={props.open}
      setOpen={props.handleCloseModal}
      maxWidth="xs"
    >
      <Box sx={styledLine.contextModal}>
        <Typography variant="subtitle1">
          Preencha os campos abaixo corretamente.
        </Typography>
        <FormComponent
          handleClose={props.handleCloseModal}
          handleUpdateList={props.handleupdateList}
          handleEditData={props.handleEditData}
        />
      </Box>
    </DefaultModal>
  );
}
