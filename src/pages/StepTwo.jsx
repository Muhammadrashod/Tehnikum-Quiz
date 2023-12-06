import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";
import { Heading } from "../components/Heading";
import { useForm } from "react-hook-form";

const StepTwo = () => {
  const { register, handleSubmit, errors } = useForm();
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Heading text="2. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul className="variants">
                {variants.map((elem) => (
                  <AnswerItem
                    key={elem.id}
                    id={elem.id}
                    answerLabel={elem.answerLabel}
                    onChange={() => handleAnswerChange(elem.id)}
                    isChecked={elem.id === checkedAnswer}
                  />
                ))}
              </ul>
              {errors.checkedAnswer && <p>Выберите ответ</p>}
              <LinkButton
                path="/step-three"
                buttonType="submit"
                buttonText="Далее"
                isDisabled={!checkedAnswer}
                id="next-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
