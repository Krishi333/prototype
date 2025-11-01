
function CalSideBar() {
    return (
        <div>
            <div style={{width: 'max-content', height: "100%", float: "left"}}>
                <button type="button" className="btn" style={{margin: '0.5%', marginTop: 50, height: 97, width: '100%', backgroundColor: 'orange'}}>Profile</button>
                <p/>
                <button type="button" className="btn" style={{margin: '0.5%', marginTop: 50, height: 97, width: '100%', backgroundColor: 'orange'}}>Tasks</button>
                <p/>
                <button type="button" className="btn" style={{margin: '0.5%', marginTop: 50, height: 97, width: '100%', backgroundColor: 'orange'}}>Employee</button>
                <p/>
                <button type="button" className="btn" style={{margin: '0.5%', marginTop: 50, height: 97, width: '100%', backgroundColor: 'orange'}}>Settings</button>
            </div>
        </div>
    )
}

export default CalSideBar;