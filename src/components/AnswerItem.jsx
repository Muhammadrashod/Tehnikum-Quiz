import React from "react";

export const AnswerItem = ({ id, answerLabel, isChecked, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={isChecked}
        required
        type="radio"
        name="question"
        id={id}
      />
      <label htmlFor={id}>{answerLabel}</label>
    </li>
  );
};
