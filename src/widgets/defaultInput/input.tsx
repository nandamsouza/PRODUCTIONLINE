import { InputAdornment, TextField } from "@mui/material";
import { styledInput } from "./styles";
import { ReactNode } from "react";

interface inputProps {
  label: string | undefined;
  register: any;
  type?: "password" | "text";
  iconButton?: ReactNode;
  error: boolean;
}

export function DefaultInput(props: inputProps) {
  return (
    <TextField
      {...props.register}
      label={props.label}
      sx={styledInput}
      fullWidth
      type={props.type ?? "text"}
      error={props.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {props.iconButton ? props.iconButton : <></>}
          </InputAdornment>
        ),
      }}
    />
  );
}
