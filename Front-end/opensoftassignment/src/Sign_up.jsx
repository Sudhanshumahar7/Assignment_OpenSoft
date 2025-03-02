import React, { useState } from 'react';
import Loginbox from './Signin';

const Sign_in = () => {

    const handleClick = (e) => {
      e.preventDefault(); // Corrected method name
      alert("Form is Submitted");
    };

    return ( 
        <div className="loginbox">
        <div className="loginboxform">
        <h2>Welcome to Page</h2>
        <form className="login">
          <div className="userinputs">
            <input  
              className='inputBox'
              type="text"
              Placeholder="Username"
            />
            </div>
            <div className="userinputs">
            <input  
              className='inputBox'
              type="E-mail"
              Placeholder="E-mail"
            />
            </div>
            <div className="userinputs">
            <input  
              className='inputBox'
              type="Password"
              Placeholder="Password"
            />
            </div>
        </form>
        <button className="Sign-in" onClick={handleClick}>Sign in</button>
        <button className="withgoogle">Sign in with Google</button>
        <p>Don't have an account?</p>
        </div>  
      </div>
     );
}
 
export default Sign_in;