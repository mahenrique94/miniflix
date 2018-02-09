module.exports = api => {

    const controller = api.controllers.auth;
    const router = api.get("router");

    router.route("/auth").post(controller.auth);

}