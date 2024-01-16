"use client";

import { useState } from "react";
import QuizTemplate from "../(components)/QuizTemplate";
import { quiz } from "../quiz";

const TherapistPage = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  const handleAnswer = (questionNumber, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedOption,
    }));
  };

  const nextquestionNumber = () => {
    setQuestionNumber((prevquestionNumber) => prevquestionNumber + 1);
  };

  const renderQuestions = () => {
    switch (questionNumber) {
      case 1:
        return (
          <QuizTemplate
            question={quiz[questionNumber - 1].question}
            options={quiz[questionNumber - 1].options}
            questionNumber={questionNumber}
            quiz={quiz}
            answers={answers}
          />
        );
      case 2:
        return (
          <QuizTemplate
            question={quiz[questionNumber - 1].question}
            options={quiz[questionNumber - 1].options}
            questionNumber={questionNumber}
            quiz={quiz}
          />
        );
      case 3:
        return (
          <QuizTemplate
            question={quiz[questionNumber - 1].question}
            options={quiz[questionNumber - 1].options}
            questionNumber={questionNumber}
            quiz={quiz}
          />
        );
      default:
        break;
    }
  };
  return (
    <main className=" min-h-screen p-4">
      {
        <QuizTemplate
          question={quiz[questionNumber - 1].question}
          options={quiz[questionNumber - 1].options}
          questionNumber={questionNumber}
          quiz={quiz}
          nextQuestionNumber={nextquestionNumber}
          handleAnswer={handleAnswer}
        />
      }
    </main>
  );
};

export default TherapistPage;
