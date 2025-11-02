


// import React, { useState } from "react";
// import "./App.css";
// import EntryPage from "./components/LoginPages/EntryPage";
// import ManagerDashboard from "./ManagerDashboard";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null);

//   const handleLoginSuccess = (role) => {
//     setIsAuthenticated(true);
//     setUserRole(role || "employee");
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null);
//   };


//   return isAuthenticated ? (
//     <ManagerDashboard onLogout={handleLogout} userRole={userRole} />
//   ) : (
//     <EntryPage onLoginSuccess={handleLoginSuccess} />
//   );

 

// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import EntryPage from "./components/LoginPages/EntryPage";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard"; // add this file/component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLoginSuccess = (role) => {
    setIsAuthenticated(true);
    setUserRole(role || "employee");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  // If authenticated, render dashboard based on role; otherwise render EntryPage
  if (!isAuthenticated) {
    return <EntryPage onLoginSuccess={handleLoginSuccess} />;
  }

  return userRole === "manager" ? (
    <ManagerDashboard onLogout={handleLogout} userRole={userRole} />
  ) : (
    <EmployeeDashboard onLogout={handleLogout} userRole={userRole} />
  );
}

export default App;

