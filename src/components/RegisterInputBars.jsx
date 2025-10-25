
function RegisterInputBars({onCreate}) {
    return (
        <>
            <h1>Register</h1>
            <p/>
            <form>
                <label className="form-label">Username: </label>
                <input 
                    type="email"
                    className="form-control"
                    placeholder="user@make-it-all.com"
                >
                </input>
                <p/>
                <label className="form-label">Password: </label>
                <input 
                    type="password"
                    className="form-control"
                >  
                </input>
                <p className="form-text"> Your password must be at least 8 characters
                     long, contain letters and numbers and must not contain spaces, special characters or emojis</p>
                <p/>
                <label className="form-label">Confirm Password: </label>
                <input 
                    type="password"
                    className="form-control"
                >  
                </input>
                <p/>
                <button
                    type="submit"
                    className="btn, btn-primary"
                    onClick={onCreate}
                >
                Create Account
                </button>
            </form>
        </>
    )
}

export default RegisterInputBars