import LoginFormFields from "./LoginFormFields";
import LoginButton from "./LoginButton";
// import { useRef } from 'react';

function LoginFormContainer(props){
    let validAccount = [{email: "manager@mia.com", password: "manager123"},
                        {email: "employee@mia.com", password: "employee123"}];
    // should prob move validAccounts outisde 

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        // for (let [key, value] of formData.entries()) {
        //     console.log({key, value});
        // };
        console.log({email, password});
        const ok = checkValidAccount(email, password); //revise callback functions
        if (ok && typeof props.onLoginSuccess === "function"){
            // determine simple role by email; adjust as needed
            const role = email === "manager@mia.com" ? "manager" : "employee";
            props.onLoginSuccess(role);
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fullName = formData.get("fullName");
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        console.log({fullName, email, password, confirmPassword});
        checkPasswordMatch(password, confirmPassword);
    };

    const checkValidAccount = (email, password) => {
        for (let i = 0; i < validAccount.length; i++){
            if (email === validAccount[i].email && password === validAccount[i].password){
                console.log("Logged in");
                return true;
            }
        }
        console.log("Can't log in");
        return false;
    };

    const checkPasswordMatch = (password, confirmPassword) => {
        if (password === confirmPassword){
            console.log("Passwords match");
            return true;
        }
        console.log("Passwords don't match");
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
                </form>
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