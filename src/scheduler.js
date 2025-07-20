import React, { useState } from 'react';

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(20);
  const [showNewEvent, setShowNewEvent] = useState(false);

  const handleDateClick = (date) => {
    console.log(`Date ${date} clicked`);
    setSelectedDate(date);
  };

  const handleEventClick = (eventName) => {
    console.log(`Event clicked: ${eventName}`);
    alert(`Opening ${eventName}...`);
  };

  const handleNewEventClick = () => {
    console.log('New event clicked');
    setShowNewEvent(true);
  };

  const closeNewEvent = () => {
    setShowNewEvent(false);
  };

  const handleCreateEvent = () => {
    console.log('Creating new event');
    alert('Event created successfully!');
    setShowNewEvent(false);
  };

  return (
    <main className="main-content">
      <div className="scheduler-container">
        <div className="scheduler-header">
          <h2 className="scheduler-title">May, 20 ⚡</h2>
          <span className="scheduler-tasks">15 task today</span>
        </div>

        {/* Calendar Section */}
        <div className="calendar-section">
          <div className="calendar-dates">
            <div 
              className={`calendar-date ${selectedDate === 19 ? 'active' : ''}`}
              onClick={() => handleDateClick(19)}
            >
              <span className="date-number">19</span>
              <span className="date-day">Fri</span>
            </div>
            <div 
              className={`calendar-date ${selectedDate === 20 ? 'active selected' : ''}`}
              onClick={() => handleDateClick(20)}
            >
              <span className="date-number">20</span>
              <span className="date-day">Sat</span>
            </div>
            <div 
              className={`calendar-date ${selectedDate === 21 ? 'active' : ''}`}
              onClick={() => handleDateClick(21)}
            >
              <span className="date-number">21</span>
              <span className="date-day">Sun</span>
            </div>
            <div 
              className={`calendar-date ${selectedDate === 22 ? 'active' : ''}`}
              onClick={() => handleDateClick(22)}
            >
              <span className="date-number">22</span>
              <span className="date-day">Mon</span>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="events-section">
          <div className="time-slot">
            <span className="time-label">10 am</span>
            <div className="time-line"></div>
          </div>

          <div 
            className="event-item eden-day-1"
            onClick={() => handleEventClick('Eden day 1')}
          >
            <div className="event-content">
              <h4 className="event-title">Eden day 1</h4>
              <div className="event-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <span className="event-time">10:00am - 11:30am</span>
            </div>
          </div>

          <div className="time-slot">
            <span className="time-label">11 am</span>
            <div className="time-line"></div>
          </div>

          <div 
            className="event-item eden-day-2"
            onClick={() => handleEventClick('Eden day 2')}
          >
            <div className="event-content">
              <h4 className="event-title">Eden day 2</h4>
              <div className="event-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <span className="event-time">11:40am - 12:40am</span>
            </div>
          </div>

          <div className="time-slot">
            <span className="time-label">12 pm</span>
            <div className="time-line"></div>
          </div>

          <div className="time-slot">
            <span className="time-label">01 pm</span>
            <div className="time-line"></div>
          </div>

          <div 
            className="event-item organizational-quiz"
            onClick={() => handleEventClick('Organizational Behaviour Quiz')}
          >
            <div className="event-content">
              <h4 className="event-title">Organizational Behaviour Quiz</h4>
              <div className="event-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <span className="event-time">01:30pm - 1:40pm</span>
            </div>
          </div>

          <div className="time-slot">
            <span className="time-label">02 pm</span>
            <div className="time-line"></div>
          </div>

          <div className="time-slot">
            <span className="time-label">03 pm</span>
            <div className="time-line"></div>
          </div>
        </div>

        {/* Add Event Button */}
        <div className="add-event-button" onClick={handleNewEventClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>

        {/* New Event Modal */}
        {showNewEvent && (
          <div className="modal-overlay" onClick={closeNewEvent}>
            <div className="new-event-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>New Event</h3>
                <button className="close-button" onClick={closeNewEvent}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
              
              <div className="modal-content">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" placeholder="Event title..." />
                </div>
                
                <div className="form-group">
                  <label>Add other participants</label>
                  <input type="text" placeholder="Enter email addresses..." />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="text" value="Sun, 21st May" readOnly />
                    <span className="form-note">Today</span>
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="text" value="12:00 - 13:00" readOnly />
                    <span className="form-note">Duration: 1 Hour</span>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>All Day</label>
                  <div className="toggle-switch">
                    <input type="checkbox" id="allDay" />
                    <label htmlFor="allDay" className="toggle-label"></label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Repeat</label>
                  <select>
                    <option>None</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Description</label>
                  <textarea placeholder="Add description..."></textarea>
                </div>
                
                <button className="create-event-button" onClick={handleCreateEvent}>
                  Create Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Scheduler;