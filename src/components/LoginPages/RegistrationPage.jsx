import LoginFormContainer from "./LoginPageFeatures/LoginFormContainer";
import "./LoginPage.css";
import design from "./tempDesign.jpg";
import logo from "./logo.png";

function RegistrationPage(props) {

    const title = "Register";
    const subtitle = "Welcome! Please sign up.";
    const registerTextFields = [{id: "fullName", label: "Full Name", type: "text", name: "fullName"},
                        {id: "email", label: "Email", type: "email", name: "emailAddress"},
                        {id: "password", label: "Password", type: "password", name: "password"},
                        {id: "confirmPassword", label: "Confirm Password", type: "password", name: "confirmPassword"}];

    return (
        <>
            <img src={design} alt="Welcome" className="split left" ></img>
            <div className="split right">
                <div className="login-content-container">
                    {/* Back button — calls onBack prop if provided, otherwise falls back to window.history */}
                    <div className="back-button-box">
                        <button
                            type="button"
                            className="btn btn-outline-secondary back-button"
                            onClick={() => (props.onBack ? props.onBack() : window.history.back())}
                        >
                            ← Back to login
                        </button>
                    </div>
                    <h1 className="mb-2">{title}</h1>
                    <h6 className="my-1">{subtitle}</h6>
                    <LoginFormContainer isEntryLoginPage={false} textField={registerTextFields}/>
                </div>
            </div>
           
        </>
    );
};

export default RegistrationPage;