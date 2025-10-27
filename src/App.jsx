
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

import React from "react";
import "./App.css";
import LoginFormContainer from "./components/LoginPages/LoginPageFeatures/LoginFormContainer";

function App() {
  // minimal fields for the login form
  const loginFields = [
    { id: "email", label: "Email Address", type: "email", name: "emailAddress" },
    { id: "password", label: "Password", type: "password", name: "password" },
  ];

  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>Login</h2>
      <LoginFormContainer textField={loginFields} isEntryLoginPage={true} />
    </div>
  );
}

export default App;
