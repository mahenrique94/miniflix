export default class AuthHelper {

    static checkToken(headers) {
        return headers["x-access-token"] === null ? headers["x-access-token"] = AuthHelper.getToken() : null;
    }

    static getToken() {
        return sessionStorage.getItem("mf-access-token");
    }

    static isLogged() {
        return AuthHelper.getToken() !== null;
    }

    static login(token) {
        sessionStorage.setItem("mf-access-token", token);
    }

    static logout() {
        sessionStorage.removeItem("mf-access-token");
    }

}