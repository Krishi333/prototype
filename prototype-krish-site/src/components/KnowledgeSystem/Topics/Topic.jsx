
function Topic({topicName, tags, onClickPostPage}) {
    
    return (
        <div className="border border-dark rounded" style={{marginTop: "1%", textAlign: "center"}}>
            <button type="button" className="btn btn-link fw-bold" onClick={onClickPostPage}>{topicName}</button>
            <br/>
            brief description of Topic 
            <br/>
            <span style={{float: "left", marginLeft: "1%", marginBottom: "1%"}}>💬 2</span>
            <span className="border rounded" style={{float: "right", marginRight: "1%", marginBottom: "1%", backgroundColor: "lightBlue"}}>{tags}</span>
            <div style={{clear: "both"}}/>
        </div>
    )
}

export default Topic