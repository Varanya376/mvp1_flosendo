import React, { useState } from 'react';

const PitchJam = ({ onParticipantSelect }) => {
  const [participants] = useState([
    {
      id: 1,
      name: 'Ivan',
      company: 'Adobe',
      logo: '🔺',
      bgColor: '#ff0000',
      time: '9:30am'
    },
    {
      id: 2,
      name: 'Vedika',
      company: 'APT',
      logo: 'APT',
      bgColor: '#ff6b35',
      time: '9:40am'
    },
    {
      id: 3,
      name: 'Varshitha',
      company: 'BCG',
      logo: 'BCG',
      bgColor: '#00b894',
      time: '9:50am'
    },
    {
      id: 4,
      name: 'Xang',
      company: 'Microsoft',
      logo: '⊞',
      bgColor: '#0984e3',
      time: '10:00am'
    },
    {
      id: 5,
      name: 'Goel',
      company: 'Cisco',
      logo: '≡',
      bgColor: '#00cec9',
      time: '10:10am'
    }
  ]);

  const handleParticipantClick = (participant) => {
    console.log(`Participant clicked: ${participant.name}`);
    onParticipantSelect(participant);
  };

  const handleExpandClick = () => {
    console.log('Expand clicked');
    alert('Showing more participants...');
  };

  return (
    <main className="main-content">
      <div className="pitch-jam-container">
        <h2 className="pitch-jam-title">Pitch jam</h2>
        
        <div className="participants-list">
          {participants.map((participant) => (
            <div 
              key={participant.id}
              className="participant-item"
              onClick={() => handleParticipantClick(participant)}
            >
              <div 
                className="participant-logo"
                style={{ backgroundColor: participant.bgColor }}
              >
                <span className="logo-text">{participant.logo}</span>
              </div>
              
              <div className="participant-info">
                <h3 className="participant-name">{participant.name}</h3>
                <span className="participant-time">{participant.time}</span>
              </div>
              
              <div className="participant-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="expand-button" onClick={handleExpandClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default PitchJam;