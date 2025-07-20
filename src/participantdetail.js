import React, { useState } from 'react';

const ParticipantDetail = ({ participant }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('01:40');

  const handlePlayPause = () => {
    console.log('Play/Pause clicked');
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    console.log('Restart clicked');
    setCurrentTime('00:00');
    setIsPlaying(false);
  };

  const handleStop = () => {
    console.log('Stop clicked');
    setIsPlaying(false);
    setCurrentTime('00:00');
  };

  const handleCameraClick = () => {
    console.log('Camera clicked');
    alert('Opening camera interface...');
  };

  if (!participant) {
    return <div>No participant selected</div>;
  }

  return (
    <main className="main-content">
      <div className="participant-detail-container">
        {/* Header */}
        <div className="participant-header">
          <div 
            className="participant-detail-logo"
            style={{ backgroundColor: participant.bgColor }}
          >
            <span className="logo-text">{participant.logo}</span>
          </div>
          <h2 className="participant-detail-name">{participant.name}</h2>
        </div>

        {/* Video/Camera Section */}
        <div className="video-section">
          <div className="video-container" onClick={handleCameraClick}>
            <div className="camera-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <p className="camera-text">Click to start recording</p>
          </div>

          {/* Timer Display */}
          <div className="timer-display">
            <div className="timer-circle">
              <svg className="timer-svg" viewBox="0 0 100 100">
                <circle
                  className="timer-background"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e9ecef"
                  strokeWidth="4"
                />
                <circle
                  className="timer-progress"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#00bcd4"
                  strokeWidth="4"
                  strokeDasharray="283"
                  strokeDashoffset="170"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="timer-text">
                <span className="timer-time">{currentTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="control-buttons">
          <button className="control-btn restart-btn" onClick={handleRestart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
          </button>

          <button 
            className={`control-btn play-pause-btn ${isPlaying ? 'playing' : ''}`} 
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>

          <button className="control-btn stop-btn" onClick={handleStop}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            </svg>
          </button>
        </div>

        {/* Pitch Information */}
        <div className="pitch-info">
          <div className="info-row">
            <span className="info-label">Company:</span>
            <span className="info-value">{participant.company}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Time Slot:</span>
            <span className="info-value">{participant.time}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Duration:</span>
            <span className="info-value">5 minutes</span>
          </div>
          <div className="info-row">
            <span className="info-label">Status:</span>
            <span className="info-value status-ready">Ready to Present</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParticipantDetail;