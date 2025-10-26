
import { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

// testing 
function App() {

  const [loginVisible, setLoginVisibility] = useState(true);

  return (
    <>
      <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      />
    </>
  );
}

export default App;
