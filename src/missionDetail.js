import React, { useState } from 'react';

const MissionDetail = ({ selectedMission }) => {
  const [expandedSections, setExpandedSections] = useState({
    courseOverview: false,
    lectureSlides: true, // Default expanded
    grades: false,
    assignments: false,
    quizzes: true, // Default expanded
    assessment: false
  });

  const toggleSection = (sectionName) => {
    console.log(`Toggling section: ${sectionName}`); // Debug log
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const handleDownload = (lectureName) => {
    console.log(`Downloading ${lectureName}`); // Debug log
    alert(`Downloading ${lectureName}...`);
  };

  const handleQuizClick = (quizName) => {
    console.log(`Opening ${quizName}`); // Debug log
    alert(`Opening ${quizName}...`);
  };

  const handleAssignmentClick = (assignmentName) => {
    console.log(`Opening ${assignmentName}`); // Debug log
    alert(`Opening ${assignmentName}...`);
  };
  return (
    <main className="main-content">
      <div className="mission-detail-container">
        <h2 className="mission-detail-title">Mission {selectedMission.number}</h2>
        
        <div className="mission-detail-content">
          {/* Course Overview Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('courseOverview')}>
              <svg className={`section-icon ${expandedSections.courseOverview ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.courseOverview ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Course Overview</h3>
            </div>
            {expandedSections.courseOverview && (
              <div className="section-content">
                <div className="content-item">
                  <p>Welcome to Mission {selectedMission.number}! This course provides comprehensive learning materials and assessments.</p>
                  <p>Instructor: {selectedMission.instructor}</p>
                </div>
              </div>
            )}
          </div>

          {/* Lecture Slides Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('lectureSlides')}>
              <svg className={`section-icon ${expandedSections.lectureSlides ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.lectureSlides ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Lecture Slides</h3>
            </div>
            {expandedSections.lectureSlides && (
              <div className="section-content">
                <div className="lecture-item" onClick={() => handleDownload('Lecture 1')}>
                  <div className="lecture-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <span className="lecture-title">Lecture 1</span>
                  <div className="download-icon" onClick={(e) => {
                    e.stopPropagation();
                    handleDownload('Lecture 1');
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
                <div className="lecture-item" onClick={() => handleDownload('Lecture 2')}>
                  <div className="lecture-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <span className="lecture-title">Lecture 2</span>
                  <div className="download-icon" onClick={(e) => {
                    e.stopPropagation();
                    handleDownload('Lecture 2');
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Grades Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('grades')}>
              <svg className={`section-icon ${expandedSections.grades ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.grades ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Grades</h3>
            </div>
            {expandedSections.grades && (
              <div className="section-content">
                <div className="grade-item">
                  <div className="grade-info">
                    <span className="grade-label">Assignment 1</span>
                    <span className="grade-score">95/100</span>
                  </div>
                  <div className="grade-info">
                    <span className="grade-label">Quiz 1</span>
                    <span className="grade-score">88/100</span>
                  </div>
                  <div className="grade-info">
                    <span className="grade-label">Current Average</span>
                    <span className="grade-score">91.5%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Assignments Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('assignments')}>
              <svg className={`section-icon ${expandedSections.assignments ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.assignments ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Assignments</h3>
            </div>
            {expandedSections.assignments && (
              <div className="section-content">
                <div className="assignment-item" onClick={() => handleAssignmentClick('Assignment 1: Research Paper')}>
                  <div className="assignment-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <span className="assignment-title">Assignment 1: Research Paper</span>
                  <span className="assignment-due">Due: May 25</span>
                </div>
                <div className="assignment-item" onClick={() => handleAssignmentClick('Assignment 2: Project Presentation')}>
                  <div className="assignment-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <span className="assignment-title">Assignment 2: Project Presentation</span>
                  <span className="assignment-due">Due: June 5</span>
                </div>
              </div>
            )}
          </div>

          {/* Quizzes Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('quizzes')}>
              <svg className={`section-icon ${expandedSections.quizzes ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.quizzes ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Quizzes</h3>
            </div>
            {expandedSections.quizzes && (
              <div className="section-content">
                <div className="quiz-item" onClick={() => handleQuizClick('Quiz -1')}>
                  <div className="quiz-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                  </div>
                  <span className="quiz-title">Quiz -1</span>
                  <span className="quiz-date">May -20<br/>2:30-3:30</span>
                </div>
              </div>
            )}
          </div>

          {/* Assessment Section */}
          <div className="mission-section">
            <div className="section-header" onClick={() => toggleSection('assessment')}>
              <svg className={`section-icon ${expandedSections.assessment ? 'expanded' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={expandedSections.assessment ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
              </svg>
              <h3 className="section-title">Assessment</h3>
            </div>
            {expandedSections.assessment && (
              <div className="section-content">
                <div className="assessment-item">
                  <div className="assessment-info">
                    <h4>Final Exam</h4>
                    <p>Date: June 15, 2024</p>
                    <p>Duration: 3 hours</p>
                    <p>Format: Written + Practical</p>
                    <p>Weight: 40% of total grade</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MissionDetail;