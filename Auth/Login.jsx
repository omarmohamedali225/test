import React from "react";

export default function Login({ signUp }) {
  return (
    <>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
          <p>
            you don`t have an account ? <span onClick={signUp}>Sign Up</span>
          </p>
        </form>
      </div>
    </>
  );
}
