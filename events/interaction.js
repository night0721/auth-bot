const client = require("../bot");
const dotenv = require("dotenv");
const { EmbedBuilder } = require("discord.js");
dotenv.config();
client.on("interactionCreate", async interaction => {
  if (interaction.isCommand()) {
    await interaction
      .deferReply({ ephemeral: true })
      .catch(e => console.log(e));
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return;
    const args = [];
    for (const option of interaction.options.data) {
      if (option.type === "SUB_COMMAND_GROUP") {
        if (option.name) args.push(option.name);
        option.options?.forEach(x => {
          if (x.type === 1) {
            if (x.name) args.push(x.name);
            x.options?.forEach(y => {
              if (y.value) args.push(y.value);
            });
          } else if (x.value) {
            args.push(x.value);
          }
          if (x.value) args.push(x.value);
        });
      }
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach(x => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) {
        args.push(option.value);
      }
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );
    cmd.run(client, interaction, args).catch(e => sendE(e, interaction));
  }
});
function sendE(e, i) {
  console.error(e.stack);
  const embed = new EmbedBuilder()
    .setTitle("Command Error")
    .setDescription(`\`\`\`yaml\n${e.stack}\`\`\``)
    .setTimestamp()
    .setColor("#ff0000")
    .setFooter({ text: client.user.username });
  i.channel.send({ embeds: [embed] });
}
