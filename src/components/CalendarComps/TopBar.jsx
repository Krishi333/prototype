
function TopBar() {
    return (
        <div style={{display: "flex"}}>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%', marginLeft: '3%'}}>{'<'}</button>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%'}}>{'Oct 27 - Nov 2'}</button>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%'}}>{'>'}</button>
        </div>
    )
}

export default TopBar;