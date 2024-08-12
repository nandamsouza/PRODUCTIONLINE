import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { DarkBlueTheme } from "../../shared";
import './App.css'
import { ThemeProvider } from "@mui/material/styles";

export function Providers() {
  return (
    <ThemeProvider theme={DarkBlueTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
