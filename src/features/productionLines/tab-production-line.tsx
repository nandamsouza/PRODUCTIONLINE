import { Box, Paper } from "@mui/material";
import { DefaultButton, DefaultTable, TypeAlert } from "../../widgets";
import { columnsHeader } from "./columns-header";
import { SearchTable } from "../search";
import { styledLine } from "./styles";
import { useEffect, useState } from "react";
import { FormCreateLine } from "./form-modal";
import { productionLine } from "../../entities/production-line-entity";
import { HandleDeleteLine, ListProductionLines } from "../../repositories";
import { ActionsLineTable } from "../actionsTable/actions-table-line";
import { ModalDelete } from "../modalDelete/Modal";
import { handleErrorMessages } from "../../utils";

export function ProductionLine() {
  const [typeModal, setTypeModal] = useState<{
    create: boolean;
    edit: boolean;
    delete: boolean;
  }>({
    create: false,
    edit: false,
    delete: false,
  });
  const [rows, setRows] = useState<productionLine[]>([]);
  const [filter, setFilter] = useState<productionLine[]>([]);
  const [rowId, setRowId] = useState<string | null>(null);
  const [rowEdit, setRowEdit] = useState<productionLine | null>(null);

  useEffect(() => {
    handleUpdateList();
  }, []);

  const closeAllModal = () => {
    setTypeModal({ create: false, edit: false, delete: false });
    handleUpdateList();
  };

  const handleUpdateList = async () => {
   try {
    const response: productionLine | any = await ListProductionLines();
    setRows(response);
    setFilter(response);
   } catch (error) {
    handleErrorMessages(error)
    setRows([]);
    setFilter([]);
   }
  };

  const handleEdit = async (row: productionLine) => {
    setTypeModal({ ...typeModal, edit: true });
    setRowEdit(row);
  };

  const handleDelete = async (row: productionLine) => {
    setTypeModal({ ...typeModal, delete: true });
    row?.id && setRowId(row.id);
  };

  const DeleteLine = async () => {
    try {
      rowId && (await HandleDeleteLine(rowId));
      TypeAlert("Linha deletada com sucesso", "success");
      closeAllModal();
      handleUpdateList();
    } catch (error) {
      handleErrorMessages(error);
    }
  };

  const newLocal =
    "Tem certeza que deseja deletar essa linha? Não será possivel recupera-la novamente.";
  return (
    <Box sx={styledLine.container}>
      <Box sx={styledLine.contextActions}>
        <SearchTable
          data={rows}
          onFilter={(e) => setFilter(e)}
          size={"small"}
          width="60vw"
        />

        <DefaultButton
          isLoading={false}
          nameButton="Cadastrar Linha"
          type="button"
          onClick={() => setTypeModal({ ...typeModal, create: true })}
          variant="contained"
          size="large"
          width="200px"
        />
      </Box>
      <Paper elevation={3}>
        <DefaultTable
          columns={columnsHeader}
          rows={filter}
          actionsTable={ActionsLineTable({ handleEdit, handleDelete })}
        />
      </Paper>
      {typeModal.create && (
        <FormCreateLine
          open={typeModal.create}
          handleCloseModal={closeAllModal}
          handleEditData={null}
        />
      )}
      {typeModal.delete && (
        <ModalDelete
          handleClose={closeAllModal}
          handleSubmit={DeleteLine}
          openModal={typeModal.delete}
          title="Deletar"
          subTitle={newLocal}
        />
      )}
      {typeModal.edit && (
        <FormCreateLine
          handleCloseModal={closeAllModal}
          handleEditData={rowEdit}
          open={typeModal.edit}
        />
      )}
    </Box>
  );
}
