
function EntryButton(props){
    return (
        <button className="btn btn-submit-form w-100 py-1 my-1 rounded" type="submit" >
        {props.buttonLabel}
        </button> 
    )
}

export default EntryButton;