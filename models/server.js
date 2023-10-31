const { model, Schema } = require("mongoose");
module.exports = model(
  "server",
  new Schema({
    id: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
    members: {
      type: Array,
      default: [],
    },
    role: {
      type: String,
      default: "",
    },
  })
);
