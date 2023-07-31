const router = require("express").Router();

const userController = require("./controllers/userController");
const themeController = require("./controllers/themeController");

router.use("/users", userController);
router.use("/themes", themeController);

module.exports = router;
