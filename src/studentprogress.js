// StudentProgress.js
import React, { useState } from 'react';

const StudentProgress = ({ onNavigate, studentData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [assessmentScores, setAssessmentScores] = useState({
    assessment1: 83,
    assessment2: 50,
    assessment3: 50
  });

  const handleScoreChange = (assessment, value) => {
    setAssessmentScores(prev => ({
      ...prev,
      [assessment]: parseInt(value) || 0
    }));
  };

  const studentInfo = {
    name: studentData?.studentName || 'Varshitha',
    email: 'varshitha@london.edu',
    avatar: '👧',
    totalPoints: 8.2,
    totalGrade: 490,
    totalCredit: 137
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        
        <div className="progress-header">
          <button className="back-arrow" onClick={() => onNavigate('students-list')}>
            ←
          </button>
          <button 
            className="close-btn"
            onClick={() => onNavigate('teacher-home')}
          >
            ✕
          </button>
        </div>

        <div className="student-progress-content">
          <div className="student-profile-section">
            <div className="student-profile-avatar">{studentInfo.avatar}</div>
            <h2 className="student-profile-name">{studentInfo.name}</h2>
            <p className="student-profile-email">{studentInfo.email}</p>
          </div>

          <div className="progress-section">
            <h3 className="progress-title">Progress</h3>
            <div className="assessment-circles">
              {Object.entries(assessmentScores).map(([key, value], index) => (
                <div key={key} className="assessment-circle-container">
                  <div className="circular-progress">
                    <svg className="progress-ring" width="80" height="80">
                      <circle
                        className="progress-ring-bg"
                        cx="40"
                        cy="40"
                        r="35"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        className="progress-ring-fill"
                        cx="40"
                        cy="40"
                        r="35"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - value / 100)}`}
                        style={{
                          stroke: index === 0 ? '#9B59B6' : index === 1 ? '#FF6B9D' : '#3498DB'
                        }}
                      />
                    </svg>
                    <div className="progress-value">
                      {isEditing ? (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={value}
                          onChange={(e) => handleScoreChange(key, e.target.value)}
                          className="score-input"
                        />
                      ) : (
                        <span>{value}%</span>
                      )}
                    </div>
                  </div>
                  <p className="assessment-label">Assessment {index + 1}</p>
                </div>
              ))}
            </div>
            {!isEditing && (
              <button 
                className="edit-progress-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Progress
              </button>
            )}
            {isEditing && (
              <button 
                className="save-progress-btn"
                onClick={() => setIsEditing(false)}
              >
                Save Changes
              </button>
            )}
          </div>

          <div className="summary-section">
            <h3 className="summary-title">Summary</h3>
            <div className="summary-items">
              <div className="summary-item">
                <span className="summary-icon">🏆</span>
                <div className="summary-details">
                  <span className="summary-value">{studentInfo.totalPoints}</span>
                  <span className="summary-label">Points</span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">📊</span>
                <div className="summary-details">
                  <span className="summary-value">{studentInfo.totalGrade}</span>
                  <span className="summary-label">Total grade</span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">💳</span>
                <div className="summary-details">
                  <span className="summary-value">{studentInfo.totalCredit}</span>
                  <span className="summary-label">Total credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;