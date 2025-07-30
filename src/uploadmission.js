// UploadMission.js
import React, { useState } from 'react';

const UploadMission = ({ onNavigate }) => {
  const [selectedMission, setSelectedMission] = useState('');
  const [missionTitle, setMissionTitle] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log('File uploaded:', file.name);
    }
  };

  const handleSubmit = () => {
    console.log('Mission submission:', {
      mission: selectedMission,
      title: missionTitle,
      file: uploadedFile,
      link: linkUrl
    });
    // Navigate back to teacher home after submission
    onNavigate('teacher-home');
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
        
        <button className="back-arrow" onClick={() => onNavigate('teacher-home')}>
          ←
        </button>
        
        <h2 className="upload-mission-title">Upload Mission</h2>
        
        <div className="upload-mission-form">
          <div className="form-group">
            <label className="form-label">Mission</label>
            <select
              value={selectedMission}
              onChange={(e) => setSelectedMission(e.target.value)}
              className="mission-select"
            >
              <option value="">Select a mission</option>
              <option value="assignment-1">Assignment 1</option>
              <option value="project-1">Project 1</option>
              <option value="quiz-1">Quiz 1</option>
              <option value="homework-1">Homework 1</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              placeholder="Course Overview"
              value={missionTitle}
              onChange={(e) => setMissionTitle(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload a file</label>
            <div className="file-upload-container">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                className="file-input"
                accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
              />
              <label htmlFor="file-upload" className="file-upload-label">
                <span className="folder-icon">📁</span>
                <span className="upload-text">Add from Folder</span>
              </label>
              {uploadedFile && (
                <div className="uploaded-file-info">
                  <span className="file-icon">📄</span>
                  <span className="file-name">{uploadedFile.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Add a link</label>
            <div className="link-input-container">
              <span className="link-icon">🔗</span>
              <input
                type="url"
                placeholder="Enter the URL"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="link-input"
              />
            </div>
          </div>

          <button 
            onClick={handleSubmit} 
            className="confirm-button"
            disabled={!selectedMission || !missionTitle}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadMission;