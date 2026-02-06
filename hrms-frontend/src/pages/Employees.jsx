import axios from "axios";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Employees() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${API}/employees`);
    setData(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <>
      <h3>Employees</h3>
      {data.length === 0 && <p>No employees</p>}
      {data.map(emp => (
        <div key={emp._id}>
          {emp.fullName} - {emp.department}
        </div>
      ))}
    </>
  );
}
