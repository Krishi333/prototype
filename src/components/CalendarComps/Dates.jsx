
import Tasks from "./Tasks";

function Dates () {

    return (
        <div style={{display: 'inline-flex', width: "93.29%"}}>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', marginLeft: '1%', textAlign: 'center'}}>
                <p className="fw-bold">Monday 27th</p>
                <Tasks taskName="Task 1"/>
                <Tasks taskName="Task 2"/>
                <Tasks taskName="Task 3"/>
                <Tasks taskName="Task 4"/>
                <Tasks taskName="Task 5"/>
                <Tasks taskName="Task 6"/>
            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Tuesday 28th</p>
                <Tasks taskName="Task 1"/>
                <Tasks taskName="Task 2"/>
                <Tasks taskName="Task 3"/>
                <Tasks taskName="Task 4"/>
            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Wednesday 29th</p>
                <Tasks taskName="Task 1"/>
            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Thursday 30th</p>
                <Tasks taskName="Task 1"/>
                <Tasks taskName="Task 2"/>
                <Tasks taskName="Task 3"/>
                <Tasks taskName="Task 4"/>
                <Tasks taskName="Task 5"/>
            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Friday 31st</p>
                <Tasks taskName="Task 1"/>
                <Tasks taskName="Task 2"/>

            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Saturday 1st</p>
                <Tasks taskName="Task 1"/>
                <Tasks taskName="Task 2"/>
                <Tasks taskName="Task 3"/>
                <Tasks taskName="Task 4"/>
            </div>
            <div className="border rounded border-secondary" style={{width: '13%', height: '100%', textAlign: 'center'}}>
                <p className="fw-bold">Sunday 2nd</p>
                <Tasks taskName="Task 1"/>
            </div>
        </div>
    )
}

export default Dates;