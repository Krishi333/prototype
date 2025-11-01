
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Calendar from "./components/Calendar";
import DetailedView from "./components/PopUpViewComps/DetailedView";
import { useState } from "react";

// testing 

function App() {

    const [CalendarVisible, setCalendarVisibility] = useState(true);

  return (
    <div>
      {/* <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      /> */}
      {CalendarVisible && <Calendar onClickTask={() => setCalendarVisibility(false)}/>}
      {!CalendarVisible && <DetailedView onClickBack={() => setCalendarVisibility(true)}/>}
    </div>
  );
}

export default App;
