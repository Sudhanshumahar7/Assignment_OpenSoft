import React, { useState } from 'react';
import Loginbox from './Sign_up';

const Signin = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    alert("Form is Submitted");
    setUsername('');
    setPassword('');
    setEmail('');
  };
    return ( 
        <div className="loginbox">
          <div className="loginboxform">
          <h2 className='Wtp'>Welcome to Page</h2>
          <form className="login">
            <div className="userinputs">
              <input
                type="text"
                Placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="userinputs">
              <input
                type="E-mail"
                Placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="userinputs">
               <input
                type="password"
                Placeholder="Password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </form>
          <button className="Sign-in" onClick={handleClick}>Sign in</button>
          <p>Already have an account! </p>
          </div>
        </div>
     );
}
 
export default Signin;