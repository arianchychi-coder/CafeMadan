const router = require("express").Router();

const visitController = require("../controllers/visite_controller");

router.post("/add", visitController.addVisit);

router.get("/", visitController.getVisit);

module.exports = router;