import { Box, Button } from "@mui/material";
import {
  DefaultButton,
  DefaultInput,
  DefaultSelect,
  TypeAlert,
} from "../../widgets";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  CreateWorkStation,
  ListProductionLines,
  UpdateWorkStation,
} from "../../repositories";
import { handleErrorMessages, ValidationEqualObjects } from "../../utils";
import { styledButton } from "../../widgets/defaultButton/ui/style";
import { TypeWorkStation } from "../../utils/roles";
import { styledForm } from "../productionLines/styles";
import { typeWorkStationSchema, workStationSchema } from "./interface";
import { productionLine } from "../../entities/production-line-entity";
import { workstations } from "../../entities/workstation-entity";

interface formProps {
  handleClose: () => void;
  handleUpdateList: () => void;
  handleEditData: any | null | workstations;
}

export function FormComponent(props: formProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(workStationSchema),
  });
  const [loadingButton, setLoadingButton] = useState(false);
  const [optionsLines, setOptionsLines] = useState([]);
  const isEdit = !!props.handleEditData;

  useEffect(() => {
    handleListLines();
  }, []);

  useEffect(() => {
    if (props.handleEditData) {
      Object.keys(props.handleEditData).forEach((key: any) => {
        setValue(key, props.handleEditData[key]);
      });
    }
  }, [props.handleEditData]);

  const options = [
    { description: TypeWorkStation.test, value: TypeWorkStation.test },
    {
      description: TypeWorkStation.recording,
      value: TypeWorkStation.recording,
    },
  ];

  const handleListLines = async () => {
    const response: productionLine[] | any = await ListProductionLines();
    const newList = response.map((item: productionLine) => {
      return { description: item.name, value: item.id };
    });
    setOptionsLines(newList);
  };

  const onSubmit = async (data: typeWorkStationSchema) => {
    setLoadingButton(true);
    isEdit ? handleUpdateWork(data) : handleCreate(data);
  };

  const handleCreate = async (data: typeWorkStationSchema) => {
    try {
      setLoadingButton(false);
      const lineId: any = optionsLines.find(
        (item: any) => item.description === data.productionLineId
      );

      if (lineId) {
        const payload = { ...data, productionLineId: lineId.value };
        await CreateWorkStation(payload);
        TypeAlert("Linha cadastrada com sucesso", "success");
        props.handleClose();
        props.handleUpdateList();
      }
    } catch (error) {
      setLoadingButton(false);
      handleErrorMessages(error);
    }
  };

  const handleUpdateWork = async (data: typeWorkStationSchema) => {
    try {
      if (ValidationEqualObjects(props.handleEditData, data)) {
        const lineId: any = optionsLines.find(
          (item: any) => item.description === data.productionLineId
        );

        if (lineId) {
          const payload = {
            name: data.name,
            type: data.type,
            productionLineId: lineId.value,
          };
          await UpdateWorkStation(props.handleEditData.id, payload);
          TypeAlert("Linha atualizada com sucesso", "success");
          setLoadingButton(false);
          props.handleClose();
          props.handleUpdateList();
        }
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
      <DefaultSelect
        errors={!!errors.productionLineId}
        label={
          errors.productionLineId ? errors.productionLineId.message : "Linha"
        }
        register={register("productionLineId")}
        options={optionsLines}
        valueData={props.handleEditData?.productionLine}
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
