module.exports = api => {

    const controller = api.controllers.auth;
    const router = api.get("api_router");

    router.post("/auth", controller.auth);
    router.use("/", controller.checkToken);

}