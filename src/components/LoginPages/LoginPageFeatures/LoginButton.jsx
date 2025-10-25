
function LoginButton(props){
    return (
        <button className="btn btn-dark w-100 py-1 my-1 rounded" id={props.id} type={props.type} onClick={props.onClick}>
        {props.buttonLabel}
        </button> 
    )
}

export default LoginButton;