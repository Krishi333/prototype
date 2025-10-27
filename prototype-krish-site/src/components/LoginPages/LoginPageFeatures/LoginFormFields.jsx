// add fields - the code for it


function LoginFormFields(props){
    return (
        <div className="form-floating">
            <input
                type={props.type} // type of input
                className="form-control w-100 mx-0 my-2 rounded m-auto"
                id={props.id} // id of input
                placeholder= {props.label}  //whats written in 
                name={props.name}
            />
            <label htmlFor ={props.id}>{props.label}</label>
        </div>
    );
};


export default LoginFormFields;