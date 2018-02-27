import AuthHelper from "./AuthHelper";

export default class HTTPHelper {

    static headers = {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "x-access-token" : AuthHelper.getToken()
    };

    static buildHeaders() {
        AuthHelper.checkToken(HTTPHelper.headers);
        return HTTPHelper.headers;
    }

}