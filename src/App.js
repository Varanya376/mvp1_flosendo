import React, { useState } from 'react';
import './App.css';
import MissionDetail from './missionDetail'; // Import your MissionDetail component
import Scheduler from './scheduler'; // Import your Scheduler component
import PitchJam from './pitchJam'; // Import your PitchJam component
import ParticipantDetail from './participantdetail'; // Import your ParticipantDetail component
import LeaderBoard from './leaderboard'; // Import your LeaderBoard component

const App = () => {
  const [currentPage, setCurrentPage] = useState('splash');
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  const handleHomeClick = () => {
    if (isAuthenticated) {
      setCurrentPage('home');
    } else {
      setCurrentPage('splash');
    }
  };

  const handleMissionClick = () => {
    setCurrentPage('missions');
  };

  const handleDiscussionClick = () => {
    setCurrentPage('discussion');
  };

  const handleFeedbackClick = () => {
    setCurrentPage('feedback');
  };

  const handleSpecificMissionClick = (missionNumber, instructor) => {
    console.log(`Clicking mission ${missionNumber}`); // Debug log
    setSelectedMission({ number: missionNumber, instructor: instructor });
    setCurrentPage('missionDetail');
  };

  const handleParticipantSelect = (participant) => {
    console.log(`Selecting participant: ${participant.name}`);
    setSelectedParticipant(participant);
    setCurrentPage('participantDetail');
  };

  const handleBackClick = () => {
    if (currentPage === 'missionDetail') {
      setCurrentPage('missions');
    } else if (currentPage === 'participantDetail') {
      setCurrentPage('pitchJam');
    } else if (currentPage === 'missions' || currentPage === 'scheduler' || currentPage === 'pitchJam' || currentPage === 'leaderBoard' || currentPage === 'discussion' || currentPage === 'feedback') {
      setCurrentPage('dashboard');
    } else if (currentPage === 'dashboard') {
      setCurrentPage('home');
    }
  };

  const handleCardClick = (cardName) => {
    if (cardName === 'Mission') {
      setCurrentPage('missions');
    } else if (cardName === 'Scheduler') {
      setCurrentPage('scheduler');
    } else if (cardName === 'Pitch Jam') {
      setCurrentPage('pitchJam');
    } else if (cardName === 'Leader Board') {
      setCurrentPage('leaderBoard');
    } else if (cardName === 'Discussion Forum') {
      setCurrentPage('discussion');
    } else if (cardName === 'Feedback') {
      setCurrentPage('feedback');
    } else {
      alert(`You clicked on ${cardName}! This feature will be available soon.`);
    }
  };

  // Discussion Forum specific handlers
  const handleChatroomClick = (roomName) => {
    alert(`Joining ${roomName} chatroom...`);
  };

  const handleDiscussionItemClick = (subject) => {
    alert(`Opening discussion: ${subject}`);
  };

  const handleSearchClick = () => {
    alert('Search functionality coming soon!');
  };

  const handleAddDiscussionClick = () => {
    alert('Create new discussion coming soon!');
  };

  // Feedback page specific handlers
  const handleFeedbackSearchClick = () => {
    alert('Search feedback coming soon!');
  };

  const handleFeedbackCardClick = (cardName) => {
    alert(`Opening ${cardName}...`);
  };

  const handleAddFeedbackClick = () => {
    alert('Add new feedback coming soon!');
  };

  // Authentication handlers
  const handleSplashClick = () => {
    setCurrentPage('login');
  };

  const handleAuthToggle = (mode) => {
    setAuthMode(mode);
    setCurrentPage(mode);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('profile');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setCurrentPage('profile');
  };

  const handleProfileComplete = () => {
    setCurrentPage('home');
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality coming soon!');
  };

  const handleHelpSupport = () => {
    alert('Help and support coming soon!');
  };

  const renderContent = () => {
    // Authentication flow
    if (currentPage === 'splash') {
      return (
        <div className="splash-container" onClick={handleSplashClick}>
          <div className="splash-logo">
            <div className="splash-logo-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <div className="splash-logo-text">FLOSENDO</div>
          </div>
        </div>
      );
    }

    if (currentPage === 'login') {
      return (
        <div className="auth-container">
          <div className="auth-card">
            <div className="login-content">
              <div className="login-header">
                <div className="login-logo">
                  <div className="login-logo-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                  </div>
                  <div className="login-logo-text">FLOSENDO</div>
                </div>
              </div>

              <div className="login-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="input-field" 
                    placeholder="Email address"
                  />
                </div>
                
                <div className="input-group">
                  <input 
                    type="password" 
                    className="input-field" 
                    placeholder="Password"
                  />
                  <div className="forgot-password">
                    <a href="#" className="forgot-password-link" onClick={handleForgotPassword}>
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button className="confirm-btn" onClick={handleLogin}>
                  CONFIRM
                </button>

                <div style={{textAlign: 'center', marginTop: '20px'}}>
                  <span style={{color: '#666', fontSize: '14px'}}>
                    Don't have an account? 
                    <a 
                      href="#" 
                      style={{color: '#a855f7', marginLeft: '5px'}}
                      onClick={() => handleAuthToggle('signup')}
                    >
                      Sign Up
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'signup') {
      return (
        <div className="auth-container">
          <div className="auth-card">
            <div className="signup-content">
              <div className="signup-header">
                <div className="signup-logo">
                  <div className="signup-logo-icon">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="white">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                  </div>
                  <div className="signup-logo-text">FLOSENDO</div>
                </div>
                
                <div className="auth-toggle">
                  <button 
                    className={`auth-toggle-btn ${authMode === 'login' ? 'active' : ''}`}
                    onClick={() => handleAuthToggle('login')}
                  >
                    LOG IN
                  </button>
                  <button 
                    className={`auth-toggle-btn ${authMode === 'signup' ? 'active' : ''}`}
                    onClick={() => handleAuthToggle('signup')}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>

              <div className="signup-form">
                <input type="text" className="input-field" placeholder="Full Name" />
                <input type="email" className="input-field" placeholder="School Email" />
                <input type="password" className="input-field" placeholder="Set Password" />
                <input type="password" className="input-field" placeholder="Re-enter Password" />
                
                <button className="confirm-btn" onClick={handleSignUp}>
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'profile') {
      return (
        <div className="profile-container">
          <div className="profile-header">
            <button className="profile-back-btn" onClick={() => setCurrentPage('login')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="profile-user-info">
              <div className="profile-avatar">VR</div>
              <div className="profile-user-details">
                <h3>VARSHITHA REDDY</h3>
                <p>Ratino</p>
              </div>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-details">
              <div className="profile-detail-row">
                <span className="profile-detail-label">Course:</span>
                <span className="profile-detail-value">Level 1</span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Batch:</span>
                <span className="profile-detail-value">2025-2026</span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Grade:</span>
                <span className="profile-detail-value">8</span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Badge:</span>
                <span className="profile-detail-value">Bronze</span>
              </div>
            </div>

            <div className="profile-help" onClick={handleHelpSupport}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Help and support</span>
            </div>

            <button 
              className="confirm-btn" 
              style={{width: '100%', marginTop: '20px'}}
              onClick={handleProfileComplete}
            >
              Continue to App
            </button>
          </div>
        </div>
      );
    }

    // Main app content (only if authenticated)
    if (!isAuthenticated) {
      return null;
    }

    if (currentPage === 'feedback') {
      return (
        <main className="main-content">
          <div className="feedback-container">
            <div className="feedback-header">
              <div className="feedback-header-left">
                <button className="feedback-back-btn" onClick={handleBackClick}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <h1 className="feedback-title">Feedback</h1>
              </div>
              <button className="feedback-search-btn" onClick={handleFeedbackSearchClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>

            <div className="feedback-cards-container">
              <div className="feedback-card feedback-1" onClick={() => handleFeedbackCardClick('Feedback 1')}>
                <div className="feedback-card-content">
                  <h3 className="feedback-card-title">Feedback 1</h3>
                </div>
                <div className="feedback-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </div>

              <div className="feedback-card todo" onClick={() => handleFeedbackCardClick('To Do')}>
                <div className="feedback-card-content">
                  <h3 className="feedback-card-title">To Do</h3>
                </div>
                <div className="feedback-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </div>
            </div>

            <button className="feedback-floating-btn" onClick={handleAddFeedbackClick}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </main>
      );
    } else if (currentPage === 'discussion') {
      return (
        <main className="main-content">
          <div className="discussion-container">
            <div className="discussion-header">
              <button className="discussion-back-btn" onClick={handleBackClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <h1 className="discussion-title">DISCUSSION FORUM</h1>
            </div>

            <div className="search-container">
              <div className="search-box">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search..." 
                />
                <div className="search-icon" onClick={handleSearchClick}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
              </div>
              <button className="add-btn" onClick={handleAddDiscussionClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>

            <div className="chatrooms-section">
              <h3 className="chatrooms-title">Chatrooms</h3>
              <div className="chatrooms-grid">
                <div className="chatroom-bubble eeg" onClick={() => handleChatroomClick('EEG PROJECT')}>
                  <div className="chatroom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="chatroom-name">EEG PROJECT</div>
                </div>
                <div className="chatroom-bubble mess" onClick={() => handleChatroomClick('MESS MENU')}>
                  <div className="chatroom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="chatroom-name">MESS MENU</div>
                </div>
                <div className="chatroom-bubble vip" onClick={() => handleChatroomClick('VIP GANG')}>
                  <div className="chatroom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="chatroom-name">VIP GANG</div>
                </div>
              </div>
            </div>

            <div className="discussions-list">
              <div className="discussion-item" onClick={() => handleDiscussionItemClick('Computer Networks')}>
                <div className="discussion-icon networks">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">Computer Networks</div>
                  <p className="discussion-description">No class today</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">08:43</div>
                </div>
              </div>

              <div className="discussion-item" onClick={() => handleDiscussionItemClick('UI/UX')}>
                <div className="discussion-icon uiux">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="7.5,8 12,5 16.5,8"/>
                    <polyline points="7.5,16 12,13 16.5,16"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">UI/UX</div>
                  <p className="discussion-description">Project deadline on 24th May</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">Tue</div>
                </div>
              </div>

              <div className="discussion-item" onClick={() => handleDiscussionItemClick('PD')}>
                <div className="discussion-icon pd">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">PD</div>
                  <p className="discussion-description">Resume submission</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">Sun</div>
                </div>
              </div>

              <div className="discussion-item" onClick={() => handleDiscussionItemClick('DBMS')}>
                <div className="discussion-icon dbms">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">DBMS</div>
                  <p className="discussion-description">Lab exam on 15th May</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">23 Mar</div>
                </div>
              </div>

              <div className="discussion-item" onClick={() => handleDiscussionItemClick('ALGO')}>
                <div className="discussion-icon algo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">ALGO</div>
                  <p className="discussion-description">Algorithm practice session</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">18 Mar</div>
                </div>
              </div>

              <div className="discussion-item" onClick={() => handleDiscussionItemClick('Hitisha')}>
                <div className="discussion-icon hitisha">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="discussion-content">
                  <div className="discussion-subject">Hitisha</div>
                  <p className="discussion-description">General discussion</p>
                </div>
                <div className="discussion-meta">
                  <div className="discussion-time">01 Feb</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    } else if (currentPage === 'leaderBoard') {
      // Use your LeaderBoard component
      return <LeaderBoard />;
    } else if (currentPage === 'participantDetail' && selectedParticipant) {
      // Use your ParticipantDetail component
      return <ParticipantDetail participant={selectedParticipant} />;
    } else if (currentPage === 'pitchJam') {
      // Use your PitchJam component
      return <PitchJam onParticipantSelect={handleParticipantSelect} />;
    } else if (currentPage === 'scheduler') {
      // Use your Scheduler component
      return <Scheduler />;
    } else if (currentPage === 'missionDetail' && selectedMission) {
      // Use your MissionDetail component
      return <MissionDetail selectedMission={selectedMission} />;
    } else if (currentPage === 'missions') {
      return (
        <main className="main-content">
          <div className="missions-container">
            <h2 className="missions-title">Missions</h2>
            
            <div className="mission-list">
              <div className="mission-item" onClick={() => handleSpecificMissionClick(1, 'Ms. Preeti Priya')}>
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v.4"/>
                    <path d="M11 2v2h2V2"/>
                    <path d="M8 2v2h2V2"/>
                    <rect width="16" height="12" x="4" y="6" rx="2"/>
                    <path d="m9 11 2 2 4-4"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Mission 1</h3>
                  <p className="mission-instructor">Ms. Preeti Priya</p>
                </div>
                <div className="mission-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

              <div className="mission-item" onClick={() => handleSpecificMissionClick(2, 'Mr. Ram Mohan Vemuri')}>
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M9 2v20"/>
                    <path d="m13 7 5 5-5 5"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Mission 2</h3>
                  <p className="mission-instructor">Mr. Ram Mohan Vemuri</p>
                </div>
                <div className="mission-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

              <div className="mission-item" onClick={() => handleSpecificMissionClick(3, 'Mr. Veeraiah')}>
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Mission 3</h3>
                  <p className="mission-instructor">Mr. Veeraiah</p>
                </div>
                <div className="mission-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

              <div className="mission-item" onClick={() => handleSpecificMissionClick(4, 'Ms. Prafulla')}>
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="M6 8h.01"/>
                    <path d="M10 8h.01"/>
                    <path d="M14 8h.01"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Mission 4</h3>
                  <p className="mission-instructor">Ms. Prafulla</p>
                </div>
                <div className="mission-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

              <div className="mission-item" onClick={() => handleSpecificMissionClick(5, 'Mr. Gourav Saha')}>
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    <circle cx="10" cy="8" r="2"/>
                    <path d="m20 13.5-2-2-4 4-2-2-4 4"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Mission 5</h3>
                  <p className="mission-instructor">Mr. Gourav Saha</p>
                </div>
                <div className="mission-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="missions-nav-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </main>
      );
    } else if (currentPage === 'dashboard') {
      return (
        <main className="main-content">
          <div className="grid-container">
            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Mission')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="m2 17 10 5 10-5"/>
                    <path d="m2 12 10 5 10-5"/>
                  </svg>
                </div>
                <h2 className="card-title">Mission</h2>
              </div>
            </div>

            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Discussion Forum')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <circle cx="9" cy="9" r="1"/>
                    <circle cx="15" cy="9" r="1"/>
                    <circle cx="12" cy="13" r="1"/>
                  </svg>
                </div>
                <h2 className="card-title">Discussion<br />Forum</h2>
              </div>
            </div>

            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Leader Board')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-3-3m3 3-3-3m3 3v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h2 className="card-title">Leader<br />Board</h2>
              </div>
            </div>

            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Scheduler')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h2 className="card-title">Scheduler</h2>
              </div>
            </div>

            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Pitch Jam')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="card-title">Pitch Jam</h2>
              </div>
            </div>

            <div className="grid-item">
              <div className="card" onClick={() => handleCardClick('Feedback')}>
                <div className="card-image">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <h2 className="card-title">Feedback</h2>
              </div>
            </div>
          </div>
        </main>
      );
    }

    // Default home page
    return (
      <main className="main-content">
        <div className="welcome-container">
          <h2>Welcome to Your App</h2>
          <p>Click on Dashboard below to get started!</p>
        </div>
      </main>
    );
  };

  return (
    <div className="app-container">
      {/* Only show header and footer for authenticated main app pages */}
      {isAuthenticated && !['splash', 'login', 'signup', 'profile'].includes(currentPage) && (
        <header className="header">
          <div className="back-button" onClick={handleBackClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </div>
          <h1 className="header-title">
            {currentPage === 'dashboard' ? 'Dashboard' : 
             currentPage === 'missions' ? 'Missions' :
             currentPage === 'scheduler' ? 'Scheduler' :
             currentPage === 'pitchJam' ? 'Pitch Jam' :
             currentPage === 'leaderBoard' ? 'Leader Board' :
             currentPage === 'discussion' ? 'Discussion Forum' :
             currentPage === 'feedback' ? 'Feedback' :
             currentPage === 'participantDetail' && selectedParticipant ? selectedParticipant.name :
             currentPage === 'missionDetail' && selectedMission ? `Mission ${selectedMission.number}` : 'Home'}
          </h1>
        </header>
      )}

      {renderContent()}

      {/* Only show footer for authenticated main app pages */}
      {isAuthenticated && !['splash', 'login', 'signup', 'profile'].includes(currentPage) && (
        <footer className="footer">
          <div 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            <span className="nav-text">Home</span>
          </div>
          <div 
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={handleDashboardClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="7" height="9" x="3" y="3" rx="1"/>
              <rect width="7" height="5" x="14" y="3" rx="1"/>
              <rect width="7" height="9" x="14" y="12" rx="1"/>
              <rect width="7" height="5" x="3" y="16" rx="1"/>
            </svg>
            <span className="nav-text">Dashboard</span>
          </div>
          <div 
            className={`nav-item ${currentPage === 'discussion' ? 'active' : ''}`}
            onClick={handleDiscussionClick}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="nav-text">Discussion</span>
          </div>
          <div 
            className={`nav-item ${currentPage === 'feedback' ? 'active' : ''}`}
            onClick={handleFeedbackClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            <span className="nav-text">My Notes</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;