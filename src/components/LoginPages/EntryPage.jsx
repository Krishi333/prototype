import LoginFormContainer from "./LoginPageFeatures/LoginFormContainer";
import "./LoginPage.css";
import { useState } from "react";
import LoginButton from "./LoginPageFeatures/LoginButton";
import design from "../../assets/tempDesign.jpg";

function EntryPage() {

    const [isEntryLoginPage, setIsEntryLogin] = useState(true);

    const loginTitle = "Login";
    const loginSubtitle = "Welcome Back! Please sign in.";
    const loginTextFields = [{id: "email", label: "Email", type: "email", name: "emailAddress"},
                       {id: "password", label: "Password", type: "password", name: "password"}];

    const registerTitle = "Register";
    const registerSubtitle = "Welcome! Please sign up.";
    const registerTextFields = [{id: "fullName", label: "Full Name", type: "text", name: "fullName"},
                        {id: "email", label: "Email", type: "email", name: "emailAddress"},
                        {id: "password", label: "Password", type: "password", name: "password"},
                        {id: "confirmPassword", label: "Confirm Password", type: "password", name: "confirmPassword"}];

    const login = <LoginFormContainer isEntryLoginPage={true} textField={loginTextFields}/>;
    const register = <LoginFormContainer isEntryLoginPage={false} textField={registerTextFields}/>;
    
    return (
        <>
            <img src={design} alt="Welcome" className="split left" ></img>
            <div className="split right">
                <div className="login-content-container">
                    <h1 className="mb-2">{isEntryLoginPage ? loginTitle : registerTitle}</h1>
                    <h6 className="my-1">{isEntryLoginPage ? loginSubtitle : registerSubtitle}</h6>
                    {isEntryLoginPage ? login : register}
                    <LoginButton buttonLabel="Register" id="registerButton" type="button" onClick={() => setIsEntryLogin(!isEntryLoginPage)}/>
                </div>
            </div>
        </>
    );
};

export default EntryPage;