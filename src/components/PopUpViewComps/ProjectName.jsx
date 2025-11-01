
function ProjectName () {
    return (
        <div style={{display: "inline-flex", height: "max-content"}}>
            <p>Project Name: </p>
            <select className="form-select" aria-label="Default select option" defaultValue="Project A" style={{width: "max-content", marginLeft: 50}}>
                <option value="0">Project A</option>
                <option value="1">Project B</option>
                <option value="2">Project C</option>
                <option value="3">Project D</option>
            </select>
        </div>
    )
}

export default ProjectName;