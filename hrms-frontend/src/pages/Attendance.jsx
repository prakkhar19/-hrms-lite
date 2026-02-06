import axios from "axios";
import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Attendance() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await axios.post(`${API}/attendance`, form);
    alert("Attendance marked");
  };

  return (
    <>
      <h3>Mark Attendance</h3>
      <input placeholder="Employee ID" onChange={e => setForm({...form, employeeId:e.target.value})}/>
      <input type="date" onChange={e => setForm({...form, date:e.target.value})}/>
      <select onChange={e => setForm({...form, status:e.target.value})}>
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button onClick={submit}>Submit</button>
    </>
  );
}
