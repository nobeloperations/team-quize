import React, { useState } from 'react';
import { teams, questions } from '../data/quizData';
import '../styles/PersonalityQuiz.css';

const PersonalityQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [result, setResult] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateTeams();
    }
  };

  const calculateTeams = () => {
    const scores = new Array(teams.length).fill(0);
    
    answers.forEach((answer, index) => {
      const question = questions[index];
      question.options.forEach((option, optionIndex) => {
        if (option.text === answer) {
          option.teamScores.forEach(score => {
            scores[score.teamIndex] += score.value;
          });
        }
      });
    });

    // Get top 2 team matches
    const topTeams = scores
      .map((score, index) => ({ score, index }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map(item => teams[item.index]);

    setSelectedTeams(topTeams);
    setResult(true);
  };

  if (result) {
    return (
      <div className="quiz-container result">
        <h2>Your Ideal Team Matches</h2>
        {selectedTeams.map((team, index) => (
          <div key={index} className="team-result">
            <h3>{index + 1}. {team.name}</h3>
            <p className="team-description">{team.description}</p>
            <div className="team-details">
              <h4>Key Skills Required:</h4>
              <ul>
                {team.requiredSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <h4>Main Responsibilities:</h4>
              <ul>
                {team.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className="team-contact">
                <p>Contact: {team.contact}</p>
              </div>
            </div>
          </div>
        ))}
        <button 
          onClick={() => {
            setResult(null);
            setCurrentStep(0);
            setAnswers(new Array(questions.length).fill(null));
            setSelectedTeams([]);
          }} 
          className="reset-button"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="quiz-container">
      <h2>Find Your Perfect Nobel Team</h2>
      <div className="progress-bar">
        {questions.map((_, idx) => (
          <div 
            key={idx} 
            className={`progress-dot ${idx <= currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="question-section">
        <h3>{currentQuestion.question}</h3>
        <div className="options-container">
          {currentQuestion.options.map((option, idx) => (
            <button 
              key={idx} 
              onClick={() => handleAnswer(option.text)} 
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <div className="step-counter">
        Question {currentStep + 1} of {questions.length}
      </div>
    </div>
  );
};

export default PersonalityQuiz;