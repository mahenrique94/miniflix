const http = require("http");
const app = require("./api/config/app")();
require("./api/config/database")(app.get("app_name"));

http.createServer(app).listen(app.get("app_port"), () => console.log(`[HTTP] => Server running at port: ${app.get("app_port")}`));