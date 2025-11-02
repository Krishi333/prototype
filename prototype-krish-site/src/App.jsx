
import ManagerPostPages from "./components/KnowledgeSystem/Posts/ManagerPostPages";
import PostPage from "./components/KnowledgeSystem/Posts/PostPage";
import Post from "./components/KnowledgeSystem/Posts/Post";
import Topics from "./components/Topics";
import { useState } from "react";

// testing 

function App() {

    // const [CalendarVisible, setCalendarVisibility] = useState(true);
    const [TopicsVisible, setTopicsVisibility] = useState(true);
    const [PostPageVisible, setPostPageVisibility] = useState(false);
    const [PostVisible, setPostVisibility] = useState(false);

  return (
    <div>
      {/* <Message />
      <ListGroup
        title="Cities"
        items={["London", "Doncaster", "Sheffield", "Guildford", "Manchester", "ben"]}
        onSelectItem={(item) => console.log("You picked:", item)}
      /> */}
      {/* {CalendarVisible && <Calendar onClickTask={() => setCalendarVisibility(false)}/>}
      {!CalendarVisible && <DetailedView onClickDone={() => setCalendarVisibility(true)}/>} */}
{/*       <Topics/> 
      <PostPage/>
      <Post/> */}

      {TopicsVisible && <Topics onClickPostPage={() => {setTopicsVisibility(false); setPostPageVisibility(true);}}/>}
      {/* Change below to '<PostPages' for employee view instead of 'ManagerPostPages' which shows manager view */}
      {PostPageVisible && <ManagerPostPages onClickBack={() => {setTopicsVisibility(true); setPostPageVisibility(false)}} onClickPost={() => {setPostPageVisibility(false); setPostVisibility(true)}}/>}
      {PostVisible && <Post onClickBack={() => {setPostVisibility(false); setPostPageVisibility(true)}}/>}
      
    </div>
  );
}

export default App;
