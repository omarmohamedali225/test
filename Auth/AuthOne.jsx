import { useState } from "react";
import "./Auth.scss";
import Login from "./Login";
import Register from "./Register";
import OverLay from "./OverLay";

export default function AuthOne() {
  const [showRight, setShowRight] = useState(true);

  const signIn = () => {
    setShowRight(false);
  };
  const signUp = () => {
    setShowRight(true);
  };

  return (
    <>
      <div
        className={`auth ${showRight ? "right-panel-active" : null}`}
        id="container"
      >
        <Register signIn={signIn} />
        <Login signUp={signUp} />
        <OverLay signIn={signIn} signUp={signUp} />
      </div>
    </>
  );
}
