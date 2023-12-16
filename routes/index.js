// importing express
const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/", homeController.home);
router.post("/create-habit", homeController.createHabit);
router.use("/my-habits", require("./myHabits"));

module.exports = router;
