/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../../shared";

interface ProtectedRouteProps {
  element: JSX.Element;
  roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, roles }) => {
  const navigation = useNavigate();

  useEffect(() => {
    const { isValid, redirectTo } = validateToken(roles);

    if (!isValid && redirectTo) {
      navigation(redirectTo);
    }
  }, [roles]);

  return element;
};

export default ProtectedRoute;
