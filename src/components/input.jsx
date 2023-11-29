import React from "react";

export const Input = ({
  id,
  inputLabel,
  isRequired,
  inputType,
  inputPlaceholder,
  errorMessage,
  hasError,
  value,
  onChange,
  ...props
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {inputLabel}
      <input
        required={isRequired}
        type={inputType ?? "text"}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
