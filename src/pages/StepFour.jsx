import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerFour } from "../components/AnswerFour";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../contexts/QuizContext";

const StepFour = () => {
  const { userAnswers, saveUserAnswer } = useContext(QuizContext);
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLabel: "1",
    },
    {
      id: "variant-2",
      answerLabel: "2",
    },
    {
      id: "variant-3",
      answerLabel: "3",
    },
    {
      id: "variant-4",
      answerLabel: "4",
    },
    {
      id: "variant-5",
      answerLabel: "5",
    },
  ];

  useEffect(() => {
    console.log("Ваш вариант", userAnswers);
  } ,[userAnswers]);

  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
    saveUserAnswer("question4", answerId)
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerFour
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => handleAnswerChange(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/thanks"
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

export default StepFour;
