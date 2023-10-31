const { model, Schema } = require("mongoose");
module.exports = model(
  "user",
  new Schema({
    id: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    accessToken: {
      type: String,
      default: "",
    },
    guilds: {
      type: Array,
      default: [],
    },
    ip: {
      type: String,
      default: "",
    },
  })
);
