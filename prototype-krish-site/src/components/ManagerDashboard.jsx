// import { useState } from 'react';
// import Calendar from './Calendar';
// import './Manager_Dashboard_EmployeeCSS.css';

// function ManagerDashboard() {
//   const [currentView, setCurrentView] = useState('employees');
//   const [darkMode, setDarkMode] = useState(false);
//   const [employeesData] = useState([
//     {
//       id: 1,
//       name: "Rachel Green",
//       team: "Team A",
//       avatar: "Screaming-beaver.jpg",
//       tasksPending: 3,
//       tasks: [
//         { text: "Send notification to employee", action: "notification" },
//         { text: "View tasks overview", action: "view" },
//         { text: "Remind them to hurry up", action: "remind" }
//       ],
//       supervisor: "Let supervisor view the tasks",
//       progress: 65
//     },
//     {
//       id: 2,
//       name: "Monica Geller",
//       team: "Team B",
//       avatar: "Screaming-beaver.jpg",
//       tasksPending: 1,
//       tasks: [
//         { text: "Complete project documentation", action: "notification" }
//       ],
//       supervisor: "Monitor progress closely",
//       progress: 80
//     },
//     {
//       id: 3,
//       name: "Phoebe Buffay-Hannigan",
//       team: "Team A",
//       avatar: "Screaming-beaver.jpg",
//       tasksPending: 5,
//       tasks: [
//         { text: "Review code changes", action: "view" },
//         { text: "Update client requirements", action: "remind" },
//         { text: "Schedule team meeting", action: "notification" },
//         { text: "Test new features", action: "view" },
//       ],
//       supervisor: "Needs immediate attention",
//       progress: 45
//     },
//     {
//       id: 4,
//       name: "Joey Tribbiani",
//       team: "Team C",
//       avatar: "Screaming-beaver.jpg",
//       tasksPending: 2,
//       tasks: [
//         { text: "Prepare quarterly report", action: "notification" },
//         { text: "Analyze sales data", action: "view" }
//       ],
//       supervisor: "Review with manager",
//       progress: 90
//     }
//   ]);

//   const dummyEmployees = [
//     { id: 1, name: "John Doe", role: "Developer", tasks: 5 },
//     { id: 2, name: "Jane Smith", role: "Designer", tasks: 3 },
//     { id: 3, name: "Mike Johnson", role: "QA Engineer", tasks: 4 }
//   ];

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
//   };

//   const renderEmployeeCard = (employee) => (
//     <div key={employee.id} className="employee-card" style={{
//       backgroundColor: 'var(--card-bg)',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: 'var(--shadow)',
//       margin: '10px',
//       transition: 'box-shadow 0.3s'
//     }}>
//       <h3>{employee.name}</h3>
//       <p>{employee.role}</p>
//       <p>Active Tasks: {employee.tasks}</p>
//     </div>
//   );

//   const renderView = () => {
//     switch (currentView) {
//       case 'calendar':
//         return <Calendar />;
//       case 'employees':
//         return (
//           <div className="employees-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//             gap: '20px',
//             padding: '20px'
//           }}>
//             {dummyEmployees.map(renderEmployeeCard)}
//           </div>
//         );
//       case 'profile':
//         return <div className="content-section">Profile Coming Soon</div>;
//       case 'tasks':
//         return <div className="content-section">Tasks Coming Soon</div>;
//       case 'settings':
//         return <div className="content-section">Settings Coming Soon</div>;
//       default:
//         return <div className="content-section">Select a view from the sidebar</div>;
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)' }}>
//       <button 
//         className="dark-mode-toggle" 
//         onClick={toggleDarkMode} 
//         title="Toggle Dark Mode"
//       >
//         {darkMode ? '☀️' : '🌙'}
//       </button>

//       <div className="container">
//         <nav className="sidebar">
//           <div className="sidebar-top-section">
//             <div 
//               className={`nav-icon profile-icon ${currentView === 'profile' ? 'active' : ''}`}
//               onClick={() => setCurrentView('profile')}
//               title="Profile"
//             />
//             <div 
//               className={`nav-icon tasks-icon ${currentView === 'tasks' ? 'active' : ''}`}
//               onClick={() => setCurrentView('tasks')}
//               title="Tasks"
//             />
//             <div 
//               className={`nav-icon employees-icon ${currentView === 'employees' ? 'active' : ''}`}
//               onClick={() => setCurrentView('employees')}
//               title="Employees"
//             />
//             <div 
//               className={`nav-icon calendar-icon ${currentView === 'calendar' ? 'active' : ''}`}
//               onClick={() => setCurrentView('calendar')}
//               title="Calendar"
//             />
//           </div>
          
