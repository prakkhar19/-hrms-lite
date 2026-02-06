const router = require("express").Router();
const Attendance = require("../models/Attendance");

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch {
    res.status(409).json({ message: "Attendance already marked" });
  }
});

// View attendance
router.get("/:employeeId", async (req, res) => {
  const data = await Attendance.find({ employeeId: req.params.employeeId });
  res.json(data);
});

module.exports = router;
