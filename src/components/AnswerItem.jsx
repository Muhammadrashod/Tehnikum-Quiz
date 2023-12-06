import React from "react";
import { AppInput } from "./UI/AppInput";

export const AnswerItem = ({ value, id, answerLabel, isChecked, onChange }) => {
  return (
    <li className="variant-wrapper">
      <AppInput
        value={value}
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
