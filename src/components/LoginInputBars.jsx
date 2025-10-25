

function LoginInputBars({onRegister}) {

    function login(formData) {
        const username = formData.get("username");
        const password =formData.get("password");
        if (username == "team23@make-it-all.com" && password == "test1234") {
            console.log("Logged in");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <p/>
            <form action={login}>
                <label className="form-label">Username: </label>
                <input 
                    type="email"
                    className="form-control"
                    name = "username"
                    placeholder="user@make-it-all.com"
                >
                </input>
                <p/>
                <label className="form-label">Password: </label>
                <input 
                    type="password"
                    className="form-control"
                    name = "password"
                >  
                </input>
                <p/>
                <button
                    type="submit"
                    className="btn, btn-primary"
                >
                Log in
                </button>
            </form>
            <p/>
            <a 
                className="btn btn-link" 
                href="#"
                role="button"
                onClick={onRegister}
            >
            Register
            </a>
        </div>
    )
}

export default LoginInputBars