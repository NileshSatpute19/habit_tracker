const express = require("express");
const router = express.Router();
const myHabitsController = require("../controller/myHabitsController");

router.get("/", myHabitsController.home);
router.get("/toggle-status", myHabitsController.toggleStatus);

module.exports = router;
