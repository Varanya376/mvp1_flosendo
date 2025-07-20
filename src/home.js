import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const handleMissionClick = () => {
    setCurrentPage('missions');
  };

  const handleCardClick = (cardName) => {
    if (cardName === 'Mission') {
      setCurrentPage('missions');
    } else {
      alert(`You clicked on ${cardName}! This feature will be available soon.`);
    }
  };

  const renderContent = () => {
    if (currentPage === 'missions') {
      return (
        <main className="main-content">
          <div className="missions-container">
            <h2 className="missions-title">Missions</h2>
            
            <div className="mission-list">
              <div className="mission-item">
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

              <div className="mission-item">
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

              <div className="mission-item">
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

              <div className="mission-item">
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

              <div className="mission-item">
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
              <div className="card" onClick={() => handleMissionClick()}>
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
      <header className="header">
        <div className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </div>
        <h1 className="header-title">
          {currentPage === 'dashboard' ? 'Dashboard' : 
           currentPage === 'missions' ? 'Missions' : 'Home'}
        </h1>
      </header>

      {renderContent()}

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
        <div className="nav-item">
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
    </div>
  );
};

export default App;