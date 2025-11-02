
// Viewing all posts
// Employee View

import Header from "../Header"
import Posts from "./Posts"

function PostPage({onClickBack, onClickPost}) {

    return (
        <div className="p-3">
            <Header heading="Posts"/>
            <div className="border border-dark rounded" style={{marginTop: "1%", backgroundColor: "oklch(0.88 0.015 82)"}}>
                <div style={{textAlign: "center", margin: "1%", backgroundColor: "oklch(0.94 0.015 82)"}} className="border border-dark rounded">
                    <span className="fw-bold fs-1" style={{color: "oklch(0.15 0.03 82)"}}>Topic Name</span>
                    <button className="btn border border-dark rounded" onClick={onClickBack} style={{float: "left", marginTop: "0.75%", marginLeft: "1%", 
                        color: "oklch(0.15 0.03 82)", backgroundColor: "oklch(0.98 0.015 82)"}}>Back</button>
                </div>
                <button className="btn border border-dark rounded" style={{marginBottom: "1%", marginLeft: "1%", marginRight: "1%", width: "98%", 
                    color: "oklch(0.15 0.03 82)", backgroundColor: "oklch(0.94 0.015 82)"}}>Change View</button>
            </div>
            <Posts postName="Post Name 1" onClickPost={onClickPost}/>
            <Posts postName="Post Name 2" onClickPost={onClickPost}/>
            <Posts postName="Post Name 3" onClickPost={onClickPost}/>
            <Posts postName="Post Name 4" onClickPost={onClickPost}/>
            <Posts postName="Post Name 5" onClickPost={onClickPost}/>
            <Posts postName="Post Name 6" onClickPost={onClickPost}/>
            <Posts postName="Post Name 7" onClickPost={onClickPost}/>
            <Posts postName="Post Name 8" onClickPost={onClickPost}/>

        </div>
    )
}

export default PostPage