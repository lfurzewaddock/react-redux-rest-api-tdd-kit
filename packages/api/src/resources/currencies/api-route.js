const { promisify } = require("util");
const fs = require("fs");
const path = require("path");

const schema = require("./schema");

const readFile = promisify(fs.readFile);

const opts = {
  schema: {
    response: {
      200: schema,
    },
  },
};

async function routes(fastify) {
  fastify.get("/currencies", opts, async () => {
    let content;
    try {
      content = await readFile(
        path.resolve(__dirname, "options.json"),
        "utf-8"
      );
    } catch (error) {
      fastify.log.error(error);
      // eslint-disable-next-line no-console
      console.log(error);
      process.exit(1);
    }
    return content;
  });
}

module.exports = routes;
