import React, { useEffect, useState } from "react";
import { Progressbar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

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

  useEffect(() => {
   console.log('Ваш вариант', checkedAnswer);
  }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <Progressbar />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
