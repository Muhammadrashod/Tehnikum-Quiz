import React, { useContext } from "react";
import { Heading } from "../components/Heading";
import { AppInput } from "../components/UI/AppInput";
import { ThemeContext, themes } from "../contexts/themeContext";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const regexUzbNumber = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const WelcomeFormSchema = yup.object({
  usersname: yup.string().required("Обьязательное поле"),
  usersphone: yup
    .string()
    .matches(regexUzbNumber, "Введите узбекский номер телефона!")
    .required("Обьязательное поле"),
});

const Welcome = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(WelcomeFormSchema),
    defaultValues: {
      usersname: "",
      usersphone: "",
    },
  });

  const navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/step-one");
    }
  };

  const onFillSubmit = (data) => {
    console.table(data);
    goToNextPage();
  };

  return (
    <div className={`container ${theme === themes.light && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button type="button" onClick={toggleTheme}>
            Переключи тему
          </button>
          <Heading
            headingType="h1"
            text="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form" onSubmit={handleSubmit(onFillSubmit)}>
            <Controller
              name="usersname"
              control={control}
              render={({ field }) => (
                <AppInput
                  inputLabel="Ваше имя"
                  inputPlaceholder="Ваш ответ"
                  inputType="text"
                  errorMessage={errors.usersname?.message}
                  hasError={errors.usersname ? true : false}
                  {...field}
                />
              )}
            />
            <Controller
              name="usersphone"
              control={control}
              render={({ field }) => (
                <AppInput
                  inputLabel="Ваше номер"
                  inputPlaceholder="Ваш ответ"
                  inputType="tel"
                  errorMessage={errors.usersphone?.message}
                  hasError={errors.usersphone ? true : false}
                  {...field}
                />
              )}
            />
            <label className="input-wrapper" htmlFor="username"></label>
            <Button buttonType="submit" buttonText="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
