import React, { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

const Thanks = () => {
  const { userAnswers } = useContext(QuizContext);
  const selectedAnswer = userAnswers; 

  const formattedSelectedAnswer = JSON.stringify(selectedAnswer);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <p>Ваши выбранные ответы: {formattedSelectedAnswer}</p> {}
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
