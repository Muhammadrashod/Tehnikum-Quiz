import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState({});

  const saveUserAnswer = (questionId, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  return (
    <QuizContext.Provider value={{ userAnswers, saveUserAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};