
// import { useState } from "react";
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

// // testing 
// function App() {

//   const [loginVisible, setLoginVisibility] = useState(true);

//   return (
//     <>
//       <Message />
//       <ListGroup
//         title="Cities"
//         items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
//         onSelectItem={(item) => console.log("You picked:", item)}
//       />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import EntryPage from "./components/LoginPages/EntryPage";
import ManagerDashboard from "./ManagerDashboard";

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

  // Simple routing: show dashboard when authenticated, otherwise show login
  return isAuthenticated ? (
    <ManagerDashboard onLogout={handleLogout} userRole={userRole} />
  ) : (
    <EntryPage onLoginSuccess={handleLoginSuccess} />
  );
}

export default App;
