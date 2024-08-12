import { colors } from "../../shared/theme/lightTheme";
import backgroundImage from "../../assets/jpg/rm218batch4-katie-17.jpg";
import logoINDT from "../../assets/png/logo.png";

export const styledLogin = {
  containerImg: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: "center",
    backgroundImage: `url(${backgroundImage}), linear-gradient(to top, ${colors.color_accent}, ${colors.color_primary_dark})`,
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    height: "100%",
    width: "70vw",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  logo: {
    backgroundImage: `url(${logoINDT})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "500px",
    height: "500px",
  },

  containerForms: {
    display: `flex`,
    gap: 4,
    justifyContent: `center`,
    flexDirection: "column",
    alignItems: `center`,
    height: `100%`,
    background: `${colors.color_off_white}`,
    borderRadius: " 50px 0 0 50px",
  },
};
