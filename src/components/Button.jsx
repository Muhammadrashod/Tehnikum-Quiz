import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
    >
      {buttonText}
    </button>
  );
};
