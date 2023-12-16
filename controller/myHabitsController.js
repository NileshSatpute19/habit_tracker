const Habits = require("../models/habits");

const CalculateDayOfWeek = (date) => {
  var days = new Array();
  for (var i = 6; i >= 0; i--) {
    days[6 - i] = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - i
    ).toString();
    days[6 - i] = `${days[6 - i].slice(0, 4)}, ${days[6 - i].slice(4, 11)}`;
  }
  return days;
};

module.exports.home = async function (req, res) {
  try {
    let date = new Date().toString();
    date = `${date.slice(0, 3)},${date.slice(3, 15)}`;
    const pastWeek = CalculateDayOfWeek(new Date());
    const myHabits = await Habits.find({});

    // render all the habits
    return res.render("myHabits", {
      // today's date
      date: date,
      // all habits
      myHabits: myHabits,
      // past week date
      weekDays: pastWeek,
    });
  } catch (error) {
    console.log(error);
    res.redirect("back");
  }
};

module.exports.toggleStatus = async function (req, res) {
  try {
    let id = req.query.id;
    let index = req.query.i;
    let status = req.query.status;
    const habit = await Habits.findOne({ _id: id });

    // if the new status is true (done)
    if (status === "true") {
      // if task is not already done update the status
      if (habit.weeklyStatus[index] !== "true") {
        // increase the number of days on which the task is completed
        habit.completedDays = habit.completedDays + 1;
      }
    }
    // if new status is not done / pending
    else {
      // if task was previously done
      if (habit.weeklyStatus[index] === "true") {
        habit.completedDays = habit.completedDays - 1;
      }
    }

    habit.weeklyStatus[index] = status;
    await habit.save();
    return res.redirect("back");
  } catch (err) {
    console.log(err.message);
    res.redirect("back");
  }
};
