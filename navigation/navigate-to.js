import { redirect } from "next/dist/server/api-utils";
import { isLogin } from "./is-login";

export default function NavigateTo(res) {
    // TODO: ADD CHECK PERMITS
    // TODO: ADD ERROR PAGE
    if (isLogin()) {
        res.redirect('/user/home');
    }
}