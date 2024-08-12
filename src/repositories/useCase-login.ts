import { AuthLogin } from "../entities";
import { CoreApi } from "../shared/api";

export async function SignIn (data: AuthLogin) {
    return await CoreApi.post('auth/login', data)
}