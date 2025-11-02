
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
import ManagerDashboard from "./components/ManagerDashboard";

function App() {
  // minimal fields for the login form
  const loginFields = [
    { id: "email", label: "Email Address", type: "email", name: "emailAddress" },
    { id: "password", label: "Password", type: "password", name: "password" },
  ];

  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  const handleLoginSuccess = (userRole) => {
    setRole(userRole || "employee");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setRole(null);
  };

  if (loggedIn) {
    return (
      <div className="App" style={{ height: "100vh" }}>
        <div style={{ padding: 8, background: "#f5f5f5", position: 'relative', zIndex: 2 }}>
          <button 
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#dc3545',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
        {role === 'manager' ? (
          <ManagerDashboard />
        ) : (
          <div>Employee Dashboard Coming Soon</div>
        )}
      </div>
    );
  }

  // Unauthenticated: render the detailed EntryPage (login/register combined)
  return (
    <div>
      <EntryPage onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
