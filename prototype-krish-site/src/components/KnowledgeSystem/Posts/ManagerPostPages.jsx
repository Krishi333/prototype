
// Viewing all posts
// Manager View

import Header from "../Header"
import Posts from "./Posts"

function PostPage({onClickBack, onClickPost}) {

    return (
        <div className="p-3">
            <Header heading="Posts"/>
            <div className="border border-dark rounded" style={{marginTop: "1%", backgroundColor: "white"}}>
                <div style={{textAlign: "center", margin: "1%", backgroundColor: "white"}} className="border border-dark rounded">
                    <span className="fw-bold fs-1" style={{color: "oklch(0.15 0.03 82)"}}>Topic Name</span>
                    <button className="btn border border-dark rounded" onClick={onClickBack} style={{float: "left", marginTop: "0.75%", marginLeft: "1%", 
                        color: "oklch(0.15 0.03 82)", backgroundColor: "white"}}>Back</button>
                </div>
                <button className="btn border border-dark rounded" style={{width: "34%", marginRight: "1%", marginLeft: "1%", marginBottom: "1%", 
                    color: "oklch(0.15 0.03 82)", backgroundColor: "white"}}>Review Changes</button>
                <button className="btn border border-dark rounded" style={{width: "63%", marginBottom: "1%", color: "oklch(0.15 0.03 82)", 
                    backgroundColor: "white"}}>Change View</button>
            </div>
            <Posts postName="Post Name 1" onClickPost={onClickPost}/>
            <Posts postName="Post Name 2" onClickPost={onClickPost}/>
            <Posts postName="Post Name 3" onClickPost={onClickPost}/>
            <Posts postName="Post Name 4" onClickPost={onClickPost}/>
            <Posts postName="Post Name 5" onClickPost={onClickPost}/>
 
        </div>
    )
}

export default PostPage