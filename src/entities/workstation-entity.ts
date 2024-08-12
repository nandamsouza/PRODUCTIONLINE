import { productionLine } from "./production-line-entity";

export interface workstations {
  id?: string;
  name: string;
  type: string;
  productionLineId: string;
  productionLine?: productionLine
}