//           <div className="sidebar-bottom-spacer" />
          
//           <div 
//             className={`nav-icon settings-icon ${currentView === 'settings' ? 'active' : ''}`}
//             onClick={() => setCurrentView('settings')}
//             title="Settings"
//           />
//         </nav>

//         <main className="main-content">
//           <div className="header">
//             <h1 className="page-title">
//               {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
//             </h1>
//             {currentView === 'employees' && (
//               <div className="sort-container">
//                 <select className="sort-select" id="sortSelect">
//                   <option value="name">Sort by Name</option>
//                   <option value="tasks">Sort by Tasks</option>
//                   <option value="team">Sort by Team</option>
//                 </select>
//               </div>
//             )}
//           </div>
//           {renderView()}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default ManagerDashboard;

import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import "./Manager_Dashboard_EmployeeCSS.css";

const initialEmployees = [
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
    tasks: [{ text: "Complete project documentation", action: "notification" }],
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
      { text: "Test new features", action: "view" }
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
];

function ManagerDashboard() {
  const [currentView, setCurrentView] = useState("employees");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [employees, setEmployees] = useState(initialEmployees);
  const [sortBy, setSortBy] = useState("name");

  // Modal state
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [supervisorModalOpen, setSupervisorModalOpen] = useState(false);
  const [assignTaskOpen, setAssignTaskOpen] = useState(false);

  // Context state for modals
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [supervisorNote, setSupervisorNote] = useState("");
  const [taskForm, setTaskForm] = useState({
    name: "",
    priority: "green",
    startDate: "",
    endDate: "",
    description: "",
    selectedEmployeeIds: []
  });
  const [taskTags, setTaskTags] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    // apply sort whenever employees or sortBy changes
    sortEmployees(sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  function toggleDarkMode() {
    setDarkMode((d) => !d);
  }

  function showNotification(msg, isWarning = false) {
    setNotification({ msg, isWarning });
    setTimeout(() => setNotification(null), 3000);
  }

  function sortEmployees(by) {
    setEmployees((prev) => {
      const copy = [...prev];
      switch (by) {
        case "name":
          copy.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "tasks":
          copy.sort((a, b) => (b.tasksPending || 0) - (a.tasksPending || 0));
          break;
        case "team":
          copy.sort((a, b) => a.team.localeCompare(b.team));
          break;
        default:
          break;
      }
      return copy;
    });
  }

  function handleNav(view) {
    setCurrentView(view);
  }

  function openSupervisorModal(empId) {
    const emp = employees.find((e) => e.id === empId);
    if (!emp) return;
    setCurrentEmployee(emp);
    setSupervisorNote(emp.supervisor || "");
    setSupervisorModalOpen(true);
  }

  function saveSupervisorNote() {
    if (!currentEmployee) return;
    setEmployees((prev) =>
      prev.map((e) => (e.id === currentEmployee.id ? { ...e, supervisor: supervisorNote } : e))
    );
    setSupervisorModalOpen(false);
    showNotification("Supervisor note updated successfully!");
  }

  function openViewDetails(empId) {
    const emp = employees.find((e) => e.id === empId);
    if (!emp) return;
    setCurrentEmployee(emp);
    setViewDetailsOpen(true);
  }

  function openAssignTask(empId) {
    const emp = employees.find((e) => e.id === empId);
    setTaskForm({
      name: "",
      priority: "green",
      startDate: "",
      endDate: "",
      description: "",
      selectedEmployeeIds: emp ? [emp.id] : []
    });
    setTaskTags([]);
    setAssignTaskOpen(true);
  }

  function saveTask() {
    if (!taskForm.name.trim()) {
      showNotification("Please enter a task name!", true);
      return;
    }

    setEmployees((prev) =>
      prev.map((e) => {
        if (taskForm.selectedEmployeeIds.includes(e.id)) {
          const newTasks = e.tasks ? [...e.tasks] : [];
          newTasks.push({
            text: taskForm.name,
            action: "view",
            priority: taskForm.priority,
            progress: 0
          });
          return { ...e, tasks: newTasks, tasksPending: (e.tasksPending || 0) + 1 };
        }
        return e;
      })
    );

    setAssignTaskOpen(false);
    showNotification(`Task "${taskForm.name}" assigned to ${taskForm.selectedEmployeeIds.length} employee(s)!`);
  }

  function updateEmployeeSelectionForTask(empId, checked) {
    setTaskForm((prev) => {
      let ids = new Set(prev.selectedEmployeeIds);
      if (checked) ids.add(empId);
      else ids.delete(empId);
      return { ...prev, selectedEmployeeIds: Array.from(ids) };
    });
  }

  function addTag(tag) {
    if (!tag) return;
    setTaskTags((t) => [...t, tag]);
  }

  function removeTag(index) {
    setTaskTags((t) => t.filter((_, i) => i !== index));
  }

  function handleTaskAction(action, empId) {
    const messages = {
      notification: "Notification sent!",
      view: "Task details opened",
      remind: "Reminder sent to employee"
    };
    showNotification(messages[action] || "Action completed");
  }

  // UI helpers
  function renderEmployeeCard(emp) {
    const firstLetter = emp.name?.charAt(0)?.toUpperCase() ?? "?";
    return (
      <div className="employee-card" key={emp.id}>
        <div className="employee-header">
          <div className="avatar" title={`Avatar ${emp.name}`}>{firstLetter}</div>
          <div className="employee-info">
            <h3>{emp.name}</h3>
            <p>Team: {emp.team} • <span className="tasks-count">{emp.tasksPending} tasks pending</span></p>
          </div>
        </div>

        <div className="tasks-section">
          {emp.tasks && emp.tasks.length ? (
            emp.tasks.map((t, i) => (
              <div className="task-item" key={i}>
                <span className="task-text">{t.text}</span>
                <div
                  className={`task-action ${t.action}-icon`}
                  onClick={() => handleTaskAction(t.action, emp.id)}
                  title={t.action}
                />
              </div>
            ))
          ) : (
            <p className="no-tasks">No pending tasks</p>
          )}
        </div>

        <div className="supervisor-section">
          <p className="supervisor-text"><strong>Supervisor:</strong> {emp.supervisor || "No supervisor notes"}</p>
          <div className="edit-icon" onClick={() => openSupervisorModal(emp.id)} title="Edit supervisor note" />
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => openViewDetails(emp.id)}>👁️ View Details</button>
          <button className="btn btn-secondary" onClick={() => openAssignTask(emp.id)}>➕ Assign Task</button>
        </div>
      </div>
    );
  }

  // Main render body
  return (
    <div className="manager-root" style={{ minHeight: "100vh" }}>
      {/* Dark mode toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle Dark Mode">
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.isWarning ? "warning" : "success"}`}>
          {notification.msg}
        </div>
      )}

      <div className="container">
        <nav className="sidebar">
          <div className="sidebar-top-section">
            <div
              className={`nav-icon profile-icon ${currentView === "profile" ? "active" : ""}`}
              onClick={() => handleNav("profile")}
              title="Profile"
            />
            <div
              className={`nav-icon tasks-icon ${currentView === "tasks" ? "active" : ""}`}
              onClick={() => handleNav("tasks")}
              title="Tasks"
            />
            <div
              className={`nav-icon employees-icon ${currentView === "employees" ? "active" : ""}`}
              onClick={() => handleNav("employees")}
              title="Employees"
            />
            <div
              className={`nav-icon calendar-icon ${currentView === "calendar" ? "active" : ""}`}
              onClick={() => handleNav("calendar")}
              title="Calendar"
            />
          </div>

          <div className="sidebar-bottom-spacer" />

          <div
            className={`nav-icon settings-icon ${currentView === "settings" ? "active" : ""}`}
            onClick={() => handleNav("settings")}
            title="Settings"
          >
            <img src="Screaming-beaver.jpg" alt="Settings" className="icon-image" />
          </div>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1 className="page-title">
              {currentView === "employees" ? "Employees & Team Overview" : currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h1>

            {currentView === "employees" && (
              <div className="sort-container">
                <select
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Sort by Name</option>
                  <option value="tasks">Sort by Tasks</option>
                  <option value="team">Sort by Team</option>
                </select>
              </div>
            )}
          </div>

          {/* Views */}
          {currentView === "calendar" ? (
            <Calendar />
          ) : currentView === "employees" ? (
            <div className="employees-grid" id="employeesGrid">
              {employees.map(renderEmployeeCard)}
            </div>
          ) : currentView === "settings" ? (
            <div className="settings-content">
              <h3>⚙️ Application Settings</h3>
              <button className="btn btn-primary" onClick={toggleDarkMode}>
                {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
              </button>
            </div>
          ) : (
            <div className="content-section">Content for {currentView}</div>
          )}
        </main>
      </div>

      {/* Supervisor Modal */}
      {supervisorModalOpen && (
        <div className="modal-overlay active" id="supervisorModal" onClick={(e) => { if (e.target === e.currentTarget) setSupervisorModalOpen(false); }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Edit Supervisor Note</h2>
              <button className="close-modal" onClick={() => setSupervisorModalOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <textarea className="form-textarea" value={supervisorNote} onChange={(e) => setSupervisorNote(e.target.value)} placeholder="Enter supervisor comment..." />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSupervisorModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={saveSupervisorNote}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewDetailsOpen && currentEmployee && (
        <div className="modal-overlay active" id="viewDetailsModal" onClick={(e) => { if (e.target === e.currentTarget) setViewDetailsOpen(false); }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{currentEmployee.name} - Details</h2>
              <button className="close-modal" onClick={() => setViewDetailsOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Avatar</label>
                <div className="avatar" style={{ width: 80, height: 80, fontSize: 32 }}>{currentEmployee.name.charAt(0)}</div>
              </div>
              <div className="form-group">
                <label className="form-label">Name</label>
                <p style={{ fontWeight: 500 }}>{currentEmployee.name}</p>
              </div>
              <div className="form-group">
                <label className="form-label">Team</label>
                <p>{currentEmployee.team}</p>
              </div>
              <div className="form-group">
                <label className="form-label">Tasks Pending</label>
                <p>{currentEmployee.tasksPending}</p>
              </div>
              <div className="form-group">
                <label className="form-label">Supervisor Note</label>
                <p style={{ fontStyle: "italic" }}>{currentEmployee.supervisor || "No notes"}</p>
              </div>

              <div className="progress-container">
                <div className="progress-label">
                  <span>Task Progress</span>
                  <span>{currentEmployee.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${currentEmployee.progress}%` }} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setViewDetailsOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Assign Task Modal */}
      {assignTaskOpen && (
        <div className="modal-overlay active" id="assignTaskModal" onClick={(e) => { if (e.target === e.currentTarget) setAssignTaskOpen(false); }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Assign New Task</h2>
              <button className="close-modal" onClick={() => setAssignTaskOpen(false)}>&times;</button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Task Name</label>
                <input className="form-input" value={taskForm.name} onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })} placeholder="Enter task name" />
              </div>

              <div className="form-group">
                <label className="form-label">Priority</label>
                <div className="priority-buttons">
                  <button type="button" className={`priority-btn priority-red ${taskForm.priority === "red" ? "active" : ""}`} onClick={() => setTaskForm({ ...taskForm, priority: "red" })}>🔥 High</button>
                  <button type="button" className={`priority-btn priority-yellow ${taskForm.priority === "yellow" ? "active" : ""}`} onClick={() => setTaskForm({ ...taskForm, priority: "yellow" })}>⚠️ Medium</button>
                  <button type="button" className={`priority-btn priority-green ${taskForm.priority === "green" ? "active" : ""}`} onClick={() => setTaskForm({ ...taskForm, priority: "green" })}>✅ Low</button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Dates</label>
                <div className="date-inputs">
                  <div>
                    <label className="form-label">Start Date</label>
                    <input type="date" className="form-input" value={taskForm.startDate} onChange={(e) => setTaskForm({ ...taskForm, startDate: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">End Date</label>
                    <input type="date" className="form-input" value={taskForm.endDate} onChange={(e) => setTaskForm({ ...taskForm, endDate: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Assigned Employees</label>
                <div className="employee-list">
                  {employees.map((emp) => (
                    <div className="employee-item" key={emp.id}>
                      <input
                        type="checkbox"
                        id={`emp_${emp.id}`}
                        checked={taskForm.selectedEmployeeIds.includes(emp.id)}
                        onChange={(e) => updateEmployeeSelectionForTask(emp.id, e.target.checked)}
                      />
                      <label htmlFor={`emp_${emp.id}`}>{emp.name} <small style={{ opacity: 0.7 }}>({emp.team})</small></label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tags</label>
                <div className="employee-tags">
                  {taskTags.map((t, i) => (
                    <div className="tag" key={i}>
                      {t}
                      <button className="tag-remove" onClick={() => removeTag(i)}>&times;</button>
                    </div>
                  ))}
                </div>
                <div className="add-section" onClick={() => {
                  const tag = prompt("Enter tag");
                  if (tag) addTag(tag);
                }}>➕ Add Tag</div>
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" value={taskForm.description} onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })} />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setAssignTaskOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={saveTask}>Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManagerDashboard;
