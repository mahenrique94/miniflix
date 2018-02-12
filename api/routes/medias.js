module.exports = api => {

    const controller = api.controllers.medias;
    const router = api.get("api_router");

    router.route("/medias").delete(controller.delete).get(controller.list).post(controller.save).put(controller.update);
    router.route("/medias/:id").get(controller.edit);

}