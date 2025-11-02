
function Comments({num}) {
    
    return (
        <div className="border border-dark rounded p-3" style={{textAlign: "center", marginTop: "1%", backgroundColor: "oklch(0.88 0.015 82)"}}>
            <p style={{color: "oklch(0.15 0.03 82)"}}>Post Comment {num}</p>
        </div>
    )
}

export default Comments