export const teams = [
  {
    name: "Global Promo",
    description: "Bringing more amazing youth to Nobel through market research, content creation, and communication strategies.",
    requiredSkills: ["Communication", "Marketing", "Research", "Content Writing"],
    responsibilities: [
      "Market research & Content Writing",
      "Developing communication strategies",
      "Building Nobel community in your country"
    ],
    contact: "Discord: nikolashka19 or josephlonge"
  },
  {
    name: "Internship Program",
    description: "Guide interns through their Nobel journey while improving organizational processes.",
    requiredSkills: ["Problem Solving", "Communication", "Process Management"],
    responsibilities: [
      "Communicating with other teams",
      "Collecting and acting on feedback",
      "Making processes scalable",
      "Building new systems"
    ],
    contact: "Discord: abinash_guragain or tanya.sapeliuk"
  },
  {
    name: "MC Team",
    description: "Lead and host Nobel events while developing public speaking and leadership skills.",
    requiredSkills: ["Public Speaking", "Event Management", "Leadership"],
    responsibilities: [
      "Host Expo events",
      "MC Nobel events",
      "Develop public speaking skills"
    ],
    contact: "Discord: nikolashka19 or anzhelika1457"
  },
  {
    name: "Community Engagement",
    description: "Foster and grow our global Nobel community through events and initiatives.",
    requiredSkills: ["Community Building", "Event Planning", "Communication"],
    responsibilities: [
      "Create better communication",
      "Arrange fun events & lead clubs",
      "Event MCing"
    ],
    contact: "Discord: rafia_alkasari or asllozcan"
  },
  {
    name: "Operations",
    description: "Ensure smooth functioning of Nobel's core processes and systems.",
    requiredSkills: ["Organization", "Technical Skills", "Process Management"],
    responsibilities: [
      "Key Master role for meetings",
      "Mail & Discord management",
      "Database & Compiler work",
      "Event oversight"
    ],
    contact: "Discord: inobat or shambridhi"
  },
  {
    name: "Automation",
    description: "Streamline processes through coding and automation solutions.",
    requiredSkills: ["Programming", "Problem Solving", "Technical Skills"],
    responsibilities: [
      "Google apps script development",
      "Email automation",
      "Python development",
      "AI clustering and visualization"
    ],
    contact: "Discord: ugacaka or jordan_vch"
  },
  {
    name: "Marketing",
    description: "Create engaging content and manage Nobel's social media presence.",
    requiredSkills: ["Content Creation", "Design", "Social Media Management"],
    responsibilities: [
      "Video Production",
      "Graphic Design",
      "Social Media Management"
    ],
    contact: "Discord: sara_tomic or by_la.aaa"
  },
  {
    name: "Course Design",
    description: "Shape the future of Nobel's educational content and courses.",
    requiredSkills: ["Content Development", "Educational Design", "Research"],
    responsibilities: [
      "Needs assessment",
      "Course outline creation",
      "Content development",
      "Feedback implementation"
    ],
    contact: "Discord: asllozcan or anzhelika1457"
  },
  {
    name: "EduQuest",
    description: "Create an amazing first experience for new Nobel members.",
    requiredSkills: ["Event Management", "Communication", "Organization"],
    responsibilities: [
      "EduQuest training and meetings",
      "Event hosting",
      "Technical organization",
      "Process improvement"
    ],
    contact: "Discord: ahsuna0 or tracyblesyn"
  },
  {
    name: "Nobel Reach",
    description: "Support Ukrainians by facilitating laptop donations internationally.",
    requiredSkills: ["Project Management", "Logistics", "Communication"],
    responsibilities: [
      "Marketing and outreach",
      "Logistics coordination",
      "Community building"
    ],
    contact: "Discord: anzhelika1457"
  },
  {
    name: "Networking with Americans for Ukrainians",
    description: "Connect Ukrainians with American supporters for career opportunities.",
    requiredSkills: ["Networking", "Communication", "Cultural Awareness"],
    responsibilities: [
      "Building connections",
      "Career development support",
      "Community engagement"
    ],
    contact: "Discord: darynas or anzhelika1457"
  },
  {
    name: "Coaching Team",
    description: "Help others grow while developing professional coaching skills.",
    requiredSkills: ["Coaching", "Communication", "Empathy"],
    responsibilities: [
      "Support and guide others",
      "Develop coaching skills",
      "Career development"
    ],
    contact: "Discord: viktoriia_valeriivna and sonik.litva"
  },
  {
    name: "Finance Team",
    description: "Manage and optimize Nobel's financial operations.",
    requiredSkills: ["Financial Analysis", "Data Management", "Strategic Planning"],
    responsibilities: [
      "Financial data management",
      "Budgeting and forecasting",
      "Performance analysis"
    ],
    contact: "Discord: ugacaka"
  },
  {
    name: "Nonviolent Communication (NVC)",
    description: "Develop and teach effective communication strategies.",
    requiredSkills: ["Communication", "Empathy", "Teaching"],
    responsibilities: [
      "Course development",
      "Communication training",
      "Conflict resolution"
    ],
    contact: "Discord: iryna1919"
  }
];

