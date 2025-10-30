import LoginFormContainer from "./LoginPageFeatures/LoginFormContainer";
import "./LoginPage.css";
import design from "./tempDesign.jpg";
import LoginButton from "./LoginPageFeatures/LoginButton";

import logo from "./logo.png";

function LoginPage() {

    const title = "Login";
    const subtitle = "Welcome Back! Please sign in.";

    const loginTextFields = [{id: "email", label: "Email", type: "email", name: "emailAddress"},
                       {id: "password", label: "Password", type: "password", name: "password"}];

    return (
        <>
            <img src={design} alt="Welcome" className="split left" ></img>
            <div className="split right">
                <div className="login-content-container">
                    <h1 className="mb-2">{title}</h1>
                    <h6 className="my-1">{subtitle}</h6>
                    <LoginFormContainer isEntryLoginPage={true} textField={loginTextFields}/>
                    {/* <img src={logo} alt="make-it-all-logo" className="logo w-100" ></img> */}
                    {/* <LoginContentContainer title="Log In" extraInfo="Welcome Back! Please sign in."isLogin={true}/> */}
                </div>
            </div>
           
        </>
    );
};

export default LoginPage;