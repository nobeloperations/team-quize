import React, { useState, useEffect } from 'react';
import { teams, questions } from '../data/quizData';
import '../styles/PersonalityQuiz.css';
import { motion, AnimatePresence } from 'framer-motion';

const MatchBreakdown = ({ team }) => (
  <div className="match-breakdown">
    <h4>Match Breakdown</h4>
    {Object.entries(team.categoryScores).map(([category, score]) => (
      <div key={category} className="breakdown-item">
        <span className="breakdown-label">{category}</span>
        <div className="breakdown-bar">
          <div 
            className="breakdown-fill"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

const LoadingSpinner = () => (
  <div className="loading-spinner" role="progressbar" aria-label="Loading results">
    <div className="spinner"></div>
  </div>
);

const PersonalityQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [result, setResult] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [previousResults, setPreviousResults] = useState([]);
  const [showPreviousResults, setShowPreviousResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load previous results from localStorage
    const saved = localStorage.getItem('nobelTeamResults');
    if (saved) {
      setPreviousResults(JSON.parse(saved));
    }
  }, []);

  const handleAnswer = async (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      // Simulate calculation time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      calculateTeams();
      setIsLoading(false);
    }
  };

  const calculateTeams = () => {
    const scores = new Array(teams.length).fill(0);
    const categoryScores = teams.map(() => ({
      'Skills Match': 0,
      'Work Style': 0,
      'Team Goals': 0,
      'Technical Fit': 0
    }));
    
    answers.forEach((answer, index) => {
      const question = questions[index];
      question.options.forEach((option) => {
        if (option.text === answer) {
          option.teamScores.forEach(score => {
            scores[score.teamIndex] += score.value;
            
            // Update category scores based on question type
            if (index < 2) {
              categoryScores[score.teamIndex]['Skills Match'] += score.value;
            } else if (index < 4) {
              categoryScores[score.teamIndex]['Work Style'] += score.value;
            } else if (index < 6) {
              categoryScores[score.teamIndex]['Team Goals'] += score.value;
            } else {
              categoryScores[score.teamIndex]['Technical Fit'] += score.value;
            }
          });
        }
      });
    });

    // Calculate percentages for category scores
    categoryScores.forEach(scores => {
      Object.keys(scores).forEach(key => {
        scores[key] = Math.round((scores[key] / 6) * 100);
      });
    });

    const topTeams = scores
      .map((score, index) => ({
        ...teams[index],
        matchScore: Math.round((score / (questions.length * 3)) * 100),
        categoryScores: categoryScores[index]
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 2);

    setSelectedTeams(topTeams);
    setResult(true);
    setShowContactForm(true);
  };

  const handleSaveResults = () => {
    if (!email || !userName) return;

    const newResult = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      userName,
      email,
      teams: selectedTeams,
      answers
    };

    const updatedResults = [...previousResults, newResult];
    localStorage.setItem('nobelTeamResults', JSON.stringify(updatedResults));
    setPreviousResults(updatedResults);
    setShowContactForm(false);
  };

  const handleShare = async () => {
    const shareText = `I matched with ${selectedTeams.map(team => 
      `${team.name} (${team.matchScore}% match)`).join(' and ')} at Nobel Teams!`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Nobel Teams Match',
          text: shareText,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('Results copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const renderPreviousResults = () => {
    if (!previousResults.length) return null;

    return (
      <div className="previous-results">
        <h4>Previous Results</h4>
        {previousResults.map((result) => (
          <div key={result.id} className="result-item">
            <div className="result-header">
              <span>{result.userName}</span>
              <span>{result.date}</span>
            </div>
            <div className="result-teams">
              {result.teams.map((team, idx) => (
                <div key={idx} className="result-team">
                  <span>{team.name}</span>
                  <span className="result-team-score">{team.matchScore}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="quiz-container loading">
        <LoadingSpinner />
        <p>Analyzing your responses...</p>
      </div>
    );
  }

  if (result) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="quiz-container result"
        role="region"
        aria-label="Quiz results"
      >
        <h2>Your Ideal Team Matches</h2>
        {selectedTeams.map((team, index) => (
          <motion.div 
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="team-result"
          >
            <div className="team-header">
              <h3>{index + 1}. {team.name}</h3>
              <div className="match-score">
                <div className="score-circle">{team.matchScore}%</div>
                <span>Match</span>
              </div>
            </div>
            <p className="team-description">{team.description}</p>
            
            <div className="match-details">
              {Object.entries(team.categoryScores).map(([category, score]) => (
                <div key={category} className="match-category">
                  <h5>{category}</h5>
                  <div className="match-bar">
                    <div 
                      className="match-bar-fill"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <span>{score}%</span>
                </div>
              ))}
            </div>

            <div className="team-details">
              <h4>Key Skills Required:</h4>
              <ul>
                {team.requiredSkills.map((skill, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <h4>Main Responsibilities:</h4>
              <ul>
                {team.responsibilities.map((resp, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>
              <div className="team-contact">
                <p>Contact: {team.contact}</p>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="action-buttons">
          <button 
            onClick={handleShare} 
            className="share-button"
            aria-label="Share your results"
          >
            Share Results
          </button>
          <button 
            onClick={() => setShowPreviousResults(!showPreviousResults)} 
            className="share-button"
            aria-label={showPreviousResults ? 'Hide previous results' : 'Show previous results'}
          >
            {showPreviousResults ? 'Hide History' : 'Show History'}
          </button>
          <button 
            onClick={() => {
              setResult(null);
              setCurrentStep(0);
              setAnswers(new Array(questions.length).fill(null));
              setSelectedTeams([]);
              setShowContactForm(false);
              setShowPreviousResults(false);
            }} 
            className="reset-button"
            aria-label="Retake the quiz"
          >
            Retake Quiz
          </button>
        </div>

        {showPreviousResults && renderPreviousResults()}

        {showContactForm && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="contact-form"
          >
            <h4>Save your results</h4>
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input-field"
              aria-label="Enter your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              aria-label="Enter your email"
            />
            <button 
              onClick={handleSaveResults} 
              className="save-button"
              aria-label="Save your results"
            >
              Save Results
            </button>
          </motion.div>
        )}
      </motion.div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="quiz-container"
      role="form"
      aria-label="Team matching quiz"
    >
      <h2>Find Your Perfect Nobel Team</h2>
      <div className="progress-wrapper">
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / (questions.length - 1)) * 100}%` }}
          />
        </div>
        <div className="progress-bar">
          {questions.map((_, idx) => (
            <motion.div 
              key={idx}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`progress-dot ${idx <= currentStep ? 'active' : ''}`}
              aria-label={`Question ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStep}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="question-section"
        >
          <h3>{currentQuestion.question}</h3>
          <div className="options-container">
            {currentQuestion.options.map((option, idx) => (
              <motion.button 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleAnswer(option.text)}
                className="option-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Select option: ${option.text}`}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="step-counter">
        Question {currentStep + 1} of {questions.length}
      </div>
    </motion.div>
  );
};

export default PersonalityQuiz;