
function Topic({topicName, tags, onClickPostPage}) {
    
    return (
        <div className="border border-dark rounded" style={{marginTop: "1%", textAlign: "center", backgroundColor: "oklch(0.88 0.015 82)"}}>
            <button type="button" className="btn btn-link fw-bold" onClick={onClickPostPage}>{topicName}</button>
            <p style={{color: "oklch(0.4 0.03 82)"}}> Brief Description of Topic</p>
            <span style={{float: "left", marginLeft: "1%", marginBottom: "1%", color: "oklch(0.4 0.03 82)"}}>💬 2</span>
            <span className="border border-dark rounded" style={{float: "right", marginRight: "1%", marginBottom: "1%", backgroundColor: "oklch(0.94 0.015 82)",
                 color: "oklch(0.15 0.03 82)", }}>{tags}</span>
            <div style={{clear: "both"}}/>
        </div>
    )
}

export default Topic