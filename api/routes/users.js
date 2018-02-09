module.exports = api => {

    const controller = api.controllers.users;
    const router = api.get("router");

    router.route("/users").delete(controller.delete).get(controller.list).post(controller.save).put(controller.update);
    router.route("/users/:id").get(controller.edit);

}