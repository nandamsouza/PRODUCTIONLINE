/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Breakpoint, Paper } from "@mui/material";
import { styledModal } from "./styles";

interface modalProps {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  maxWidth?: Breakpoint;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DefaultModal(props: modalProps) {
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        fullWidth
        maxWidth={props.maxWidth ? props.maxWidth : "lg"}
        TransitionComponent={Transition}
        keepMounted
        sx={styledModal.container}
        onClose={() => props.setOpen}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={styledModal.context}>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Paper elevation={0} sx={{width:'100%'}}>{props.children}</Paper>
          </DialogContent>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
