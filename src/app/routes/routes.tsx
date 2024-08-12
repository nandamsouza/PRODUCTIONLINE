import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, NotauthorizedPage } from "../../pages";
import { generateNavigationLinks } from "./NavigationLinks";
import ProtectedRoute from "./protectedRoute";
import { typeRole } from "../../utils";
import { DefaultLayout } from "../../widgets";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<ProtectedRoute element={<DefaultLayout/>} roles={[typeRole.ADMIN]}/>,
        children: [
            {
                path:"/home",
                element: <ProtectedRoute element={<HomePage/>} roles={[typeRole.ADMIN]}/>
            },
            {
                path:"/",
                element: <ProtectedRoute element={<HomePage/>} roles={[typeRole.ADMIN]}/>
            }
        ]
    },
    {
        path: '/login',
        element: <ProtectedRoute element={<LoginPage />} roles={[typeRole.ADMIN]}/>
    },
    {
        path:'notauthorized',
        element:<NotauthorizedPage/>
    },
])

export const navigationLinks = generateNavigationLinks<{
    login:string,
    notauthorized:string
    home:string
  }>(router.routes);