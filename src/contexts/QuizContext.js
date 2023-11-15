import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const updateAnswer = (page, question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [page]: {
        ...prevAnswers[page],
        [question]: answer
      }
    }));
  };

  return (
    <QuizContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
