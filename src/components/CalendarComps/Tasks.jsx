
function Tasks ({taskName, onClickTask}) {
    return (
        <div className="border rounded border-secondary"style={{margin: '1%'}}>
            <a className="btn btn-link" href="#" role="button" onClick={onClickTask}>{taskName}</a><br/>
            Task details <br/>
            <button type="button" className="btn btn-sm" style={{marginLeft: "70%"}}>🗑️</button>
        </div>
    )
}

export default Tasks;