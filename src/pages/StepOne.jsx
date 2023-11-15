import React, { useContext, useState } from "react";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Span } from "../components/span";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { QuizContext } from "../contexts/QuizContext";

const StepOne = () => {
  const { userAnswers, saveUserAnswer } = useContext(QuizContext);
  const questionId = "question1"; 

  const answerValue = userAnswers[questionId] || "";
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
          <ProgressBar currentStep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <label className="input-wrapper">
              <Input
                hasError={answerError}
                value={answerValue}
                  onChange={(value) => saveUserAnswer(questionId, value)}
                id="username"
                isRequired
                inputPlaceholder="Ваш ответ"
                errorMessage="Напишите свой ответ"
              />
              <Span
                id="error-message"
                text="Введите номер в правильном формате, например"
              />
            </label>
            <LinkButton
              path="/step-two"
              onClick={clickHandler}
              buttonType="button"
              buttonText="Далее"
              isDisabled={!answerValue}
              id="next-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;