export const auth = {

    checkToken : headers => headers["x-access-token"] === null ? headers["x-access-token"] = auth.getToken() : null,
    getToken : () => sessionStorage.getItem("access-token")

}
