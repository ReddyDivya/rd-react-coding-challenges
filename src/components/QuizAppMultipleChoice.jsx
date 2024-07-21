import { useState } from "react";
import quiz from "../constants/quiz";

const QuizAppMultipleChoice = () => {
  // State for tracking the current score
  const [score, setScore] = useState(0);

  // State for showing the score at the end
  const [showScore, setShowScore] = useState(false);

  // State for tracking the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Function to handle answer option click
  const handleAnswerOptionClick = (isCorrect) => {
    // If the selected answer is correct, increment the score
    if (isCorrect) setScore(score + 1);

    // Move to the next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // If there are no more questions, show the score
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Quiz App</h1>
      {showScore ? (
        // Show the final score
        <div className="text-center text-2xl font-semibold">
          You scored {score} out of {quiz.length}
        </div>
      ) : (
        // Show the current question and answer options
        <div className="text-xl font-semibold">
          <div>
            <span>Question {currentQuestion + 1}</span>/{quiz.length}
          </div>
          <div>
            <h1 className="text-xl font-semibold mt-4 text-blue-600 mb-4">
              {quiz[currentQuestion].questionText}
            </h1>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            {quiz[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                key={index}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizAppMultipleChoice;
