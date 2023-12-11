import React from "react";

const AnswerItem = ({ id, answerLabel, field, isChecked, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        type="radio"
        id={id}
        checked={isChecked}
        onChange={() => {
          field.onChange(id);
          onChange(id);
        }}
        required
      />
      <label htmlFor={id}>{answerLabel}</label>
    </li>
  );
};

export default AnswerItem;
