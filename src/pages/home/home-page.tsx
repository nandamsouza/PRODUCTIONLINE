import { Box } from "@mui/material";
import { DefaultTabs } from "../../widgets";
import { ProductionLine, WorkStation } from "../../features";

export function HomePage() {
  return (
    <Box>
      <DefaultTabs
        tabs={[
          { title: "Linha de Produção", children: <ProductionLine /> },
          { title: "Estação de trabalho", children: <WorkStation/> },
        ]}
      />
    </Box>
  );
}
