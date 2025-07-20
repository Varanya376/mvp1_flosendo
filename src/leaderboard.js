import React, { useState } from 'react';

const LeaderBoard = () => {
  const [chartData] = useState([
    { name: 'Alice', score: 7.6, color: '#667eea' },
    { name: 'Ben', score: 6.2, color: '#764ba2' },
    { name: 'Charlie', score: 8.1, color: '#667eea' },
    { name: 'David', score: 5.8, color: '#764ba2' },
    { name: 'Eva', score: 9.2, color: '#667eea' },
    { name: 'Frank', score: 7.3, color: '#764ba2' },
    { name: 'Grace', score: 8.7, color: '#667eea' }
  ]);

  const [summaryCards] = useState([
    {
      id: 1,
      title: 'Points',
      value: '8.2',
      bgColor: '#ff9f43',
      icon: '⭐'
    },
    {
      id: 2,
      title: 'Total grade',
      value: '490',
      bgColor: '#ff6b6b',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Total credit',
      value: '137',
      bgColor: '#feca57',
      icon: '🏆'
    }
  ]);

  const handleBarClick = (student) => {
    console.log(`Bar clicked: ${student.name} - Score: ${student.score}`);
    alert(`${student.name}: ${student.score} points`);
  };

  const handleSummaryCardClick = (card) => {
    console.log(`Summary card clicked: ${card.title}`);
    alert(`${card.title}: ${card.value}`);
  };

  const maxScore = Math.max(...chartData.map(item => item.score));

  return (
    <main className="main-content">
      <div className="leader-board-container">
        <h2 className="leader-board-title">Results</h2>
        
        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-container">
            <div className="y-axis">
              <span className="y-label">10.0</span>
              <span className="y-label">8.0</span>
              <span className="y-label">6.0</span>
              <span className="y-label">4.0</span>
              <span className="y-label">2.0</span>
            </div>
            
            <div className="chart-bars">
              {chartData.map((student, index) => (
                <div key={index} className="bar-container">
                  <div 
                    className="chart-bar"
                    style={{ 
                      height: `${(student.score / maxScore) * 100}%`,
                      backgroundColor: student.color 
                    }}
                    onClick={() => handleBarClick(student)}
                  >
                    <span className="bar-value">{student.score}</span>
                  </div>
                  <span className="bar-label">{student.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="semester-label">
            <span>SEMESTER</span>
          </div>
        </div>

        {/* Summary Section */}
        <div className="summary-section">
          <h3 className="summary-title">Summary</h3>
          
          <div className="summary-cards">
            {summaryCards.map((card) => (
              <div 
                key={card.id}
                className="summary-card"
                style={{ backgroundColor: card.bgColor }}
                onClick={() => handleSummaryCardClick(card)}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <span>{card.icon}</span>
                  </div>
                  <div className="card-info">
                    <span className="card-value">{card.value}</span>
                    <span className="card-title">{card.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;