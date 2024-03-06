import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { FaClock } from "react-icons/fa";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(3000); // 5 minutes for the quiz
  const [questions] = useState([
    {
      questionText: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
        questionText: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Mark Twain"],
        correctAnswer: "Harper Lee"
      },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      questionText: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Mark Twain"],
      correctAnswer: "Harper Lee"
    }
  ]);

  const [user] = useState({ name: "John Doe" }); // Dummy user object for testing
  const navigate = useNavigate();

  const hasNextQuestion = currentQuestion < questions.length - 1 && questions.length > 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Time's up, submit the quiz automatically
        handleSubmit();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      alert('Please select an option.');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(((currentQuestion - 1) / questions.length) * 100);
    }
  };

  const handleSubmit = () => {  
    // navigate('/profile');
    toast.success('Quiz Submitted Successfully');
  }

  return (
    <>
    <div className='p-4 ml-32'>
        <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}</h1>
    </div>
      <div className="max-w-2xl mx-auto p-4 mt-9">
        <div className="mb-6 text-center">
          
          <br/><br/>
          <div className='flex flex-wrap justify-between'>
          
          <div className="text-lg">Question {currentQuestion + 1} of {questions.length}</div>
          <div className="text-lg"> 
          <div className='flex '>
          <FaClock className='mt-1 mr-2'/> 
          Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toLocaleString('en-US', {minimumIntegerDigits: 2})}</div>
          </div>
          </div>
        </div>
        <div className="relative mb-4 h-4 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            {questions[currentQuestion]?.questionText}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion]?.options.map((option, index) => (
            <div
              key={index}
              className={`bg-white p-4 border rounded cursor-pointer ${selectedAnswer === option ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {currentQuestion > 0 && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handlePreviousQuestion}
            >
              Back
            </button>
          )}
          {hasNextQuestion && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          {!hasNextQuestion && (
            <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>Finish</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
