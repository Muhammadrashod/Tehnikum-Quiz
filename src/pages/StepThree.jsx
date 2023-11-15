import React, { useState, useContext,useEffect } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerPhoto } from "../components/AnswerPhoto";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../contexts/QuizContext";

const StepThree = () => {
  const { userAnswers, saveUserAnswer } = useContext(QuizContext);
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLabel: "Ваш Ответ 1",
      src: "./img/laugh.png",
    },
    {
      id: "variant-2",
      answerLabel: "Ваш Ответ 2",
      src: "./img/hearts.png",
    },
    {
      id: "variant-3",
      answerLabel: "Ваш Ответ 3",
      src: "./img/smirk.png",
    },
    {
      id: "variant-4",
      answerLabel: "Ваш Ответ 4",
      src: "./img/fright.png",
    },
  ];

  useEffect(() => {
    console.log("Ваш вариант", userAnswers);
  }, [userAnswers]);


  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
    saveUserAnswer("question3", answerId);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerPhoto
                  src={elem.src}
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => handleAnswerChange(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/step-four"
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

export default StepThree;