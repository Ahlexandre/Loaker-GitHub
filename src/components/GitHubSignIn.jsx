import React from "react";
import "./GitHubSignIn.css"; // Nous créerons ce fichier ensuite

const GitHubSignIn = () => {
  return (
    <div className="github-signin-container">
      <h1>Sign in to GitHub</h1>
      
      <div className="main-form-container">
        <form className="github-form">
          <div className="form-group">
            <label htmlFor="username">Username or email address</label>
            <input
              type="text"
              id="username"
              className="github-input"
            />
          </div>
          
          <div className="form-group">
            <div className="password-label-container">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <input
              type="password"
              id="password"
              className="github-input"
            />
          </div>
          
          <button type="submit" className="signin-button">
            Sign in
          </button>
        </form>
        
        <div className="footer-links">
          <p>New to GitHub? <a href="#">Create an account</a></p>
          <div className="legal-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Docs</a>
            <a href="#">Contact GitHub Support</a>
            <a href="#">Manage cookies</a>
            <a href="#">Do not share my personal information</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubSignIn;