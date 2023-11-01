import React from "react";
import { Heading } from "../components/heading";
import { Button } from "../components/Button";
import { Input } from "../components/input";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form className="welcome__form">
            <Input
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              id="phone"
              isRequired
              inputLabel="Ваш номер"
              inputPlaceholder="+998 9- --- -- --"
              errorMessage="Введите номер в правильном формате"
            />
            <Button buttonType="button" buttonText="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
