// contains things to be added to a form so email, password etc

import LoginFormFields from "./LoginFormFields";
import LoginButton from "./LoginButton";
// import { useRef } from 'react';

function LoginFormContainer(props){
    let validAccount = [{email: "manager@mia.com", password: "manager123"},
                        {email: "employee@mia.com", password: "employee123"}];

              
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            console.log({key, value});
        };
    };


    const textFields = props.textField;

    if (props.isEntryLoginPage){                                                     
        return (
            <>
                <form onSubmit={handleSubmit}>
                    {textFields.map(field => <LoginFormFields className="loginFormText" 
                                        key={field.id}
                                        id={field.id} 
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        />)}
                    <LoginButton buttonLabel="Login" id="loginButton" type="submit"/>
                    {/* <button className="btn btn-dark w-100 py-1 my-1 rounded" id="loginButton" type="submit">Login</button> */}
                </form>
                {/* <LoginButton buttonLabel="Register" id="registerButton"/> */}
            </>
        );
    }
    else {
        return (
            <>
                <form>
                    {textFields.map(field => <LoginFormFields className="loginFormText" 
                                        key={field.id}
                                        id={field.id} 
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        />)}
                    {/* <LoginButton buttonLabel="Register" id="registerButton"/> */}
                </form>
            </>
        ); 
    }

};

export default LoginFormContainer;