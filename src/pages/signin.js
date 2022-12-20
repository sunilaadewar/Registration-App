import {Link} from "react-router-dom";

const Signin = () => {
    return (<>
        <div className="signin-container">
            <form action="#" id={"login-form"}>

                <div className="form-group">
                    <label htmlFor="email" className={"label"}>Email</label>
                    <input
                        id={"email"}
                        className={"input"}
                        type="email"
                        placeholder={"Enter your Email"}
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className={"label"}>Password</label>
                    <input
                        id={"password"}
                        className={"input"}
                        type="email"
                        placeholder={"Enter your password"}
                        required/>
                </div>

                <div className="forgot-password">
                    <Link to="/forgot-password">Forgot password</Link>
                </div>

                <button type={"submit"}>Sign in</button>

                <div className="signup">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    </>);

}

export default Signin