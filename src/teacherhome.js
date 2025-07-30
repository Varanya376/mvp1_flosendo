// TeacherHome.js
import React from 'react';
import './App.css';

const TeacherHome = ({ onNavigate }) => {
  const teacherName = "Alex Thompson";
  const teacherRole = "Teacher";

  return (
    <div className="auth-container">
      <div className="auth-card home-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <div className="home-header">
          <div className="user-info" onClick={() => onNavigate('teacher-profile')}>
            <div className="user-avatar">👨‍🏫</div>
            <div className="user-details">
              <h3 className="user-name">{teacherName}</h3>
              <p className="user-role">{teacherRole}</p>
            </div>
          </div>
          <button className="menu-icon">☰</button>
        </div>

        <h2 className="dashboard-title">Dashboard</h2>

        <div className="dashboard-cards">
          <div 
            className="dashboard-card students-card"
            onClick={() => onNavigate('students-list')}
          >
            <div className="card-icon">👥</div>
            <h3 className="card-title">Students</h3>
          </div>

          <div className="dashboard-card tests-card">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Diagnostic Tests</h3>
          </div>

          <div className="dashboard-card missions-card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Upload Missions</h3>
          </div>
        </div>

        <button 
          className="floating-add-btn"
          onClick={() => onNavigate('create-class')}
          title="Create New Class"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TeacherHome;