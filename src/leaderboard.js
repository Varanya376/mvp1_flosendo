// Leaderboard Component
const Leaderboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('allStudents');

  const allStudentsData = [
    { 
      id: 1, 
      name: 'Jennie', 
      score: 7.8, 
      avatar: '👧', 
      rank: 1,
      badgeColor: '#4CAF50'
    },
    { 
      id: 2, 
      name: 'Varshitha', 
      score: 6.8, 
      avatar: '👧', 
      rank: 2,
      badgeColor: '#2196F3'
    },
    { 
      id: 3, 
      name: 'Mino', 
      score: 5.9, 
      avatar: '👦', 
      rank: 3,
      badgeColor: '#9C27B0'
    },
    { 
      id: 4, 
      name: 'Zico', 
      score: 5.8, 
      avatar: '👦', 
      rank: 4,
      badgeColor: '#757575'
    },
    { 
      id: 5, 
      name: 'Loopy', 
      score: 5.6, 
      avatar: '👧', 
      rank: 5,
      badgeColor: '#757575'
    },
    { 
      id: 6, 
      name: 'Brian', 
      score: 5.5, 
      avatar: '👦', 
      rank: 6,
      badgeColor: '#757575'
    },
    { 
      id: 7, 
      name: 'Zico', 
      score: 5.3, 
      avatar: '👦', 
      rank: 7,
      badgeColor: '#757575'
    },
    { 
      id: 8, 
      name: 'Loopy', 
      score: 5.1, 
      avatar: '👧', 
      rank: 8,
      badgeColor: '#757575'
    },
    { 
      id: 9, 
      name: 'Brian', 
      score: 4.9, 
      avatar: '👦', 
      rank: 9,
      badgeColor: '#757575'
    }
  ];

  const inClassData = [
    { 
      id: 1, 
      name: 'Jennie', 
      score: 7.8, 
      avatar: '👧', 
      rank: 1,
      badgeColor: '#4CAF50'
    },
    { 
      id: 2, 
      name: 'Varshitha', 
      score: 6.8, 
      avatar: '👧', 
      rank: 2,
      badgeColor: '#2196F3'
    },
    { 
      id: 3, 
      name: 'Mino', 
      score: 5.9, 
      avatar: '👦', 
      rank: 3,
      badgeColor: '#9C27B0'
    },
    { 
      id: 4, 
      name: 'Zico', 
      score: 5.8, 
      avatar: '👦', 
      rank: 4,
      badgeColor: '#757575'
    },
    { 
      id: 5, 
      name: 'Loopy', 
      score: 5.6, 
      avatar: '👧', 
      rank: 5,
      badgeColor: '#757575'
    },
    { 
      id: 6, 
      name: 'Brian', 
      score: 5.5, 
      avatar: '👦', 
      rank: 6,
      badgeColor: '#757575'
    }
  ];

  const currentData = activeTab === 'allStudents' ? allStudentsData : inClassData;
  const topThree = currentData.slice(0, 3);
  const remainingStudents = currentData.slice(3);

  const getCircleStrokeDasharray = (score) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const percentage = (score / 10) * 100; // Assuming max score is 10
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <div className="auth-container">
      <div className="auth-card leaderboard-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-dashboard')}>
          ←
        </button>
        
        <h2 className="leaderboard-title">Leader Board</h2>
        
        <div className="leaderboard-tabs">
          <button 
            className={`leaderboard-tab ${activeTab === 'inClass' ? 'active' : ''}`}
            onClick={() => setActiveTab('inClass')}
          >
            In Class
          </button>
          <button 
            className={`leaderboard-tab ${activeTab === 'allStudents' ? 'active' : ''}`}
            onClick={() => setActiveTab('allStudents')}
          >
            All Students
          </button>
        </div>

        <div className="leaderboard-content">
          {/* Top 3 Students with Circular Progress */}
          <div className="top-three-container">
            {topThree.map((student, index) => (
              <div key={student.id} className={`top-student top-student-${index + 1}`}>
                <div className="student-circle-container">
                  <svg className="student-progress-circle" width="80" height="80">
                    <circle
                      className="student-progress-bg"
                      cx="40"
                      cy="40"
                      r="35"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      className="student-progress-fill"
                      cx="40"
                      cy="40"
                      r="35"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 35}`}
                      strokeDashoffset={getCircleStrokeDasharray(student.score)}
                      style={{ stroke: student.badgeColor }}
                    />
                  </svg>
                  <div className="student-avatar-container">
                    <span className="student-leaderboard-avatar">{student.avatar}</span>
                    <div 
                      className="student-rank-badge"
                      style={{ backgroundColor: student.badgeColor }}
                    >
                      {student.rank}
                    </div>
                  </div>
                </div>
                <div className="student-info">
                  <h4 className="student-leaderboard-name">{student.name}</h4>
                  <p className="student-leaderboard-score">Score: {student.score}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Students List */}
          <div className="remaining-students-list">
            {remainingStudents.map((student) => (
              <div key={`${student.id}-${student.rank}`} className="student-list-row">
                <div className="student-row-left">
                  <span className="student-row-rank">{student.rank}</span>
                  <span className="student-row-avatar">{student.avatar}</span>
                  <span className="student-row-name">{student.name}</span>
                </div>
                <span className="student-row-score">Score: {student.score}</span>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="show-more-container">
            <button className="show-more-btn">
              <span className="show-more-arrow">▼</span>
            </button>
          </div>
        </div>

        <div className="student-bottom-nav">
          <div 
            className="nav-item"
            onClick={() => onNavigate('student-home')}
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </div>
          <div 
            className="nav-item"
            onClick={() => onNavigate('student-dashboard')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-label">Dashboard</span>
          </div>
          <div 
            className="nav-item"
            onClick={() => onNavigate('mission-list')}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-label">Missions</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📅</span>
            <span className="nav-label">Calendar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default Leaderboard;