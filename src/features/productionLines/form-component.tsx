import { Box, Button } from "@mui/material";
import {
  DefaultButton,
  DefaultInput,
  DefaultSelect,
  TypeAlert,
} from "../../widgets";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LineSchema, typeLineSchema } from "./interface";
import { useEffect, useState } from "react";
import { CreateLine, UpdateLine } from "../../repositories";
import { handleErrorMessages, ValidationEqualObjects } from "../../utils";
import { styledButton } from "../../widgets/defaultButton/ui/style";
import { styledForm } from "./styles";
import { TypeLine } from "../../utils/roles";
import { productionLine } from "../../entities/production-line-entity";

interface formProps {
  handleClose: () => void;
  handleEditData: productionLine | any | null;
}

export function FormComponent(props: formProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LineSchema),
  });

  useEffect(() => {
    if (props.handleEditData) {
      Object.keys(props.handleEditData).forEach((key: any) => {
        setValue(key, props.handleEditData[key]);
      });
    }
  }, [props.handleEditData]);

  const options = [
    { description: TypeLine.product, value: TypeLine.product },
    { description: TypeLine.component, value: TypeLine.component },
  ];
  const [loadingButton, setLoadingButton] = useState(false);
  const isEdit = !!props.handleEditData;

  const onSubmit = async (data: typeLineSchema) => {
    setLoadingButton(true);
    isEdit ? handleEdit(data) : handleCreate(data);
  };

  const handleCreate = async (data: typeLineSchema) => {
    try {
      setLoadingButton(false);
      await CreateLine(data);
      TypeAlert("Linha cadastrada com sucesso", "success");
      props.handleClose();
    } catch (error) {
      setLoadingButton(false);
      handleErrorMessages(error);
    }
  };

  const handleEdit = async (data: typeLineSchema) => {
    try {
      if (ValidationEqualObjects(props.handleEditData, data)) {
        setLoadingButton(false);
        await UpdateLine(props.handleEditData.id, data);
        TypeAlert("Linha editada com sucesso", "success");
        props.handleClose();
      } else {
        TypeAlert("Nenhum dado foi alterado", "error");
        setLoadingButton(false);
      }
    } catch (error) {
      setLoadingButton(false);
      handleErrorMessages(error);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={styledForm.container}
    >
      <DefaultInput
        error={!!errors.name}
        register={register("name")}
        label={errors.name ? errors.name.message : "Nome"}
      />
      <DefaultSelect
        errors={!!errors.type}
        label={errors.type ? errors.type.message : "Tipo"}
        register={register("type")}
        options={options}
        valueData={props.handleEditData?.type}
      />

      <Box sx={styledForm.contextButton}>
        <Button
          variant="text"
          sx={styledButton.buttonLight}
          onClick={props.handleClose}
        >
          Cancelar
        </Button>
        <DefaultButton
          isLoading={loadingButton}
          nameButton={isEdit ? "Salvar" : "Cadastrar"}
          size="large"
          type="submit"
          variant="contained"
        />
      </Box>
    </Box>
  );
}
