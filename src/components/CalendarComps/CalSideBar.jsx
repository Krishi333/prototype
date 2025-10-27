
function CalSideBar() {
    return (
        <div style={{width: 'max-content', height: 1000, float: "left"}}>
            <button type="button" className="btn" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%', backgroundColor: 'orange'}}>Profile</button>
            <p/>
            <button type="button" className="btn" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%', backgroundColor: 'orange'}}>Tasks</button>
            <p/>
            <button type="button" className="btn" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%', backgroundColor: 'orange'}}>Employee</button>
            <p/>
            <button type="button" className="btn" style={{margin: '0.5%', marginTop: 100, height: '10%', width: '100%', backgroundColor: 'orange'}}>Settings</button>
        </div>
    )
}

export default CalSideBar;