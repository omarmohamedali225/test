import React, { useRef, useState } from "react";

export default function Register({ signIn }) {
  const [state, setState] = useState(0);
  const [inputs, setInputs] = useState(new Array(4).fill(""));
  const inputRefs = useRef(new Array(4).fill(null));

  const handleChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (index < 4 - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <>
      {state === 0 ? (
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button
              onClick={() => {
                setState((e) => e + 1);
              }}
            >
              Next - &gt;
            </button>
            <p>
              you have an account ? <span onClick={signIn}>Sign In</span>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-container sign-up-container otp">
          <form action="#">
            <h1>OTP Authentication</h1>
            <div>
              {inputs.map((input, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="number"
                  maxLength="1"
                  value={input}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <button>Next - &gt;</button>
          </form>
        </div>
      )}
    </>
  );
}
