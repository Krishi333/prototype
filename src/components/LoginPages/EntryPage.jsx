import EntryFormContainer from "./LoginPageFeatures/EntryFormContainer";
import "./EntryPageStyle.css";
import { useState } from "react";
import design from "../../assets/tempDesign.jpg";
import ColourModeButton from "./LoginPageFeatures/ColourModeButton";

function EntryPage() {

    const darkSymbol = "🌙";
    const lightSymbol = "☀️";

    const [colourSymbol, setColourSymbol] = useState(lightSymbol);
    const [colourTheme, setColourTheme] = useState("light");

    const switchColourTheme = () => {
        if (colourSymbol === lightSymbol){
            setColourSymbol(darkSymbol);
            setColourTheme("dark");
        } else {
            setColourSymbol(lightSymbol);
            setColourTheme("light");
        }
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEntryLoginPage, setIsEntryLogin] = useState(true);

    const loginHeading = "Welcome Back! Please sign in.";
    const loginTextFields = [{id: "email", label: "Email", type: "email", name: "emailAddress", value:email, onChange: (e) => setEmail(e.target.value)},
                       {id: "password", label: "Password", type: "password", name: "password", value:password, onChange: (e) => setPassword(e.target.value)}];

    const registerHeading = "Welcome! Please sign up.";
    const registerTextFields = [
                        {id: "firstName", label: "First Name", type: "text", name: "firstName"},
                        {id: "lastName", label: "Last Name", type: "text", name: "lastName"},
                        {id: "email", label: "Email", type: "email", name: "emailAddress", value:email, onChange: (e) => setEmail(e.target.value)},
                        {id: "password", label: "Password", type: "password", name: "password", value:password, onChange: (e) => setPassword(e.target.value)},
                        {id: "confirmPassword", label: "Confirm Password", type: "password", name: "confirmPassword"}];

    const switchToRegister = "Register here.";
    const switchToLogin = "Login here.";
    const switchToRegisterQuestion = "Don't have an account? ";
    const switchToLoginQuestion = "Already have an account? ";

    const login = <EntryFormContainer isEntryLoginPage={true} textField={loginTextFields}/>;
    const register = <EntryFormContainer isEntryLoginPage={false} textField={registerTextFields}/>;
    
    return (
        <div data-theme={colourTheme}>
            <ColourModeButton colourThemeSymbol= {colourSymbol} colourTheme={switchColourTheme}/>
            <img src={design} alt="Welcome" className="split left" ></img>
            <div className="split right">
                <div className="login-content-container">
                    <h1 className="mb-2 text"><b>Make It All</b></h1>
                    <h6 className="my-1 text">{isEntryLoginPage ? loginHeading : registerHeading }</h6>
                    {isEntryLoginPage ? login : register}
                    <div className="mt-2 text">
                        {isEntryLoginPage ? switchToRegisterQuestion : switchToLoginQuestion}
                        

                        <button className="btn btn-link p-0 m-0 align-baseline" 
                                type="button" 
                                onClick={() => {setIsEntryLogin(!isEntryLoginPage) ; setEmail(""); setPassword("")}}>

                            {isEntryLoginPage ? switchToRegister : switchToLogin}
                        </button>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryPage;