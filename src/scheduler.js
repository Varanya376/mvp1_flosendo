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
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
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
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
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

// Export the components
export { Scheduler, NewEventModal };