
import Priority from "./Priority"
import ProjectName from "./ProjectName"
import Timescale from "./Timescale"
import Employees from "./Employees"
import Tags from "./Tags"
import Description from "./Description"


function DetailedView({onClickDone}) {
    return (
        <div style={{marginLeft: "5%", marginRight: "5%", marginTop: "2%"}}>
            <p style={{textAlign: "center"}}>Task 1 <span style={{marginLeft: "2%", backgroundColor: "lightBlue"}}className="btn">Edit</span></p>
            <Description/>
            <br/>
            <Priority/>
            <p/>
            <ProjectName/>
            <p/>
            <Timescale/>
            <br/>
            <Employees/>
            <br/>
            <Tags/>
            <br/>
            <button type="button" className="btn" style={{backgroundColor: "lightGreen"}} onClick={onClickDone}>Done</button>
            <button type="button" className="btn" style={{backgroundColor: "red", float: 'right'}} onClick={onClickDone}>Cancel</button>
        </div>
    )
}

export default DetailedView