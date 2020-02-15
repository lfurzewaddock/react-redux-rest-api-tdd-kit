const schema = {
  title: "Currency option collection",
  type: "array",
  items: {
    title: "currency options",
    type: "object",
    required: ["currency", "country"],
    properties: {
      currency: {
        type: "string",
      },
      country: {
        type: "string",
      },
    },
  },
};

module.exports = schema;
