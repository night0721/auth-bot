const fs = require("fs");
const cmds = [];
module.exports = async client => {
  fs.readdirSync("./events").forEach(file => {
    require(`${process.cwd()}/events/${file}`);
  });
  fs.readdirSync("./client/commands").forEach(directory => {
    if (directory !== "Owner") {
      const commands = fs.readdirSync(`./client/commands/${directory}/`);
      commands.map(value => {
        const file = require(`${process.cwd()}/client/commands/${directory}/${value}`);
        if (file.name) {
          const properties = { directory, ...file };
          client.slashCommands.set(file.name, properties);
        }
        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        if (file.UserPerms) file.defaultPermission = false;
        cmds.push(file);
      });
    }
  });
  client.on("ready", async () => {
    await client.application.commands.set(cmds);
  });
};
