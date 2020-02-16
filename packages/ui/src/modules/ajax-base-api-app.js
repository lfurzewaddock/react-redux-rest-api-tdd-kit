import axios from "axios";

import config from "../app-config";

export default axios.create({
  baseURL: `${config.baseUrl[process.env.NODE_ENV || "development"]}`,
});
