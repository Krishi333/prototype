import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        items={["London", "Doncaster", "Sheffield", "Liverpool", "Newcastle"]}
        onSelectItem={(item) => console.log("You picked:", item)} 
      />
    </div>
  );
}

export default App;
