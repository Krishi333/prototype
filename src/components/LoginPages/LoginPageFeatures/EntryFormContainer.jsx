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
        
        if (!email || !password) {
            props.onError && props.onError('Please fill in all fields');
            return;
        }

        if (checkValidAccount(email, password)) {
            // Determine role based on email (manager vs employee)
            const role = email.includes("manager") ? "manager" : "employee";
            props.onLoginSuccess && props.onLoginSuccess(role);
            props.onError && props.onError(''); // Clear any existing errors
        } else {
            props.onError && props.onError('Invalid email or password');
        }
    };

    // handleRegisterSubmit gets data from register form and checks if password match
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('=== REGISTRATION ATTEMPT ===');
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("emailAddress");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        console.log('Email:', email);
        console.log('Password:', password);

        // Validate all fields are filled
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            props.onError && props.onError('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            props.onError && props.onError('Please enter a valid email address');
            return;
        }

        const workEmailRegex = /^[^\s@]+@make-it-all\.com$/;
        if (!workEmailRegex.test(email)) {
            props.onError && props.onError('Please enter work email address');
            return;
        }

       
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        console.log('Checking password for special character:', password);
        console.log('Special char test result:', specialCharRegex.test(password));
        if (!specialCharRegex.test(password)) {
            console.log('VALIDATION FAILED - No special character found');
            props.onError && props.onError('Password must include at least one special character');
            return;
        }
        console.log('VALIDATION PASSED - Special character found');

        // Check if email already exists
        if (validAccount.some(account => account.email === email)) {
            props.onError && props.onError('An account with this email already exists');
            return;
        }

        if (checkPasswordMatch(password, confirmPassword)) {
            validAccount.push({email: email, password: password});
            props.onError && props.onError(''); // Clear any existing errors
            props.onLoginSuccess && props.onLoginSuccess('employee'); // Register as employee by default
        } else {
            props.onError && props.onError('Passwords do not match');
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
        return false;
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