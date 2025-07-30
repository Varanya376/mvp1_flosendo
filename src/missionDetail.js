// Mission List Component
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
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
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

// Export components to be added to the main App.js
export { MissionList, MissionDetail };