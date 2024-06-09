import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = ({ switchForm }) => {
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be between 8-20 characters with at least 1 letter and 1 number.",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,20}$",
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
        <h1>Login</h1>
        {inputs.map((input) => (
          <div className="input-wrapper" key={input.id}>
            <label>{input.label}</label>
            <input
              {...input}
              value={values[input.name]}
              onChange={onChange}
              required={input.required}
              pattern={input.pattern}
            />
            <span>{input.errorMessage}</span>
          </div>
        ))}
      
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="#" onClick={() => switchForm('signup')}>Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
