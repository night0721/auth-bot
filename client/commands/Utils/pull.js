const db = require("../../../models/user");
const server = require("../../../models/server");
const { Client, CommandInteraction, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");
let pulled = [];
let failed = 0;
module.exports = {
  name: "pull",
  description: "Pull Members",
  options: [
    {
      type: 3,
      name: "code",
      description: "Code to pull members",
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
    const data = await server.findOne({ code: args[0] });
    if (!data) {
      return interaction.editReply({
        ephemeral: true,
        embeds: [
          new EmbedBuilder()
            .setTitle("Error!")
            .setDescription("Invalid Code!")
            .setColor("#02023a"),
        ],
      });
    }
    for (let i = 0; i < data.members.length; i++) {
      const user = await db.findOne({ id: data.members[i] });
      if (!user) failed++;
      else {
        fetch(
          `https://discord.com/api/v10/guilds/${interaction.guild.id}/members/${user.id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bot ${process.env.TOKEN}`,
              "Content-Type": "application/json",
              "User-Agent": "Auth",
            },
            body: JSON.stringify({
              access_token: user.accessToken,
            }),
          }
        ).then(res => {
          if (res.status == 204 || res.status == 201) pulled.push(user.id);
          else if (res.status == 403) {
            fetch(
              `https://discord.com/api/v10/guilds/${interaction.guild.id}/members/${user.id}`,
              {
                method: "PUT",
                headers: {
                  Authorization: `Bot ${process.env.TOKEN}`,
                  "Content-Type": "application/json",
                  "User-Agent": "Auth",
                },
                body: JSON.stringify({
                  access_token: getAccessToken(user.refreshToken),
                }),
              }
            ).then(res => {
              if (res.status == 204 || res.status == 201) pulled.push(user.id);
              else if (res.status == 400) failed++;
            });
          }
        });
      }
    }
    for (let user of pulled) {
      interaction.guild.members.cache.get(user).roles.add(data.role);
    }
    interaction.editReply({
      ephemeral: true,
      content: `Pulled ${pulled.length} members. Failed to pull ${failed} members.`,
    });
  },
};

function getAccessToken(refreshToken) {
  var details = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "refresh_token",
    scope: "identify guilds.join guilds",
    redirect_uri: process.env.CALLBACK_URL,
    refresh_token: refreshToken,
  };

  var body = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    body.push(encodedKey + "=" + encodedValue);
  }
  body = body.join("&");
  fetch("https://discord.com/api/v10/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Auth",
    },
    body,
  }).then(res => {
    if (res.status != 400) return res.json().access_token;
    else return null;
  });
}
