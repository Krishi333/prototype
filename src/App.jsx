
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
      { loginVisible && <LoginInputBars onRegister={() => setLoginVisibility(false)}></LoginInputBars>}
      { !loginVisible && <RegisterInputBars onCreate={() => setLoginVisibility(true)}></RegisterInputBars>}
    </>
  );
}

export default App;
