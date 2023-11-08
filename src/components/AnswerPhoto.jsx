import React from "react";

export const AnswerPhoto = ({ id, answerLabel, isChecked, onChange, src, alt }) => {
  
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
      <label htmlFor={id}>{answerLabel}
       <img src={src} alt={alt} />
      </label>
    </li>
  );
};
