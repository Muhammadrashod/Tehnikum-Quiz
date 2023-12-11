import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import AnswerItem from "../components/AnswerItem";
import { Heading } from "../components/Heading";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const secondQuestionSchema = yup.object({
  secondanswer: yup.string().required("Выберите ответ"),
});

const StepTwo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
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

  const onFillSubmit = () => {
    const selectedAnswer = getValues("secondanswer");
    if (selectedAnswer) {
      console.table("Selected Answer:", selectedAnswer);
      goToNextPage();
    }
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
                    key={elem.id}
                    name="secondanswer"
                    control={control}
                    render={({ field }) => (
                      <AnswerItem
                        key={elem.id}
                        id={elem.id}
                        answerLabel={elem.answerLabel}
                        onChange={() => handleAnswerChange(elem.id)}
                        isChecked={elem.id === checkedAnswer}
                        field={field}
                      />
                    )}
                  />
                ))}
              </ul>
              {errors.secondanswer && <p>{errors.secondanswer.message}</p>}
              <Button
                buttonType="submit"
                buttonText="Далее"
                disabled={Object.keys(errors).length > 0}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
