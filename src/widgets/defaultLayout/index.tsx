import { Outlet } from "react-router-dom";
import { DefaultNavbar } from "./appBar/header";

export function DefaultLayout() {
  return (
    <DefaultNavbar>
      <Outlet />
    </DefaultNavbar>
  );
}
