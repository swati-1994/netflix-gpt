import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils.js/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log("message", message);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 m-4 w-full bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="p-2 m-4 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 m-4 w-full bg-gray-900"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button className="p-4 m-6 bg-red-700" onClick={handleButtonClick}>
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to netflix? SignUp Now"
            : "Already registered? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
