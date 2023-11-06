import React, { useState } from "react";
import { Button } from "../components/Button";

import { Heading } from "../components/heading";
import { Input } from "../components/input";
const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            headingType="h1"
            text="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={setNameValue}
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              hasError={phoneError}
              value={phoneValue}
              onChange={setPhoneValue}
              id="phone"
              isRequired
              inputLabel="Ваше номер"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате"
            />
            <label className="input-wrapper" htmlFor="username"></label>
            <Button
              onClick={clickHandler}
              buttonType="button"
              buttonText="Далее"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
