import Message from "./Message";
import ListGroup from "./components/ListGroup";
// import LoginPage from "./components/LoginPages/LoginPage"
// import RegistrationPage from "./components/LoginPages/RegistrationPage";
import EntryPage from "./components/LoginPages/EntryPage";
import { useState } from "react";


// testing 
function App() {
  const [isEntry, setIsEntry] = useState(true);
  return (
    <div>
      {/* const [isEntry, setIsEntry] = useState(true); */}

      {/* <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      /> */}
      <EntryPage />
      <main>WELCOME!!!!!!!!!!!!!!!!</main>
      
    </div>
  );
}

export default App;
