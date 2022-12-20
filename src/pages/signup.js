import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className="signup-container">
                <form action="React-01/signin-signup/src/pages/signup#" id={"login-form"}>

                    <div className="form-group">
                        <label htmlFor="fName" className={"label"}>Full Name</label>
                        <input
                            id={"fName"}
                            className={"input"}
                            type="text"
                            placeholder={"Enter your Full name"}
                            required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="number" className={"label"}>Number</label>
                        <input
                            id={"number"}
                            className={"input"}
                            type="tel"
                            pattern="[0-9]{10}"
                            minLength={10}
                            maxLength={10}
                            placeholder={"Enter your Number"}
                            required/>
                    </div>

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
                        <label htmlFor="address" className={"label"}>Address</label>
                        <input
                            id={"address"}
                            className={"input"}
                            type="text"
                            placeholder={"House no. / area / city / state"}
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

                    <button type={"submit"}>Sign up</button>

                    <div className="signin">
                        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                    </div>
                </form>
            </div>
        </>
    );

}

export default Signup