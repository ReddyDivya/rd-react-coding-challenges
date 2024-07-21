// Array containing the quiz questions and their respective answer options
const quiz = [
  {
    // The question text to be displayed
    questionText: "What is the capital of France?",
    // Array of possible answer options for the question
    answerOptions: [
      // Each answer option contains the answer text and a boolean indicating if it's the correct answer
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true }, // This is the correct answer
      { answerText: 'Dublin', isCorrect: false }
    ]
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true }, // This is the correct answer
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false }
    ]
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true }, // This is the correct answer
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false }
    ]
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true } // This is the correct answer
    ]
  }
]; 

// Exporting the quiz array to be used in other parts of the application
export default quiz;
