
import {epPostHereForToken} from "@/modules/configConsts.ts";

export async function getDefaultAdminAuthTokenOrEmptyString() {
     return Promise.resolve(epPostHereForToken);
}