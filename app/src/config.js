import { config as development } from "./environments/development";
import { config as production } from "./environments/production";

const config = process.env.ENVIRONMENT === "production" ? production : development;

export default config;