const router = require("express").Router();
const externalAPI = require("../../controllers/externalController");

// Matches with "/api/gratitudes"
router.route("/").get(externalAPI.findAll);

module.exports = router;
