import Cookies from "universal-cookie";
import { navigationLinks } from "../../app/routes/routes";

export const validateToken = (
  roles: string[]
): { isValid: boolean; redirectTo: string | null } => {
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  console.log({ roles });

  try {
    if (!token) {
      return { isValid: false, redirectTo: navigationLinks.login };
    }

    return { isValid: true, redirectTo: null };
  } catch (error) {
    console.error("Invalid token:", error);
    return { isValid: false, redirectTo: navigationLinks.login };
  }
};
