return (
  <>
    <div className="header">
      <h1>HRMS Lite</h1>
      <p>Simple Human Resource Management System</p>
    </div>

    <div className="container">
      <h2 className="section-title">Employees</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
          required
        />

        <input
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          required
        />

        <button type="submit">Add Employee</button>
      </form>

      <h3 className="section-title" style={{ marginTop: "30px" }}>
        Employee List
      </h3>

      {data.length === 0 && <p>No employees</p>}

      {data.map((emp) => (
        <div className="employee-card" key={emp._id}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="employee"
          />
          <div>
            <strong>{emp.fullName}</strong>
            <div>{emp.department}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="footer">
      © 2026 HRMS Lite · Built with React & Node
    </div>
  </>
);
