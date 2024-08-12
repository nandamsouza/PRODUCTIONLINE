import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/png/logo.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ReactNode } from "react";
import Cookies from "universal-cookie";
import { navigationLinks } from "../../../app/routes/routes";

interface navProps {
  children: ReactNode;
}

export function DefaultNavbar(props: navProps) {
  const signOut = () =>{
    const cookies = new Cookies()
    cookies.remove("access_token")
    window.location.href = navigationLinks.login
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} width={80} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={signOut}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>{props.children}</Box>
    </Box>
  );
}
