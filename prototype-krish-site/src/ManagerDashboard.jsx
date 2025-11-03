import React, { useEffect, useState } from 'react'
import './Manager_Dashboard_EmployeeCSS.css'
import Calendar from './components/Calendar';
import Topics from './components/Topics';
import ProfilePage from "./profile";





 const employeesData = [{
    id: 1,
    name: "Heeseung Lee",
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
    name: "Sunghoon",
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

function ManagerDashboardFull() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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

  
  const [employees, setEmployees] = useState(employeesData);
  const [currentView, setCurrentView] = useState('employees');
  const [overviewData, setOverviewData] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  

  function toggleDarkMode() {
    setDarkMode((d) => !d);
  }

  function showNotification(msg, isWarning = false) {
    setNotification({ msg, isWarning });
    setTimeout(() => setNotification(null), 3000);
  }

  

  function handleNav(view) {
    
    if (view === "overview") {
      const data = employees.map((e) => ({
        id: e.id,
        name: e.name,
        team: e.team,
        tasks: e.tasks ? e.tasks.length : 0,
  
        tag: `Tag ${Math.floor(Math.random() * 3) + 1}`,
      }));
      setOverviewData(data);
    }

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
              role="button"
              aria-label="Profile"
            >
              <span className="icon-emoji" aria-hidden="true">👤</span>
            </div>
            <div
              className={`nav-icon tasks-icon ${currentView === "tasks" ? "active" : ""}`}
              onClick={() => handleNav("tasks")}
              title="Tasks"
              role="button"
              aria-label="Tasks"
            >
              <span className="icon-emoji" aria-hidden="true">📋</span>
            </div>
            <div
              className={`nav-icon employees-icon ${currentView === "employees" ? "active" : ""}`}
              onClick={() => handleNav("employees")}
              title="Employees"
              role="button"
              aria-label="Employees"
            >
              <span className="icon-emoji" aria-hidden="true">👥</span>
            </div>
            <div
              className={`nav-icon calendar-icon ${currentView === "calendar" ? "active" : ""}`}
              onClick={() => handleNav("calendar")}
              title="Calendar"
              role="button"
              aria-label="Calendar"
            >
              <span className="icon-emoji" aria-hidden="true">📅</span>
            </div>
            <div
              className={`nav-icon topics-icon ${currentView === "topics" ? "active" : ""}`}
              onClick={() => handleNav("topics")}
              title="Topics"
              role="button"
              aria-label="Topics"
            >
              <span className="icon-emoji" aria-hidden="true">📚</span>
            </div>
            <div
              className={`nav-icon overview-icon ${currentView === "overview" ? "active" : ""}`}
              onClick={() => handleNav("overview")}
              title="Overview"
              role="button"
              aria-label="Overview"
            >
              <span className="icon-emoji" aria-hidden="true">📊</span
              >
              </div>
          </div>

          <div className="sidebar-bottom-spacer" />

          <div
            className={`nav-icon settings-icon ${currentView === "settings" ? "active" : ""}`}
            onClick={() => handleNav("settings")}
            title="Settings"
            role="button"
            aria-label="Settings"
          >
            <span className="icon-emoji" aria-hidden="true">⚙️</span>
          </div>
        </nav>

        <main className="main-content">
          <div className="header">
            <h1 className="page-title">
              {currentView === "employees" ? "Employees & Team Overview" : currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h1>

            {/* sorting/filter UI removed per user request */}
          </div>

          {/* Views */}
          {currentView === "calendar" ? (
            <div className="calendar-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleNav("employees"); }}>
              <div className="calendar-modal">
                <button className="close-modal" onClick={() => handleNav("employees")}>&times;</button>
                <Calendar />
              </div>
            </div>
          ) : currentView === "employees" ? (
            <div className="employees-grid" id="employeesGrid">
              {employees.map(renderEmployeeCard)}
            </div>
          ) : currentView === "overview" ? (
            <div className="overview-content">
              <h2>Overview</h2>
                
                {/* Overview stats: bigger labels showing counts */}
                <div className="overview-stats" role="note" aria-label="Overview stats">
                  <div className="stat-card stat-ongoing">
                    <div className="stat-number">45</div>
                    <div className="stat-label">Ongoing tasks</div>
                  </div>
                  <div className="stat-card stat-overdue">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Overdue tasks</div>
                  </div>
                </div>

                <div className="tag-legend" role="region" aria-label="Tag legend">
                  <div className="legend-item">
                    <span className="tag-badge tag-1">Tag 1</span>
                    <span className="legend-text">Easiest</span>
                  </div>
                  <div className="legend-item">
                    <span className="tag-badge tag-2">Tag 2</span>
                    <span className="legend-text">Average</span>
                  </div>
                  <div className="legend-item">
                    <span className="tag-badge tag-3">Tag 3</span>
                    <span className="legend-text">Hardest</span>
                  </div>
                </div>

                <div className="table-wrap">
                <table className="overview-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Team</th>
                      <th>Tasks</th>
                      <th>Tag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overviewData && overviewData.length ? (
                      overviewData.map((r) => (
                        <tr key={r.id}>
                          <td>{r.name}</td>
                          <td>{r.team}</td>
                          <td>{r.tasks}</td>
                          <td>
                            <span className={`tag-badge tag-${(r.tag || 'Tag 1').split(' ')[1]}`}>
                              {r.tag}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No overview data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : currentView === "settings" ? (
            <div className="settings-content">
              <h3>⚙️ Application Settings</h3>
              <button className="btn btn-primary" onClick={toggleDarkMode}>
                {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
              </button>
            </div>
          ) : currentView === "topics" ? (
            <div className="content-section">
              <Topics onClickPostPage={(topicName) => showNotification(`Open post page for "${topicName}"`)} />
              <div className="topics-content">
                <p>Topics content will be displayed here</p>
              </div>
            </div>
          ) : currentView === "profile" ? (
            <div className="profile-section">
              <ProfilePage user={{ name: "Yuki", email: "manager@make-it-all.com", role: "Manager" }} />
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

export default ManagerDashboardFull;
