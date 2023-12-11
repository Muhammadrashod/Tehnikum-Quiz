import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerPhoto } from "../components/AnswerPhoto";
import { Heading } from "../components/Heading";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const thirdQuestionSchema = yup.object({
  thirdanswer: yup.string().required("Выберите ответ"),
});

const StepThree = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(thirdQuestionSchema),
    defaultValues: {
      thirdanswer: "",
    },
  });

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

  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/step-four");
    }
  };

  const onFillSubmit = () => {
    const selectedAnswer = getValues("thirdanswer");
    if (selectedAnswer) {
      console.table("Selected Answer:", selectedAnswer);
      goToNextPage();
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Heading text="3. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onFillSubmit)}>
              <ul className="emoji-variants">
                {variants.map((elem) => (
                  <Controller
                    key={elem.id}
                    name="thirdanswer"
                    control={control}
                    render={({ field }) => (
                      <AnswerPhoto
                        src={elem.src}
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
              {errors.thirdanswer && <p>{errors.thirdanswer.message}</p>}
              <Button
                buttonType="submit"
                buttonText="Далее"
                disabled={Object.keys(errors).length > 0}
              />{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
