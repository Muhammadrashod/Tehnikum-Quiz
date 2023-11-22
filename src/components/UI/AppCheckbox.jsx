import React from "react";

export const AppCheckbox = ({ checkboxLabel, ...props }) => {
  return (
    <label className="AppCheckbox">
      <input type="checkbox" {...props}/>
      <span>{checkboxLabel}</span>
    </label>
  );
};
