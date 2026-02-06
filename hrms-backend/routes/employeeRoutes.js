const router = require("express").Router();
const Employee = require("../models/Employee");

// Add employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department)
      return res.status(400).json({ message: "All fields required" });

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid email" });

    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(409).json({ message: "Employee already exists" });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Delete employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
});

module.exports = router;
