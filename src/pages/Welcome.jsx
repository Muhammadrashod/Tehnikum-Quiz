import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { ThemeContext, themes } from "../contexts/themeContext";
import { useQuizContext } from "../contexts/QuizContext";

const Welcome = ({ page, question }) => {
    const { answers, updateAnswer } = useQuizContext();
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const goToNextPage = () => {
      if (nameValue && phoneValue) {
        navigate("/step-one");
      }
    };

    const handleAnswerChange = (event) => {
      const answer = event.target.value;
      updateAnswer(page, question, answer);
    };

    
    const validateName = () => {
      if (!nameValue) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    };

    const validatePhone = () => {
      if (!phoneValue) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    };
    
    const handleNameInput = (value) => {
      setNameValue(value);
      validateName();
    };
    const handlePhoneInput = (value) => {
      setPhoneValue(value);
      validatePhone();
    };
    
    useEffect(() => {
      console.log("ваши данные",handleNameInput,handlePhoneInput, );
    });
    
    const clickHandler = () => {
      validateName();
      validatePhone();
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
            <form className="welcome__form">
              <Input
                hasError={nameError}
                value={answers[page][question] || ""}
                onChange={handleAnswerChange}
                id="username"
                isRequired
                inputLabel="Ваше имя"
                inputPlaceholder="Ваш ответ"
                errorMessage="Введите ваше имя"
              />
              <Input
                hasError={phoneError}
                value={answers[page][question] || ""}
                onChange={handleAnswerChange}
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
