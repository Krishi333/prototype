
function Tasks ({taskName}) {
    return (
        <div className="border rounded border-secondary"style={{margin: '1%'}}>
            <a class="btn btn-link" href="#" role="button">{taskName}</a><br/>
            Task details <br/>
            <button type="button" className="btn btn-sm" style={{marginLeft: "70%"}}>🗑️</button>
        </div>
    )
}

export default Tasks;