import React from "react";

function EmployeeDashboard({ onLogout, userRole }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Employee Dashboard</h1>
      <p>Welcome — you are logged in as: <strong>{userRole}</strong></p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default EmployeeDashboard;
