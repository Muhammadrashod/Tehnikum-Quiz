import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerFour } from "../components/AnswerFour";
import { Heading } from "../components/Heading";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const fourthQuestionSchema = yup.object({
  fourthanswer: yup.string().required("Выберите ответ"),
});

const StepFour = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(fourthQuestionSchema),
    defaultValues: {
      fourthanswer: "",
    },
  });

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

  const handleAnswerChange = (answerId) => {
    setCheckedAnswer(answerId);
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/thanks");
    }
  };

  const onFillSubmit = () => {
    const selectedAnswer = getValues("fourthanswer");
    if (selectedAnswer) {
      console.table("Selected Answer:", selectedAnswer);
      goToNextPage();
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <Heading text="4. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onFillSubmit)}>
              <ul className="level-variants">
                {variants.map((elem) => (
                  <Controller
                    key={elem.id}
                    name="fourthanswer"
                    control={control}
                    render={({ field }) => (
                      <AnswerFour
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
              {errors.fourthanswer && <p>{errors.fourthanswer.message}</p>}
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

export default StepFour;
