import { env } from "../../utils";
import { ApiClient } from "./api-client";

export const CoreApi = new ApiClient(env.CORE_URL);
