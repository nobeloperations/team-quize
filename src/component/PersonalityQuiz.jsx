import React, { useState } from 'react';

const teams = [
  { name: "Internship Program", description: "Join the program to gain real-world experience." },
  { name: "MC Team", description: "Engage with creative content and events." },
  { name: "Global Promo", description: "Focus on expanding brand presence globally." },
  { name: "Community Engagement", description: "Build connections and foster communities." },
  { name: "Operations", description: "Oversee smooth business processes and workflows." },
  { name: "Automation", description: "Bring efficiency through innovative tech solutions." },
  { name: "Marketing", description: "Drive brand awareness and lead generation." },
  { name: "Course Design", description: "Create impactful and educational content." },
  { name: "Edu Quest", description: "Transform education through new initiatives." },
  { name: "Nobel Reach", description: "Work on global outreach projects." },
  { name: "Networking with Americans for Ukrainians", description: "Foster relationships between countries." },
  { name: "Coaching Team", description: "Support and develop talent." },
  { name: "Finance Team", description: "Ensure financial health and strategy." }
];

const questions = [
  {
    question: "How do you prefer to work?",
    options: ["Independently", "Collaboratively", "With a team leader", "Behind the scenes"]
  },
  {
    question: "What excites you most?",
    options: ["Solving problems", "Creative expression", "Helping others", "Streamlining processes"]
  },
  {
    question: "What's your ideal environment?",
    options: ["Fast-paced and dynamic", "Structured and organized", "Collaborative", "Analytical and data-driven"]
  }
];

const PersonalityQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    
    // Move to next question or submit
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateTeam();
    }
  };

  const calculateTeam = () => {
    const scores = new Array(teams.length).fill(0);

    // More comprehensive team matching logic
    answers.forEach((answer, index) => {
      switch(index) {
        case 0: // Work preference
          if (answer === 'Independently') {
            scores[0] += 2; // Internship Program
            scores[5] += 2; // Automation
          } else if (answer === 'Collaboratively') {
            scores[1] += 2; // MC Team
            scores[3] += 2; // Community Engagement
            scores[2] += 2; // Global Promo
            scores[6] += 2; // Marketing
            scores[10] += 2; // Networking with Americans for Ukrainians Team
            scores[11] += 2; //Coaching Team


          } else if (answer === 'With a team leader') {
            scores[4] += 2; // Operations
            scores[7] += 2; // Course design
            scores[8] += 2; // Edu Quest
            scores[12] += 2; // Finance Team


            
          } else if (answer === 'Behind the scenes') {
            scores[9] += 2; // Nobel reach
          }
          break;
        
        case 1: // What excites most
          if (answer === 'Solving problems') {
            scores[4] += 2; // Operations
            scores[12] += 2; // Finance Team
            scores[11] += 2; // Coaching Team
          } else if (answer === 'Creative expression') {
            scores[1] += 2; // MC Team
            scores[7] += 2; // Course Design
            scores[2] += 2; // Global Promo
            scores[6] += 2; // Marketing

          } else if (answer === 'Helping others') {
            scores[0] += 2; // Internsship Program
            scores[10] += 2; // Networking with Americans for Ukrainians
            scores[3] += 2; // Community Engagement
            scores[8] += 2; // Edu Quest

          } else if (answer === 'Streamlining processes') {
            scores[5] += 2; // Automation
            scores[9] += 2; // Nobel Reach
          }
          break;
        
        case 2: // Ideal environment
          if (answer === 'Fast-paced and dynamic') {
            scores[1] += 2; // MC Team 
            scores[2] += 2; // Global Promo
            scores[6] += 2; // Marketing
            scores[3] += 2; // Community Engagement

          } else if (answer === 'Structured and organized') {
            scores[4] += 2; // Operations
            scores[12] += 2; // Finance Team
            scores[7] += 2; // Course Design
            scores[8] += 2; // Edu Quest
          } else if (answer === 'Collaborative') {
            scores[0] += 2; // Internship Program
            scores[11] += 2; // Coaching
            scores[10] += 2; // Networking with Americalns for Ukrainians Team
          } else if (answer === 'Analytical and data-driven') {
            scores[5] += 2; // Automation
            scores[9] += 2; // Nobel Reach
          }
          break;
      }
    });

    const maxScore = Math.max(...scores);
    const teamIndex = scores.indexOf(maxScore);
    setResult(teams[teamIndex]);
  };

  // If we have a result, show the result page
  if (result) {
    return (
      <div style={styles.resultContainer}>
        <h2>Your Ideal Team Match</h2>
        <h3>{result.name}</h3>
        <p>{result.description}</p>
        <button 
          onClick={() => {
            setResult(null);
            setCurrentStep(0);
            setAnswers(new Array(questions.length).fill(null));
          }} 
          style={styles.resetButton}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  // Current question view
  const currentQuestion = questions[currentStep];

  return (
    <div style={styles.quizContainer}>
      <h2>Find Your Perfect Team</h2>
      <div style={styles.progressBar}>
        {questions.map((_, idx) => (
          <div 
            key={idx} 
            style={{
              ...styles.progressDot,
              backgroundColor: idx <= currentStep ? '#4CAF50' : '#ddd'
            }}
          />
        ))}
      </div>
      <h3>{currentQuestion.question}</h3>
      <div style={styles.optionsContainer}>
        {currentQuestion.options.map((option, optIdx) => (
          <button 
            key={optIdx} 
            onClick={() => handleAnswer(option)} 
            style={styles.optionButton}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={styles.stepCounter}>
        Step {currentStep + 1} of {questions.length}
      </div>
    </div>
  );
};

const styles = {
  quizContainer: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  progressBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  progressDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  optionButton: {
    width: '300px',
    margin: '10px',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  stepCounter: {
    marginTop: '20px',
    color: '#666',
  },
  resultContainer: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  resetButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#008CBA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default PersonalityQuiz;