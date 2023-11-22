import React from "react";

export const AppInput = ({
  id,
  inputLabel,
  inputType,
  inputPlaceholder,
  errorMessage,
  hasError,
  ...props
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {inputLabel}
      <input
        type={inputType ?? "text"}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        {...props}
      />
      {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
