import Message from "./Message";
import ListGroup from "./components/ListGroup";
// testing 
function App() {
  return (
    <div>
      <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      />
    </div>
  );
}

export default App;
