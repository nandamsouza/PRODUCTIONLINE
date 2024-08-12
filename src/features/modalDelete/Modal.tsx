import { Box, Button, Typography } from "@mui/material";
import { DefaultButton, DefaultModal } from "../../widgets";
import { styledButton } from "../../widgets/defaultButton/ui/style";

interface modalProps {
  title: string;
  subTitle: string;
  openModal: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
}

export function ModalDelete(props: modalProps) {
  return (
    <DefaultModal open={props.openModal} setOpen={props.handleClose} maxWidth="xs">
      <Box sx={{display:"flex", flexDirection:"column", gap: 2, padding:3}}>
      <Typography>{props.title}</Typography>
      <Typography>{props.subTitle}</Typography>
      <Box sx={{display:"flex", gap:2}}>
        <Button
          sx={styledButton.buttonLight}
          variant="text"
          onClick={props.handleClose}
        >
          Cancelar
        </Button>
        <DefaultButton
          isLoading={false}
          nameButton="Salvar"
          size="medium"
          type="button"
          onClick={props.handleSubmit}
          variant="contained"
        />
      </Box>
      </Box>
    </DefaultModal>
  );
}
