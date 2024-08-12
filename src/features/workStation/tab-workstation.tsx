import { Box, Paper } from "@mui/material";
import { DefaultButton, DefaultTable, TypeAlert } from "../../widgets";
import { SearchTable } from "../search";
import { styledLine } from "../productionLines/styles";
import { columnsHeader } from "./columns-header";
import { useEffect, useState } from "react";
import { FormCreateWorkStation } from "./form-modal";
import { workstations } from "../../entities/workstation-entity";
import { DeleteWorkStation, ListWorkStation } from "../../repositories";
import { ActionsWorkStationTable } from "../actionsTable/actions-table-workstation";
import { ModalDelete } from "../modalDelete/Modal";
import { handleErrorMessages } from "../../utils";

export function WorkStation() {
  const [typeModal, setTypeModal] = useState<{
    create: boolean;
    edit: boolean;
    delete: boolean;
  }>({
    create: false,
    edit: false,
    delete: false,
  });
  const [rows, setRows] = useState<workstations[]>([]);
  const [filter, setFilter] = useState<workstations[]>([]);
  const [rowEdit, setRowEdit] = useState<workstations | null>(null);
  const [rowId, setRowId] = useState("");

  useEffect(() => {
    handleUpdateList();
  }, []);

  const closeAllModal = () => {
    setTypeModal({ create: false, edit: false, delete: false });
  };

  const handleUpdateList = async () => {
    try {
      const response: any | workstations[] = await ListWorkStation();
      const newList = response.map((item: workstations) => {
        return {
          id: item.id,
          name: item.name,
          type: item.type,
          productionLine: item.productionLine?.name,
          productionLineId: item.productionLineId,
        };
      });
      setRows(newList);
    } catch (error) {
      handleErrorMessages(error);
    }
  };

  const handleDelete = (row: workstations) => {
    setTypeModal({ ...typeModal, delete: true });
    row.id && setRowId(row.id);
  };

  const deleteWorkStation = async () => {
    try {
      if (rowId) {
        await DeleteWorkStation(rowId);
        TypeAlert("Posto deletado com sucesso", "success");
        closeAllModal();
        handleUpdateList();
      }
    } catch (error) {
      handleErrorMessages(error);
    }
  };

  const handleEdit = (row: workstations) => {
    setTypeModal({ ...typeModal, edit: true });
    setRowEdit(row);
  };

  const newLocal =
    "Tem certeza que deseja deletar esse Posto? Não será possivel recupera-lo novamente.";

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
          nameButton="Cadastrar Posto"
          type="button"
          onClick={() =>
            setTypeModal({ ...typeModal, create: !typeModal.create })
          }
          variant="contained"
          size="large"
          width="200px"
        />
      </Box>
      <Paper elevation={3}>
        <DefaultTable
          columns={columnsHeader}
          rows={filter}
          actionsTable={ActionsWorkStationTable({ handleDelete, handleEdit })}
        />
      </Paper>
      {typeModal.create && (
        <FormCreateWorkStation
          handleCloseModal={closeAllModal}
          open={typeModal.create}
          handleupdateList={handleUpdateList}
          handleEditData={null}
        />
      )}
      {typeModal.delete && (
        <ModalDelete
          handleClose={closeAllModal}
          handleSubmit={deleteWorkStation}
          openModal={typeModal.delete}
          title="Deletar"
          subTitle={newLocal}
        />
      )}
      {typeModal.edit && (
        <FormCreateWorkStation
          handleCloseModal={closeAllModal}
          open={typeModal.edit}
          handleupdateList={handleUpdateList}
          handleEditData={rowEdit}
        />
      )}
    </Box>
  );
}
