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
            <span className="time">8:15</span>
            <div className="status-icons">
              <span className="signal">📶</span>
              <span className="wifi">📶</span>
              <span className="battery">🔋</span>
            </div>
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
  
  // Export the components
  export { MyNotes, NewNote };