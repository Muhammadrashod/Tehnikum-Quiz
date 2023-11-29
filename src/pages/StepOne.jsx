import React from "react";
import { Heading } from "../components/Heading";
import { AppInput } from "../components/UI/AppInput";
import { Span } from "../components/span";
import { ProgressBar } from "../components/ProgressBar";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const firstQuestionSchema = yup.object({
  firstanswer: yup.string().required("Обьязательное поле"),
});

const StepOne = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firstQuestionSchema),
    defaultValues: {
      firstanswer: "",
    },
  });

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/step-two");
    }
  };

  const onFillSubmit = (data) => {
    console.table(data);
    goToNextPage()
  };


  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onFillSubmit)}>
              <label className="input-wrapper">
                <Controller
                  name="firstanswer"
                  control={control}
                  render={({ field }) => (
                    <AppInput
                      inputLabel="1. Занимательный вопрос"
                      inputPlaceholder="Ваш ответ"
                      inputType="text"
                      errorMessage={errors.firstanswer?.message}
                      hasError={errors.firstanswer ? true : false}
                      {...field}
                    />
                  )}
                />

                <Span
                  id="error-message"
                  text="Введите номер в правильном формате, например"
                />
              </label>
              <Button buttonType="submit" buttonText="Далее" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
