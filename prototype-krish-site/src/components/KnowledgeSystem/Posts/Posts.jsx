//Individual Post


function Posts({postName, onClickPost}) {

    return (
        <div className="border border-dark rounded" style={{textAlign: "center", marginTop: "1%", backgroundColor: "oklch(0.88 0.015 82)"}}>
            <button className="btn py-5" onClick={onClickPost} style={{width: "100%", color: "oklch(0.15 0.03 82)"}}>{postName}</button>
        </div>
    )
}

export default Posts