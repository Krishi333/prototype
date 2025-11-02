//Individual Post


function Posts({postName, onClickPost}) {

    return (
        <div className="border border-dark rounded" style={{textAlign: "center", marginTop: "1%"}}>
            <button className="btn py-5" onClick={onClickPost} style={{width: "100%"}}>{postName}</button>
        </div>
    )
}

export default Posts