import { createTheme } from "@mui/material/styles";

export const colors = {
  color_primary_light: "#1A3A60", 
  color_primary: "#0D2748",
  color_primary_dark: "#051B33", 
  color_secondary_dark: "#102840", 
  color_white: "#FFFFFF",
  color_off_white: "#F0F4F8",
  color_gray_light: "#D9D9D9",
  color_gray_medium: "#919EAB",
  color_gray_dark: "#54666B",
  color_gray_light_table_Header: "#63738126",
  color_accent: "#146BB7", 
  color_background: "#0A1E37", 
  color_highlight: "#D9E6F2", 
  color_border: "#354A5E", 
  color_transparent: "#63738161",
  color_black: "#000000",
  color_text: "#E1E9F1", 
  color_text_secondary: "#B0C7D1",
  color_text_muted: "#919EAB",
  color_default_border: "#354A5E",
  color_default_border_light: "#4D637A",
};

export const DarkBlueTheme = createTheme({
  palette: {
    primary: {
      main: colors.color_primary,
      contrastText: colors.color_white,
    },
    secondary: {
      main: colors.color_accent,
      contrastText: colors.color_white,
    },
    background: {
      default: colors.color_gray_light_table_Header,
      paper: colors.color_white,
    },
    text: {
      primary: colors.color_text_muted,
      secondary: colors.color_text_secondary,
      disabled: colors.color_text_muted,
    },
    divider: colors.color_default_border,
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
