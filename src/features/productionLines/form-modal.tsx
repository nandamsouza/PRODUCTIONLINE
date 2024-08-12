import { Box, Typography } from "@mui/material";
import { DefaultModal } from "../../widgets";
import { FormComponent } from "./form-component";
import { styledLine } from "./styles";
import { productionLine } from "../../entities/production-line-entity";

interface formProps {
  open: boolean;
  handleCloseModal: () => void;
  handleEditData: productionLine | null;
}

export function FormCreateLine(props: formProps) {
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
          handleEditData={props.handleEditData}
        />
      </Box>
    </DefaultModal>
  );
}
