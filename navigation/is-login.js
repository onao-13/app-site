import { getActiveJwtToken } from "../store/token-store";
import { getRefreshJwtToken } from "../store/token-store";

export function isLogin() {
    if (getActiveJwtToken() != null && getRefreshJwtToken() != null) {
        // TODO: ADD SEND REQUEST TO CHECK TOKEN
        return true;
    } else {
        return false;
    }
}