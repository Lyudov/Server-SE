const router = require("express").Router();

const userManager = require("../managers/userManagers");

router.post("/register", async (req, res) => {
  try {
    const result = await userManager.register(req.body);

    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: "Some error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await userManager.login(req.body);

    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/logout", (req, res) => {
  //TODO: Check the token ? invalid
  res.end();
});

module.exports = router;
