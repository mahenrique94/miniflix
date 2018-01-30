const APP_NAME = "miniflix";
const APP_DIRECTORY = "directory/";
const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const multer = require("multer");

const prefix = express.Router();
const router = express.Router();

module.exports = () => {

    const api = express();

    api.set("app_name", APP_NAME);
    api.set("app_port", "3000");
    api.set("app_secret", "chaves");
    api.set("router", router);

    api.use(multer({dest : APP_DIRECTORY}).any());

    api.use(express.static(path.resolve("./app/dist")));

    api.use(cors({origin : process.env.apiHost || `http://localhost:${api.get("app_port")}`, credentials : true}));

    api.use(methodOverride());

    api.use(bodyParser.urlencoded({extended : true}));
    api.use(bodyParser.json());

    api.use(helmet.xssFilter());
    api.use(helmet.noSniff());

    api.use(`/${api.get("app_name")}`, prefix);
    prefix.use("/api", router);

    api.disable("x-powered-by");

    consign({cwd : "api"}).include("models").then("controllers").then("routes").into(api);

    return api;

}