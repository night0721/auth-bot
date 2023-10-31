const {
  Client,
  CommandInteraction,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const config = require("../../../config");
const server = require("../../../models/server");
module.exports = {
  name: "setup",
  description: "Verify Embed",
  options: [
    {
      type: 7,
      name: "channel",
      description: "Channel to send verify embed",
      required: true,
    },
    {
      type: 8,
      name: "role",
      description: "Role to give when verified",
      required: true,
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const data = await server.findOne({ id: interaction.guild.id });
    if (data) {
      return interaction.editReply({
        ephemeral: true,
        embeds: [
          new EmbedBuilder()
            .setTitle("Error!")
            .setDescription("You have already setup the server!")
            .setColor("#02023a"),
        ],
      });
    }

    let code = generateCode();
    await interaction.editReply({
      ephemeral: true,
      embeds: [
        new EmbedBuilder()
          .setTitle("Setting up your server...")
          .setDescription(
            `Code: \`${code}\`\n**Make sure not to share it and store it, it is essential to pull back members**`
          )
          .setColor("#02023a"),
      ],
    });
    const members = Array.from(
      (await interaction.guild.members.fetch()).filter(e => !e.user.bot).keys()
    );
    await new server({
      id: interaction.guild.id,
      code,
      members,
      role: args[1],
    }).save();
    try {
      interaction.guild.channels.cache.get(args[0]).send({
        embeds: [
          new EmbedBuilder()
            .setTitle("Verify yourself in this server")
            .setDescription(
              "Verifying allows server admins to add you to new server in case it got deleted. You can deauthorize the bot in 'Authorized Apps', but we will not be able to add you to backup servers."
            )
            .setFooter({
              text: "By verifying you agree to let the owner make you join future servers",
            })
            .setColor("#02023a"),
        ],
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Verify here")
              .setURL(
                `https://discord.com/oauth2/authorize?response_type=code&redirect_uri=${encodeURIComponent(
                  process.env.CALLBACK_URL
                )}&scope=${encodeURIComponent(
                  config.scope.join(" ")
                )}&client_id=${process.env.CLIENT_ID}`
              )
              .setStyle(ButtonStyle.Link)
          ),
        ],
      });
    } catch (e) {}
  },
};

function generateCode() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 50; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
