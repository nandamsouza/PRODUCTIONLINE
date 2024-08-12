/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingButton from "@mui/lab/LoadingButton";
import { styledButton } from "./style";

interface buttonProps {
  isLoading: boolean;
  nameButton: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  variant: "text" | "outlined" | "contained";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}

export function Button(props: buttonProps) {
  return (
    <LoadingButton
      fullWidth
      variant={props.variant}
      sx={
        props.width
          ? { ...styledButton.button, width: props.width }
          : { ...styledButton.button, width: "100%" }
      }
      color={props.color}
      size={props.size}
      onClick={props.onClick}
      type={props.type}
      loading={props.isLoading}
      disabled={props.disabled}
    >
      {props.nameButton}
    </LoadingButton>
  );
}
