import React, { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

const Thanks = () => {
  const { userAnswers, quizCompleted } = useContext(QuizContext);
  const selectedAnswers = userAnswers;

  const formattedSelectedAnswers = JSON.stringify(selectedAnswers, null, 2);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          {quizCompleted && (
            <>
              <p>Ваши выбранные ответы:</p>
              <pre>{formattedSelectedAnswers}</pre>
              <button type="button" id="get-link">
                Получить ссылку
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
