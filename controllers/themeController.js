const router = require("express").Router();

const themeManager = require("../managers/themeManager");

router.get("/", async (req, res) => {
  const themes = await themeManager.getAll();
  res.json(themes);
});

router.post("/", async (req, res) => {
  try {
    await themeManager.create({
      ...req.body,
      _ownerId: req.user._id,
    });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: "Cannot create energy",
    });
  }
});

router.get("/:themeId", async (req, res) => {
  await themeManager.update(req.params.themeId, req.body);

  res.status(200).end();
});

router.delete("/:themeId", async (req, res) => {
  await themeManager.delete(req.params.themeId);

  res.status(200).end();
});

module.exports = router;
