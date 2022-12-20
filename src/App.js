import './App.css';
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import {Route, Routes} from "react-router-dom";
import ForgotPassword from "./pages/forgot-password";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </>
    );
}

export default App;
