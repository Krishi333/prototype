
function TopBar() {
    return (
        <div style={{marginTop: '1%', marginBottom: '0.5%'}}>
            <button type="button" className="btn" style={{margin: '0.5%', marginLeft: '38.56%', backgroundColor: 'orange'}}>{'<'}</button>
            <button type="button" className="btn" style={{margin: '0.5%', backgroundColor: 'orange'}}>{'Oct 27 - Nov 2'}</button>
            <button type="button" className="btn" style={{margin: '0.5%', marginRight: '38.56%', backgroundColor: 'orange'}}>{'>'}</button>
        </div>
    )
}

export default TopBar;