
function LoginButton(props){
    return (
        <button className="btn btn-dark w-100 py-1 my-1 rounded" type="submit" >
        {props.buttonLabel}
        </button> 
    )
}

export default LoginButton;