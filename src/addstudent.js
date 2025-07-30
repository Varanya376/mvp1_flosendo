// AddStudent.js
import React, { useState } from 'react';

const AddStudent = ({ onNavigate }) => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [batch, setBatch] = useState('2025-2026');
  const [grade, setGrade] = useState('8');
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleSubmit = () => {
    console.log('Adding student:', { studentName, studentEmail, batch, grade, selectedGroup });
    onNavigate('students-list');
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
        
        <button className="back-arrow" onClick={() => onNavigate('students-list')}>
          ←
        </button>
        
        <h2 className="add-student-title">Add Students</h2>
        
        <div className="add-student-form">
          <div className="form-group">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Student Email</label>
            <input
              type="email"
              placeholder="Enter student email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Batch</label>
            <div className="batch-selector">
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="batch-select"
              >
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
              </select>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Grade</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Group</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="input-field select-field"
            >
              <option value="">Select a group</option>
              <option value="group-a">Group A</option>
              <option value="group-b">Group B</option>
              <option value="group-c">Group C</option>
            </select>
          </div>

          <button 
            onClick={handleSubmit} 
            className="confirm-button"
            disabled={!studentName || !studentEmail}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;