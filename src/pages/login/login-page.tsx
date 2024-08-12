import { Box, Grid } from "@mui/material";
import { DefaultTitle } from "../../widgets";
import { styledLogin } from "./styles";
import { FormFirstAccess, FormLogin } from "../../features";
import { useState } from "react";

export const LoginPage = () => {
  const [isFirstAccess, setIsFirstAccess] = useState(false);
  return (
    <Grid container justifyContent={"center"} height={`100vh`}>
      <Grid item xs={0} md={8}>
        <Box sx={styledLogin.containerImg}>
          <Box sx={styledLogin.logo}/>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ zIndex: 1 }}>
        <Box sx={styledLogin.containerForms}>
          {!isFirstAccess ? (
            <>
              <DefaultTitle title="Login" />
              <FormLogin
                handleFirstAccess={() => setIsFirstAccess(!isFirstAccess)}
              />
            </>
          ) : (
            <>
              <DefaultTitle title="Cadastre-se" />
              <FormFirstAccess
                handleFirstAccess={() => setIsFirstAccess(!isFirstAccess)}
              />
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
