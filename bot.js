const Client = require("./client/Client");
const client = new Client();
module.exports = client;
process.on("unhandledRejection", () => {}); // add // when need to debug
client.start();
