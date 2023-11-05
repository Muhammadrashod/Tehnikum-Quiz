import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled, onClick }) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
