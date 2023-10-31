const passport = require("passport");
const router = require("express").Router();

router.get("/discord", passport.authenticate("discord"));
router.get(
  "/discord/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
module.exports = router;
