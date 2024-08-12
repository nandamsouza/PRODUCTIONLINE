import { Typography } from "@mui/material";
import { styledTitle } from "./styles";

interface TitleProps {
  title: string;
}

export function DefaultTitle(props: TitleProps) {
  return (
    <Typography variant="h2" sx={styledTitle.title}>
      {props.title}
    </Typography>
  );
}
