
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import TopBar from "./components/CalendarComps/TopBar";
import Dates from "./components/CalendarComps/Dates";
import CalSideBar from "./components/CalendarComps/CalSideBar";

// testing 
// Center top bar

function App() {

  return (
    <div>
      {/* <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      /> */}
      <CalSideBar/>
      <TopBar/>
      <Dates/>
    </div>
  );
}

export default App;
