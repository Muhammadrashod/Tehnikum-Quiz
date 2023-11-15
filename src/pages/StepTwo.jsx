import React, {useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";
import { Heading } from "../components/heading";
import { useQuizContext } from "../contexts/QuizContext";

const StepTwo = ({ page, question }) => {
  const { answers, updateAnswer } = useQuizContext();
  const [checkedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      answerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      answerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      answerLabel: "Ответ №4",
    },
  ];

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    updateAnswer(page, question, answer);
  };



  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                value={answers[page][question] || ""}
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={handleAnswerChange}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/step-three"
              buttonType="button"
              buttonText="Далее"
              isDisabled={!checkedAnswer}
              id="next-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
