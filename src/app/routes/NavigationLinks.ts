import { RouteObject } from "react-router-dom";

export const generateNavigationLinks = <T extends Record<string, string>>(
  routes: RouteObject[]
) => {
  const links: Record<string, string> = {};

  const extractPaths = (routes: RouteObject[], basePath: string = "") => {
    routes.forEach((route) => {
      const path = route.path || "";
      // Corrigir a concatenação para evitar barra dupla
      const fullPath = basePath.endsWith("/")
        ? basePath + path.replace(/^\//, "")
        : basePath + (path.startsWith("/") ? path : `/${path}`);

      if (path && path !== "*" && fullPath !== "/") {
        const key = path.replace(/[^a-zA-Z]/g, "");
        if (key) {
          links[key] = fullPath;
        }
      }
      if (route.children) {
        extractPaths(route.children, fullPath);
      }
    });
  };

  extractPaths(routes);
  return links as T;
};
