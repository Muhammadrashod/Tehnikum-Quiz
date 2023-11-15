import React from "react";
import { useQuizContext } from "../contexts/QuizContext";

const Thanks = () => {
  const { userAnswers } = useQuizContext;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <p>Ваши выбранные ответы:</p>
          <ul>
            {Object.keys(userAnswers).map((questionId) => (
              <li key={questionId}>
                Вопрос {questionId}: {userAnswers[questionId]}
              </li>
            ))}
          </ul>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
