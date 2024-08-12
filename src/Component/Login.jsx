import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(location.state?.isSignUp || false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const toggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  useEffect(() => {
    setIsSignUp(location.state?.isSignUp || false);
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignUp 
      ? 'http://localhost:8080/api/flavors/create' 
      : 'http://localhost:8080/api/flavors/login';
    
    const payload = isSignUp 
      ? { username, emailId: email, password } 
      : { emailId: email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          alert(data.message || (isSignUp ? 'Sign Up Successful' : 'Login Successful'));
          if (!isSignUp) {
            navigate('/'); // Navigate to the landing page after successful login
          }
        } else {
          alert('Error: ' + (data.message || (isSignUp ? 'Sign Up Failed' : 'Login Failed')));
        }
      } else {
        const text = await response.text();
        if (response.ok) {
          alert(text);
          if (!isSignUp) {
            navigate('/'); // Navigate to the landing page after successful login
          }
        } else {
          alert('Unexpected response from the server: ' + text);
        }
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label>
          <span>Email</span>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          <span>Password</span>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button 
          type="button" 
          className="submit" 
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <button 
          type="button" 
          className="fb-btn"
        >
          Connect with <span>facebook</span>
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover a great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already have an account, just sign in. We've missed you!</p>
          </div>
          <div className="img__btn" onClick={toggleForm}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Time to feel like home,</h2>
          <label>
            <span>Name</span>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </label>
          <label>
            <span>Email</span>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <label>
            <span>Password</span>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
          <button 
            type="button" 
            className="submit" 
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <button 
            type="button" 
            className="fb-btn"
          >
            Join with <span>facebook</span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
