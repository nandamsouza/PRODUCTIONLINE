import { Box, FormHelperText, IconButton } from "@mui/material";
import { DefaultButton, DefaultInput } from "../../widgets";
import { useForm } from "react-hook-form";
import { schemaLogin, typeLoginForm } from "./interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { styledFormLogin } from "./styles";
import { handleErrorMessages } from "../../utils";
import { SignIn } from "../../repositories";
import { useState } from "react";
import { navigationLinks } from "../../app/routes/routes";
import Cookies from "universal-cookie";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface formProps {
  handleFirstAccess: () => void;
}

export const FormLogin = (props: formProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const [loadingButton, setLoadingButton] = useState(false);
  const cookies = new Cookies();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async (data: typeLoginForm) => {
    setLoadingButton(true);
    try {
      setLoadingButton(false);
      const response: any = await SignIn(data);
      cookies.set("access_token", response.access_token);
      window.location.href = navigationLinks.home;
    } catch (error) {
      setLoadingButton(false);
      handleErrorMessages(error);
    }
  };

  return (
    <Box
      sx={styledFormLogin.container}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <DefaultInput
        label={errors.email ? errors.email.message : "Email"}
        register={register("email")}
        error={!!errors.email}
      />
      <DefaultInput
        label={errors.password ? errors.password.message : "Senha"}
        register={register("password")}
        error={!!errors.password}
        type={showPass? 'text':'password'}
        iconButton={
          <IconButton onClick={() => setShowPass(!showPass)}>
            {!showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        }
      />
      <Box sx={styledFormLogin.contextButton}>
        <DefaultButton
          isLoading={loadingButton}
          nameButton="Entrar"
          type="submit"
          variant="contained"
          size="large"
        />
        <FormHelperText
          sx={styledFormLogin.link}
          onClick={props.handleFirstAccess}
        >
          Não tem conta? cadastrar
        </FormHelperText>
      </Box>
    </Box>
  );
};
