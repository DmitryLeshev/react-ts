import consoleLogger from "./logger/console";
import elasticSearchLogger from "./logger/elastic-search";
import api from "./api";

type NodeEnv = "production" | "development";
const env: NodeEnv = "development"; /* = process.NODE_ENV */

const services = {
  log: env === "development" ? consoleLogger : elasticSearchLogger,
  api,
};

export default services;
