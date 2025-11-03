
function Priority() {
    return (
        <div style={{display: "inline-flex", width: "100%"}}>
        <p className="border border-dark" style={{backgroundColor: "red", width: 22, marginRight: "1%"}}></p>
        Priority of task 
        <button type="button" className="btn" style={{marginRight: "1%", marginLeft: "1%", backgroundColor: "lightBlue"}}>⬇</button>
        <button type="button" className="btn" style={{backgroundColor: "lightBlue"}}>⬆</button>
        <br/>
        </div>
    )
}

export default Priority