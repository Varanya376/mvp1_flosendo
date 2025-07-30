// PitchJam Component
const PitchJam = ({ onNavigate }) => {
  const [activeCall, setActiveCall] = useState(null);

  const pitchSessions = [
    {
      id: 1,
      name: 'Ivan',
      time: '9:30 AM',
      company: 'Adobe',
      logo: '🎨',
      logoColor: '#FF0000'
    },
    {
      id: 2,
      name: 'Vedika',
      time: '9:40 AM',
      company: 'Accenture',
      logo: '📊',
      logoColor: '#A100FF'
    },
    {
      id: 3,
      name: 'Varshitha',
      time: '9:50 AM',
      company: 'BCG',
      logo: '💼',
      logoColor: '#00B9CE'
    },
    {
      id: 4,
      name: 'Wang',
      time: '10:00 AM',
      company: 'Microsoft',
      logo: '🖥️',
      logoColor: '#0078D4'
    },
    {
      id: 5,
      name: 'Goel',
      time: '10:20 AM',
      company: 'Cisco',
      logo: '🌐',
      logoColor: '#1BA0D7'
    }
  ];

  const handleJoinCall = (session) => {
    setActiveCall(session);
  };

  if (activeCall) {
    return <PitchCallInterface session={activeCall} onEndCall={() => setActiveCall(null)} onNavigate={onNavigate} />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card pitchjam-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-dashboard')}>
          ←
        </button>
        
        <h2 className="pitchjam-title">Pitch Jam</h2>
        
        <div className="pitch-sessions-list">
          {pitchSessions.map((session) => (
            <div 
              key={session.id}
              className="pitch-session-item"
              onClick={() => handleJoinCall(session)}
            >
              <div className="session-left">
                <div 
                  className="company-logo"
                  style={{ backgroundColor: session.logoColor }}
                >
                  <span className="logo-icon">{session.logo}</span>
                </div>
                <div className="session-info">
                  <h4 className="session-name">{session.name}</h4>
                  <p className="session-time">{session.time}</p>
                </div>
              </div>
              <span className="session-arrow">→</span>
            </div>
          ))}
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
            onClick={() => onNavigate('my-notes')}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-label">My Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pitch Call Interface Component
const PitchCallInterface = ({ session, onEndCall, onNavigate }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callDuration, setCallDuration] = useState('6:03');

  return (
    <div className="auth-container">
      <div className="auth-card pitch-call-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        
        <button className="back-arrow" onClick={onEndCall}>
          ←
        </button>
        
        <h2 className="call-title">Pitch Jam</h2>
        
        <div className="call-interface">
          <div className="caller-info">
            <div className="caller-avatar">
              <span className="avatar-placeholder">👤</span>
            </div>
            <h3 className="caller-name">{session.name}</h3>
            <p className="caller-email">{session.name.toLowerCase()}@london.edu</p>
          </div>

          <div className="call-video-area">
            <div className="video-placeholder">
              <div 
                className="call-duration-badge"
                style={{ backgroundColor: '#FF0000' }}
              >
                <span className="duration-dot">●</span>
                <span className="duration-text">{callDuration}</span>
              </div>
              <div className="video-avatar">
                <span className="video-avatar-icon">👤</span>
              </div>
            </div>
          </div>

          <div className="call-controls">
            <button 
              className={`control-btn ${isMuted ? 'muted' : ''}`}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? '🔇' : '🎤'}
            </button>
            
            <button 
              className={`control-btn ${isVideoOff ? 'video-off' : ''}`}
              onClick={() => setIsVideoOff(!isVideoOff)}
            >
              {isVideoOff ? '📹' : '📷'}
            </button>
            
            <button 
              className="control-btn end-call-btn"
              onClick={onEndCall}
            >
              📞
            </button>
          </div>

          <div className="call-footer">
            <p className="help-text">Help and support</p>
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
            onClick={() => onNavigate('my-notes')}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-label">My Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the components
export { PitchJam, PitchCallInterface };