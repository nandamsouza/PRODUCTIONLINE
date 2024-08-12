import { colors } from "../../../shared/theme/lightTheme";

export const styledButton = {
  button: {
    borderRadius: "20px",
    padding: "8px",
    background: colors.color_primary_dark,
    color: "#FFFF",
    textTransform: "none",
    fontWeight: "600",
  },
  buttonLight: {
    width: "100%",
    borderRadius: "20px",
    padding: "8px",
    background: colors.color_white,
    color: colors.color_accent,
    border: `1px solid ${colors.color_default_border_light}`,
    textTransform: "none",
    fontWeight: "600",
  },
};
