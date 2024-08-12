import { Box, FormHelperText, IconButton } from "@mui/material";
import { DefaultButton, DefaultInput, TypeAlert } from "../../widgets";
import { useForm } from "react-hook-form";
import { schemaFirstAccess, typeFirstAccess } from "./interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleErrorMessages } from "../../utils";
import { CreateUser } from "../../repositories";
import { useState } from "react";
import { styledFormLogin } from "../signIn/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface formProps {
  handleFirstAccess: () => void;
}

export const FormFirstAccess = (props: formProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFirstAccess),
  });
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async (data: typeFirstAccess) => {
    setLoadingButton(true);
    try {
      setLoadingButton(false);
      await CreateUser(data);
      props.handleFirstAccess();
      TypeAlert("Usuário cadastrado com sucesso", "success");
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
        label={errors.name ? errors.name.message : "Nome"}
        register={register("name")}
        error={!!errors.name}
      />
      <DefaultInput
        label={errors.email ? errors.email.message : "Email"}
        register={register("email")}
        error={!!errors.email}
      />
      <DefaultInput
        label={errors.password ? errors.password.message : "Senha"}
        register={register("password")}
        error={!!errors.password}
        type={showPass ? "text" : "password"}
        iconButton={
          <IconButton onClick={() => setShowPass(!showPass)}>
            {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        }
      />
      <Box
        sx={{
          ...styledFormLogin.contextButton,
          alignItems: "start",
          padding: 0,
        }}
      >
        <DefaultButton
          isLoading={loadingButton}
          nameButton="Cadastrar"
          type="submit"
          variant="contained"
          size="large"
        />
        <FormHelperText
          sx={styledFormLogin.link}
          onClick={props.handleFirstAccess}
        >
          Voltar para login
        </FormHelperText>
      </Box>
    </Box>
  );
};
