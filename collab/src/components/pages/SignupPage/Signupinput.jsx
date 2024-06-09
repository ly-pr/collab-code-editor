

import React from 'react';

const Signupinput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirm_password" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Signupinput;