export const questions = [
  {
    question: "What type of impact would you like to make at Nobel?",
    options: [
      {
        text: "Helping others grow and develop their potential",
        teamScores: [
          { teamIndex: 11, value: 3 }, // Coaching
          { teamIndex: 13, value: 3 }, // NVC
          { teamIndex: 8, value: 2 }   // EduQuest
        ]
      },
      {
        text: "Building and connecting global communities",
        teamScores: [
          { teamIndex: 3, value: 3 },  // Community Engagement
          { teamIndex: 10, value: 3 }, // Networking
          { teamIndex: 0, value: 2 }   // Global Promo
        ]
      },
      {
        text: "Innovating and improving processes",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 4, value: 3 }, // Operations
          { teamIndex: 1, value: 2 }  // Internship Program
        ]
      },
      {
        text: "Creating engaging content and experiences",
        teamScores: [
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 7, value: 3 }, // Course Design
          { teamIndex: 2, value: 2 }  // MC Team
        ]
      }
    ]
  },
  {
    question: "Which skills would you most like to develop?",
    options: [
      {
        text: "Leadership and public speaking",
        teamScores: [
          { teamIndex: 2, value: 3 }, // MC Team
          { teamIndex: 11, value: 2 }, // Coaching
          { teamIndex: 3, value: 2 }  // Community Engagement
        ]
      },
      {
        text: "Technical and analytical skills",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 12, value: 3 }, // Finance
          { teamIndex: 4, value: 2 }  // Operations
        ]
      },
      {
        text: "Creative and content creation",
        teamScores: [
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 7, value: 3 }, // Course Design
          { teamIndex: 0, value: 2 }  // Global Promo
        ]
      },
      {
        text: "Communication and relationship building",
        teamScores: [
          { teamIndex: 13, value: 3 }, // NVC
          { teamIndex: 10, value: 3 }, // Networking
          { teamIndex: 3, value: 2 }  // Community Engagement
        ]
      }
    ]
  },
  {
    question: "What's your preferred work style?",
    options: [
      {
        text: "Dynamic and event-focused",
        teamScores: [
          { teamIndex: 2, value: 3 }, // MC Team
          { teamIndex: 8, value: 3 }, // EduQuest
          { teamIndex: 3, value: 2 }  // Community Engagement
        ]
      },
      {
        text: "Structured and process-oriented",
        teamScores: [
          { teamIndex: 4, value: 3 }, // Operations
          { teamIndex: 12, value: 3 }, // Finance
          { teamIndex: 7, value: 2 }  // Course Design
        ]
      },
      {
        text: "Creative and collaborative",
        teamScores: [
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 0, value: 3 }, // Global Promo
          { teamIndex: 7, value: 2 }  // Course Design
        ]
      },
      {
        text: "Independent and project-based",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 9, value: 3 }, // Nobel Reach
          { teamIndex: 1, value: 2 }  // Internship Program
        ]
      }
    ]
  },
  {
    question: "What kind of tasks energize you most?",
    options: [
      {
        text: "Training and mentoring others",
        teamScores: [
          { teamIndex: 11, value: 3 }, // Coaching
          { teamIndex: 8, value: 3 },  // EduQuest
          { teamIndex: 13, value: 2 }  // NVC
        ]
      },
      {
        text: "Solving technical challenges",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 4, value: 2 }, // Operations
          { teamIndex: 12, value: 2 } // Finance
        ]
      },
      {
        text: "Organizing events and building community",
        teamScores: [
          { teamIndex: 3, value: 3 }, // Community Engagement
          { teamIndex: 2, value: 3 }, // MC Team
          { teamIndex: 10, value: 2 } // Networking
        ]
      },
      {
        text: "Strategic planning and analysis",
        teamScores: [
          { teamIndex: 0, value: 3 }, // Global Promo
          { teamIndex: 12, value: 3 }, // Finance
          { teamIndex: 1, value: 2 }  // Internship Program
        ]
      }
    ]
  },
  {
    question: "What's your approach to learning and growth?",
    options: [
      {
        text: "Through hands-on practice and experience",
        teamScores: [
          { teamIndex: 2, value: 3 }, // MC Team
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 5, value: 2 }  // Automation
        ]
      },
      {
        text: "By studying and analyzing systems",
        teamScores: [
          { teamIndex: 4, value: 3 }, // Operations
          { teamIndex: 12, value: 3 }, // Finance
          { teamIndex: 7, value: 2 }  // Course Design
        ]
      },
      {
        text: "Through collaboration and feedback",
        teamScores: [
          { teamIndex: 11, value: 3 }, // Coaching
          { teamIndex: 13, value: 3 }, // NVC
          { teamIndex: 3, value: 2 }   // Community Engagement
        ]
      },
      {
        text: "By taking on challenging projects",
        teamScores: [
          { teamIndex: 1, value: 3 }, // Internship Program
          { teamIndex: 9, value: 3 }, // Nobel Reach
          { teamIndex: 5, value: 2 }  // Automation
        ]
      }
    ]
  },
  {
    question: "What interests you most about Nobel's mission?",
    options: [
      {
        text: "Building global educational opportunities",
        teamScores: [
          { teamIndex: 7, value: 3 }, // Course Design
          { teamIndex: 8, value: 3 }, // EduQuest
          { teamIndex: 0, value: 2 }  // Global Promo
        ]
      },
      {
        text: "Supporting and empowering others",
        teamScores: [
          { teamIndex: 11, value: 3 }, // Coaching
          { teamIndex: 13, value: 3 }, // NVC
          { teamIndex: 10, value: 2 }  // Networking
        ]
      },
      {
        text: "Creating innovative solutions",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 4, value: 2 }  // Operations
        ]
      },
      {
        text: "Making positive social impact",
        teamScores: [
          { teamIndex: 9, value: 3 }, // Nobel Reach
          { teamIndex: 3, value: 3 }, // Community Engagement
          { teamIndex: 2, value: 2 }  // MC Team
        ]
      }
    ]
  },
  {
    question: "Which tools or technologies interest you most?",
    options: [
      {
        text: "Programming and automation tools",
        teamScores: [
          { teamIndex: 5, value: 3 }, // Automation
          { teamIndex: 4, value: 2 }, // Operations
          { teamIndex: 12, value: 2 } // Finance
        ]
      },
      {
        text: "Content creation and design software",
        teamScores: [
          { teamIndex: 6, value: 3 }, // Marketing
          { teamIndex: 7, value: 3 }, // Course Design
          { teamIndex: 0, value: 2 }  // Global Promo
        ]
      },
      {
        text: "Communication and collaboration platforms",
        teamScores: [
          { teamIndex: 3, value: 3 }, // Community Engagement
          { teamIndex: 10, value: 3 }, // Networking
          { teamIndex: 2, value: 2 }   // MC Team
        ]
      },
      {
        text: "Project management and analytics tools",
        teamScores: [
          { teamIndex: 1, value: 3 }, // Internship Program
          { teamIndex: 12, value: 3 }, // Finance
          { teamIndex: 9, value: 2 }   // Nobel Reach
        ]
      }
    ]
  }
];