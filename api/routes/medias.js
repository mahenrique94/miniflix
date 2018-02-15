module.exports = api => {

    const controller = api.controllers.medias;
    const router = api.get("api_router");

    router.route("/medias").delete(controller.delete).get(controller.list).post(controller.save).put(controller.update);
    router.get("/medias/find/:slug", controller.listBySlug);
    router.get("/medias/:id", controller.edit);

}