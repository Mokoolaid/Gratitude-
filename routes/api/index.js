const router = require("express").Router();
const gratitudeRoutes = require("./gratitudes");
const externalRoutes = require("./externalAPI");
// Book routes
router.use("/gratitudes", gratitudeRoutes);
router.use("/external", externalRoutes);
module.exports = router;
