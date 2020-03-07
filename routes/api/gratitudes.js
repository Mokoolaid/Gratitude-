const router = require("express").Router();
const gratitudesController = require("../../controllers/gratitudesController");

// Matches with "/api/gratitudes"
router.route("/")
  .get(gratitudesController.findAll)
  .post(gratitudesController.create);

// Matches with "/api/gratitudes/:id"
router
  .route("/:id")
  .get(gratitudesController.findById)
  .put(gratitudesController.update)
  .delete(gratitudesController.remove);

module.exports = router;
