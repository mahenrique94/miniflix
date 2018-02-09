module.exports = api => {

    const controller = api.controllers.auth;
    const router = api.get("router");

    router.use("/", controller.checkToken);
    router.post("/auth", controller.auth);

}