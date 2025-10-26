// contains things to be added to a form so email, password etc

import LoginFormFields from "./LoginFormFields";
import LoginButton from "./LoginButton";
// import { useRef } from 'react';

function LoginFormContainer(props){
    let validAccount = [{email: "manager@mia.com", password: "manager123"},
                        {email: "employee@mia.com", password: "employee123"}];

              
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        // for (let [key, value] of formData.entries()) {
        //     console.log({key, value});
        // };
        console.log({email, password});
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fullName = formData.get("fullName");
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        console.log({fullName, email, password, confirmPassword});
    };


    const textFields = props.textField;

    if (props.isEntryLoginPage){                                                     
        return (
            <>
                <form onSubmit={handleLoginSubmit}>
                    {textFields.map(field => <LoginFormFields className="loginFormText" 
                                        key={field.id}
                                        id={field.id} 
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        />)}
                    <LoginButton buttonLabel="Login" id="loginButton" />
                    {/* <button className="btn btn-dark w-100 py-1 my-1 rounded" id="loginButton" type="submit">Login</button> */}
                </form>
                {/* <LoginButton buttonLabel="Register" id="registerButton"/> */}
            </>
        );
    }
    else {
        return (
            <>
                <form onSubmit={handleRegisterSubmit}>
                    {textFields.map(field => <LoginFormFields className="loginFormText" 
                                        key={field.id}
                                        id={field.id} 
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        />)}
                    <LoginButton buttonLabel="Register" id="registerButton"/>
                </form>
            </>
        ); 
    }

};

export default LoginFormContainer;