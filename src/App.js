
import React, { useState } from 'react';
import './App.css';

// Scheduler Component
const Scheduler = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState(20);
  const [showNewEvent, setShowNewEvent] = useState(false);

  const calendarDays = [
    { date: 19, day: 'Fri', isActive: false },
    { date: 20, day: 'Sat', isActive: true },
    { date: 21, day: 'Sun', isActive: false },
    { date: 22, day: 'Mon', isActive: false }
  ];

  const events = [
    {
      id: 1,
      title: 'EDEN Day 1',
      time: '10:30 AM - 11:30 AM',
      timeSlot: '10 am',
      color: '#f0f0f0',
      textColor: '#333'
    },
    {
      id: 2,
      title: 'EDEN Day 2',
      time: '12:40 PM - 1:40 PM',
      timeSlot: '12 pm',
      color: '#E8B4FF',
      textColor: '#333'
    }
  ];

  const timeSlots = [
    '10 am',
    '11 am', 
    '12 pm',
    '01 pm',
    '02 pm'
  ];

  return (
    <div className="auth-container">
      <div className="auth-card scheduler-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-dashboard')}>
          ←
        </button>
        
        <div className="scheduler-header">
          <h2 className="scheduler-title">Scheduler</h2>
          <button 
            className="add-event-btn"
            onClick={() => setShowNewEvent(true)}
          >
            +
          </button>
        </div>

        <div className="date-header">
          <h3 className="date-title">May, 20</h3>
          <p className="task-count">15 task today</p>
        </div>

        <div className="calendar-row">
          {calendarDays.map((day) => (
            <div 
              key={day.date}
              className={`calendar-day ${day.isActive ? 'active' : ''}`}
              onClick={() => setSelectedDate(day.date)}
            >
              <span className="day-number">{day.date}</span>
              <span className="day-name">{day.day}</span>
            </div>
          ))}
        </div>

        <div className="schedule-timeline">
          {timeSlots.map((timeSlot) => {
            const event = events.find(e => e.timeSlot === timeSlot);
            return (
              <div key={timeSlot} className="timeline-row">
                <div className="time-label">{timeSlot}</div>
                <div className="timeline-content">
                  {event && (
                    <div 
                      className="event-card"
                      style={{ 
                        backgroundColor: event.color,
                        color: event.textColor 
                      }}
                    >
                      <h4 className="event-title">{event.title}</h4>
                      <p className="event-time">{event.time}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
          <div className="nav-item active">
            <span className="nav-icon">📅</span>
            <span className="nav-label">Calendar</span>
          </div>
        </div>

        {/* New Event Modal */}
        {showNewEvent && (
          <NewEventModal 
            onClose={() => setShowNewEvent(false)}
            onSave={(eventData) => {
              console.log('New event:', eventData);
              setShowNewEvent(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
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

// My Notes Component
const MyNotes = ({ onNavigate }) => {
  const [expandedNote, setExpandedNote] = useState(null);

  const notes = [
    {
      id: 1,
      title: 'Feedback',
      content: 'Refine the introduction part\nList the clear storyline of pitch deck',
      color: '#E8F8F5',
      category: 'feedback'
    },
    {
      id: 2,
      title: 'To Do List',
      content: 'Refine the introduction part\nList the clear storyline of pitch deck',
      color: '#F3E8FF',
      category: 'todo'
    }
  ];

  const toggleNote = (noteId) => {
    setExpandedNote(expandedNote === noteId ? null : noteId);
  };

  return (
    <div className="auth-container">
      <div className="auth-card notes-card">
        <div className="status-bar">
        </div>
        
        <div className="notes-header">
          <button className="back-arrow" onClick={() => onNavigate('student-dashboard')}>
            ←
          </button>
          <h2 className="notes-title">My Notes</h2>
          <button 
            className="add-note-btn"
            onClick={() => onNavigate('new-note')}
          >
            +
          </button>
        </div>

        <div className="notes-search">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search notes..."
              className="notes-search-input"
            />
          </div>
        </div>
        
        <div className="notes-list">
          {notes.map((note) => (
            <div 
              key={note.id}
              className="note-item"
              style={{ backgroundColor: note.color }}
            >
              <div 
                className="note-header"
                onClick={() => toggleNote(note.id)}
              >
                <h4 className="note-title">{note.title}</h4>
                <span className={`expand-arrow ${expandedNote === note.id ? 'expanded' : ''}`}>
                  {expandedNote === note.id ? '▲' : '▼'}
                </span>
              </div>
              
              {expandedNote === note.id && (
                <div className="note-content">
                  <p className="note-text">{note.content}</p>
                </div>
              )}
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
          <div className="nav-item active">
            <span className="nav-icon">📚</span>
            <span className="nav-label">My Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// New Note Component
const NewNote = ({ onNavigate }) => {
  const [noteData, setNoteData] = useState({
    title: '',
    content: '',
    category: 'todo'
  });

  const handleInputChange = (field, value) => {
    setNoteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving note:', noteData);
    onNavigate('my-notes');
  };

  return (
    <div className="auth-container">
      <div className="auth-card new-note-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('my-notes')}>
          ←
        </button>
        
        <h2 className="new-note-title">New Note</h2>
        
        <div className="new-note-form">
          <div className="note-form-group">
            <div className="form-icon-note">📝</div>
            <div className="note-category-selector">
              <button 
                className={`category-btn ${noteData.category === 'todo' ? 'active' : ''}`}
                onClick={() => handleInputChange('category', 'todo')}
              >
                To Do List
              </button>
            </div>
          </div>

          <div className="note-content-area">
            <textarea
              placeholder="Refine the introduction part
List the clear storyline of pitch deck"
              value={noteData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              className="note-textarea"
              rows="8"
            />
          </div>

          <button 
            className="confirm-note-btn"
            onClick={handleSave}
            disabled={!noteData.content.trim()}
          >
            CONFIRM
          </button>
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
          <div className="nav-item active">
            <span className="nav-icon">📚</span>
            <span className="nav-label">My Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// New Event Modal Component
const NewEventModal = ({ onClose, onSave }) => {
  const [eventData, setEventData] = useState({
    title: '',
    participants: '',
    description: '',
    allDay: false,
    startDate: '10 Jul 2025',
    startTime: '8:00 AM',
    endDate: '10 Jul 2025',
    endTime: '9:00 AM'
  });

  const handleInputChange = (field, value) => {
    setEventData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(eventData);
  };

  return (
    <div className="modal-overlay">
      <div className="auth-card new-event-modal">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={onClose}>
          ←
        </button>

        <div className="new-event-header">
          <div className="event-organizer">
            <div className="organizer-avatar">👧</div>
            <div className="organizer-info">
              <h3 className="event-modal-title">New Event</h3>
              <p className="organizer-name">Organizer: Varshitha</p>
            </div>
          </div>
        </div>

        <div className="new-event-form">
          <div className="event-form-group">
            <div className="form-icon">🎯</div>
            <input
              type="text"
              placeholder="Title"
              value={eventData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="event-input"
            />
          </div>

          <div className="event-form-group">
            <div className="form-icon">👥</div>
            <input
              type="text"
              placeholder="Add other participants"
              value={eventData.participants}
              onChange={(e) => handleInputChange('participants', e.target.value)}
              className="event-input"
            />
          </div>

          <div className="event-form-group">
            <div className="form-icon">📝</div>
            <textarea
              placeholder="Description"
              value={eventData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="event-textarea"
              rows="3"
            />
          </div>

          <div className="all-day-toggle">
            <span className="toggle-label">All Day</span>
            <div 
              className={`toggle-switch ${eventData.allDay ? 'active' : ''}`}
              onClick={() => handleInputChange('allDay', !eventData.allDay)}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>

          {!eventData.allDay && (
            <div className="datetime-section">
              <div className="datetime-row">
                <span className="datetime-label">Starts</span>
                <div className="datetime-inputs">
                  <input
                    type="text"
                    value={eventData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="date-input"
                  />
                  <input
                    type="text"
                    value={eventData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="time-input"
                  />
                </div>
              </div>

              <div className="datetime-row">
                <span className="datetime-label">Ends</span>
                <div className="datetime-inputs">
                  <input
                    type="text"
                    value={eventData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="date-input"
                  />
                  <input
                    type="text"
                    value={eventData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="time-input"
                  />
                </div>
              </div>
            </div>
          )}

          <button 
            className="confirm-event-btn"
            onClick={handleSave}
            disabled={!eventData.title.trim()}
          >
            CONFIRM
          </button>
        </div>

        <div className="student-bottom-nav">
          <div className="nav-item">
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-label">Dashboard</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📚</span>
            <span className="nav-label">My Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};
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
};// Mission List Component
const MissionList = ({ onNavigate }) => {
  const missions = [
    {
      id: 1,
      title: "Mission 1",
      icon: "✏️",
      type: "assignment"
    },
    {
      id: 2,
      title: "Mission 2",
      icon: "📋",
      type: "project"
    },
    {
      id: 3,
      title: "Mission 3",
      icon: "👥",
      type: "group"
    },
    {
      id: 4,
      title: "Mission 4",
      icon: "💻",
      type: "digital"
    },
    {
      id: 5,
      title: "Mission 5",
      icon: "🌐",
      type: "web"
    }
  ];

  return (
    <div className="auth-container">
      <div className="auth-card mission-list-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-dashboard')}>
          ←
        </button>
        
        <h2 className="mission-list-title">Mission</h2>
        
        <div className="missions-container">
          {missions.map((mission) => (
            <div 
              key={mission.id}
              className="mission-list-item"
              onClick={() => onNavigate('mission-detail', { missionId: mission.id, missionTitle: mission.title })}
            >
              <div className="mission-item-left">
                <span className="mission-item-icon">{mission.icon}</span>
                <span className="mission-item-title">{mission.title}</span>
              </div>
              <span className="mission-arrow">→</span>
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
          <div className="nav-item active">
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

// Mission Detail Component (Enhanced)
const MissionDetail = ({ onNavigate, missionData }) => {
  const [expandedSections, setExpandedSections] = useState({
    courseOverview: false,
    lectureSlides: false,
    assignments: false,
    grades: false,
    quizzes: false,
    assessment: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const missionInfo = {
    title: missionData?.missionTitle || "Mission 1",
    instructor: "Mr. Brown",
    sections: {
      courseOverview: {
        icon: "📖",
        title: "Course Overview",
        duration: "1 hour",
        type: "Self study: 1 hour",
        hasContent: true
      },
      lectureSlides: {
        icon: "📊",
        title: "Lecture Slides",
        hasContent: true,
        items: [
          { name: "Lecture 1", downloadable: true, type: "pdf" },
          { name: "Lecture 2", downloadable: true, type: "pdf" }
        ]
      },
      assignments: {
        icon: "📝",
        title: "Assignments",
        hasContent: false,
        items: []
      },
      grades: {
        icon: "📈",
        title: "Grades",
        hasContent: false,
        items: []
      },
      quizzes: {
        icon: "❓",
        title: "Quizzes",
        hasContent: true,
        items: [
          { name: "Quiz 101", date: "May 20 2:30-3:0", type: "quiz" }
        ]
      },
      assessment: {
        icon: "📋",
        title: "Assessment",
        hasContent: true,
        items: [
          { name: "Quiz 101", date: "May 20 2:47-3:0", type: "assessment" }
        ]
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card mission-detail-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('mission-list')}>
          ←
        </button>
        
        <div className="mission-detail-header">
          <h2 className="mission-detail-title">{missionInfo.title}</h2>
          <p className="mission-detail-instructor">{missionInfo.instructor}</p>
        </div>
        
        <div className="mission-detail-content">
          {Object.entries(missionInfo.sections).map(([key, section]) => (
            <div key={key} className="mission-detail-section">
              <div 
                className="mission-detail-section-header"
                onClick={() => toggleSection(key)}
              >
                <div className="section-header-left">
                  <span className="section-header-icon">{section.icon}</span>
                  <span className="section-header-title">{section.title}</span>
                </div>
                <span className={`expand-arrow-detail ${expandedSections[key] ? 'expanded' : ''}`}>
                  {expandedSections[key] ? '▲' : '▼'}
                </span>
              </div>
              
              {expandedSections[key] && (
                <div className="mission-detail-section-content">
                  {key === 'courseOverview' && (
                    <div className="course-overview-detail-content">
                      <div className="overview-detail-item">
                        <span className="overview-detail-icon">🕐</span>
                        <span className="overview-detail-text">Duration: {section.duration}</span>
                      </div>
                      <div className="overview-detail-item">
                        <span className="overview-detail-icon">📚</span>
                        <span className="overview-detail-text">{section.type}</span>
                      </div>
                    </div>
                  )}
                  
                  {section.items && section.items.length > 0 && (
                    <div className="section-detail-items">
                      {section.items.map((item, index) => (
                        <div key={index} className="section-detail-item">
                          <div className="item-detail-info">
                            <div className="item-detail-main">
                              <span className="item-detail-icon">
                                {item.type === 'pdf' ? '📄' : 
                                 item.type === 'quiz' ? '❓' : 
                                 item.type === 'assessment' ? '📋' : '📄'}
                              </span>
                              <span className="item-detail-name">{item.name}</span>
                            </div>
                            {item.date && (
                              <span className="item-detail-date">{item.date}</span>
                            )}
                          </div>
                          {item.downloadable && (
                            <button 
                              className="download-detail-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Downloading ${item.name}`);
                              }}
                            >
                              ⬇
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {(!section.items || section.items.length === 0) && section.hasContent === false && (
                    <div className="empty-detail-section">
                      <p className="empty-detail-text">No items available</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Student Home Component
const StudentHome = ({ onNavigate }) => {
  const studentName = "Varshitha";
  
  const todaysTasks = [
    {
      id: 1,
      title: "Task 1",
      time: "11:15 AM - 12:20 PM",
      type: "lecture"
    },
    {
      id: 2,
      title: "Task 2",
      time: "2:30 PM - 3:30 PM", 
      type: "assignment"
    },
    {
      id: 3,
      title: "Task 3",
      time: "5:15 PM - 6:00 PM",
      type: "quiz"
    }
  ];

  const progressData = [
    { name: "Assessment 1", score: 83, color: "#9B59B6" },
    { name: "Assessment 2", score: 50, color: "#FF6B9D" },
    { name: "Assessment 3", score: 50, color: "#3498DB" }
  ];

  return (
    <div className="auth-container">
      <div className="auth-card student-home-card">
        <div className="status-bar">
        </div>
        
        <div className="student-home-header">
          <div className="student-greeting">
            <h2 className="greeting-text">Hello {studentName}!</h2>
            <span className="notification-bell">🔔</span>
          </div>
          <div 
            className="student-profile-icon"
            onClick={() => onNavigate('student-profile')}
          >
            👧
          </div>
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search" 
              className="search-input-field"
            />
          </div>
        </div>

        <div className="student-progress-section">
          <h3 className="section-title">Progress</h3>
          <div className="progress-circles-container">
            {progressData.map((item, index) => (
              <div key={index} className="progress-circle-item">
                <div className="circular-progress-student">
                  <svg className="progress-ring" width="60" height="60">
                    <circle
                      className="progress-ring-bg"
                      cx="30"
                      cy="30"
                      r="25"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      className="progress-ring-fill"
                      cx="30"
                      cy="30"
                      r="25"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 25}`}
                      strokeDashoffset={`${2 * Math.PI * 25 * (1 - item.score / 100)}`}
                      style={{ stroke: item.color }}
                    />
                  </svg>
                  <div className="progress-value-student">
                    <span className="progress-percentage">{item.score}%</span>
                  </div>
                </div>
                <p className="progress-label-student">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="todays-tasks-section">
          <h3 className="section-title">Today's Tasks</h3>
          <div className="tasks-list">
            {todaysTasks.map((task) => (
              <div 
                key={task.id} 
                className={`task-item task-${task.type}`}
                onClick={() => onNavigate('mission-detail', { taskId: task.id, taskTitle: task.title, missionTitle: task.title })}
              >
                <div className="task-icon">
                  {task.type === 'lecture' ? '📝' : task.type === 'assignment' ? '📊' : '❓'}
                </div>
                <div className="task-details">
                  <h4 className="task-title">{task.title}</h4>
                  <p className="task-time">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="student-bottom-nav">
          <div className="nav-item active">
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

        <button 
          className="join-class-fab"
          onClick={() => onNavigate('join-class')}
          title="Join Class"
        >
          +
        </button>
      </div>
    </div>
  );
};

// Student Dashboard Component
const StudentDashboard = ({ onNavigate }) => {
  const dashboardItems = [
    { 
      id: 1, 
      title: "Mission", 
      icon: "🎯", 
      color: "#E8F5E8",
      onClick: () => onNavigate('mission-list')
    },
    { 
      id: 2, 
      title: "Leader Board", 
      icon: "🏆", 
      color: "#FFE8F0",
      onClick: () => onNavigate('leaderboard')
    },
    { 
      id: 3, 
      title: "Scheduler", 
      icon: "📅", 
      color: "#E8F8FF",
      onClick: () => onNavigate('scheduler')
    },
    { 
      id: 4, 
      title: "Pitch Jam", 
      icon: "🎤", 
      color: "#F0FFE8",
      onClick: () => onNavigate('pitch-jam')
    }
  ];

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-home')}>
          ←
        </button>
        
        <h2 className="dashboard-page-title">Dashboard</h2>
        
        <div className="dashboard-grid">
          {dashboardItems.map((item) => (
            <div 
              key={item.id}
              className="dashboard-grid-item"
              style={{ backgroundColor: item.color }}
              onClick={item.onClick}
            >
              <div className="dashboard-item-icon">{item.icon}</div>
              <h3 className="dashboard-item-title">{item.title}</h3>
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
          <div className="nav-item active">
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
          <div 
            className="nav-item"
            onClick={() => onNavigate('scheduler')}
          >
            <span className="nav-icon">📅</span>
            <span className="nav-label">Calendar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
        
// Mission Details Component
const MissionDetails = ({ onNavigate, missionData }) => {
  const [expandedSections, setExpandedSections] = useState({
    courseOverview: true,
    lectureSlides: false,
    assignments: false,
    grades: false,
    quizzes: false,
    assessment: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const missionInfo = {
    title: missionData?.taskTitle || "Mission 1",
    instructor: "Mr. Brown",
    sections: {
      courseOverview: {
        icon: "📖",
        title: "Course Overview",
        duration: "1 hour",
        type: "Self study"
      },
      lectureSlides: {
        icon: "📊",
        title: "Lecture Slides",
        items: [
          { name: "Lecture 1", downloadable: true },
          { name: "Lecture 2", downloadable: true }
        ]
      },
      assignments: {
        icon: "📝",
        title: "Assignments",
        items: [
          { name: "Assignment 1", downloadable: true },
          { name: "Assignment 2", downloadable: true }
        ]
      },
      grades: {
        icon: "📈",
        title: "Grades",
        items: []
      },
      quizzes: {
        icon: "❓",
        title: "Quizzes",
        items: [
          { name: "Quiz 101", date: "May 21 2:30-3:0" }
        ]
      },
      assessment: {
        icon: "📋",
        title: "Assessment",
        items: [
          { name: "Quiz 101", date: "May 21 2:47-3:0" }
        ]
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card mission-details-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-home')}>
          ←
        </button>
        
        <div className="mission-header">
          <h2 className="mission-title">{missionInfo.title}</h2>
          <p className="mission-instructor">{missionInfo.instructor}</p>
        </div>
        
        <div className="mission-content">
          {Object.entries(missionInfo.sections).map(([key, section]) => (
            <div key={key} className="mission-section">
              <div 
                className="mission-section-header"
                onClick={() => toggleSection(key)}
              >
                <div className="section-left">
                  <span className="section-icon">{section.icon}</span>
                  <span className="section-title">{section.title}</span>
                </div>
                <span className={`expand-arrow ${expandedSections[key] ? 'expanded' : ''}`}>
                  {expandedSections[key] ? '▲' : '▼'}
                </span>
              </div>
              
              {expandedSections[key] && (
                <div className="mission-section-content">
                  {key === 'courseOverview' && (
                    <div className="course-overview-content">
                      <div className="overview-item">
                        <span className="overview-icon">🕐</span>
                        <span className="overview-text">Duration: {section.duration}</span>
                      </div>
                      <div className="overview-item">
                        <span className="overview-icon">📚</span>
                        <span className="overview-text">{section.type}</span>
                      </div>
                    </div>
                  )}
                  
                  {section.items && section.items.length > 0 && (
                    <div className="section-items">
                      {section.items.map((item, index) => (
                        <div key={index} className="section-item">
                          <div className="item-info">
                            <span className="item-name">{item.name}</span>
                            {item.date && (
                              <span className="item-date">{item.date}</span>
                            )}
                          </div>
                          {item.downloadable && (
                            <button className="download-btn">⬇</button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.items && section.items.length === 0 && (
                    <div className="empty-section">
                      <p className="empty-text">No items available</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mission-action-button">
          <button className="start-mission-btn">
            ▶ Start Mission
          </button>
        </div>
      </div>
    </div>
  );
};

// Student Profile Component
const StudentProfile = ({ onNavigate }) => {
  const profileData = {
    name: "Varshitha",
    email: "varshitha@london.edu",
    batch: "2025-2026",
    grade: "8",
    school: "London School",
    class: "Mathematics 101"
  };

  const handleSignOut = () => {
    console.log('Student signing out...');
    onNavigate('login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-home')}>
          ←
        </button>
        
        <h2 className="profile-title">Profile</h2>
        
        <div className="profile-content">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <span>👧</span>
            </div>
            <div className="profile-check">✓</div>
            <h3 className="profile-name">{profileData.name}</h3>
            <p className="profile-email">{profileData.email}</p>
          </div>

          <div className="profile-details">
            <div className="profile-row">
              <span className="profile-label">Batch:</span>
              <span className="profile-value">{profileData.batch}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Grade:</span>
              <span className="profile-value">{profileData.grade}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">School:</span>
              <span className="profile-value">{profileData.school}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Class:</span>
              <span className="profile-value">{profileData.class}</span>
            </div>
          </div>

          <button className="signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>

          <div className="help-support">
            <button className="help-link">
              <span className="help-icon">❓</span>
              Help and support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// TeacherHome Component (existing)
const TeacherHome = ({ onNavigate }) => {
  const teacherName = "Alex Thompson";
  const teacherRole = "Teacher";

  return (
    <div className="auth-container">
      <div className="auth-card home-card">
        <div className="status-bar">
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

          <div className="dashboard-card missions-card"
            onClick={() => onNavigate('upload-mission')}
          >
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

// StudentProgress Component (existing)
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

// AddStudent Component (existing)
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

// UploadMission Component (existing)
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
    onNavigate('teacher-home');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
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

// Login Component (existing)
const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login:', { email, password });
    onNavigate('role-selection');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <div className="decorative-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="logo-container">
          <div className="logo-background">
            <span className="logo-icon">🎓</span>
          </div>
          <h1 className="logo">FLOSENDO</h1>
        </div>
        <p className="tagline">Welcome to Educity</p>
        
        <div className="auth-form">
          <button 
            type="button" 
            className="login-button"
            onClick={() => onNavigate('login-form')}
          >
            LOG IN
          </button>
          
          <button 
            type="button" 
            className="signup-button"
            onClick={() => onNavigate('signup')}
          >
            SIGN UP
          </button>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          
          <button 
            type="button" 
            className="forgot-password"
            onClick={() => onNavigate('otp')}
          >
            Forgot Password?
          </button>
          
          <button onClick={handleSubmit} className="confirm-button">
            CONFIRM
          </button>
        </div>
        
        <p className="terms">
          By continuing to use this app, you agree to accept our<br />
          Privacy Policy & Terms of Service.
        </p>
      </div>
    </div>
  );
};

// Signup Component (existing)
const Signup = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');

  const handleSubmit = () => {
    console.log('Signup:', { fullName, email, password });
    onNavigate('otp');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <h1 className="logo">FLOSENDO</h1>
        
        <div className="auth-tabs">
          <button 
            className="tab-button"
            onClick={() => onNavigate('login')}
          >
            LOG IN
          </button>
          <button className="tab-button active">SIGN UP</button>
        </div>
        
        <div className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input-field"
          />
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          
          <input
            type="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          
          <input
            type="password"
            placeholder="Re-enter Password"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
            className="input-field"
          />
          
          <button onClick={handleSubmit} className="confirm-button">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

// OTP Verification Component (existing)
const OTPVerification = ({ onNavigate }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    console.log('OTP:', otp.join(''));
    onNavigate('role-selection');
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('signup')}>
          ←
        </button>
        
        <h2 className="section-title">OTP Verification</h2>
        <p className="section-subtitle">
          Enter the 6 digit code we've sent to<br />
          your registered email address.
        </p>
        
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input"
            />
          ))}
        </div>
        
        <button className="resend-link" onClick={handleResend}>
          Don't receive? <span className="resend-text">Resend</span>
        </button>
        
        <button onClick={handleVerify} className="confirm-button">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

// Role Selection Component (existing)
const RoleSelection = ({ onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleContinue = () => {
    if (selectedRole) {
      console.log('Selected role:', selectedRole);
      if (selectedRole === 'teacher') {
        onNavigate('teacher-home');
      } else {
        onNavigate('student-home');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('otp')}>
          ←
        </button>
        
        <h2 className="section-title">Select your Role</h2>
        
        <div className="role-container">
          <div
            className={`role-card ${selectedRole === 'teacher' ? 'selected' : ''}`}
            onClick={() => setSelectedRole('teacher')}
          >
            <div className="role-icon-wrapper teacher-wrapper">
              <div className="role-icon teacher-icon">👨‍🏫</div>
            </div>
            <p className="role-label">Teacher</p>
          </div>
          
          <div
            className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
            onClick={() => setSelectedRole('student')}
          >
            <div className="role-icon-wrapper student-wrapper">
              <div className="role-icon student-icon">👨‍🎓</div>
            </div>
            <p className="role-label">Student</p>
          </div>
        </div>
        
        <button 
          onClick={handleContinue} 
          className="confirm-button"
          disabled={!selectedRole}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};

// Create Class Component (existing)
const CreateClass = ({ onNavigate }) => {
  const [className, setClassName] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showStudentList, setShowStudentList] = useState(false);

  const availableStudents = [
    { id: 1, name: 'Alex Johnson', avatar: '👦' },
    { id: 2, name: 'Sarah Williams', avatar: '👧' },
    { id: 3, name: 'Mike Davis', avatar: '👦' },
    { id: 4, name: 'Emma Brown', avatar: '👧' },
    { id: 5, name: 'Chris Wilson', avatar: '👦' },
    { id: 6, name: 'Lisa Anderson', avatar: '👧' },
  ];

  const handleSubmit = () => {
    console.log('Create class:', { className, selectedStudents });
  };

  const toggleStudent = (student) => {
    setSelectedStudents(prev => {
      const exists = prev.find(s => s.id === student.id);
      if (exists) {
        return prev.filter(s => s.id !== student.id);
      } else {
        return [...prev, student];
      }
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('teacher-home')}>
          ←
        </button>
        
        <h2 className="section-title">Create a Class</h2>
        
        <div className="auth-form">
          <label className="input-label">Class Name</label>
          <input
            type="text"
            placeholder="Enter class name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="input-field"
          />
          
          <label className="input-label">Students</label>
          <div className="students-section">
            <div className="students-preview">
              {selectedStudents.length === 0 ? (
                <div className="empty-students">
                  <div className="empty-avatar-group">
                    <div className="empty-avatar">👤</div>
                    <div className="empty-avatar">👤</div>
                    <div className="empty-avatar">👤</div>
                  </div>
                  <p className="empty-text">No students added yet</p>
                </div>
              ) : (
                <div className="selected-students-grid">
                  {selectedStudents.slice(0, 6).map((student, index) => (
                    <div key={student.id} className="student-avatar-container">
                      <div className="student-avatar">{student.avatar}</div>
                      <span className="student-name">{student.name.split(' ')[0]}</span>
                    </div>
                  ))}
                  {selectedStudents.length > 6 && (
                    <div className="student-avatar-container">
                      <div className="student-avatar more">+{selectedStudents.length - 6}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <button 
              type="button" 
              className="add-from-list-btn"
              onClick={() => setShowStudentList(!showStudentList)}
            >
              📋 Add from List
            </button>
          </div>
          
          {showStudentList && (
            <div className="student-list-modal">
              <div className="student-list-header">
                <h3>Select Students</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowStudentList(false)}
                >
                  ✕
                </button>
              </div>
              <div className="student-list">
                {availableStudents.map(student => (
                  <div 
                    key={student.id} 
                    className={`student-list-item ${selectedStudents.find(s => s.id === student.id) ? 'selected' : ''}`}
                    onClick={() => toggleStudent(student)}
                  >
                    <div className="student-info">
                      <span className="student-list-avatar">{student.avatar}</span>
                      <span className="student-list-name">{student.name}</span>
                    </div>
                    <div className="student-checkbox">
                      {selectedStudents.find(s => s.id === student.id) && '✓'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            onClick={handleSubmit} 
            className="confirm-button"
            style={{ marginTop: 'auto' }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

// Join Class Component (updated)
const JoinClass = ({ onNavigate }) => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = () => {
    if (selectedClass) {
      console.log('Join class:', selectedClass);
      onNavigate('student-home');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('student-home')}>
          ←
        </button>
        
        <h2 className="section-title">Join a Class</h2>
        
        <div className="auth-form">
          <label className="input-label">Class Name</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="input-field select-field"
          >
            <option value="">Select a class</option>
            <option value="class1">Mathematics 101</option>
            <option value="class2">Science Lab</option>
            <option value="class3">English Literature</option>
          </select>
          
          <button 
            onClick={handleSubmit} 
            className="confirm-button"
            disabled={!selectedClass}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

// Teacher Profile Component (existing)
const TeacherProfile = ({ onNavigate }) => {
  const profileData = {
    name: "Alex",
    email: "teacher@london.edu",
    batch: "2025-2026",
    grade: "8",
    school: "London School",
    department: "Mathematics"
  };

  const handleSignOut = () => {
    console.log('Teacher signing out...');
    onNavigate('login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('teacher-home')}>
          ←
        </button>
        
        <h2 className="profile-title">Profile</h2>
        
        <div className="profile-content">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <span>👨‍🏫</span>
            </div>
            <div className="profile-check">✓</div>
            <h3 className="profile-name">{profileData.name}</h3>
            <p className="profile-email">{profileData.email}</p>
          </div>

          <div className="profile-details">
            <div className="profile-row">
              <span className="profile-label">Batch:</span>
              <span className="profile-value">{profileData.batch}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Grade:</span>
              <span className="profile-value">{profileData.grade}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">School:</span>
              <span className="profile-value">{profileData.school}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Department:</span>
              <span className="profile-value">{profileData.department}</span>
            </div>
          </div>

          <button className="signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>

          <div className="help-support">
            <button className="help-link">
              <span className="help-icon">❓</span>
              Help and support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Students List Component (existing)
const StudentsList = ({ onNavigate }) => {
  const students = [
    { id: 1, name: 'Varshitha', score: 100, avatar: '👧', medal: '🏆' },
    { id: 2, name: 'Jennie', score: 98, avatar: '👧', medal: '🏆' },
    { id: 3, name: 'Mino', score: 90, avatar: '👦', medal: '🏆' },
    { id: 4, name: 'Zico', score: 88, avatar: '👦', medal: '🏆' },
    { id: 5, name: 'Loopy', score: 85, avatar: '👧', medal: '🏆' },
  ];

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
          </div>
        </div>
        
        <button className="back-arrow" onClick={() => onNavigate('teacher-home')}>
          ←
        </button>
        
        <div className="students-header">
          <h2 className="students-title">Students</h2>
          <button className="add-student-icon" onClick={() => onNavigate('create-class')}>
            +
          </button>
        </div>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter student's name"
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="students-list">
          {students.map((student, index) => (
            <div 
              key={student.id} 
              className="student-row"
              onClick={() => onNavigate('student-progress', { studentId: student.id, studentName: student.name })}
            >
              <div className="student-left">
                <span className="student-medal">{student.medal}</span>
                <span className="student-list-avatar">{student.avatar}</span>
                <span className="student-list-name">{student.name}</span>
              </div>
              <span className="student-score">{student.score}</span>
            </div>
          ))}
        </div>

        <button 
          className="add-students-btn"
          onClick={() => onNavigate('add-student')}
        >
          Add Students
        </button>
      </div>
    </div>
  );
};

// Main App Component (updated)
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [navigationData, setNavigationData] = useState(null);

  const handleNavigate = (screen, data = null) => {
    setCurrentScreen(screen);
    setNavigationData(data);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'signup':
        return <Signup onNavigate={handleNavigate} />;
      case 'otp':
        return <OTPVerification onNavigate={handleNavigate} />;
      case 'role-selection':
        return <RoleSelection onNavigate={handleNavigate} />;
      case 'create-class':
        return <CreateClass onNavigate={handleNavigate} />;
      case 'join-class':
        return <JoinClass onNavigate={handleNavigate} />;
      case 'teacher-home':
        return <TeacherHome onNavigate={handleNavigate} />;
      case 'teacher-profile':
        return <TeacherProfile onNavigate={handleNavigate} />;
      case 'students-list':
        return <StudentsList onNavigate={handleNavigate} />;
      case 'student-progress':
        return <StudentProgress onNavigate={handleNavigate} studentData={navigationData} />;
      case 'add-student':
        return <AddStudent onNavigate={handleNavigate} />;
      case 'upload-mission':
        return <UploadMission onNavigate={handleNavigate} />;
      case 'student-home':
        return <StudentHome onNavigate={handleNavigate} />;
      case 'student-dashboard':
        return <StudentDashboard onNavigate={handleNavigate} />;
      case 'student-profile':
        return <StudentProfile onNavigate={handleNavigate} />;
      case 'mission-list':
        return <MissionList onNavigate={handleNavigate} />;
      case 'mission-detail':
        return <MissionDetail onNavigate={handleNavigate} missionData={navigationData} />;
      case 'mission-details':
        return <MissionDetails onNavigate={handleNavigate} missionData={navigationData} />;
      case 'leaderboard':
        return <Leaderboard onNavigate={handleNavigate} />;
      case 'scheduler':
        return <Scheduler onNavigate={handleNavigate} />;
      case 'pitch-jam':
        return <PitchJam onNavigate={handleNavigate} />;
      case 'my-notes':
        return <MyNotes onNavigate={handleNavigate} />;
      case 'new-note':
        return <NewNote onNavigate={handleNavigate} />;
      default:
        return <Login onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      {renderScreen()}
    </div>
  );
};

export default App;