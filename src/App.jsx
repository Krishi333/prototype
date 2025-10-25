
import { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import LoginInputBars from "./components/LoginInputBars";
import RegisterInputBars from "./components/RegisterInputBars";

// testing 
function App() {

  const [loginVisible, setLoginVisibility] = useState(true);

  return (
    <>
      {/* <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      /> */}

      {/* The below code initially displays the login screen until the user clicks register where the register screen is displayed
      In the register screen when the user 'creates' an account it takes them back to the login so that they could log in */}
      
      { loginVisible && <LoginInputBars onRegister={() => setLoginVisibility(false)}></LoginInputBars>}
      { !loginVisible && <RegisterInputBars onCreate={() => setLoginVisibility(true)}></RegisterInputBars>}
    </>
  );
}

export default App;
