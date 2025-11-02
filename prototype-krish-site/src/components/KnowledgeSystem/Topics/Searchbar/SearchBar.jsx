
function SearchBar() {
    
    return (
        <div className="border border-dark rounded" style={{marginTop: "1%"}}>
            <div style={{display: "inline-flex", width: "100%", marginTop: "1%"}}>
                <span style={{marginLeft: "1%", marginRight: "1%"}}>🔍</span>
                <input style={{marginBottom: "2%", marginRight: "1%"}}type="text" className="form-control"></input>
            </div>
            <button className="btn border border-dark rounded" style={{width: "34%", marginRight: "1%", marginLeft: "1%", marginBottom: "1%"}}>Advanced Search</button>
            <button className="btn border border-dark rounded" style={{width: "63%", marginBottom: "1%"}}>Change View</button>
        </div>
    )
}

export default SearchBar