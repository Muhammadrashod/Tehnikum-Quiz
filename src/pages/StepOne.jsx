import React, {useState } from "react";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Span } from "../components/span";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { useQuizContext } from "../contexts/QuizContext";

const StepOne = ({ page, question }) => {
  const { answers, updateAnswer } = useQuizContext;

  const answerValue = answers;
  const [answerError, setAnswerError] = useState(false);

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    updateAnswer(page, question, answer);
  };

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
            <Heading text="Занимательный вопрос" headingType="h2" />
            <label className="input-wrapper">
              <Input
                hasError={answerError}
                value={answers[page][question] || ""}
                onChange={handleAnswerChange}
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
