const passport = require("passport");
const { Strategy } = require("passport-discord");
const db = require("../models/user");
const config = require("../config");
passport.serializeUser(async (user, done) => {
  try {
    done(null, user.id);
  } catch (e) {
    done(null, null);
  }
});
passport.deserializeUser(async (obj, done) => {
  const user = await db.findOne({ id: obj });
  if (user) done(null, user);
});
passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: config.scope,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, username, avatar } = profile;
      const data = await db.findOne({ username });
      if (data) {
        data.accessToken = accessToken;
        data.refreshToken = refreshToken;
        data.username = username;
        data.guilds = profile.guilds.map(g => g.id);
        data.avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}`;
        data.save();
        done(null, data);
      } else {
        const ndb = {
          id,
          username,
          avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}`,
          refreshToken,
          accessToken,
          guilds: profile.guilds.map(g => g.id),
        };
        const nd = new db(ndb).save();
        done(null, nd);
      }
    }
  )
);
