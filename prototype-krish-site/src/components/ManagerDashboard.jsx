import { useState } from 'react';
import Calendar from './Calendar';
import './Manager_Dashboard_EmployeeCSS.css';

function ManagerDashboard() {
  const [currentView, setCurrentView] = useState('employees');
  const [darkMode, setDarkMode] = useState(false);
  const [employeesData] = useState([
    {
      id: 1,
      name: "Rachel Green",
      team: "Team A",
      avatar: "Screaming-beaver.jpg",
      tasksPending: 3,
      tasks: [
        { text: "Send notification to employee", action: "notification" },
        { text: "View tasks overview", action: "view" },
        { text: "Remind them to hurry up", action: "remind" }
      ],
      supervisor: "Let supervisor view the tasks",
      progress: 65
    },
    {
      id: 2,
      name: "Monica Geller",
      team: "Team B",
      avatar: "Screaming-beaver.jpg",
      tasksPending: 1,
      tasks: [
        { text: "Complete project documentation", action: "notification" }
      ],
      supervisor: "Monitor progress closely",
      progress: 80
    },
    {
      id: 3,
      name: "Phoebe Buffay-Hannigan",
      team: "Team A",
      avatar: "Screaming-beaver.jpg",
      tasksPending: 5,
      tasks: [
        { text: "Review code changes", action: "view" },
        { text: "Update client requirements", action: "remind" },
        { text: "Schedule team meeting", action: "notification" },
        { text: "Test new features", action: "view" },
      ],
      supervisor: "Needs immediate attention",
      progress: 45
    },
    {
      id: 4,
      name: "Joey Tribbiani",
      team: "Team C",
      avatar: "Screaming-beaver.jpg",
      tasksPending: 2,
      tasks: [
        { text: "Prepare quarterly report", action: "notification" },
        { text: "Analyze sales data", action: "view" }
      ],
      supervisor: "Review with manager",
      progress: 90
    }
  ]);

  const dummyEmployees = [
    { id: 1, name: "John Doe", role: "Developer", tasks: 5 },
    { id: 2, name: "Jane Smith", role: "Designer", tasks: 3 },
    { id: 3, name: "Mike Johnson", role: "QA Engineer", tasks: 4 }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const renderEmployeeCard = (employee) => (
    <div key={employee.id} className="employee-card" style={{
      backgroundColor: 'var(--card-bg)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: 'var(--shadow)',
      margin: '10px',
      transition: 'box-shadow 0.3s'
    }}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>Active Tasks: {employee.tasks}</p>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'calendar':
        return <Calendar />;
      case 'employees':
        return (
          <div className="employees-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px'
          }}>
            {dummyEmployees.map(renderEmployeeCard)}
          </div>
        );
      case 'profile':
        return <div className="content-section">Profile Coming Soon</div>;
      case 'tasks':
        return <div className="content-section">Tasks Coming Soon</div>;
      case 'settings':
        return <div className="content-section">Settings Coming Soon</div>;
      default:
        return <div className="content-section">Select a view from the sidebar</div>;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)' }}>
      <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode} 
        title="Toggle Dark Mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="container">
        <nav className="sidebar">
          <div className="sidebar-top-section">
            <div 
              className={`nav-icon profile-icon ${currentView === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentView('profile')}
              title="Profile"
            />
            <div 
              className={`nav-icon tasks-icon ${currentView === 'tasks' ? 'active' : ''}`}
              onClick={() => setCurrentView('tasks')}
              title="Tasks"
            />
            <div 
              className={`nav-icon employees-icon ${currentView === 'employees' ? 'active' : ''}`}
              onClick={() => setCurrentView('employees')}
              title="Employees"
            />
            <div 
              className={`nav-icon calendar-icon ${currentView === 'calendar' ? 'active' : ''}`}
              onClick={() => setCurrentView('calendar')}
              title="Calendar"
            />
          </div>
          
          <div className="sidebar-bottom-spacer" />
          
          <div 
            className={`nav-icon settings-icon ${currentView === 'settings' ? 'active' : ''}`}
            onClick={() => setCurrentView('settings')}
            title="Settings"
          />
        </nav>

        <main className="main-content">
          <div className="header">
            <h1 className="page-title">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h1>
            {currentView === 'employees' && (
              <div className="sort-container">
                <select className="sort-select" id="sortSelect">
                  <option value="name">Sort by Name</option>
                  <option value="tasks">Sort by Tasks</option>
                  <option value="team">Sort by Team</option>
                </select>
              </div>
            )}
          </div>
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default ManagerDashboard;