import React, { useState } from "react";
import "./Signup.css";
import Signupinput from "./Signupinput";
import { useNavigate } from 'react-router-dom';

const Signup = ({ switchForm }) => {
 
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be at least 3 characters with no special characters.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be between 8-20 characters with at least 1 letter and 1 number.",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    navigate('/dashboard');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <Signupinput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
    

        <button type="submit">Submit</button>
        <div className="login-link">
          <p>Already have an account? <a href="#" onClick={() => switchForm('login')}>Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
