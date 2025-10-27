import EntryFormContainer from "./LoginPageFeatures/EntryFormContainer";
import "./EntryPageStyle.css";
import { useState } from "react";
import design from "../../assets/tempDesign.jpg";

function EntryPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isEntryLoginPage, setIsEntryLogin] = useState(true);

    const loginTitle = "Login";
    const loginHeading = "Welcome Back! Please sign in.";
    const loginTextFields = [{id: "email", label: "Email", type: "email", name: "emailAddress", value:email, onChange: (e) => setEmail(e.target.value)},
                       {id: "password", label: "Password", type: "password", name: "password", value:password, onChange: (e) => setPassword(e.target.value)}];

    const registerTitle = "Register";
    const registerHeading = "Welcome! Please sign up.";
    const registerTextFields = [
                        {id: "firstName", label: "First Name", type: "text", name: "firstName", value:firstName, onChange: (e) => setFirstName(e.target.value), pattern:"[A-Za-z]+", title:"First name should only contain letters."},
                        {id: "lastName", label: "Last Name", type: "text", name: "lastName", value:lastName, onChange: (e) => setLastName(e.target.value), pattern:"[A-Za-z]+", title:"First name should only contain letters."},
                        {id: "email", label: "Email", type: "email", name: "emailAddress", value:email, onChange: (e) => setEmail(e.target.value)},
                        {id: "password", label: "Password", type: "password", name: "password", value:password, onChange: (e) => setPassword(e.target.value)},
                        {id: "confirmPassword", label: "Confirm Password", type: "password", name: "confirmPassword", value:confirmPassword, onChange: (e) => setConfirmPassword(e.target.value)}];

    const switchToRegister = "Register here.";
    const switchToLogin = "Login here.";
    const switchToRegisterQuestion = "Don't have an account? ";
    const switchToLoginQuestion = "Already have an account? ";

    const login = <EntryFormContainer isEntryLoginPage={true} textField={loginTextFields}/>;
    const register = <EntryFormContainer isEntryLoginPage={false} textField={registerTextFields}/>;
    
    return (
        <>
            <img src={design} alt="Welcome" className="split left" ></img>
            <div className="split right">
                <div className="login-content-container">
                    <h1 className="mb-2">{isEntryLoginPage ? loginTitle : registerTitle}</h1>
                    <h6 className="my-1">{isEntryLoginPage ? loginHeading : registerHeading }</h6>
                    {isEntryLoginPage ? login : register}
                    <div className="mt-2">
                        {isEntryLoginPage ? switchToRegisterQuestion : switchToLoginQuestion}
                        

                        <button className="btn btn-link p-0 m-0 align-baseline" 
                                type="button" 
                                onClick={() => {setIsEntryLogin(!isEntryLoginPage) ; setEmail(""); setPassword("")}}>

                            {isEntryLoginPage ? switchToRegister : switchToLogin}
                        </button>                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default EntryPage;