
function RegisterInputBars({onCreate}) {

    function register(formData){
        // Checks if user has entered passwords that match - if they do they are brought back to the login screen, else they remain on register
        const username = formData.get("username");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        if (password != confirmPassword) {
            console.log("Passwords did not match");
        } else {
            onCreate();
        }
        
    }

    return (
        <>
            <h1>Register</h1>
            <p/>
            <form action={register}>
                <label className="form-label">Username: </label>
                <input 
                    type="email"
                    className="form-control"
                    name="username"
                    placeholder="user@make-it-all.com"
                >
                </input>
                <p/>
                <label className="form-label">Password: </label>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                >  
                </input>
                <p className="form-text"> Your password must be at least 8 characters
                     long, contain letters and numbers and must not contain spaces, special characters or emojis</p>
                <p/>
                <label className="form-label">Confirm Password: </label>
                <input 
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                >  
                </input>
                <p/>
                <button
                    type="submit"
                    className="btn, btn-primary"
                >
                Create Account
                </button>
            </form>
        </>
    )
}

export default RegisterInputBars