
function CalSideBar() {
    return (
        <div style={{width: 'max-content', height: 1000, float: "left"}}>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%'}}>Profile</button>
            <p/>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%'}}>Tasks</button>
            <p/>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%'}}>Employee</button>
            <p/>
            <button type="button" className="btn btn-warning" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%'}}>Settings</button>
        </div>
    )
}

export default CalSideBar;