
// Viewing all posts
// Employee View

import Header from "../Header"
import Posts from "./Posts"

function PostPage({onClickBack, onClickPost}) {

    return (
        <div style={{margin: "1%"}}>
            <Header heading="Posts"/>
            <div className="border border-dark rounded" style={{marginTop: "1%"}}>
                <div style={{textAlign: "center", margin: "1%"}} className="border border-dark rounded">
                    <span className="fw-bold fs-1">Topic Name</span>
                    <button className="btn border border-dark rounded" onClick={onClickBack} style={{float: "left", marginTop: "0.75%", marginLeft: "1%"}}>Back</button>
                </div>
                <button className="btn border border-dark rounded" style={{marginBottom: "1%", marginLeft: "1%", marginRight: "1%", width: "98%"}}>Change View</button>
            </div>
            <Posts postName="Post Name 1" onClickPost={onClickPost}/>
            <Posts postName="Post Name 2" onClickPost={onClickPost}/>
            <Posts postName="Post Name 3" onClickPost={onClickPost}/>
            <Posts postName="Post Name 4" onClickPost={onClickPost}/>

        </div>
    )
}

export default PostPage