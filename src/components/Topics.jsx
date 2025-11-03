
import Topic from "./KnowledgeSystem/Topics/Topic"
import SearchBar from "./KnowledgeSystem/Topics/Searchbar/SearchBar"
import Header from "./KnowledgeSystem/Header"

function Topics({onClickPostPage}) {

    return (
        <div className="p-3">
            <Header heading="Topics"/>
            <SearchBar/>
            <Topic topicName="Topic Name 1" tags="technical" onClickPostPage={onClickPostPage}/>
            <Topic topicName="Printing" tags="non-technical" onClickPostPage={onClickPostPage}/>
            <Topic topicName="Topic Name 3" tags="non-technical" onClickPostPage={onClickPostPage}/>
            <Topic topicName="Topic Name 4" tags="technical" onClickPostPage={onClickPostPage}/>
            <Topic topicName="Topic Name 5" tags="technical" onClickPostPage={onClickPostPage}/>
            <Topic topicName="Topic Name 6" tags="technical" onClickPostPage={onClickPostPage}/>
        </div>
    )
}

export default Topics