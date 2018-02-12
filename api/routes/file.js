module.exports = api => {

    const controller = api.controllers.file;
    const router = api.get("api_router");

    router.get("/file/download/:file", controller.download);
    router.post("/file/upload", controller.upload);

}