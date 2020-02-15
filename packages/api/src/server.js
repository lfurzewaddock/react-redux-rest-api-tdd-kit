const fastify = require("fastify")();
const cors = require("fastify-cors");

require("dotenv").config();

const resourceCurrencies = require("./resources/currencies/api-route");

fastify.register(resourceCurrencies, { prefix: "/v1" });
fastify.register(cors, {
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-Type", "text/plain", "authorization"],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
});

const start = async () => {
  try {
    await fastify.listen(3000);
    // eslint-disable-next-line no-console
    console.log(`server listening on ${3000}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`error ${err}`);
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
