import EntryFormFields from "./EntryFormFields";
import EntryButton from "./EntryButton";

function EntryFormContainer(props){


    // test data - should prob be moved outisde this
    let validAccount = [{email: "manager@make-it-all.com", password: "manager123"},
                        {email: "employee@make-it-all.com", password: "employee123"}];


    // handleLoginSubmit gets data from login form and checks if it is an existing account
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        console.log({email, password});
        checkValidAccount(email, password);
    };

    // handleRegisterSubmit gets data from register form and checks if password match
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        console.log({firstName, lastName, email, password, confirmPassword});
        if (checkPasswordMatch(password, confirmPassword)){
            console.log("Registered successfully");
            validAccount.push({email: email, password: password});
        }

    };

    // checks if the email and password match an existing account
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

    // checks if password and confirm password match
    const checkPasswordMatch = (password, confirmPassword) => {
        if (password === confirmPassword){
            console.log("Passwords match");
            return true;
        }
        console.log("Passwords don't match");
    };

    const textFields = props.textField;

    return (
        <form onSubmit={props.isEntryLoginPage ? handleLoginSubmit : handleRegisterSubmit}>
            {/* render form text fields  */}
            {textFields.map(field => <EntryFormFields  
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                />)}
            <EntryButton buttonLabel={props.isEntryLoginPage ? "Login" : "Register"} />
        </form>
    );
 

};

export default EntryFormContainer;