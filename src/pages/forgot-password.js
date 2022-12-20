const ForgotPassword = () => {
    return (
        <>
            <div className="forgotPassword-container">
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

                    <button type={"submit"}>Send verification link</button>

                </form>
            </div>
        </>
    );

}

export default ForgotPassword