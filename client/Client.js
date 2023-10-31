const {
  Client,
  Collection,
  EmbedBuilder,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
require("dotenv").config();

class Auth extends Client {
  /**
   * @param {Client.options} options
   */
  constructor(
    options = {
      shards: "auto",
      partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
        Partials.GuildMember,
      ],
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
      ],
    }
  ) {
    super(options);
    this.slashCommands = new Collection();
  }

  start() {
    require("../handler")(this);
    this.login(process.env.TOKEN);
    console.log("Bot Started");
  }
  err(c, e) {
    const embed = new EmbedBuilder()
      .setTitle("An Error Occured")
      .setColor("Red")
      .setDescription(`❌ | ${e}`)
      .setTimestamp()
      .setFooter({
        text: `Made by ${this.author}`,
        iconURL: this.user.displayAvatarURL(),
      });
    c.followUp({ embeds: [embed] });
  }
}

module.exports = Auth;
