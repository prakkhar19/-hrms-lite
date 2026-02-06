const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, required: true },
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  department: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Employee", EmployeeSchema);
