import React from "react";

export const AnswerPhoto = ({
  id,
  answerLabel,
  field,
  isChecked,
  onChange,
  src,
  alt,
}) => {
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
      <label htmlFor={id}>
        {answerLabel}
        <img src={src} alt={alt} />
      </label>
    </li>
  );
};
