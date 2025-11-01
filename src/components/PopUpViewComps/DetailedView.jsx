
import Priority from "./Priority"
import ProjectName from "./ProjectName"
import Timescale from "./Timescale"
import Employees from "./Employees"
import Tags from "./Tags"


function DetailedView({onClickDone}) {
    return (
        <div>
            Task Name <span className="btn btn-warning">Edit</span> 
            <Priority/>
            <ProjectName/>
            <Timescale/>
            <Employees/>
            <Tags/>
            <br/>
            <button type="button" className="btn" style={{backgroundColor: "lightGreen", marginLeft: '5%'}} onClick={onClickDone}>Done</button>
            <button type="button" className="btn" style={{backgroundColor: "red", float: 'right', marginRight: '5%'}} onClick={onClickDone}>Cancel</button>
        </div>
    )
}

export default DetailedView