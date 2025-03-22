import PropTypes from 'prop-types'; 
import { assets } from '../../assets/assets';
import { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currState === "Login") {
            console.log("Logging in...");
            alert("Logged in successfully!"); 
        } else {
            console.log("Signing up...");
            alert("Account created successfully!"); 
        }

        setShowLogin(false); 
    };

    return (
        <div className='login-popup' onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}>
            <form className='login-popup-container' onSubmit={handleSubmit}>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close" 
                        style={{ cursor: "pointer" }} 
                    />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" placeholder="Your name" required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

                <div className="login-popup-conditions">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {currState === "Login"
                    ? <p>Create a New account? <span onClick={() => setCurrState("Sign Up")} style={{ cursor: "pointer", color: "blue" }}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")} style={{ cursor: "pointer", color: "blue" }}>Login here</span></p>}
            </form>
        </div>
    );
};

// ✅ Add prop types validation
LoginPopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired, 
};

export default LoginPopup;
