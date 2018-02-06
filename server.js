const http = require("http");
const api = require("./api/config/api")();
require("./api/config/database")(api.get("api_name"));

http.createServer(api).listen(api.get("api_port"), () => console.log(`[HTTP] => API running at port: ${api.get("api_port")}`));