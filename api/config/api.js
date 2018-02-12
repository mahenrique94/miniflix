const API_NAME = "miniflix";
const API_DIRECTORY = "directory/";
const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const multer = require("multer");
const morgan = require("morgan");

const prefix = express.Router();
const router = express.Router();

module.exports = () => {

    const api = express();

    api.set("api_directory", API_DIRECTORY);
    api.set("api_name", API_NAME);
    api.set("api_port", "3000");
    api.set("api_router", router);
    api.set("api_secret", "chaves");

    api.use(multer({dest : API_DIRECTORY}).any());

    api.use(express.static(path.resolve("./app/dist")));

    api.use(cors({origin : process.env.apiHost || "http://localhost:8080", credentials : true}));

    api.use(methodOverride());

    api.use(bodyParser.urlencoded({extended : true}));
    api.use(bodyParser.json());

    api.use(helmet.xssFilter());
    api.use(helmet.noSniff());

    api.use(morgan("dev"));

    api.use(`/${api.get("api_name")}`, prefix);
    prefix.use("/api", router);

    api.disable("x-powered-by");

    consign({cwd : "api"}).include("./models").then("./controllers").then("./routes/init.js").then("./routes/auth.js").then("./routes").into(api);

    return api;

}