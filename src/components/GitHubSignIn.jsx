import React from "react";
import "../styles/GitHubSignIn.css";

const GitHubSignIn = () => {
  return (
    <div className="github-auth-container">
        <div className="head">
          <div className="logo-container">
            <a href = "https://github.com/"><img src="/images/icon.png" alt="GitHub Logo" className="github-logo" /></a>
          </div>
        </div>

      <h1 className="auth-title">Sign in to GitHub</h1>
      
      <div className="form-container">
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
      </div>

      <div className="auth-options">
        <button className="passkey-button">Sign in with a passkey</button>
        <p className="create-account">New to GitHub? <a href="#">Create an account</a></p>
      </div>

      <div className="footer-links">
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
  );
};

export default GitHubSignIn;