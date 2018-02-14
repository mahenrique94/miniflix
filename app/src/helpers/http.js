import { auth } from "./auth";

const headers = {
    "Accept" : "application/json",
    "Content-Type" : "application/json",
    "x-access-token" : auth.getToken()
};

export const http = {

    buildHeaders : () => {
        auth.checkToken(headers);
        return headers;
    }

}
