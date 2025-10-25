// contains things to be added to a form so email, password etc

import LoginFormFields from "./LoginFormFields";
import LoginButton from "./LoginButton";
// import { useRef } from 'react';

function LoginFormContainer(props){

    // contains all possible text fields and buttons for a login and registration page
    // const name = <LoginFormFields className="loginFormText" label="Full Name" type="text" id="fullName"/>
    // const email = <LoginFormFields className="loginFormText"label="Email" type="email" id="email"/>
    // const password = <LoginFormFields className="loginFormText" label="Password" type="password" id="password"/>
    // const confirmPassword = <LoginFormFields className="loginFormText" label="Confirm Password" type="password" id="confirmPassword"/>
    // // const code= <LoginFormFields className="loginFormText" label="Code" type="text" id="code"/>

    // const loginButton = <LoginButton buttonLabel="Login" id="loginButton"/>
    // const registerButton = <LoginButton buttonLabel="Register" id="registerButton"/>

    // // each array conatains the fields and button for each corresponding page
    // const login = [email, password, loginButton, registerButton];
    // const register = [name, email, password, confirmPassword, registerButton];

    // const loginForm = [{id: "email", label: "Email", type: "email"},
    //                    {id: "password", label: "Password", type: "password"}];

    // const registerForm = [{id: "fullName", label: "Full Name", type: "text"},
    //                       {id: "email", label: "Email", type: "email"},
    //                       {id: "password", label: "Password", type: "password"},
    //                       {id: "confirmPassword", label: "Confirm Password", type: "password"}];

    

   

    // const textFieldsRef = useRef([]);
    // textFieldsRef.current = [];
    // const addToRefs = (el) => {
    //     console.log(el);
    // };


    // https://www.youtube.com/watch?v=fkl1Kn_QWCI
    // const mappedTextFields = textFields.map(field => <LoginFormFields className="loginFormText" 
    //                                                             key={field.id}
    //                                                             id={field.id} 
    //                                                             label={field.label}
    //                                                             type={field.type}/>)

    let validAccount = [{email: "manager@mia.com", password: "manager123"},
                        {email: "employee@mia.com", password: "employee123"}];

    
    
                    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let input = [];
        for (let [key, value] of formData.entries()) {
            {key, value};
            console.log({key, value});
        };
    };


    const textFields = props.textField;

    if (props.isLoginPage){                                                     
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
    // return (
    //     <form>
            
    //     </form>
    // )
    // if the page is login, isLogin is returned true from a parent component 
    // a login form is shown,
    // if not, a registration form is shown (only 2 options)

    // https://sentry.io/answers/uncontrolled-inputs-react/
    // return (props.isLogin ? (<form>{login}</form>) : (<form>{register}</form>));

};

export default LoginFormContainer;