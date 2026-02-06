import axios from "axios";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Employees() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const fetchData = async () => {
    const res = await axios.get(`${API}/employees`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${API}/employees`, form);

    setForm({
      employeeId: "",
      fullName: "",
      email: "",
      department: ""
    });

    fetchData(); // refresh list
  };

  return (
    <>
      <h2>Employees</h2>

      {/* Add Employee Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
          required
        />
        <br />

        <input
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          required
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />

        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          required
        />
        <br />

        <button type="submit">Add Employee</button>
      </form>

      {/* Employee List */}
      {data.length === 0 && <p>No employees</p>}

      {data.map((emp) => (
        <div key={emp._id}>
          {emp.fullName} - {emp.department}
        </div>
      ))}
    </>
  );
}
