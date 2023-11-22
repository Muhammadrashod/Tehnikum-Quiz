import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled, onClick, id }) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      onClick={onClick}
      id={id}
    >
      {buttonText}
    </button>
  );
};
