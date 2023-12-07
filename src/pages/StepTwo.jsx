import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Heading } from "../components/Heading";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const secondQuestionSchema = yup.object({
  firstanswer: yup.string().required("Обьязательное поле"),
});

const StepTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(secondQuestionSchema),
    defaultValues: {
      secondanswer: "",
    },
  });
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

  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/step-three");
    }
  };

  const onFillSubmit = (data) => {
    console.table(data);
    goToNextPage();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Heading text="2. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onFillSubmit)}>
              <ul className="variants">
                {variants.map((elem) => (
                  <Controller
                    name="secondanswer"
                    control={register}
                    render={({ field }) => (
                      <AnswerItem
                        key={elem.id}
                        id={elem.id}
                        answerLabel={elem.answerLabel}
                        onChange={() => handleAnswerChange(elem.id)}
                        isChecked={elem.id === checkedAnswer}
                        {...field}
                      />
                    )}
                  />
                ))}
              </ul>
              {errors.checkedAnswer && <p>Выберите ответ</p>}
              <Button buttonType="submit" buttonText="Далее" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
