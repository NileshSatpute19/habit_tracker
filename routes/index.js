const express = require("express");
const router = express.Router();
const { home, createHabit } = require("../controller/homeController");

router.get("/", home);
router.post("/addhabit", createHabit);
router.use("/listhabits", require("./myHabits"));

module.exports = router;
