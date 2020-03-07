const router = require("express").Router();
const gratitudeRoutes = require("./gratitudes");

// Book routes
router.use("/gratitudes", gratitudeRoutes);

module.exports = router;
