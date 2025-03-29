import React, { useState } from "react";

const Quiz = () => {
  // State to track the current question index
  const [currentQtnIndex, setCurrentQtnIndex] = useState(0);
  // State to track the score
  const [score, setScore] = useState(0);
  // State to track the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Quiz questions array
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Tolstoy", "Orwell"],
      correctAnswer: "Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "H2O2"],
      correctAnswer: "H2O",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "India"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
      correctAnswer: "Pound Sterling",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: "100°C",
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Tiger", "Elephant", "Lion", "Gorilla"],
      correctAnswer: "Lion",
    },
  ];

  // Function to handle answer selection
  const handleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer); // Update selected answer state
  };

  // Function to proceed to the next question
  const proceedToNextQuestion = () => {
    // Check if the selected answer is correct before proceeding
    if (selectedAnswer === questions[currentQtnIndex].correctAnswer) {
      setScore(score + 1); // Increase score if answer is correct
    }

    setSelectedAnswer(""); // Reset selected answer for next question
    setCurrentQtnIndex(currentQtnIndex + 1); // Move to the next question
  };

  return (
    <div className="quiz-container">
      {/* Display quiz question if there are remaining questions */}
      {currentQtnIndex < questions.length ? (
        <>
          <h3>Question {currentQtnIndex + 1}</h3>
          <p>Score: {score}</p>
          <p>{questions[currentQtnIndex].question}</p>
          <ul>
            {/* Display answer options */}
            {questions[currentQtnIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleSelectedAnswer(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={proceedToNextQuestion} disabled={!selectedAnswer}>
            Next
          </button>
        </>
      ) : (
        // Display quiz result once all questions are answered
        <>
          <p>Quiz submitted!</p>
          <p>
            Final Score: {score} / {questions.length}
          </p>
        </>
      )}
    </div>
  );
};

export default Quiz;
