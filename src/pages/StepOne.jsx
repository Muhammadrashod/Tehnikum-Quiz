import React, { useState } from "react";
import { Heading } from "../components/heading";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import { Span } from "../components/span";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false);


  const clickHandler = () => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <Span
                text="Скидка за прохождение опроса:"
                className="indicator__description"
              />
              <Span text="15%" className="indicator__value" />
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading text="Занимательный вопрос" headingType="h2" />
            <label className="input-wrapper">
              <Input
                hasError={answerError}
                value={answerValue}
                onChange={setAnswerValue}
                id="username"
                isRequired
                inputPlaceholder="Ваш ответ"
                errorMessage="Напишите свой ответ"
              />
              <Span
                id="error-message"
                text="Введите номер в правильном формате например"
              />
            </label>
            <Button
              onclick={clickHandler}
              buttonType="button"
              buttonText="Далее"
              isDisabled
              id="next-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
