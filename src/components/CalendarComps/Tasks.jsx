
function Tasks ({taskName}) {
    return (
        <div className="border rounded border-secondary"style={{margin: '1%'}}>
            {taskName}<br/>
            Task details <br/>
            <button type="button" className="btn btn-secondary btn-sm">Delete</button>
        </div>
    )
}

export default Tasks;