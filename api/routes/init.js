module.exports = api => {

    const controller = api.controllers.init;
    const router = api.get("api_router");

    router.post("/init", controller.init);

}