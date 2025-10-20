import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Liverpool", "Manchester"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      />
    </div>
  );
}

export default App;
